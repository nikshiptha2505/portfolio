import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const Contact = () => {
  const [sending, setSending] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const subject = encodeURIComponent(`Portfolio contact — ${name}`);
    const body = encodeURIComponent(`${data.get("message")}\n\n— ${name} (${data.get("email")})`);
    window.location.href = `mailto:nikshipthapenthala@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      toast.success("Opening your email app…");
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <Section id="contact" eyebrow="Contact" title={<>Let's build <span className="text-gradient">something</span>.</>}
      subtitle="Open to internships, freelance and collaborations.">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6">
        <div className="card-glow rounded-3xl p-8 space-y-5">
          <a href="mailto:nikshipthapenthala@gmail.com" className="flex items-center gap-4 group">
            <div className="h-11 w-11 rounded-xl bg-primary/15 grid place-items-center text-primary"><Mail className="h-5 w-5" /></div>
            <div>
              <div className="text-xs text-muted-foreground">Email</div>
              <div className="group-hover:text-gradient transition-colors">nikshipthapenthala@gmail.com</div>
            </div>
          </a>
          <a href="tel:+919059259052" className="flex items-center gap-4 group">
            <div className="h-11 w-11 rounded-xl bg-primary/15 grid place-items-center text-primary"><Phone className="h-5 w-5" /></div>
            <div>
              <div className="text-xs text-muted-foreground">Phone</div>
              <div className="group-hover:text-gradient transition-colors">+91 90592 59052</div>
            </div>
          </a>
          <div className="flex items-center gap-4">
            <div className="h-11 w-11 rounded-xl bg-primary/15 grid place-items-center text-primary"><MapPin className="h-5 w-5" /></div>
            <div>
              <div className="text-xs text-muted-foreground">Based in</div>
              <div>Hyderabad, India</div>
            </div>
          </div>
          <div className="pt-4 flex gap-3">
            <Button variant="glass" size="icon" asChild>
              <a aria-label="GitHub" href="https://github.com/nikshiptha2505" target="_blank" rel="noreferrer"><Github className="h-5 w-5" /></a>
            </Button>
            <Button variant="glass" size="icon" asChild>
              <a aria-label="LinkedIn" href="https://linkedin.com/in/nikshipthapenthala" target="_blank" rel="noreferrer"><Linkedin className="h-5 w-5" /></a>
            </Button>
          </div>
        </div>

        <form onSubmit={onSubmit} className="card-glow rounded-3xl p-8 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="text-sm text-muted-foreground">Name</label>
              <Input id="name" name="name" required placeholder="Your name" className="mt-1.5 bg-secondary/40 border-border/60" />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-muted-foreground">Email</label>
              <Input id="email" name="email" type="email" required placeholder="you@example.com" className="mt-1.5 bg-secondary/40 border-border/60" />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="text-sm text-muted-foreground">Message</label>
            <Textarea id="message" name="message" required rows={6} placeholder="Tell me about your project…" className="mt-1.5 bg-secondary/40 border-border/60" />
          </div>
          <Button type="submit" variant="hero" size="lg" disabled={sending} className="w-full sm:w-auto">
            <Send className="h-4 w-4" /> {sending ? "Sending…" : "Send Message"}
          </Button>
        </form>
      </div>
    </Section>
  );
};
