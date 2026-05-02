import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-primary/30 blur-3xl animate-blob" />
      <div className="absolute -bottom-32 -right-20 w-[32rem] h-[32rem] rounded-full bg-accent/20 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />

      <div className="container relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-6">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Available for internships & freelance
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            Hi, I'm <span className="text-gradient">Nikshiptha</span>
            <br />
            <span className="text-foreground/90">building the future with</span>
            <br />
            <span className="text-gradient">AI · Blockchain · Code</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Full Stack Developer & CSE undergrad at Anurag University crafting
            intelligent, secure and scalable products — from multi-agent AI to
            on-chain medicine tracking.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">View Projects <ArrowRight className="ml-1 h-4 w-4" /></a>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <a href="#contact"><Mail className="mr-1 h-4 w-4" /> Contact Me</a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="/resume.pdf" download><Download className="mr-1 h-4 w-4" /> Resume</a>
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-4 justify-center">
            <a aria-label="GitHub" href="https://github.com/nikshiptha2505" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Github className="h-5 w-5" /></a>
            <a aria-label="LinkedIn" href="https://linkedin.com/in/nikshipthapenthala" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin className="h-5 w-5" /></a>
            <span className="text-muted-foreground text-sm">nikshipthapenthala@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};
