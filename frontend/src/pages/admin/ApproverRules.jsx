import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { approverRulesApi } from "../../api/approverRules";

const TABS = [
  { key: "access_nucleus",  label: "Nucleus Access" },
  { key: "access_commando", label: "Commando Access" },
];

/* ── tiny helpers ─────────────────────────────────────────── */
function Avatar({ name }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  const COLORS = [
    "bg-blue-500", "bg-indigo-500", "bg-violet-500",
    "bg-teal-500",  "bg-emerald-500", "bg-amber-500",
  ];
  const color = COLORS[name.charCodeAt(0) % COLORS.length];
  return (
    <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-white text-[10px] font-bold ${color}`}>
      {initials}
    </span>
  );
}

function ApproverChips({ names }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {names.map((n) => (
        <span
          key={n}
          className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 text-xs font-medium px-2 py-0.5 rounded-full border border-slate-200"
        >
          <Avatar name={n} />
          {n}
        </span>
      ))}
    </div>
  );
}

/* ── inline edit cell ─────────────────────────────────────── */
function ApproverCell({ value, onSave }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft]     = useState(value);

  const commit = () => { onSave(draft.trim()); setEditing(false); };
  const cancel = () => { setDraft(value); setEditing(false); };

  if (editing) {
    return (
      <div className="flex items-center gap-2">
        <input
          autoFocus
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") commit(); if (e.key === "Escape") cancel(); }}
          className="flex-1 min-w-0 text-sm border border-blue-400 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500/40 shadow-sm"
          placeholder="Name 1, Name 2"
        />
        <button
          onClick={commit}
          className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-1.5 rounded-md transition-colors shadow-sm"
        >
          Save
        </button>
        <button
          onClick={cancel}
          className="shrink-0 text-slate-500 hover:text-slate-700 text-xs px-2 py-1.5 rounded-md hover:bg-slate-100 transition-colors"
        >
          Cancel
        </button>
      </div>
    );
  }

  const names = value.split(",").map((n) => n.trim()).filter(Boolean);
  return (
    <div className="group flex items-center gap-3">
      <div className="flex-1 min-w-0">
        <ApproverChips names={names} />
      </div>
      <button
        onClick={() => setEditing(true)}
        className="shrink-0 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity p-1.5 rounded-md text-slate-400 hover:text-blue-600 hover:bg-blue-50"
        title="Edit approvers"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      </button>
    </div>
  );
}

/* ── add-rule inline row ─────────────────────────────────── */
function AddRow({ ticketType, onAdd, onCancel }) {
  const [module, setModule]       = useState("");
  const [approvers, setApprovers] = useState("");
  const [saving, setSaving]       = useState(false);

  const handleAdd = async () => {
    if (!module.trim() || !approvers.trim()) return;
    setSaving(true);
    await onAdd({ ticket_type: ticketType, module_value: module.trim(), approvers: approvers.trim() });
    setSaving(false);
  };

  return (
    <tr className="bg-blue-50 border-b border-blue-100">
      <td className="px-4 py-2.5 w-5/12">
        <input
          autoFocus
          value={module}
          onChange={(e) => setModule(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") handleAdd(); if (e.key === "Escape") onCancel(); }}
          placeholder="Module or role name…"
          className="w-full text-sm border border-blue-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500/40 shadow-sm"
        />
      </td>
      <td className="px-4 py-2.5">
        <input
          value={approvers}
          onChange={(e) => setApprovers(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") handleAdd(); if (e.key === "Escape") onCancel(); }}
          placeholder="Approver 1, Approver 2…"
          className="w-full text-sm border border-blue-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500/40 shadow-sm"
        />
      </td>
      <td className="px-4 py-2.5 text-right">
        <div className="flex items-center justify-end gap-2">
          <button
            onClick={handleAdd}
            disabled={saving || !module.trim() || !approvers.trim()}
            className="bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white text-xs font-semibold px-3 py-1.5 rounded-md transition-colors shadow-sm"
          >
            {saving ? "Adding…" : "Add"}
          </button>
          <button
            onClick={onCancel}
            className="text-slate-500 hover:text-slate-700 text-xs px-2 py-1.5 rounded-md hover:bg-slate-100 transition-colors"
          >
            Cancel
          </button>
        </div>
      </td>
    </tr>
  );
}

/* ── main page ───────────────────────────────────────────── */
export default function ApproverRules() {
  const [rules,   setRules]   = useState([]);
  const [loading, setLoading] = useState(true);
  const [tab,     setTab]     = useState("access_nucleus");
  const [search,  setSearch]  = useState("");
  const [adding,  setAdding]  = useState(false);

  useEffect(() => {
    setLoading(true);
    approverRulesApi.list().then(setRules).finally(() => setLoading(false));
  }, []);

  const handleSave = async (id, approvers) => {
    await approverRulesApi.update(id, approvers);
    setRules((prev) => prev.map((r) => (r.id === id ? { ...r, approvers } : r)));
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Remove this approver rule?")) return;
    await approverRulesApi.delete(id);
    setRules((prev) => prev.filter((r) => r.id !== id));
  };

  const handleAdd = async (data) => {
    const rule = await approverRulesApi.create(data);
    setRules((prev) => [...prev, rule]);
    setAdding(false);
  };

  const filtered = rules
    .filter((r) => r.ticket_type === tab)
    .filter((r) =>
      !search ||
      r.module_value.toLowerCase().includes(search.toLowerCase()) ||
      r.approvers.toLowerCase().includes(search.toLowerCase())
    );

  const tabCount = (key) => rules.filter((r) => r.ticket_type === key).length;

  return (
    <div className="flex min-h-screen bg-[#f4f5f7]">
      <Sidebar />

      <main className="flex-1 overflow-auto">
        {/* ── Page header ── */}
        <div className="bg-white border-b border-gray-200 px-8 py-5">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900 tracking-tight">Approver Rules</h1>
              <p className="text-sm text-gray-500 mt-0.5">
                Control which approvers are auto-assigned when a request is submitted.
              </p>
            </div>
            <button
              onClick={() => { setAdding(true); }}
              className="inline-flex items-center gap-2 bg-[#0052cc] hover:bg-[#0747a6] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Rule
            </button>
          </div>
        </div>

        <div className="px-8 py-6">
          {/* ── Tabs ── */}
          <div className="flex gap-0 mb-6 border-b border-gray-200">
            {TABS.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => { setTab(key); setSearch(""); setAdding(false); }}
                className={`relative px-5 py-2.5 text-sm font-medium transition-colors ${
                  tab === key
                    ? "text-[#0052cc] border-b-2 border-[#0052cc] -mb-px"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {label}
                <span
                  className={`ml-2 text-xs px-1.5 py-0.5 rounded-full font-normal ${
                    tab === key ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {tabCount(key)}
                </span>
              </button>
            ))}
          </div>

          {/* ── Card ── */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            {/* toolbar */}
            <div className="flex items-center gap-3 px-5 py-3.5 border-b border-gray-100">
              <div className="relative">
                <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search module or approver…"
                  className="pl-9 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 w-64 transition-colors"
                />
              </div>
              <span className="ml-auto text-xs text-gray-400 font-medium">
                {filtered.length} {filtered.length === 1 ? "rule" : "rules"}
              </span>
            </div>

            {/* table */}
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/80">
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider w-5/12">
                    Module / Role
                  </th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Assigned Approvers
                  </th>
                  <th className="w-12 px-4 py-3" />
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-50">
                {adding && (
                  <AddRow
                    ticketType={tab}
                    onAdd={handleAdd}
                    onCancel={() => setAdding(false)}
                  />
                )}

                {loading ? (
                  <tr>
                    <td colSpan={3} className="text-center py-16">
                      <div className="inline-flex flex-col items-center gap-2 text-gray-400">
                        <div className="w-6 h-6 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
                        <span className="text-sm">Loading rules…</span>
                      </div>
                    </td>
                  </tr>
                ) : filtered.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="text-center py-16">
                      <div className="inline-flex flex-col items-center gap-2 text-gray-400">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-sm">{search ? "No rules match your search." : "No rules yet. Click Add Rule to create one."}</span>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filtered.map((rule) => (
                    <tr
                      key={rule.id}
                      className="hover:bg-slate-50/60 transition-colors group"
                    >
                      <td className="px-5 py-3.5">
                        <span className="font-medium text-gray-800">{rule.module_value}</span>
                      </td>
                      <td className="px-5 py-3.5">
                        <ApproverCell
                          value={rule.approvers}
                          onSave={(approvers) => handleSave(rule.id, approvers)}
                        />
                      </td>
                      <td className="px-4 py-3.5 text-right">
                        <button
                          onClick={() => handleDelete(rule.id)}
                          className="opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity p-1.5 rounded-md text-gray-300 hover:text-red-500 hover:bg-red-50"
                          title="Delete rule"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>

            {/* footer */}
            {!loading && filtered.length > 0 && (
              <div className="px-5 py-3 border-t border-gray-100 bg-gray-50/50 flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-xs text-gray-400">
                  Hover a row to edit approvers or delete the rule. Changes take effect on new ticket submissions.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
