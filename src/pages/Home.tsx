import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { DottedSurface } from "../components/ui/dotted-surface";
import { Footer } from "../components/ui/footer-section";
import { NavBar } from "../components/ui/tubelight-navbar";
import { Briefcase, Home as HomeIcon, User, Wrench, Mail } from "lucide-react";
import { TextScramble } from "../components/ui/text-scramble";
import { motion } from "framer-motion";
import { LogoCloud } from "../components/ui/logo-cloud";
import { SERVICES } from "../data/services";
import { StarButton } from "../components/ui/star-button";

import linkLogo from "../assets/link.jpeg";
import moongardenLogo from "../assets/moongarden.jpeg";
import sofraLogo from "../assets/sofra.jpeg";
import tebaateLogo from "../assets/tebaate.jpeg";
import vclincLogo from "../assets/Vclinc.jpeg";
import virtualclinicLogo from "../assets/virtualclinic.png";

const logos = [
  {
    src: linkLogo,
    alt: "Link",
  },
  {
    src: moongardenLogo,
    alt: "Moongarden",
  },
  {
    src: sofraLogo,
    alt: "Sofra",
  },
  {
    src: tebaateLogo,
    alt: "Tebaate",
  },
  {
    src: vclincLogo,
    alt: "VClinc",
  },
  {
    src: virtualclinicLogo,
    alt: "Virtual Clinic",
  },
];

