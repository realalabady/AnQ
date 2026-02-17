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
      className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full bg-foreground/5 border border-border hover:bg-foreground/10 transition-colors text-foreground text-xs sm:text-sm font-medium cursor-pointer"
      aria-label="Switch language"
    >
      <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      <span>{i18n.language === "ar" ? "EN" : "AR"}</span>
    </button>
  );
}
