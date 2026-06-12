"""
Jira Service Management → constants.py importer
================================================
Pulls EVERY portal, request type, and field from your Jira Service Desk
and generates Python dicts ready to paste (or auto-write) into constants.py.

USAGE
-----
1. Create an Atlassian API token:
   https://id.atlassian.com/manage-profile/security/api-tokens
2. Run:
     export JIRA_BASE="https://bazaar.atlassian.net"
     export JIRA_EMAIL="syed.areeb@bazaartech.com"
     export JIRA_TOKEN="<your-api-token>"
     python jira_import.py            # prints everything
     python jira_import.py --write    # writes jira_generated.py

It maps Jira field types → our form field types:
   text / textarea / select / multiselect / date / email / radio
"""
import os
import sys
import json
import ssl
import base64
import urllib.request
import urllib.error

# ── SSL context (handles macOS missing-certs issue) ──────────────────────────
try:
    import certifi
    _SSL_CTX = ssl.create_default_context(cafile=certifi.where())
except Exception:
    # Fallback: unverified context (only used locally for a trusted host)
    _SSL_CTX = ssl.create_default_context()
    _SSL_CTX.check_hostname = False
    _SSL_CTX.verify_mode = ssl.CERT_NONE

BASE  = os.environ.get("JIRA_BASE",  "https://bazaar.atlassian.net").rstrip("/")
EMAIL = os.environ.get("JIRA_EMAIL", "")
TOKEN = os.environ.get("JIRA_TOKEN", "")


def _auth_header():
    raw = f"{EMAIL}:{TOKEN}".encode()
    return "Basic " + base64.b64encode(raw).decode()


def _get(path, params=None):
    url = f"{BASE}{path}"
    if params:
        from urllib.parse import urlencode
        url += "?" + urlencode(params)
    req = urllib.request.Request(url, headers={
        "Authorization": _auth_header(),
        "Accept": "application/json",
    })
    try:
        with urllib.request.urlopen(req, timeout=30, context=_SSL_CTX) as resp:
            return json.loads(resp.read().decode())
    except urllib.error.HTTPError as e:
        print(f"  ! HTTP {e.code} on {path}: {e.read().decode()[:200]}", file=sys.stderr)
        return None


def _paged(path, key="values", params=None):
    """Iterate over a paginated Service Desk API endpoint."""
    out, start = [], 0
    while True:
        p = dict(params or {})
        p.update({"start": start, "limit": 50})
        data = _get(path, p)
        if not data:
            break
        out.extend(data.get(key, []))
        if data.get("isLastPage", True):
            break
        start += 50
    return out


import re

# ── Jira field type → our type ────────────────────────────────────────────
def map_field_type(jira_field):
    schema = jira_field.get("jiraSchema", {}) or {}
    jt = schema.get("type", "")
    item = schema.get("items", "")
    custom = schema.get("custom", "") or ""
    name = jira_field.get("name", "").lower()
    fid = (jira_field.get("fieldId", "") or "").lower()
    has_vals = bool(jira_field.get("validValues"))

    # Attachments → file upload
    if jt == "attachment" or "attachment" in name or fid == "attachment":
        return "file"
    # User / people pickers → free text (we don't have a Jira user directory)
    if jt == "user" or item == "user" or "manager" in name or "assigned" in name \
       or name.startswith("who is") or "request raised for" in name or "raise this request" in name:
        return "user" if False else "text"
    # Dates
    if jt in ("date", "datetime") or "date" in custom:
        return "date"
    # Radios
    if "radiobuttons" in custom:
        return "radio"
    # Multi-select / checkboxes (array with options)
    if jt == "array" and has_vals:
        return "multiselect"
    if jt == "array":
        return "text"
    # Single select
    if "select" in custom or has_vals:
        return "select"
    # Email
    if "email" in name:
        return "email"
    # Textareas
    if custom.endswith("textarea") or "textarea" in custom \
       or (jt == "string" and ("description" in name or "justification" in name)):
        return "textarea"
    return "text"


def clean_hint(text):
    """Strip Jira wiki markup from help text."""
    if not text:
        return ""
    t = text
    t = re.sub(r"\{color[^}]*\}", "", t)      # {color:red} / {color}
    t = t.replace("\\\\", " ").replace("\\", " ")
    t = t.replace("\xa0", " ")
    t = re.sub(r"[*_]+", "", t)                # bold / italic markers
    t = re.sub(r"\s+", " ", t).strip()
    return t


