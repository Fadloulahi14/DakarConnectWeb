import { createFileRoute, Link } from "@tanstack/react-router";
import { QrCode, Smartphone, Compass, CheckCircle2, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "Comment ça marche — DAKAR'CONNECT" },
      { name: "description", content: "DAKAR'CONNECT en 4 étapes simples : scannez, accédez, explorez, profitez." },
      { property: "og:title", content: "Comment fonctionne DAKAR'CONNECT" },
      { property: "og:description", content: "4 étapes simples pour profiter de DAKAR'CONNECT." },
    ],
  }),
  component: HowPage,
});

const STEPS = [
  { icon: QrCode, title: "Scannez le QR code", desc: "Trouvez un QR DAKAR'CONNECT en ville ou sur votre bracelet." },
  { icon: Smartphone, title: "Accédez à la plateforme", desc: "Aucune installation requise — tout fonctionne dans votre navigateur." },
  { icon: Compass, title: "Explorez les services", desc: "Naviguez, trouvez et utilisez les services autour de vous." },
  { icon: CheckCircle2, title: "Profitez de Dakar", desc: "Plus simple, plus rapide, plus connecté." },
];

function HowPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Comment ça marche</p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-bold">4 étapes pour vous lancer</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            DAKAR'CONNECT a été pensé pour être accessible à tous. Suivez le guide.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-border gradient-card p-6 shadow-soft">
              <div className="absolute -top-4 left-6 inline-flex h-8 px-3 items-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                Étape {i + 1}
              </div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-accent-foreground mt-3 mb-4">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl gradient-hero p-10 text-primary-foreground text-center shadow-elegant">
          <h2 className="text-3xl font-bold">Prêt à essayer ?</h2>
          <p className="mt-3 text-white/85">Contactez-nous pour rejoindre l'aventure DAKAR'CONNECT.</p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-glow hover:scale-105 transition-smooth"
          >
            Nous contacter <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
