import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/dakar-connect-logo.jpeg";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/about", label: "À propos" },
  { to: "/features", label: "Fonctionnalités" },
  { to: "/how-it-works", label: "Comment ça marche" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <img src={logo} alt="DAKAR'CONNECT logo" className="h-10 w-10 rounded-lg object-cover" />
          <span className="hidden sm:inline">
            DAKAR<span className="text-primary">'</span>CONNECT
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-smooth ${
                  active ? "text-primary" : "text-foreground/70 hover:text-foreground hover:bg-muted"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <a
          href="https://dakar-connect-fawn.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft hover:opacity-90 transition-smooth"
        >
          Découvrir notre APP
        </a>

        <button
          className="md:hidden p-2 rounded-md hover:bg-muted"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col p-4 gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://dakar-connect-fawn.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft hover:opacity-90 transition-smooth"
            >
              Découvrir notre APP
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