export default function Home() {
  const [scrambleDone, setScrambleDone] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const navItems = [
    { name: t("nav.home"), url: "#home", icon: HomeIcon },
    { name: t("nav.about"), url: "#about", icon: User },
    { name: t("nav.services"), url: "#services", icon: Wrench },
    { name: t("nav.work"), url: "#work", icon: Briefcase },
    { name: t("nav.contact"), url: "/contact", icon: Mail },
  ];

  return (
    <>
      <DottedSurface />
      <NavBar items={navItems} />
      <div
        className={`app-content relative flex min-h-svh w-full max-w-full flex-col overflow-x-hidden items-center ${isRTL ? "rtl" : "ltr"}`}
      >
        {/* Hero Section */}
        <main
          id="home"
          className={`w-full flex flex-1 flex-col items-center justify-center px-4 sm:px-8 lg:px-16 pt-24 sm:pt-32 ${isRTL ? "text-right" : "text-left"}`}
          dir={isRTL ? "rtl" : "ltr"}
        >
          <div className="w-full max-w-6xl">
            <div className="flex flex-col gap-8 lg:gap-10">
              <div className="w-full">
                <h1 className="font-black text-foreground text-2xl sm:text-4xl lg:text-6xl xl:text-7xl leading-tight tracking-tight">
                  {scrambleDone ? (
                    t("hero.title")
                  ) : (
                    <TextScramble
                      as="span"
                      className="block whitespace-pre-line"
                      speed={0.08}
                      duration={2.2}
                      onScrambleComplete={() => setScrambleDone(true)}
                    >
                      {t("hero.title")}
                    </TextScramble>
                  )}
                </h1>
                <p className="mt-4 sm:mt-6 text-muted-foreground text-sm sm:text-base lg:text-xl leading-relaxed max-w-3xl">
                  {t("hero.subtitle")}
                </p>
              </div>

              <motion.div
                className="w-full flex justify-center lg:justify-end items-center py-4 sm:py-8"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <StarButton
                  lightColor="#FAFAFA"
                  className="rounded-full w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 text-base sm:text-lg md:text-xl font-bold"
                  onClick={() => navigate("/contact")}
                >
                  {t("hero.cta")}
                </StarButton>
              </motion.div>
            </div>
          </div>
        </main>

              {/* TODO: Re-enable Timeline section later
              <motion.aside
                className="w-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur lg:col-start-2 lg:row-start-2"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              >
                <Timeline
                  data={[
                    {
                      title: "Discover",
                      content: (
                        <div className="grid grid-cols-2 gap-2">
                          <img
                            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop"
                            alt="Discovery workshop"
                            className="h-44 w-full rounded-lg border border-white/10 object-cover"
                            loading="lazy"
                          />
                          <img
                            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=600&auto=format&fit=crop"
                            alt="Team alignment"
                            className="h-44 w-full rounded-lg border border-white/10 object-cover"
                            loading="lazy"
                          />
                          <img
                            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=600&auto=format&fit=crop"
                            alt="Strategy session"
                            className="h-44 w-full rounded-lg border border-white/10 object-cover"
                            loading="lazy"
                          />
                          <img
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600&auto=format&fit=crop"
                            alt="Product planning"
                            className="h-44 w-full rounded-lg border border-white/10 object-cover"
                            loading="lazy"
                          />
                        </div>
                      ),
                    },
                    {
                      title: "Design",
                      content: (
                        <div className="grid grid-cols-2 gap-2">
                          <img
                            src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=600&auto=format&fit=crop"
                            alt="Design system"
                            className="h-44 w-full rounded-lg border border-white/10 object-cover"
                            loading="lazy"
                          />
                          <img
                            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop"
                            alt="Wireframes"
                            className="h-44 w-full rounded-lg border border-white/10 object-cover"
                            loading="lazy"
                          />
                          <img
                            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop"
                            alt="UX research"
                            className="h-44 w-full rounded-lg border border-white/10 object-cover"
                            loading="lazy"
                          />
                          <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
                            alt="Design workshop"
                            className="h-44 w-full rounded-lg border border-white/10 object-cover"
                            loading="lazy"
                          />
                        </div>
                      ),
                    },
                    {
                      title: "Build",
                      content: (
                        <div className="grid grid-cols-2 gap-2">
                          <img
                            src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=600&auto=format&fit=crop"
                            alt="Engineering build"
                            className="h-44 w-full rounded-lg border border-white/10 object-cover"
                            loading="lazy"
                          />
                          <img
                            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop"
                            alt="Code review"
                            className="h-44 w-full rounded-lg border border-white/10 object-cover"
                            loading="lazy"
                          />
                          <img
                            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=600&auto=format&fit=crop"
                            alt="Infrastructure"
                            className="h-44 w-full rounded-lg border border-white/10 object-cover"
                            loading="lazy"
                          />
                          <img
                            src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=600&auto=format&fit=crop"
                            alt="Deployments"
                            className="h-44 w-full rounded-lg border border-white/10 object-cover"
                            loading="lazy"
                          />
                        </div>
                      ),
                    },
                    {
                      title: "Scale",
                      content: (
                        <div className="grid grid-cols-2 gap-2">
                          <img
                            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop"
                            alt="Scaling systems"
                            className="h-44 w-full rounded-lg border border-white/10 object-cover"
                            loading="lazy"
                          />
                          <img
                            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop"
                            alt="Monitoring"
                            className="h-44 w-full rounded-lg border border-white/10 object-cover"
                            loading="lazy"
                          />
                          <img
                            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop"
                            alt="Analytics"
                            className="h-44 w-full rounded-lg border border-white/10 object-cover"
                            loading="lazy"
                          />
                          <img
                            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop"
                            alt="Optimization"
                            className="h-28 w-full rounded-lg border border-white/10 object-cover"
                            loading="lazy"
                          />
                        </div>
                      ),
                    },
                  ]}
                />
              </motion.aside>
              */}

        {/* About Section */}
        <section
          id="about"
          className="w-full px-4 sm:px-6 py-16 sm:py-24 overflow-hidden"
          dir={isRTL ? "rtl" : "ltr"}
        >
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-foreground/60">
              {t("about.label")}
            </p>
            <h2 className="mt-2 sm:mt-3 text-xl sm:text-2xl md:text-3xl font-bold text-foreground lg:text-4xl">
              {t("about.title")}{" "}
              <span className="text-muted-foreground">
                {t("about.titleHighlight")}
              </span>
            </h2>
            <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-foreground/90">
              {t("about.headline")}
            </h3>
            <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
              {(t("about.paragraphs", { returnObjects: true }) as string[]).map(
                (para, idx) => (
                  <p
                    key={idx}
                    className="text-xs sm:text-sm leading-relaxed text-foreground/70"
                  >
                    {para}
                  </p>
                ),
              )}
            </div>
            <div className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
              {["automation", "nexus", "quantum"].map((key) => (
                <div
                  key={key}
                  className="rounded-lg sm:rounded-xl border border-border bg-foreground/5 px-2 sm:px-4 py-1.5 sm:py-2 backdrop-blur"
                >
                  <p className="font-semibold text-foreground text-xs sm:text-sm">
                    {t(`about.values.${key}.word`)}
                  </p>
                  <p className="text-[10px] sm:text-xs text-foreground/50">
                    {t(`about.values.${key}.tagline`)}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base font-medium text-foreground/80 italic">
              {t("about.closing")}
            </p>
          </motion.div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className={`w-full px-4 sm:px-6 py-16 sm:py-24 overflow-hidden ${isRTL ? "text-right" : ""}`}
        >
          <motion.div
            className="mx-auto max-w-6xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-foreground/60">
              {t("services.label")}
            </p>
            <h2 className="mt-2 sm:mt-3 text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
              {t("services.title")}
            </h2>
            <div className="mt-6 sm:mt-10 flex flex-wrap justify-center gap-2 sm:gap-4">
              {SERVICES.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    className={`group w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-12px)] rounded-lg sm:rounded-xl border border-border bg-foreground/5 p-3 sm:p-4 backdrop-blur transition-colors hover:border-foreground/20 hover:bg-foreground/10 ${isRTL ? "text-right" : ""}`}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: idx * 0.1,
                    }}
                  >
                    <div
                      className={`mb-2 sm:mb-3 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-md sm:rounded-lg bg-primary/10 text-primary ${isRTL ? "mr-auto" : ""}`}
                    >
                      <Icon size={16} className="sm:hidden" />
                      <Icon size={20} className="hidden sm:block" />
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-foreground">
                      {t(`services.items.${service.id}.title`)}
                    </h3>
                    <p className="mt-1 sm:mt-1.5 text-[11px] sm:text-xs leading-relaxed text-foreground/60">
                      {t(`services.items.${service.id}.description`)}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* Logo Cloud Section */}
        <section id="work" className="relative w-full px-4 sm:px-6 py-8 sm:py-12 overflow-hidden">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-3 sm:mb-4 text-center font-medium text-foreground text-base sm:text-lg md:text-2xl tracking-tight">
              <span className="font-semibold">{t("work.usedBy")}</span>
            </h2>
            <div className="mx-auto my-3 sm:my-4 h-px max-w-xs sm:max-w-sm bg-border" style={{maskImage: 'linear-gradient(to right, transparent, black, transparent)'}} />

            <LogoCloud logos={logos} />

            <div className="mt-4 sm:mt-5 h-px bg-border" style={{maskImage: 'linear-gradient(to right, transparent, black, transparent)'}} />
          </div>
        </section>

        <div className="w-full mt-auto pt-12">
          <Footer />
        </div>
      </div>
    </>
  );
}
