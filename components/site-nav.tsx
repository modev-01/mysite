"use client";

import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";

const links = [
  { id: "home", label: "الرئيسية" },
  { id: "services", label: "الخدمات" },
  { id: "projects", label: "الأعمال" },
  { id: "contact", label: "تواصل" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  const myLogoUrl = `/modev.png`;
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border py-3" : "py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2 font-mono text-sm font-bold tracking-tight text-foreground"
        >
          <span className="flex size-8 items-center justify-center rounded-md bg-primary/15 text-primary">
            <span className="flex size-8 items-center justify-center overflow-hidden rounded-md bg-primary/15">
              <img
                src={myLogoUrl}
                alt="My Logo"
                className="size-full object-contain"
              />
            </span>
          </span>
          <span className="text-glow">
            Mo<span className="text-primary">_dev</span>
          </span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollTo("contact")}
          className="rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-bold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
        >
          {"< تواصل معي />"}
        </button>
      </nav>
    </header>
  );
}
