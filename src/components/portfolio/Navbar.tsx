import { useEffect, useState } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
      <div className={`container ${scrolled ? "glass rounded-2xl" : ""} transition-all duration-500`}>
        <nav className="flex items-center justify-between py-3">
          <a href="#home" className="font-display text-lg font-bold tracking-tight">
            <span className="text-gradient">Nikshiptha</span>
            <span className="text-muted-foreground">.dev</span>
          </a>
          <ul className="hidden md:flex items-center gap-7 text-sm">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} className="text-muted-foreground hover:text-foreground transition-colors relative group">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-primary to-accent transition-all group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/nikshiptha2505" target="_blank" rel="noreferrer" aria-label="GitHub"><Github className="h-5 w-5" /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/nikshiptha-penthala-0673b82b8/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
            </Button>
            <ThemeToggle />
            <Button variant="hero" size="sm" asChild>
              <a href="#contact">Hire Me</a>
            </Button>
          </div>
          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setOpen(v => !v)} aria-label="Menu">
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </nav>
        {open && (
          <div className="md:hidden glass rounded-2xl mt-2 p-4 animate-fade-up">
            <ul className="flex flex-col gap-3">
              {links.map(l => (
                <li key={l.href}><a onClick={() => setOpen(false)} href={l.href} className="block py-1">{l.label}</a></li>
              ))}
              <li><Button variant="hero" className="w-full" asChild><a href="#contact" onClick={() => setOpen(false)}>Hire Me</a></Button></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
