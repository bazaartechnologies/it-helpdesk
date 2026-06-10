import { api } from "./client";

export const approverRulesApi = {
  list: (ticket_type) => api.get(`/api/approver-rules${ticket_type ? `?ticket_type=${ticket_type}` : ""}`),
  update: (id, approvers) => api.put(`/api/approver-rules/${id}`, { approvers }),
  create: (data) => api.post("/api/approver-rules", data),
  delete: (id) => api.delete(`/api/approver-rules/${id}`),
};
