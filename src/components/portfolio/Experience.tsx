import { Briefcase, Award } from "lucide-react";
import { Section } from "./Section";

const certs = [
  "MongoDB", "Google Cloud ML & AI", "Microsoft Generative AI",
  "Cisco Networking & AI", "AWS Cloud Foundations", "Salesforce Developer",
];

export const Experience = () => (
  <Section id="experience" eyebrow="Experience" title={<>Internship & <span className="text-gradient">credentials</span>.</>}>
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="card-glow rounded-3xl p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-10 w-10 rounded-xl bg-primary/15 grid place-items-center text-primary"><Briefcase className="h-5 w-5" /></div>
          <h3 className="font-display text-xl font-semibold">Internship</h3>
        </div>
        <div className="flex justify-between flex-wrap items-baseline gap-2">
          <h4 className="font-medium">AI & Cloud Technology Intern</h4>
          <span className="text-xs text-muted-foreground">AICTE × IBM SkillBuild</span>
        </div>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          <li>• Built an AI fashion-design platform using Stable Diffusion & DALL·E.</li>
          <li>• Integrated recommendation APIs to personalize designs.</li>
          <li>• Deployed on cloud with scalable architecture.</li>
        </ul>
      </div>
      <div className="card-glow rounded-3xl p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-10 w-10 rounded-xl bg-accent/15 grid place-items-center text-accent"><Award className="h-5 w-5" /></div>
          <h3 className="font-display text-xl font-semibold">Certifications</h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-2.5">
          {certs.map(c => (
            <div key={c} className="rounded-xl border border-border/60 px-3 py-2.5 text-sm bg-secondary/40 hover:border-primary/50 transition-colors">
              {c}
            </div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);
