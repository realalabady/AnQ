export type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
};

// Cloud Run email server URL
const CLOUD_RUN_URL = "https://anq-1044825593780.europe-west1.run.app";

const API_URL = import.meta.env.DEV
  ? "http://localhost:3001/api/send-email"
  : `${CLOUD_RUN_URL}/api/send-email`;

export async function sendContactEmail(data: ContactFormData) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.message || err.error || "Failed to send");
  }

  return response.json();
}
