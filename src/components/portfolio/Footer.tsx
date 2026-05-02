import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-border/60 mt-12">
    <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} Nikshiptha Penthala. Crafted with care.</p>
      <div className="flex items-center gap-4">
        <a href="https://github.com/nikshiptha2505" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-foreground"><Github className="h-4 w-4" /></a>
        <a href="https://linkedin.com/in/nikshipthapenthala" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
        <a href="mailto:nikshipthapenthala@gmail.com" aria-label="Email" className="hover:text-foreground"><Mail className="h-4 w-4" /></a>
      </div>
    </div>
  </footer>
);
