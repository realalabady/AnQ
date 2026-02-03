"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES, COMPANY } from "@/data/services";
import { sendContactEmail, type ContactFormData } from "@/lib/email";
import { cn } from "@/lib/utils";
import { CheckCircle, X } from "lucide-react";
import { ServiceSelect } from "@/components/ui/service-select";
import { Controller } from "react-hook-form";

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
    watch,
    control,
    formState: { errors },
  } = useForm<ContactFormData>();

  const selectedService = watch("service");

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
            placeholder="Phone number"
            {...register("phone", { required: true, minLength: 10 })}
            className={cn(inputClass, errors.phone && "border-red-500/50")}
            disabled={status === "sending"}
          />
        </div>

        <div className="relative">
          <Controller
            name="service"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <ServiceSelect
                value={field.value || ""}
                onChange={field.onChange}
                disabled={status === "sending"}
              />
            )}
          />
          {errors.service && (
            <p className="text-red-400 text-sm mt-2">
              Please select a service.
            </p>
          )}
        </div>

        <div>
          <textarea
            placeholder={
              selectedService === "Other"
                ? "Please describe what you need (required)..."
                : "Tell us about your project..."
            }
            rows={5}
            {...register("message", {
              required: selectedService === "Other",
              minLength: selectedService === "Other" ? 15 : undefined,
            })}
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

        <div className="flex flex-col items-center pt-4 gap-2">
          <span className="text-white text-lm mb-6">
            or reach out to us through Whatsup
          </span>
          <a
            href="https://wa.me/966511567407"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full justify-center items-center gap-2 px-6 py-2 rounded-xl bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/.85)] !text-black font-semibold text-base shadow transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Chat with us on WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="black"
              className="w-5 h-5"
            >
              <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.37L4.062 29.25a1 1 0 0 0 1.312 1.312l7.88-2.174A12.94 12.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.77 0-3.44-.46-4.89-1.26l-.35-.2-4.68 1.29 1.29-4.68-.2-.35A9.96 9.96 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.29-7.71c-.29-.15-1.71-.84-1.98-.94-.27-.1-.47-.15-.67.15-.2.29-.77.94-.95 1.13-.17.2-.35.22-.64.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.35.43-.53.14-.18.19-.31.29-.5.1-.19.05-.36-.02-.51-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51-.17-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.29-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34z" />
            </svg>
            Whatsup
          </a>
        </div>
      </form>
    </>
  );
}
