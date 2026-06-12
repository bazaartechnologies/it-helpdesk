import { useEffect, useState } from "react";
import { api } from "../../api/client";
import Sidebar from "../../components/Sidebar";
import Modal from "../../components/Modal";

const PORTAL_COLORS = {
  it_service_desk:              { bg: "bg-[#e9f2ff]", text: "text-[#0052cc]",  dot: "bg-[#0052cc]" },
  core_people_helpdesk:         { bg: "bg-[#e3fcef]", text: "text-[#006644]",  dot: "bg-[#00875a]" },
  contractual_people_helpdesk:  { bg: "bg-[#fff0b3]", text: "text-[#974f0c]",  dot: "bg-[#f59e0b]" },
  people_help_desk_contractual: { bg: "bg-[#fff0b3]", text: "text-[#974f0c]",  dot: "bg-[#f59e0b]" },
  data_engineering:             { bg: "bg-[#f3e8ff]", text: "text-[#5b21b6]",  dot: "bg-[#7c3aed]" },
  platform_engineering:         { bg: "bg-[#fef3c7]", text: "text-[#92400e]",  dot: "bg-[#d97706]" },
  travel_desk:                  { bg: "bg-[#fce7f3]", text: "text-[#9d174d]",  dot: "bg-[#ec4899]" },
};

function portalColor(id) {
  return PORTAL_COLORS[id] || { bg: "bg-[#f1f2f4]", text: "text-[#44546f]", dot: "bg-[#8590a2]" };
}

