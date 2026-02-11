import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DottedSurface } from "../components/ui/dotted-surface";
import { Footer } from "../components/ui/footer-section";
import { NavBar } from "../components/ui/tubelight-navbar";
import { Briefcase, Home as HomeIcon, User, Wrench, Mail } from "lucide-react";
import { TextScramble } from "../components/ui/text-scramble";
import { motion } from "framer-motion";
import { LogoCloud } from "../components/ui/logo-cloud";
import { ABOUT, SERVICES } from "../data/services";
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

  const navItems = [
    { name: "Home", url: "#home", icon: HomeIcon },
    { name: "About", url: "#about", icon: User },
    { name: "Services", url: "#services", icon: Wrench },
    { name: "Work", url: "#work", icon: Briefcase },
    { name: "Contact", url: "/contact", icon: Mail },
  ];

  return (
    <>
      <DottedSurface />
      <NavBar items={navItems} />
      <div className="app-content relative flex min-h-svh flex-col">
        {/* Hero Section */}
        <main
          id="home"
          className="flex flex-1 flex-col items-start justify-center px-8 sm:px-12 lg:px-16 pt-24 sm:pt-32"
        >
          <div className="w-full text-left">
            <div className="grid w-full gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div className="max-w-4xl lg:col-span-2">
                <h1 className="font-black text-foreground text-4xl sm:text-6xl lg:text-7xl leading-tight tracking-tight text-left">
                  {scrambleDone ? (
                    <>
                      SOFTWARE THAT MOVES{" "}
                      <span className="text-muted-foreground">BUSINESSES</span>{" "}
                      FORWARD.
                    </>
                  ) : (
                    <TextScramble
                      as="span"
                      className="block whitespace-pre-line"
                      speed={0.08}
                      duration={2.2}
                      onScrambleComplete={() => setScrambleDone(true)}
                    >
                      {"SOFTWARE THAT MOVES BUSINESSES FORWARD."}
                    </TextScramble>
                  )}
                </h1>
                <p className="mt-8 text-muted-foreground text-lg sm:text-xl lg:text-2xl leading-relaxed text-left max-w-3xl">
                  A team of engineers, designers, and product strategists
                  building exceptional digital experiences for ambitious
                  startups and enterprises. We create the systems that power
                  your success.
                </p>
              </div>

              <motion.div
                className="w-full lg:col-start-2 lg:row-start-2 flex justify-end items-center py-8 pr-36 lg:pr-58"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <StarButton
                  lightColor="#FAFAFA"
                  className="rounded-full w-44 h-44 text-xl font-bold"
                  onClick={() => navigate("/contact")}
                >
                  Contact Us
                </StarButton>
              </motion.div>

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
            </div>
          </div>
        </main>

        {/* About Section */}
        <section id="about" className="px-6 py-24 sm:py-32">
          <motion.div
            className="mx-auto max-w-4xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-foreground/60">
              Who We Are
            </p>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
              About <span className="text-muted-foreground">ANQ</span>
            </h2>
            <h3 className="mt-6 text-xl font-semibold text-foreground/90">
              {ABOUT.headline}
            </h3>
            <div className="mt-4 space-y-4">
              {ABOUT.paragraphs.map((para, idx) => (
                <p
                  key={idx}
                  className="text-base leading-relaxed text-foreground/70"
                >
                  {para}
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {ABOUT.values.map((v) => (
                <div
                  key={v.word}
                  className="rounded-xl border border-border bg-foreground/5 px-5 py-3 backdrop-blur"
                >
                  <p className="font-semibold text-foreground">{v.word}</p>
                  <p className="text-xs text-foreground/50">{v.tagline}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-lg font-medium text-foreground/80 italic">
              {ABOUT.closing}
            </p>
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services" className="px-6 py-24 sm:py-32">
          <motion.div
            className="mx-auto max-w-6xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-foreground/60">
              What We Do
            </p>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
              Our <span className="text-muted-foreground">Services</span>
            </h2>
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              {SERVICES.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    className="group w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-2xl border border-border bg-foreground/5 p-6 backdrop-blur transition-colors hover:border-foreground/20 hover:bg-foreground/10"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: idx * 0.1,
                    }}
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                      {service.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* Logo Cloud Section */}
        <section id="work" className="relative mx-auto max-w-3xl py-16">
          <div
            aria-hidden="true"
            className="-z-10 -top-1/2 -translate-x-1/2 pointer-events-none absolute left-1/2 h-[120vmin] w-[120vmin] rounded-b-full bg-[radial-gradient(ellipse_at_center,hsl(var(--foreground)/0.1),transparent_50%)] blur-[30px]"
          />

          <h2 className="mb-5 text-center font-medium text-foreground text-xl tracking-tight md:text-3xl">
            <span className="text-muted-foreground">Trusted by experts.</span>
            <br />
            <span className="font-semibold">Used by the leaders.</span>
          </h2>
          <div className="mx-auto my-5 h-px max-w-sm bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

          <LogoCloud logos={logos} />

          <div className="mt-5 h-px bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
        </section>

        <div className="mt-auto pt-12">
          <Footer />
        </div>
      </div>
    </>
  );
}
