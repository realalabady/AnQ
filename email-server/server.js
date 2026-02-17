import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8080;

// CORS - allow your domains
app.use(cors({
  origin: [
    "https://anq.sa",
    "https://www.anq.sa",
    "https://anq-software.com",
    "https://www.anq-software.com",
    "http://localhost:5173"
  ],
  methods: ["POST", "GET", "OPTIONS"],
}));
app.use(express.json());

app.post("/api/send-email", async (req, res) => {
  const { name, email, phone, service, message } = req.body;

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "Email service not configured" });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "contact@anq.sa",
        to: "anq.software@gmail.com",
        reply_to: email,
        subject: `New inquiry from ${name} — ${service}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          <p><strong>Service:</strong> ${service}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message || "No message provided"}</p>
        `,
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      console.error("Resend error:", err);
      return res.status(response.status).json(err);
    }

    const data = await response.json();
    console.log("Email sent:", data);
    res.json(data);
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// Health check
app.get("/", (req, res) => {
  res.json({ status: "ok", service: "ANQ Email Server" });
});

app.listen(PORT, () => {
  console.log(`✉️  Email server running on port ${PORT}`);
});
