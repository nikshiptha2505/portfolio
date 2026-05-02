import { ArrowUpRight, Bot, Leaf, ShieldCheck } from "lucide-react";
import { Section } from "./Section";

const projects = [
  {
    title: "NEXTAURA",
    tag: "AI · Multi-Agent",
    icon: Bot,
    desc: "AI Agent Co-Pilot for MSMEs — a multi-agent system automating marketing and customer support with real-time analytics.",
    bullets: [
      "REST APIs in FastAPI + TypeScript",
      "Groq API integration & analytics dashboard",
      "60% improvement in user engagement",
    ],
    tech: ["TypeScript", "FastAPI", "MongoDB", "Groq", "REST"],
    accent: "from-primary/30 to-primary-glow/20",
  },
  {
    title: "AlgoHealX",
    tag: "Blockchain · Healthcare",
    icon: ShieldCheck,
    desc: "Blockchain-based pharmaceutical tracking with real-time verification and counterfeit detection across the supply chain.",
    bullets: [
      "Smart contracts in PyTeal on Algorand",
      "Live verification dApp UI",
      "Counterfeit detection alerts",
    ],
    tech: ["Algorand", "PyTeal", "React", "TypeScript", "Tailwind"],
    accent: "from-accent/30 to-primary/20",
  },
  {
    title: "FarmNest",
    tag: "Full-Stack · E-commerce",
    icon: Leaf,
    desc: "Full-stack MERN platform connecting farmers and buyers with cart, secure payments and order tracking.",
    bullets: [
      "Auth, cart & order tracking",
      "Razorpay payments integration",
      "Mongo + Express + React + Node",
    ],
    tech: ["MongoDB", "Express", "React", "Node.js", "Razorpay"],
    accent: "from-primary-glow/30 to-accent/20",
  },
];

export const Projects = () => (
  <Section id="projects" eyebrow="Projects" title={<>Things I've <span className="text-gradient">built</span>.</>}
    subtitle="A selection of products spanning AI, Web3 and full-stack web.">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map(p => (
        <article key={p.title} className="card-glow rounded-3xl p-6 group relative overflow-hidden">
          <div className={`absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity`} />
          <div className="relative">
            <div className="flex items-center justify-between mb-5">
              <div className="h-12 w-12 rounded-2xl bg-primary/15 grid place-items-center text-primary">
                <p.icon className="h-6 w-6" />
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
            </div>
            <div className="text-xs text-accent uppercase tracking-wider mb-1">{p.tag}</div>
            <h3 className="font-display text-2xl font-bold mb-3">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.desc}</p>
            <ul className="space-y-1.5 mb-5">
              {p.bullets.map(b => (
                <li key={b} className="text-sm text-foreground/80 flex gap-2">
                  <span className="mt-2 h-1 w-1 rounded-full bg-gradient-to-r from-primary to-accent shrink-0" />{b}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5">
              {p.tech.map(t => (
                <span key={t} className="text-[11px] px-2 py-0.5 rounded-md bg-secondary/70 border border-border/60 text-foreground/70">{t}</span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  </Section>
);
