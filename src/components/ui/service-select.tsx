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

export function ServiceSelect({
  value,
  onChange,
  disabled,
}: {
  value: string;
  onChange: (val: string) => void;
  disabled?: boolean;
}) {
  return (
    <Select value={value} onValueChange={onChange} disabled={disabled}>
      <SelectTrigger className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition appearance-none cursor-pointer pr-10 shadow-[0_2px_12px_rgba(0,0,0,0.25)] backdrop-blur-md flex items-center">
        <SelectValue placeholder="Select a service" />
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
                value={s.title}
                className="px-4 py-2 cursor-pointer hover:bg-white/10 outline-none rounded-lg data-[highlighted]:bg-white/10"
              >
                <SelectItemText>{s.title}</SelectItemText>
              </SelectItem>
            ))}
            <SelectItem
              value="Other"
              className="px-4 py-2 cursor-pointer hover:bg-white/10 outline-none rounded-lg data-[highlighted]:bg-white/10"
            >
              <SelectItemText>Other</SelectItemText>
            </SelectItem>
          </SelectViewport>
        </SelectContent>
      </SelectPortal>
    </Select>
  );
}
