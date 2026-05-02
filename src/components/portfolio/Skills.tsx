import { Code2, Cloud, Wrench, Cpu } from "lucide-react";
import { Section } from "./Section";

const groups = [
  { icon: Code2, title: "Languages", items: ["Python", "C / C++", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"] },
  { icon: Cpu, title: "Technologies", items: ["React", "Node.js", "FastAPI", "MongoDB", "Pandas", "NumPy", "Blockchain", "Algorand / PyTeal"] },
  { icon: Cloud, title: "Cloud & DevOps", items: ["AWS EC2", "AWS S3", "AWS RDS", "Docker"] },
  { icon: Wrench, title: "Tools", items: ["VS Code", "GitHub", "Figma", "Postman"] },
];

export const Skills = () => (
  <Section id="skills" eyebrow="Skills" title={<>Tools that I <span className="text-gradient">ship with</span>.</>}
    subtitle="A versatile stack across full-stack web, AI and blockchain.">
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {groups.map(g => (
        <div key={g.title} className="card-glow rounded-2xl p-6">
          <div className="h-11 w-11 rounded-xl bg-primary/15 grid place-items-center text-primary mb-4">
            <g.icon className="h-5 w-5" />
          </div>
          <h3 className="font-display font-semibold mb-3">{g.title}</h3>
          <div className="flex flex-wrap gap-2">
            {g.items.map(i => (
              <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-secondary/70 border border-border/60 text-foreground/80">
                {i}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);
