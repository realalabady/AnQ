"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(items[0]?.name ?? "");
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const isScrollingDown = current > lastScrollY.current;

      if (current < 10) {
        setIsVisible(true);
      } else {
        setIsVisible(!isScrollingDown);
      }

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem,
  ) => {
    e.preventDefault();
    setActiveTab(item.name);

    const url = item.url;

    // External route (like /contact)
    if (url.startsWith("/") && !url.includes("#")) {
      navigate(url);
      return;
    }

    // Hash link on same page
    if (url.startsWith("#")) {
      const el = document.querySelector(url);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    // Hash link from another page (like /#about from /contact)
    if (url.includes("#")) {
      const [path, hash] = url.split("#");
      if (location.pathname === path || path === "/") {
        const el = document.querySelector(`#${hash}`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate(url);
      }
      return;
    }
  };

  return (
    <div
      className={cn(
        "fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-6 transition-transform duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full",
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-2 rounded-full shadow-lg">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="px-3 text-[28px] font-black tracking-tight text-white hover:text-white/80 transition"
        >
          AnQ
        </a>
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={(e) => handleClick(e, item)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}
