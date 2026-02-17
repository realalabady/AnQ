import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { DottedSurface } from "@/components/ui/dotted-surface";
import { ContactForm } from "@/components/ui/contact-form";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, User, Briefcase, FolderOpen, Mail } from "lucide-react";

export default function Contact() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const navItems = [
    { name: t("nav.home"), url: "/", icon: Home },
    { name: t("nav.about"), url: "/#about", icon: User },
    { name: t("nav.services"), url: "/#services", icon: Briefcase },
    { name: t("nav.work"), url: "/#work", icon: FolderOpen },
    { name: t("nav.contact"), url: "/contact", icon: Mail },
  ];

  return (
    <>
      <DottedSurface />
      <NavBar items={navItems} />
      <div
        className={`relative min-h-svh flex items-center justify-center px-6 py-32 ${isRTL ? "rtl" : "ltr"}`}
      >
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className={`text-4xl sm:text-5xl font-black text-foreground mb-3 ${isRTL ? "text-right" : ""}`}
          >
            {t("contact.title")}
          </h1>
          <p className={`text-foreground/60 mb-8 ${isRTL ? "text-right" : ""}`}>
            {t("contact.subtitle")}
          </p>

          <ContactForm />
        </motion.div>
      </div>
    </>
  );
}