def slugify(label):
    s = re.sub(r"[^a-z0-9]+", "_", (label or "").lower()).strip("_")
    return s or "field"


def extract():
    print(f"# Connecting to {BASE} as {EMAIL}\n", file=sys.stderr)
    desks = _paged("/rest/servicedeskapi/servicedesk")
    print(f"# Found {len(desks)} service desks\n", file=sys.stderr)

    portals = []          # full structured catalog
    ticket_types = {}     # flat: composite_key -> name
    form_fields = {}      # flat: composite_key -> [fields]

    for desk in desks:
        sd_id = desk["id"]
        project = desk.get("projectName", desk.get("projectKey", str(sd_id)))
        portal_key = slugify(project)
        print(f"# ── Service Desk: {project} (id={sd_id}, key={portal_key}) ──", file=sys.stderr)

        # Groups (for sub-sections like "Hiring Requisition")
        groups = _paged(f"/rest/servicedeskapi/servicedesk/{sd_id}/requesttypegroup")
        group_names = {str(g["id"]): g["name"] for g in groups}

        rtypes = _paged(f"/rest/servicedeskapi/servicedesk/{sd_id}/requesttype")
        portal_rts = []
        seen_keys = set()
        for rt in rtypes:
            rt_id   = rt["id"]
            rt_name = rt["name"]
            base_slug = slugify(rt_name)
            ckey = f"{portal_key}__{base_slug}"
            # de-dup composite keys within a portal
            n = 2
            while ckey in seen_keys:
                ckey = f"{portal_key}__{base_slug}_{n}"; n += 1
            seen_keys.add(ckey)

            gids = [str(g) for g in rt.get("groupIds", [])]
            gnames = [group_names.get(g) for g in gids if group_names.get(g)]

            fdata = _get(f"/rest/servicedeskapi/servicedesk/{sd_id}/requesttype/{rt_id}/field")
            fields, fseen = [], set()
            for f in (fdata or {}).get("requestTypeFields", []):
                fkey = slugify(f.get("fieldId") or f.get("name", ""))
                if fkey in fseen:        # skip duplicate field keys
                    continue
                fseen.add(fkey)
                entry = {
                    "key": fkey,
                    "label": f.get("name", ""),
                    "type": map_field_type(f),
                    "required": f.get("required", False),
                }
                vals = [v.get("label") for v in f.get("validValues", []) if v.get("label")]
                if vals:
                    entry["options"] = vals
                hint = clean_hint(f.get("description", ""))
                if hint:
                    entry["hint"] = hint
                fields.append(entry)

            ticket_types[ckey] = rt_name
            form_fields[ckey]  = fields
            portal_rts.append({
                "key": ckey,
                "name": rt_name,
                "description": clean_hint(rt.get("description", "")),
                "groups": gnames,
                "fields": fields,
            })
            print(f"#   • {rt_name}  (key={ckey}, fields={len(fields)})", file=sys.stderr)

        portals.append({
            "id": portal_key,
            "name": project,
            "jira_id": str(sd_id),
            "request_types": portal_rts,
        })

    return portals, ticket_types, form_fields


def render_py(ticket_types, form_fields):
    out = ["# AUTO-GENERATED FROM JIRA — review then merge into constants.py\n"]
    out.append("TICKET_TYPES = {")
    for k, v in ticket_types.items():
        out.append(f"    {k!r}: {v!r},")
    out.append("}\n")
    out.append("TICKET_FORM_FIELDS = {")
    for k, fields in form_fields.items():
        out.append(f"    {k!r}: [")
        for f in fields:
            out.append(f"        {f!r},")
        out.append("    ],")
    out.append("}")
    return "\n".join(out)


if __name__ == "__main__":
    if not EMAIL or not TOKEN:
        print("ERROR: set JIRA_EMAIL and JIRA_TOKEN environment variables.", file=sys.stderr)
        sys.exit(1)
    portals, tt, ff = extract()
    if "--write" in sys.argv:
        with open("jira_generated.py", "w") as fh:
            fh.write(render_py(tt, ff))
        with open("jira_catalog.json", "w") as fh:
            json.dump({"portals": portals}, fh, indent=2, ensure_ascii=False)
        print(f"\n# Wrote jira_generated.py ({len(tt)} types)", file=sys.stderr)
        print(f"# Wrote jira_catalog.json ({len(portals)} portals)", file=sys.stderr)
    else:
        print(render_py(tt, ff))
