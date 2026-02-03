"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES, COMPANY } from "@/data/services";
import { sendContactEmail, type ContactFormData } from "@/lib/email";
import { cn } from "@/lib/utils";
import { CheckCircle, X } from "lucide-react";

function SuccessModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-md bg-black border border-white/20 rounded-2xl p-8 text-center shadow-[0_0_50px_rgba(255,255,255,0.1)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", damping: 15 }}
          className="mx-auto mb-6 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center"
        >
          <CheckCircle className="h-8 w-8 text-white" />
        </motion.div>

        <h3 className="text-2xl font-bold text-white mb-3">
          Message Received!
        </h3>
        <p className="text-white/60 mb-6">
          Thank you for reaching out. We've received your message and will be in
          touch ASAP!
        </p>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition cursor-pointer"
        >
          Got it
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export function ContactForm({ className }: { className?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [showSuccessModal, setShowSuccessModal] = useState(false);

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
      setShowSuccessModal(true);
      reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition";

  return (
    <>
      <AnimatePresence>
        {showSuccessModal && (
          <SuccessModal onClose={() => setShowSuccessModal(false)} />
        )}
      </AnimatePresence>

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
          className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:bg-white/90 disabled:opacity-50 transition cursor-pointer"
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
    </>
  );
}
