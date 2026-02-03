import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post("/api/send-email", async (req, res) => {
  const { name, email, phone, service, message } = req.body;

  const apiKey = process.env.VITE_RESEND_API_SECRET;

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
        from: "onboarding@resend.dev",
        to: "anq.software@gmail.com",
        subject: `New inquiry from ${name} — ${service}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          <p><strong>Service:</strong> ${service}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
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

app.listen(PORT, () => {
  console.log(`✉️  Email server running on http://localhost:${PORT}`);
});
