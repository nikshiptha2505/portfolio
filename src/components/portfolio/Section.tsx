import { ReactNode } from "react";

export const Section = ({ id, eyebrow, title, subtitle, children }: { id: string; eyebrow: string; title: ReactNode; subtitle?: string; children: ReactNode }) => (
  <section id={id} className="py-24 relative">
    <div className="container">
      <div className="max-w-2xl mb-14">
        <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3 font-medium">{eyebrow}</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
        {subtitle && <p className="mt-4 text-muted-foreground text-lg">{subtitle}</p>}
      </div>
      {children}
    </div>
  </section>
);
