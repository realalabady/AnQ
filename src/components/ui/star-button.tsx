"use client";

import { useRef, useEffect } from "react";
import type { ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface StarBackgroundProps {
  color?: string;
}

function StarBackground({ color }: StarBackgroundProps) {
  return (
    <svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" fill={color || "currentColor"} />
      {/* Dense star field with twinkling animations */}
      <circle
        cx="10"
        cy="15"
        r="0.8"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "0s" }}
      />
      <circle
        cx="25"
        cy="8"
        r="0.6"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "0.3s" }}
      />
      <circle
        cx="40"
        cy="12"
        r="0.9"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "0.7s" }}
      />
      <circle
        cx="55"
        cy="5"
        r="0.5"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "1.1s" }}
      />
      <circle
        cx="70"
        cy="18"
        r="0.7"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "0.5s" }}
      />
      <circle
        cx="85"
        cy="10"
        r="0.8"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "1.4s" }}
      />
      <circle
        cx="95"
        cy="22"
        r="0.6"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "0.2s" }}
      />
      <circle
        cx="5"
        cy="30"
        r="0.7"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "0.9s" }}
      />
      <circle
        cx="18"
        cy="35"
        r="0.5"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "1.6s" }}
      />
      <circle
        cx="32"
        cy="28"
        r="0.9"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "0.4s" }}
      />
      <circle
        cx="48"
        cy="32"
        r="0.6"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "1.2s" }}
      />
      <circle
        cx="62"
        cy="25"
        r="0.8"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "0.6s" }}
      />
      <circle
        cx="78"
        cy="38"
        r="0.5"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "1.8s" }}
      />
      <circle
        cx="90"
        cy="30"
        r="0.7"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "0.1s" }}
      />
      <circle
        cx="12"
        cy="48"
        r="0.8"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "1.0s" }}
      />
      <circle
        cx="28"
        cy="52"
        r="0.6"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "0.8s" }}
      />
      <circle
        cx="42"
        cy="45"
        r="0.9"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "1.5s" }}
      />
      <circle
        cx="58"
        cy="55"
        r="0.7"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "0.3s" }}
      />
      <circle
        cx="72"
        cy="48"
        r="0.5"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "1.7s" }}
      />
      <circle
        cx="88"
        cy="58"
        r="0.8"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "0.5s" }}
      />
      <circle
        cx="8"
        cy="65"
        r="0.6"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "1.3s" }}
      />
      <circle
        cx="22"
        cy="72"
        r="0.9"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "0.2s" }}
      />
      <circle
        cx="38"
        cy="68"
        r="0.5"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "1.9s" }}
      />
      <circle
        cx="52"
        cy="75"
        r="0.8"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "0.7s" }}
      />
      <circle
        cx="68"
        cy="62"
        r="0.7"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "1.1s" }}
      />
      <circle
        cx="82"
        cy="70"
        r="0.6"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "0.4s" }}
      />
      <circle
        cx="95"
        cy="65"
        r="0.9"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "1.6s" }}
      />
      <circle
        cx="15"
        cy="85"
        r="0.7"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "0.9s" }}
      />
      <circle
        cx="30"
        cy="90"
        r="0.5"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "0.1s" }}
      />
      <circle
        cx="45"
        cy="82"
        r="0.8"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "1.4s" }}
      />
      <circle
        cx="60"
        cy="92"
        r="0.6"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "0.6s" }}
      />
      <circle
        cx="75"
        cy="85"
        r="0.9"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "1.2s" }}
      />
      <circle
        cx="92"
        cy="88"
        r="0.5"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "0.8s" }}
      />
      <circle
        cx="3"
        cy="50"
        r="0.6"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "1.0s" }}
      />
      <circle
        cx="50"
        cy="50"
        r="1.0"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "0s" }}
      />
      <circle
        cx="97"
        cy="45"
        r="0.7"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "0.5s" }}
      />
      <circle
        cx="35"
        cy="20"
        r="0.5"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "1.8s" }}
      />
      <circle
        cx="65"
        cy="40"
        r="0.8"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "0.3s" }}
      />
      <circle
        cx="20"
        cy="60"
        r="0.6"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "1.5s" }}
      />
      <circle
        cx="80"
        cy="80"
        r="0.9"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "0.7s" }}
      />
      <circle
        cx="50"
        cy="15"
        r="0.7"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "1.3s" }}
      />
      <circle
        cx="50"
        cy="85"
        r="0.8"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "0.2s" }}
      />
      <circle
        cx="15"
        cy="50"
        r="0.5"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "1.1s" }}
      />
      <circle
        cx="85"
        cy="50"
        r="0.6"
        fill="white"
        className="animate-twinkle"
        style={{ animationDelay: "0.9s" }}
      />
    </svg>
  );
}

interface StarButtonProps {
  children: ReactNode;
  lightWidth?: number;
  duration?: number;
  lightColor?: string;
  backgroundColor?: string;
  lightModeBackgroundColor?: string;
  borderWidth?: number;
  className?: string;
  onClick?: () => void;
}

export function StarButton({
  children,
  lightWidth = 110,
  duration = 3,
  lightColor = "#FAFAFA",
  backgroundColor = "#000000",
  lightModeBackgroundColor = "#ffffff",
  borderWidth = 2,
  className,
  ...props
}: StarButtonProps) {
  const pathRef = useRef<HTMLButtonElement>(null);

  // Always use dark mode colors since we force dark theme
  const bgColor = backgroundColor;
  const orbitLightColor = lightColor;

  useEffect(() => {
    if (pathRef.current) {
      const el = pathRef.current;
      const w = el.offsetWidth;
      const h = el.offsetHeight;

      // Check if button is circular (width equals height and has rounded-full)
      const isCircular = w === h && el.classList.contains("rounded-full");

      if (isCircular) {
        // Use a circular path for round buttons
        const r = w / 2;
        el.style.setProperty(
          "--path",
          `path('M ${w} ${r} A ${r} ${r} 0 1 1 ${w} ${r - 0.01} Z')`,
        );
      } else {
        // Use rectangular path for regular buttons
        el.style.setProperty("--path", `path('M 0 0 H ${w} V ${h} H 0 V 0')`);
      }
    }
  }, []);

  return (
    <button
      style={
        {
          "--duration": duration,
          "--light-width": `${lightWidth}px`,
          "--light-color": orbitLightColor,
          "--border-width": `${borderWidth}px`,
          isolation: "isolate",
        } as CSSProperties
      }
      ref={pathRef}
      className={cn(
        "relative z-[3] overflow-hidden h-10 px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-3xl text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 group/star-button animate-float animate-pulse-glow hover:scale-110 cursor-pointer",
        className,
      )}
      {...props}
    >
      <div
        className="absolute aspect-square inset-0 animate-star-btn bg-[radial-gradient(ellipse_at_center,var(--light-color),transparent,transparent)]"
        style={
          {
            offsetPath: "var(--path)",
            offsetDistance: "0%",
            width: "var(--light-width)",
          } as CSSProperties
        }
      />
      <div
        className="absolute inset-0 border-white/15 z-[4] overflow-hidden rounded-[inherit] text-black"
        style={{ borderWidth: "var(--border-width)" }}
        aria-hidden="true"
      >
        <StarBackground color={bgColor} />
      </div>
      <span className="z-10 relative bg-gradient-to-t from-white to-neutral-500 inline-block text-transparent bg-clip-text">
        {children}
      </span>
    </button>
  );
}
