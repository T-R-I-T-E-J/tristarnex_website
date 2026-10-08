export const contactInterests = {
  product: "ShieldMSP product walkthrough",
  "design-partner": "Becoming a design partner",
  integrations: "Integrations and technical scope",
  general: "General inquiry",
} as const;

export type ContactInquiry = {
  name: string;
  company: string;
  email: string;
  interest: keyof typeof contactInterests;
  message: string;
};

export function parseInquiry(value: Record<string, unknown>): ContactInquiry | null {
  const limits = { name: 150, company: 150, email: 254, message: 5000 };
  const fields: Record<string, string> = {};
  for (const [key, limit] of Object.entries(limits)) {
    const field = value[key];
    if (typeof field !== "string" || !field.trim() || field.length > limit) return null;
    fields[key] = field.trim();
  }
  if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(fields.email)) return null;
  if ([fields.name, fields.company, fields.email].some((field) => /[\r\n\x00-\x1f\x7f]/.test(field))) return null;
  if (typeof value.interest !== "string" || !Object.hasOwn(contactInterests, value.interest)) return null;
  return { ...fields, interest: value.interest } as ContactInquiry;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]!);
}

export function inquiryEmail(inquiry: ContactInquiry) {
  const rows = [
    ["Name", inquiry.name], ["Company", inquiry.company],
    ["Email", inquiry.email], ["Interest", contactInterests[inquiry.interest]],
    ["Message", inquiry.message],
  ];
  return {
    subject: `Tristarnex inquiry: ${contactInterests[inquiry.interest]}`,
    text: `New website inquiry\n\n${rows.map(([label, value]) => `${label}: ${value}`).join("\n\n")}`,
    html: `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Tristarnex website inquiry</title></head><body style="font-family:Arial,sans-serif;color:#0c2d4d;line-height:1.6"><h1>New website inquiry</h1>${rows.map(([label, value]) => `<h2 style="font-size:14px;margin:24px 0 4px">${label}</h2><p style="margin:0;white-space:pre-wrap">${escapeHtml(value)}</p>`).join("")}<p style="margin-top:32px;color:#526777">Reply to this email to contact the sender.</p></body></html>`,
  };
}
