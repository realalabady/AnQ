import { useState } from "react";
import { DottedSurface } from "../components/ui/dotted-surface";
import { Footer } from "../components/ui/footer-section";
import { NavBar } from "../components/ui/tubelight-navbar";
import { Briefcase, FileText, Home as HomeIcon, User } from "lucide-react";
import { TextScramble } from "../components/ui/text-scramble";
import { motion } from "framer-motion";

export default function Home() {
  const [scrambleDone, setScrambleDone] = useState(false);

  const navItems = [
    { name: "Home", url: "#", icon: HomeIcon },
    { name: "About", url: "#", icon: User },
    { name: "Projects", url: "#", icon: Briefcase },
    { name: "Resume", url: "#", icon: FileText },
  ];

  return (
    <>
      <DottedSurface />
      <NavBar items={navItems} />
      <div className="app-content relative flex min-h-svh flex-col">
        <main className="flex flex-1 flex-col items-start justify-center px-6 pt-24 sm:pt-32">
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
                  Let’s Create Something Exceptional Together.
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

              <motion.aside
                className="w-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur lg:col-start-2 lg:row-start-2"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/60">
                  <span>Timeline</span>
                  <span>Delivery</span>
                </div>
                <motion.ol
                  className="mt-6 space-y-5"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.12 } },
                  }}
                >
                  {[
                    {
                      title: "Discover",
                      desc: "Align on outcomes, users, and technical constraints.",
                    },
                    {
                      title: "Design",
                      desc: "Prototype flows and craft a crisp product system.",
                    },
                    {
                      title: "Build",
                      desc: "Ship scalable architecture and production-ready code.",
                    },
                    {
                      title: "Scale",
                      desc: "Optimize performance, reliability, and analytics.",
                    },
                  ].map((step, index) => (
                    <motion.li
                      key={step.title}
                      className="relative rounded-2xl border border-white/10 bg-black/40 p-4"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        show: { opacity: 1, y: 0 },
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-sm font-semibold text-white">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {step.title}
                          </p>
                          <p className="text-xs text-white/60">{step.desc}</p>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </motion.ol>
              </motion.aside>
            </div>
          </div>
        </main>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}
