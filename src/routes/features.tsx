import { createFileRoute } from "@tanstack/react-router";
import { Compass, MapPin, Bell, Map, HandHeart, Watch, Clock, Accessibility, Sparkles, Smile } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import bracelet from "@/assets/dakar-connect-bracelet.jpeg";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Fonctionnalités — DAKAR'CONNECT" },
      { name: "description", content: "Navigation intelligente, services locaux, carte interactive, bracelets connectés et plus encore." },
      { property: "og:title", content: "Fonctionnalités DAKAR'CONNECT" },
      { property: "og:description", content: "Découvrez toutes les fonctionnalités de DAKAR'CONNECT." },
    ],
  }),
  component: FeaturesPage,
});

const FEATURES = [
  { icon: Compass, title: "Navigation intelligente", desc: "Itinéraires optimisés en transport, à pied ou en taxi, avec mise à jour en temps réel." },
  { icon: MapPin, title: "Accès aux services locaux", desc: "Restaurants, pharmacies, administrations, marchés — tout autour de vous." },
  { icon: Bell, title: "Information en temps réel", desc: "Trafic, événements, météo et alertes : restez toujours au courant." },
  { icon: Map, title: "Carte interactive", desc: "Une carte visuelle, claire et localisée, conçue spécialement pour Dakar." },
  { icon: HandHeart, title: "Assistance utilisateur", desc: "Aide humaine et chatbot IA, en français et en wolof, 24/7." },
  { icon: Watch, title: "Bracelet connecté", desc: "Accès sans écran aux services essentiels grâce au NFC sécurisé." },
];

const BENEFITS = [
  { icon: Clock, title: "Gain de temps" },
  { icon: Accessibility, title: "Accessibilité" },
  { icon: Sparkles, title: "Innovation" },
  { icon: Smile, title: "Simplicité d'usage" },
];

function FeaturesPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Fonctionnalités</p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-bold">Une plateforme, mille usages</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            DAKAR'CONNECT regroupe les outils essentiels pour vivre Dakar pleinement.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-border gradient-card p-6 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-smooth"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-smooth">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bracelet showcase */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-3xl overflow-hidden border border-border bg-card shadow-elegant grid lg:grid-cols-2">
          <div className="relative h-72 lg:h-auto min-h-[20rem] bg-muted">
            <img src={bracelet} alt="Bracelets connectés DAKAR'CONNECT" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="p-8 lg:p-12">
            <h2 className="text-3xl font-bold">Le bracelet connecté, sans écran</h2>
            <p className="mt-4 text-muted-foreground">
              Disponible en plusieurs coloris inspirés du drapeau sénégalais. Discret, étanche
              et autonome, il vous permet d'accéder aux services DAKAR'CONNECT d'un simple geste.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-lg bg-muted p-3"><div className="font-semibold">NFC sécurisé</div><div className="text-muted-foreground">Payez et identifiez-vous</div></div>
              <div className="rounded-lg bg-muted p-3"><div className="font-semibold">Sans écran</div><div className="text-muted-foreground">Plus de simplicité</div></div>
              <div className="rounded-lg bg-muted p-3"><div className="font-semibold">Étanche</div><div className="text-muted-foreground">Résistant au quotidien</div></div>
              <div className="rounded-lg bg-muted p-3"><div className="font-semibold">Multi-coloris</div><div className="text-muted-foreground">Vert, jaune, rouge, noir</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-3xl font-bold text-center">Les bénéfices</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((b) => (
            <div key={b.title} className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft">
              <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl gradient-accent text-white mb-3">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold">{b.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
