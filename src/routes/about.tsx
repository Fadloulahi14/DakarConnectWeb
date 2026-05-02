import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Lightbulb } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "À propos — DAKAR'CONNECT" },
      { name: "description", content: "DAKAR'CONNECT : notre mission, notre vision et le problème que nous résolvons pour Dakar." },
      { property: "og:title", content: "À propos de DAKAR'CONNECT" },
      { property: "og:description", content: "Notre mission, notre vision et l'impact de DAKAR'CONNECT." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">À propos</p>
        <h1 className="mt-2 text-4xl sm:text-5xl font-bold">Connecter Dakar, simplement.</h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-3xl">
          DAKAR'CONNECT est une plateforme intelligente née à Dakar pour répondre à un besoin
          concret : rendre la ville plus lisible, plus accessible et plus humaine pour ses habitants
          comme pour ses visiteurs.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { icon: Lightbulb, title: "Le problème", desc: "L'information à Dakar est dispersée : transports, services, événements. Trouver le bon service au bon moment reste compliqué." },
            { icon: Target, title: "Notre mission", desc: "Réunir l'essentiel sur une seule plateforme et la rendre accessible à tous, même sans smartphone." },
            { icon: Eye, title: "Notre vision", desc: "Une ville inclusive et intelligente où chaque habitant trouve facilement ce dont il a besoin." },
          ].map((b) => (
            <div key={b.title} className="rounded-2xl border border-border gradient-card p-6 shadow-soft">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl gradient-hero p-10 text-primary-foreground shadow-elegant">
          <h2 className="text-2xl sm:text-3xl font-bold">Une solution née ici, pour ici.</h2>
          <p className="mt-3 text-white/85 max-w-2xl">
            Pensée par et pour les Dakarois, DAKAR'CONNECT s'inspire des couleurs du Sénégal —
            vert, jaune, rouge — et de l'énergie d'une capitale en mouvement.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
