import { useEffect, useState } from "react";
import { X, Sparkles } from "lucide-react";
import logo from "@/assets/dakar-connect-logo.jpeg";

const KEY = "dakar-connect-welcomed";

export function WelcomeModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem(KEY);
    if (!seen) {
      const t = setTimeout(() => setOpen(true), 400);
      return () => clearTimeout(t);
    }
  }, []);

  const close = () => {
    sessionStorage.setItem(KEY, "1");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm p-4 animate-fade-up"
      onClick={close}
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-card shadow-elegant overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-2 gradient-accent" />
        <button
          onClick={close}
          className="absolute right-3 top-5 p-1.5 rounded-md hover:bg-muted transition-smooth"
          aria-label="Fermer"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="p-8 text-center">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-background shadow-soft">
            <img src={logo} alt="DAKAR'CONNECT" className="h-16 w-16 rounded-xl object-cover" />
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent-foreground mb-3">
            <Sparkles className="h-3 w-3" /> Bienvenue
          </div>
          <h2 className="text-2xl font-bold tracking-tight">
            Bienvenue sur <span className="text-gradient">DAKAR'CONNECT</span>
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            La solution intelligente qui vous connecte à Dakar. Découvrez les services, naviguez la
            ville et accédez à l'information en temps réel.
          </p>
          <button
            onClick={close}
            className="mt-6 w-full inline-flex items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition-smooth"
          >
            Découvrir la solution
          </button>
        </div>
      </div>
    </div>
  );
}
