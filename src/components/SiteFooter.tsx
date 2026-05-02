import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/dakar-connect-logo.jpeg";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/40 mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="DAKAR'CONNECT" className="h-10 w-10 rounded-lg" />
            <span className="font-bold text-lg">DAKAR'CONNECT</span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            La solution intelligente qui connecte Dakar — navigation, services locaux et information en
            temps réel, dans votre poche.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-sm mb-3">Navigation</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground transition-smooth">À propos</Link></li>
            <li><Link to="/features" className="hover:text-foreground transition-smooth">Fonctionnalités</Link></li>
            <li><Link to="/how-it-works" className="hover:text-foreground transition-smooth">Comment ça marche</Link></li>
            <li><Link to="/contact" className="hover:text-foreground transition-smooth">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-sm mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> contact@dakarconnect.sn</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Dakar, Sénégal</li>
          </ul>
          <div className="flex gap-3 mt-4">
            <a href="#" aria-label="Facebook" className="p-2 rounded-md bg-background hover:bg-primary hover:text-primary-foreground transition-smooth"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="p-2 rounded-md bg-background hover:bg-primary hover:text-primary-foreground transition-smooth"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="p-2 rounded-md bg-background hover:bg-primary hover:text-primary-foreground transition-smooth"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="LinkedIn" className="p-2 rounded-md bg-background hover:bg-primary hover:text-primary-foreground transition-smooth"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} DAKAR'CONNECT. Tous droits réservés.</p>
          <div className="h-1 w-32 rounded-full gradient-accent" />
        </div>
      </div>
    </footer>
  );
}
