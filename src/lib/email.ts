import { COMPANY } from "@/data/services";

export type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
};

export async function sendContactEmail(data: ContactFormData) {
  const apiKey = import.meta.env.VITE_RESEND_API_SECRET;

  if (!apiKey) {
    throw new Error("Email service not configured");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: "onboarding@resend.dev",
      to: COMPANY.email,
      subject: `New inquiry from ${data.name} — ${data.service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        ${data.phone ? `<p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>` : ""}
        <p><strong>Service:</strong> ${escapeHtml(data.service)}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(data.message)}</p>
      `,
    }),
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.message || "Failed to send");
  }

  return response.json();
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
