"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { SERVICES, COMPANY } from "@/data/services";
import { sendContactEmail, type ContactFormData } from "@/lib/email";
import { cn } from "@/lib/utils";

export function ContactForm({ className }: { className?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setStatus("sending");
    try {
      await sendContactEmail(data);
      setStatus("sent");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-5", className)}
    >
      <div>
        <input
          type="text"
          placeholder="Your name"
          {...register("name", { required: true, minLength: 2 })}
          className={cn(inputClass, errors.name && "border-red-500/50")}
          disabled={status === "sending"}
        />
      </div>

      <div>
        <input
          type="email"
          placeholder="Email address"
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
          className={cn(inputClass, errors.email && "border-red-500/50")}
          disabled={status === "sending"}
        />
      </div>

      <div>
        <input
          type="tel"
          placeholder="Phone (optional)"
          {...register("phone")}
          className={inputClass}
          disabled={status === "sending"}
        />
      </div>

      <div>
        <select
          {...register("service", { required: true })}
          className={cn(inputClass, "appearance-none cursor-pointer")}
          disabled={status === "sending"}
        >
          <option value="" className="bg-black">
            Select a service
          </option>
          {SERVICES.map((s) => (
            <option key={s.id} value={s.title} className="bg-black">
              {s.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <textarea
          placeholder="Tell us about your project..."
          rows={5}
          {...register("message", { required: true, minLength: 10 })}
          className={cn(
            inputClass,
            "resize-none",
            errors.message && "border-red-500/50",
          )}
          disabled={status === "sending"}
        />
      </div>

      {status === "sent" && (
        <p className="text-green-400 text-sm">
          Message sent! We'll be in touch soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm">
          Something went wrong. Please try again.
        </p>
      )}

      <motion.button
        type="submit"
        disabled={status === "sending"}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:bg-white/90 disabled:opacity-50 transition"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </motion.button>

      <p className="text-center text-white/40 text-sm pt-2">
        Or email us at{" "}
        <a
          href={`mailto:${COMPANY.email}`}
          className="text-white/70 hover:text-white"
        >
          {COMPANY.email}
        </a>
      </p>
    </form>
  );
}
