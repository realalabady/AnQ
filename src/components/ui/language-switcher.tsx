"use client";

import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    // Update document direction for RTL support
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-full bg-foreground/5 border border-border hover:bg-foreground/10 transition-colors text-foreground text-sm font-medium cursor-pointer"
      aria-label="Switch language"
    >
      <Globe className="w-4 h-4" />
      <span>{i18n.language === "ar" ? "EN" : "AR"}</span>
    </button>
  );
}
