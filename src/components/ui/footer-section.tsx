"use client";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useTranslation } from "react-i18next";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";

const socialLinks = [
  { title: "Twitter", href: "#", icon: TwitterIcon },
  { title: "Facebook", href: "#", icon: FacebookIcon },
  { title: "Instagram", href: "#", icon: InstagramIcon },
  { title: "LinkedIn", href: "#", icon: LinkedinIcon },
];

export function Footer() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <footer
      className="md:rounded-t-6xl relative w-full flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-4 py-8 sm:py-10 lg:py-12 overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <AnimatedContainer className="flex flex-col items-center md:items-start gap-2">
            <span className="text-2xl font-bold text-foreground">ANQ</span>
            <p className="text-muted-foreground text-sm text-center md:text-start max-w-xs">
              {t("footer.description")}
            </p>
          </AnimatedContainer>

          <AnimatedContainer delay={0.2} className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-foreground/60 hover:text-foreground transition-colors duration-300"
                aria-label={link.title}
              >
                <link.icon className="size-5" />
              </a>
            ))}
          </AnimatedContainer>
        </div>

        <AnimatedContainer
          delay={0.3}
          className="mt-8 pt-6 border-t border-foreground/10"
        >
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} ANQ. {t("footer.rights")}
          </p>
        </AnimatedContainer>
      </div>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: string;
  children: ReactNode;
};

function AnimatedContainer({
  className,
  delay = 0.1,
  children,
}: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
