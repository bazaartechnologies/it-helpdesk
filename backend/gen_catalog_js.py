"""
Generate public-portal/src/catalog.js from jira_catalog.json
============================================================
Emits two plain-data exports consumed by App.jsx:
  • PORTALS         – [{id, name, description, featured, is_people}]
  • PORTAL_REQUESTS – {portalId: [{type, label, description, group, fields}]}
Run:  python gen_catalog_js.py
"""
import os
import json

HERE = os.path.dirname(os.path.abspath(__file__))
from catalog import public_portals   # reuse the same filtering/shaping

OUT = os.path.join(HERE, "..", "public-portal", "src", "catalog.js")

FEATURED = {"it_service_desk"}


def main():
    portals_tree = public_portals()
    portals = []
    requests = {}
    for p in portals_tree:
        portals.append({
            "id": p["id"],
            "name": p["name"],
            "description": f"Welcome! You can raise a request for the {p['name']} using the options provided.",
            "featured": p["id"] in FEATURED,
            "is_people": p["is_people"],
        })
        requests[p["id"]] = [
            {
                "type": rt["key"],
                "label": rt["name"],
                "description": rt.get("description", ""),
                "group": rt.get("group"),
                "fields": rt.get("fields", []),
            }
            for rt in p["request_types"]
        ]

    banner = "// AUTO-GENERATED from Jira by gen_catalog_js.py — do not edit by hand.\n"
    body = (
        banner
        + "export const PORTALS = "
        + json.dumps(portals, indent=2, ensure_ascii=False)
        + ";\n\n"
        + "export const PORTAL_REQUESTS = "
        + json.dumps(requests, indent=2, ensure_ascii=False)
        + ";\n"
    )
    with open(OUT, "w", encoding="utf-8") as fh:
        fh.write(body)
    print(f"Wrote {OUT}")
    print(f"  portals: {len(portals)}")
    print(f"  request types: {sum(len(v) for v in requests.values())}")


if __name__ == "__main__":
    main()
