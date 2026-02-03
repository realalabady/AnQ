import { Cpu, Code2, Smartphone, Zap, Globe } from "lucide-react";

export const COMPANY = {
  name: "ANQ",
  email: "anq.software@gmail.com",
  phone: "0511567407",
};

export const SERVICES = [
  {
    id: "ai-automation",
    title: "AI Solution & Workflow Automation",
    description:
      "Intelligent systems that automate your workflows, eliminate manual processes, and let you focus on growth.",
    icon: Cpu,
  },
  {
    id: "system-application",
    title: "System Application",
    description:
      "Enterprise-grade applications built for performance, reliability, and seamless integration.",
    icon: Code2,
  },
  {
    id: "mobile-app",
    title: "iOS & Android Application",
    description:
      "Native and cross-platform mobile apps that deliver exceptional experiences users love.",
    icon: Smartphone,
  },
  {
    id: "google-services",
    title: "Google Services",
    description:
      "Google Cloud, Workspace, Maps, and Analytics integration to power your digital infrastructure.",
    icon: Zap,
  },
  {
    id: "website-profile",
    title: "Website & Profile",
    description:
      "Fast, beautiful, conversion-focused websites that represent your brand and drive results.",
    icon: Globe,
  },
];

export const PORTFOLIO = [
  {
    id: "link",
    title: "Link",
    subtitle: "Freelancer Services Platform",
    description:
      "A platform connecting freelance service providers with clients. Streamlined discovery, communication, and collaboration.",
    url: "https://link-five-cyan.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
  },
];

export const ABOUT = {
  headline: "At ANQ, we don't build software just to build software.",
  paragraphs: [
    "We build it because too many businesses are still wasting time on things machines should already be handling. Manual processes. Disconnected systems. Repetitive tasks. Complexity where there should be clarity.",
    "So we created ANQ to change that.",
    "We're a team of engineers, designers, and product thinkers who go deep into the technical layers — architecture, automation, integrations, and scalable systems — to create digital solutions that actually make life easier.",
    "Our work isn't about flashy features. It's about building technology that works quietly in the background, removing friction, streamlining operations, and helping people focus on what matters most.",
    "From startups launching bold ideas to enterprises modernizing their infrastructure, we design and develop products that are smart, fast, and built for the future.",
  ],
  values: [
    { word: "Automation", tagline: "Technology that eliminates friction" },
    { word: "Nexus", tagline: "The bridge between business and technology" },
    {
      word: "Quantum",
      tagline: "futuristic, high-performance, next-level tech",
    },
  ],
  closing: "ANQ — Engineering the systems behind progress.",
};
