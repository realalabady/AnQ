import { motion } from "framer-motion";
import { DottedSurface } from "@/components/ui/dotted-surface";
import { ContactForm } from "@/components/ui/contact-form";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, User, Briefcase, FolderOpen, Mail } from "lucide-react";
import { COMPANY } from "@/data/services";

export default function Contact() {
  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "About", url: "/#about", icon: User },
    { name: "Services", url: "/#services", icon: Briefcase },
    { name: "Portfolio", url: "/#portfolio", icon: FolderOpen },
    { name: "Contact", url: "/contact", icon: Mail },
  ];

  return (
    <>
      <DottedSurface />
      <NavBar items={navItems} />
      <div className="relative min-h-svh flex items-center justify-center px-6 py-32">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-3">
            Let's Talk
          </h1>
          <p className="text-white/60 mb-8">
            Have a project in mind? Get in touch and we'll get back to you
            within 24 hours.
          </p>

          <ContactForm />
        </motion.div>
      </div>
    </>
  );
}
