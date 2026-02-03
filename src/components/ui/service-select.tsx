import * as React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectIcon,
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
      <SelectContent
        className="bg-black border border-white/10 rounded-xl shadow-xl text-white w-[var(--radix-select-trigger-width)] min-w-0"
        style={{ minWidth: 0 }}
      >
        {SERVICES.map((s) => (
          <SelectItem
            key={s.id}
            value={s.title}
            className="px-4 py-2 cursor-pointer hover:bg-white/10"
          >
            {s.title}
          </SelectItem>
        ))}
        <SelectItem
          value="Other"
          className="px-4 py-2 cursor-pointer hover:bg-white/10"
        >
          Other
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
