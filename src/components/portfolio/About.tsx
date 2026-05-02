import { GraduationCap, Target } from "lucide-react";
import { Section } from "./Section";

const education = [
  { school: "Anurag University, Hyderabad", degree: "B.Tech, Computer Science & Engineering", period: "2023 – 2027", score: "CGPA 9.01" },
  { school: "Narayana Junior College", degree: "Intermediate (MPC)", period: "2021 – 2023", score: "97.5%" },
  { school: "Ekashila High School", degree: "SSC", period: "2020 – 2021", score: "CGPA 10.0" },
];

export const About = () => (
  <Section id="about" eyebrow="About" title={<>A builder driven by <span className="text-gradient">curiosity</span>.</>}
    subtitle="Engineering student passionate about pushing software, AI and blockchain into real, useful products.">
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="card-glow rounded-3xl p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-xl bg-primary/15 grid place-items-center text-primary"><Target className="h-5 w-5" /></div>
          <h3 className="font-display text-xl font-semibold">Career Objective</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          To apply my skills in software development, machine learning and
          blockchain to create innovative, scalable and secure solutions —
          while continuously sharpening my technical expertise and contributing
          to impactful projects.
        </p>
        <div className="mt-8 grid grid-cols-3 gap-4">
          {[
            { k: "9.01", l: "CGPA" },
            { k: "3+", l: "Projects" },
            { k: "5+", l: "Awards" },
          ].map(s => (
            <div key={s.l} className="rounded-2xl border border-border/60 p-4 text-center">
              <div className="font-display text-2xl font-bold text-gradient">{s.k}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="card-glow rounded-3xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-xl bg-accent/15 grid place-items-center text-accent"><GraduationCap className="h-5 w-5" /></div>
          <h3 className="font-display text-xl font-semibold">Education</h3>
        </div>
        <ol className="relative border-l border-border/70 ml-3 space-y-6">
          {education.map(e => (
            <li key={e.school} className="pl-6 relative">
              <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-gradient-to-br from-primary to-accent" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="font-medium">{e.school}</h4>
                <span className="text-xs text-muted-foreground">{e.period}</span>
              </div>
              <p className="text-sm text-muted-foreground">{e.degree}</p>
              <span className="inline-block mt-1 text-xs font-semibold text-gradient">{e.score}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </Section>
);