function PortalBadge({ id, name }) {
  const c = portalColor(id);
  return (
    <span className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full ${c.bg} ${c.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
      {name}
    </span>
  );
}

function Toggle({ checked, onChange }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${
        checked ? "bg-[#0052cc]" : "bg-[#dfe1e6]"
      }`}
    >
      <span className={`pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow transform transition-transform ${
        checked ? "translate-x-4" : "translate-x-0"
      }`} />
    </button>
  );
}

export default function ServiceRequests() {
  const [portals,     setPortals]     = useState([]);
  const [srs,         setSrs]         = useState([]);
  const [activePortal, setActivePortal] = useState("all");
  const [search,      setSearch]      = useState("");
  const [editing,     setEditing]     = useState(null);
  const [deleting,    setDeleting]    = useState(null); // type_key being confirmed
  const [saving,      setSaving]      = useState(false);
  const [syncing,     setSyncing]     = useState(false);

  const portalMap = Object.fromEntries(portals.map(p => [p.id, p.name]));

  useEffect(() => {
    api.get("/api/admin/service-requests/portals").then(setPortals).catch(() => {});
    load();
  }, []);

  function load() {
    api.get("/api/admin/service-requests/").then(setSrs).catch(() => {});
  }

  async function handleSync() {
    setSyncing(true);
    try {
      const res = await api.post("/api/admin/service-requests/sync");
      load();
      if (res.synced > 0) alert(`Synced ${res.synced} new service requests from catalog.`);
    } catch (e) { alert(e.message); }
    finally { setSyncing(false); }
  }

  async function handleSave() {
    setSaving(true);
    try {
      const updated = await api.patch(`/api/admin/service-requests/${editing.type_key}`, {
        label:      editing.label,
        description: editing.description,
        group_name: editing.group_name,
        enabled:    editing.enabled,
        portal_ids: editing.portal_ids,
      });
      setSrs(prev => prev.map(s => s.type_key === updated.type_key ? updated : s));
      setEditing(null);
    } catch (e) { alert(e.message); }
    finally { setSaving(false); }
  }

  async function handleDelete(typeKey) {
    try {
      await api.delete(`/api/admin/service-requests/${typeKey}`);
      setSrs(prev => prev.filter(s => s.type_key !== typeKey));
      setDeleting(null);
    } catch (e) { alert(e.message); }
  }

  async function toggleEnabled(sr) {
    try {
      const updated = await api.patch(`/api/admin/service-requests/${sr.type_key}`, { enabled: !sr.enabled });
      setSrs(prev => prev.map(s => s.type_key === updated.type_key ? updated : s));
    } catch (e) { alert(e.message); }
  }

  const filtered = srs.filter(sr => {
    const matchPortal = activePortal === "all" || sr.portal_ids.includes(activePortal) || sr.home_portal_id === activePortal;
    const matchSearch = !search || sr.label.toLowerCase().includes(search.toLowerCase());
    return matchPortal && matchSearch;
  });

  const countFor = (portalId) =>
    srs.filter(sr => sr.portal_ids.includes(portalId) || sr.home_portal_id === portalId).length;

  return (
    <div className="flex min-h-screen bg-[#f7f8f9]">
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b border-[#dfe1e6] px-8 py-5 flex items-center justify-between flex-shrink-0">
          <div>
            <h1 className="text-[18px] font-bold text-[#172b4d]">Service Request Management</h1>
            <p className="text-[13px] text-[#6b778c] mt-0.5">Configure request forms and portal visibility</p>
          </div>
          <button
            onClick={handleSync}
            disabled={syncing}
            className="flex items-center gap-2 text-[13px] font-semibold text-[#0052cc] border border-[#0052cc] hover:bg-[#e9f2ff] px-3 py-1.5 rounded disabled:opacity-50 transition-colors"
          >
            <svg className={`w-4 h-4 ${syncing ? "animate-spin" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            {syncing ? "Syncing…" : "Sync from Catalog"}
          </button>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Left: portal filter */}
          <div className="w-56 flex-shrink-0 bg-white border-r border-[#dfe1e6] overflow-y-auto py-3">
            <p className="px-4 pb-1 text-[11px] font-semibold text-[#8590a2] uppercase tracking-wider">Portals</p>
            <button
              onClick={() => setActivePortal("all")}
              className={`w-full flex items-center justify-between px-4 py-2 text-[13px] font-medium transition-colors ${
                activePortal === "all" ? "bg-[#e9f2ff] text-[#0052cc]" : "text-[#44546f] hover:bg-[#f1f2f4]"
              }`}
            >
              <span>All Portals</span>
              <span className="text-[11px] text-[#8590a2]">{srs.length}</span>
            </button>
            {portals.map(p => {
              const c = portalColor(p.id);
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePortal(p.id)}
                  className={`w-full flex items-center justify-between px-4 py-2 text-[13px] font-medium transition-colors ${
                    activePortal === p.id ? "bg-[#e9f2ff] text-[#0052cc]" : "text-[#44546f] hover:bg-[#f1f2f4]"
                  }`}
                >
                  <span className="flex items-center gap-2 min-w-0">
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${c.dot}`} />
                    <span className="truncate">{p.name}</span>
                  </span>
                  <span className="text-[11px] text-[#8590a2] flex-shrink-0 ml-1">{countFor(p.id)}</span>
                </button>
              );
            })}
          </div>

          {/* Right: SR table */}
          <div className="flex-1 overflow-auto p-6">
            {/* Search */}
            <div className="mb-4 flex items-center gap-3">
              <div className="relative flex-1 max-w-sm">
                <svg className="absolute left-3 top-2.5 w-4 h-4 text-[#8590a2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Search service requests…"
                  className="w-full pl-9 pr-3 py-2 text-[13px] border border-[#dfe1e6] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4c9aff] focus:border-[#4c9aff] bg-white"
                />
              </div>
              <span className="text-[13px] text-[#6b778c]">{filtered.length} request{filtered.length !== 1 ? "s" : ""}</span>
            </div>

            {/* Table */}
            <div className="bg-white border border-[#dfe1e6] rounded-lg overflow-hidden shadow-sm">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#dfe1e6] bg-[#f7f8f9]">
                    <th className="px-4 py-3 text-[11px] font-semibold text-[#6b778c] uppercase tracking-wide w-8" />
                    <th className="px-4 py-3 text-[11px] font-semibold text-[#6b778c] uppercase tracking-wide">Service Request</th>
                    <th className="px-4 py-3 text-[11px] font-semibold text-[#6b778c] uppercase tracking-wide">Group</th>
                    <th className="px-4 py-3 text-[11px] font-semibold text-[#6b778c] uppercase tracking-wide">Visible in Portals</th>
                    <th className="px-4 py-3 text-[11px] font-semibold text-[#6b778c] uppercase tracking-wide">Enabled</th>
                    <th className="px-4 py-3 text-[11px] font-semibold text-[#6b778c] uppercase tracking-wide w-28" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f1f2f4]">
                  {filtered.length === 0 && (
                    <tr>
                      <td colSpan={6} className="px-4 py-12 text-center text-[13px] text-[#8590a2]">
                        No service requests found. Click "Sync from Catalog" to load them.
                      </td>
                    </tr>
                  )}
                  {filtered.map(sr => (
                    <tr key={sr.type_key} className={`hover:bg-[#fafbfc] transition-colors ${!sr.enabled ? "opacity-50" : ""}`}>
                      <td className="px-4 py-3">
                        <span className={`w-2 h-2 rounded-full inline-block ${sr.enabled ? "bg-[#00875a]" : "bg-[#dfe1e6]"}`} />
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-[13px] font-semibold text-[#172b4d]">{sr.label}</p>
                        {sr.description && (
                          <p className="text-[12px] text-[#6b778c] mt-0.5 line-clamp-1">{sr.description}</p>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-[12px] text-[#44546f]">{sr.group_name || "—"}</span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap gap-1">
                          {sr.portal_ids.map(pid => (
                            <PortalBadge key={pid} id={pid} name={portalMap[pid] || pid} />
                          ))}
                          {sr.portal_ids.length === 0 && (
                            <span className="text-[12px] text-[#de350b]">Not shown</span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <Toggle checked={sr.enabled} onChange={() => toggleEnabled(sr)} />
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => setEditing({ ...sr })}
                            className="text-[12px] font-semibold text-[#0052cc] hover:underline"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => setDeleting(sr.type_key)}
                            className="text-[12px] font-semibold text-[#de350b] hover:underline"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* Delete confirm modal */}
      <Modal open={!!deleting} onClose={() => setDeleting(null)} title="Delete Service Request">
        {deleting && (
          <div className="space-y-5">
            <p className="text-[14px] text-[#172b4d]">
              Are you sure you want to delete <strong>{srs.find(s => s.type_key === deleting)?.label}</strong>?
              This cannot be undone.
            </p>
            <div className="flex gap-3 pt-1">
              <button
                onClick={() => handleDelete(deleting)}
                className="bg-[#de350b] hover:bg-[#bf2600] text-white text-[13px] font-semibold px-5 py-2.5 rounded-md transition-colors"
              >
                Delete
              </button>
              <button onClick={() => setDeleting(null)} className="text-[13px] text-[#6b778c] hover:text-[#172b4d] px-4 py-2">
                Cancel
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* Edit modal */}
      <Modal open={!!editing} onClose={() => setEditing(null)} title="Edit Service Request" size="lg">
        {editing && (
          <div className="space-y-5">
            <div>
              <label className="block text-[13px] font-semibold text-[#172b4d] mb-1.5">Label</label>
              <input
                value={editing.label}
                onChange={e => setEditing({ ...editing, label: e.target.value })}
                className="w-full border border-[#dfe1e6] rounded-md px-3 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#4c9aff] focus:border-[#4c9aff]"
              />
            </div>

            <div>
              <label className="block text-[13px] font-semibold text-[#172b4d] mb-1.5">Description</label>
              <textarea
                value={editing.description}
                onChange={e => setEditing({ ...editing, description: e.target.value })}
                rows={3}
                className="w-full border border-[#dfe1e6] rounded-md px-3 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#4c9aff] resize-none"
              />
            </div>

            <div>
              <label className="block text-[13px] font-semibold text-[#172b4d] mb-1.5">Group</label>
              <input
                value={editing.group_name || ""}
                onChange={e => setEditing({ ...editing, group_name: e.target.value })}
                placeholder="e.g. Access Requests"
                className="w-full border border-[#dfe1e6] rounded-md px-3 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#4c9aff] focus:border-[#4c9aff]"
              />
            </div>

            <div>
              <label className="block text-[13px] font-semibold text-[#172b4d] mb-2">Show in Portals</label>
              <div className="space-y-2 border border-[#dfe1e6] rounded-md p-3 bg-[#f7f8f9]">
                {portals.map(p => {
                  const checked = editing.portal_ids.includes(p.id);
                  const c = portalColor(p.id);
                  return (
                    <label key={p.id} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => {
                          const next = checked
                            ? editing.portal_ids.filter(id => id !== p.id)
                            : [...editing.portal_ids, p.id];
                          setEditing({ ...editing, portal_ids: next });
                        }}
                        className="w-4 h-4 rounded border-[#dfe1e6] text-[#0052cc] focus:ring-[#4c9aff]"
                      />
                      <span className={`w-2 h-2 rounded-full ${c.dot}`} />
                      <span className="text-[13px] text-[#172b4d]">{p.name}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center justify-between py-2 border-t border-[#dfe1e6]">
              <div>
                <p className="text-[13px] font-semibold text-[#172b4d]">Enabled</p>
                <p className="text-[12px] text-[#6b778c]">Show this form in the public portal</p>
              </div>
              <Toggle checked={editing.enabled} onChange={v => setEditing({ ...editing, enabled: v })} />
            </div>

            {editing.fields?.length > 0 && (
              <div>
                <label className="block text-[13px] font-semibold text-[#172b4d] mb-2">
                  Form Fields <span className="text-[#8590a2] font-normal">({editing.fields.length})</span>
                </label>
                <div className="border border-[#dfe1e6] rounded-md overflow-hidden">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-[#f7f8f9] border-b border-[#dfe1e6]">
                        <th className="px-3 py-2 text-[11px] font-semibold text-[#6b778c] uppercase">Field</th>
                        <th className="px-3 py-2 text-[11px] font-semibold text-[#6b778c] uppercase">Type</th>
                        <th className="px-3 py-2 text-[11px] font-semibold text-[#6b778c] uppercase">Required</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#f1f2f4]">
                      {editing.fields.map((f, i) => (
                        <tr key={i}>
                          <td className="px-3 py-2 text-[13px] text-[#172b4d]">{f.label || f.key}</td>
                          <td className="px-3 py-2 text-[12px] text-[#6b778c] capitalize">{f.type}</td>
                          <td className="px-3 py-2 text-[12px]">
                            {f.required
                              ? <span className="text-[#de350b] font-semibold">Yes</span>
                              : <span className="text-[#8590a2]">No</span>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            <div className="flex gap-3 pt-2 border-t border-[#dfe1e6]">
              <button
                onClick={handleSave}
                disabled={saving}
                className="bg-[#0052cc] hover:bg-[#0747a6] text-white text-[13px] font-semibold px-5 py-2.5 rounded-md disabled:opacity-50 transition-colors"
              >
                {saving ? "Saving…" : "Save Changes"}
              </button>
              <button onClick={() => setEditing(null)} className="text-[13px] text-[#6b778c] hover:text-[#172b4d] px-4 py-2">
                Cancel
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
