import { useState } from "react";
import { DottedSurface } from "../components/ui/dotted-surface";
import { Footer } from "../components/ui/footer-section";
import { NavBar } from "../components/ui/tubelight-navbar";
import {
  Briefcase,
  Home as HomeIcon,
  User,
  Wrench,
  Mail,
  ExternalLink,
} from "lucide-react";
import { TextScramble } from "../components/ui/text-scramble";
import { motion } from "framer-motion";
import { Timeline } from "../components/ui/timeline";
import { ABOUT, SERVICES, PORTFOLIO } from "../data/services";

export default function Home() {
  const [scrambleDone, setScrambleDone] = useState(false);

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
          className="flex flex-1 flex-col items-start justify-center px-6 pt-24 sm:pt-32"
        >
          <div className="w-full text-left">
            <div className="grid w-full gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div className="max-w-4xl lg:col-span-2">
                <h1 className="font-black text-white text-4xl sm:text-6xl lg:text-7xl leading-tight tracking-tight text-left">
                  {scrambleDone ? (
                    <>
                      SOFTWARE THAT MOVES{" "}
                      <span className="text-[#9A9A9A]">BUSINESSES</span>{" "}
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
                <p className="mt-6 text-[#7A7A7A] text-base sm:text-lg leading-relaxed text-left">
                  A team of engineers, designers, and product strategists
                  building exceptional digital experiences for ambitious
                  startups and enterprises. We create the systems that power
                  your success.
                </p>
              </div>

              <motion.section
                className="w-full rounded-3xl border border-white/10 bg-white/5 px-6 py-8 text-left backdrop-blur lg:col-start-1"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                  Our Expertise
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  Let's Create Something Exceptional Together.
                </h2>
                <ul className="mt-6 grid gap-3 text-sm text-white/80 sm:grid-cols-2">
                  <li className="flex items-start gap-2">
                    <span className="text-white font-black">•</span>
                    End-to-End Software Development
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white font-black">•</span>
                    Modern Websites Built for Scale
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white font-black">•</span>
                    iOS &amp; Android Mobile Applications
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white font-black">•</span>
                    User-Centered UX/UI Design
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white font-black">•</span>
                    Product Leadership &amp; Roadmapping
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white font-black">•</span>
                    Long-Term Maintenance &amp; Optimization
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white font-black">•</span>
                    Enterprise-Grade Architecture &amp; Systems
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white font-black">•</span>
                    Branding That Feels Digital-First
                  </li>
                </ul>
              </motion.section>

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
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">
              Who We Are
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              About <span className="text-[#9A9A9A]">ANQ</span>
            </h2>
            <h3 className="mt-6 text-xl font-semibold text-white/90">
              {ABOUT.headline}
            </h3>
            <div className="mt-4 space-y-4">
              {ABOUT.paragraphs.map((para, idx) => (
                <p
                  key={idx}
                  className="text-base leading-relaxed text-white/70"
                >
                  {para}
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {ABOUT.values.map((v) => (
                <div
                  key={v.word}
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur"
                >
                  <p className="font-semibold text-white">{v.word}</p>
                  <p className="text-xs text-white/50">{v.tagline}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-lg font-medium text-white/80 italic">
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
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">
              What We Do
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Our <span className="text-[#9A9A9A]">Services</span>
            </h2>
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              {SERVICES.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    className="group w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:border-white/20 hover:bg-white/10"
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
                    <h3 className="text-lg font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {service.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* Portfolio/Work Section */}
        <section id="work" className="px-6 py-24 sm:py-32">
          <motion.div
            className="mx-auto max-w-4xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">
              Featured Work
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Our <span className="text-[#9A9A9A]">Portfolio</span>
            </h2>
            <div className="mt-12 space-y-8">
              {PORTFOLIO.map((project, idx) => (
                <motion.a
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-all hover:border-white/20 hover:bg-white/10"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: idx * 0.15,
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-white/50 mt-1">
                        {project.subtitle}
                      </p>
                      <p className="mt-3 text-white/60 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <ExternalLink
                      size={20}
                      className="shrink-0 text-white/40 transition-colors group-hover:text-primary"
                    />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </section>

        <div className="mt-auto pt-12">
          <Footer />
        </div>
      </div>
    </>
  );
}
