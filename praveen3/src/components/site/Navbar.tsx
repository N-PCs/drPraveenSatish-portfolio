import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#expertise", label: "Expertise" },
  { href: "#portfolio", label: "Surgical Portfolio" },
  { href: "#timeline", label: "Academic Timeline" },
  { href: "#publications", label: "Publications" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-10 lg:py-4">
        <a href="#home" className="flex flex-col leading-tight">
          <span className="text-sm font-semibold tracking-[0.18em] text-foreground">
            DR. PRAVEEN SATISH
          </span>
          <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Maxillofacial &amp; Oral Onco Surgeon
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground shadow-sm transition-all hover:opacity-90 hover:shadow-elevated lg:inline-flex"
          >
            Schedule Consultation
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="rounded-md border border-border bg-surface p-2 text-foreground lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm text-foreground hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-accent px-5 py-2.5 text-center text-sm font-medium text-accent-foreground"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
