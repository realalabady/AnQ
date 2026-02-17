"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectIcon,
  SelectItemText,
  SelectViewport,
  SelectPortal,
} from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import { SERVICES } from "@/data/services";
import { useTranslation } from "react-i18next";

export function ServiceSelect({
  value,
  onChange,
  disabled,
}: {
  value: string;
  onChange: (val: string) => void;
  disabled?: boolean;
}) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  // Map service IDs to translation keys
  const getServiceTitle = (serviceId: string) => {
    const keyMap: Record<string, string> = {
      "ai-automation": "services.items.ai-automation.title",
      "system-application": "services.items.system-application.title",
      "mobile-app": "services.items.mobile-app.title",
      "google-services": "services.items.google-services.title",
      "website-profile": "services.items.website-profile.title",
      "e-store": "services.items.e-store.title",
    };
    return keyMap[serviceId] ? t(keyMap[serviceId]) : serviceId;
  };

  return (
    <Select
      value={value}
      onValueChange={onChange}
      disabled={disabled}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <SelectTrigger className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition appearance-none cursor-pointer pr-10 shadow-[0_2px_12px_rgba(0,0,0,0.25)] backdrop-blur-md flex items-center">
        <SelectValue placeholder={t("contact.form.service")} />
        <SelectIcon>
          <ChevronDown className="h-5 w-5 text-white/60 ml-auto" />
        </SelectIcon>
      </SelectTrigger>
      <SelectPortal>
        <SelectContent
          className="bg-black border border-white/10 rounded-xl shadow-xl text-white z-50 overflow-hidden"
          position="popper"
          sideOffset={4}
        >
          <SelectViewport className="p-1">
            {SERVICES.map((s) => (
              <SelectItem
                key={s.id}
                value={s.id}
                className="px-4 py-2 cursor-pointer hover:bg-white/10 outline-none rounded-lg data-[highlighted]:bg-white/10"
              >
                <SelectItemText>{getServiceTitle(s.id)}</SelectItemText>
              </SelectItem>
            ))}
            <SelectItem
              value="Other"
              className="px-4 py-2 cursor-pointer hover:bg-white/10 outline-none rounded-lg data-[highlighted]:bg-white/10"
            >
              <SelectItemText>{t("services.other")}</SelectItemText>
            </SelectItem>
          </SelectViewport>
        </SelectContent>
      </SelectPortal>
    </Select>
  );
}
