import { Trophy } from "lucide-react";
import { Section } from "./Section";

const items = [
  { t: "OpenAI Academy × NxtWave Buildathon 2025", d: "Selected participant" },
  { t: "Algorand Hack Series 2 — Semifinalist", d: "Top 400+ teams nationwide" },
  { t: "InnoQuest 3", d: "Runner-up" },
  { t: "Smart India Hackathon", d: "Internal Qualifier" },
  { t: "TechHack 4 — Winner", d: "Blockchain Domain" },
];

export const Achievements = () => (
  <Section id="achievements" eyebrow="Achievements" title={<>Wins & <span className="text-gradient">milestones</span>.</>}>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map(i => (
        <div key={i.t} className="card-glow rounded-2xl p-6 flex gap-4">
          <div className="h-11 w-11 shrink-0 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 grid place-items-center text-foreground">
            <Trophy className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-medium leading-snug">{i.t}</h4>
            <p className="text-sm text-muted-foreground mt-1">{i.d}</p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);
