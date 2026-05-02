import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Zap, MapPin, Bell, HandHeart, Compass, Watch } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import logo from "@/assets/dakar-connect-logo.jpeg";
import bracelet from "@/assets/dakar-connect-bracelet.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DAKAR'CONNECT — La solution intelligente qui connecte Dakar" },
      {
        name: "description",
        content:
          "DAKAR'CONNECT : navigation intelligente, services locaux, information en temps réel et bracelets connectés sans écran. Découvrez la ville autrement.",
      },
      { property: "og:title", content: "DAKAR'CONNECT — Smart City pour Dakar" },
      { property: "og:description", content: "Découvrez DAKAR'CONNECT : la solution smart city pour Dakar." },
    ],
  }),
  component: HomePage,
});

const FEATURES = [
  { icon: Compass, title: "Navigation intelligente", desc: "Trouvez votre chemin dans Dakar avec des itinéraires optimisés." },
  { icon: MapPin, title: "Services locaux", desc: "Accédez aux commerces, transports et services près de vous." },
  { icon: Bell, title: "Temps réel", desc: "Restez informé : trafic, événements, alertes et opportunités." },
  { icon: HandHeart, title: "Assistance utilisateur", desc: "Une aide accessible 24/7, en français et en wolof." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.82_0.16_85_/_0.25),_transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-primary-foreground animate-fade-up">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs font-medium mb-5 border border-white/20">
              <Sparkles className="h-3 w-3" /> Smart City • Dakar, Sénégal
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Dakar, <span className="text-accent">connecté</span> dans votre poche.
            </h1>
            <p className="mt-5 text-lg text-white/85 max-w-xl">
              DAKAR'CONNECT réunit navigation, services locaux et information en temps réel pour rendre
              la ville plus simple, plus accessible et plus humaine.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/features"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-glow hover:scale-[1.02] transition-smooth"
              >
                Découvrir la solution <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-2 rounded-lg bg-white/10 backdrop-blur border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/20 transition-smooth"
              >
                Comment ça marche
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-white/75">
              <div><div className="text-2xl font-bold text-white">+200</div>Services connectés</div>
              <div className="h-10 w-px bg-white/20" />
              <div><div className="text-2xl font-bold text-white">24/7</div>Assistance</div>
              <div className="h-10 w-px bg-white/20" />
              <div><div className="text-2xl font-bold text-white">3</div>Langues supportées</div>
            </div>
          </div>

          <div className="relative animate-float">
            <div className="absolute inset-0 bg-accent/30 blur-3xl rounded-full" />
            <div className="relative mx-auto w-72 h-72 sm:w-96 sm:h-96 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-elegant flex items-center justify-center p-8">
              <img src={logo} alt="Logo DAKAR'CONNECT" className="w-full h-full object-contain rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* QUICK FEATURES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Aperçu</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Tout ce qu'il faut, au bon moment</h2>
          <p className="mt-3 text-muted-foreground">
            Une seule plateforme pour explorer, accéder et vivre Dakar pleinement.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="group rounded-2xl gradient-card border border-border p-6 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-smooth"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-smooth">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BRACELET SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl overflow-hidden bg-card border border-border shadow-elegant">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-8 lg:p-12">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium">
                <Watch className="h-3 w-3" /> Innovation
              </div>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
                Le bracelet connecté <span className="text-gradient">DAKAR'CONNECT</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Sans écran, sans distraction. Un simple geste suffit pour accéder aux services,
                payer, s'identifier ou demander de l'aide. Conçu pour tous, partout dans Dakar.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Accès sans écran aux services essentiels",
                  "NFC sécurisé : payer, valider, identifier",
                  "Coloris inspirés du drapeau sénégalais",
                  "Étanche et autonome plusieurs jours",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <Zap className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/features"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:opacity-90 transition-smooth"
              >
                En savoir plus <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative h-72 lg:h-full min-h-[20rem] bg-muted">
              <img
                src={bracelet}
                alt="Bracelets connectés DAKAR'CONNECT — sans écran"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative overflow-hidden rounded-3xl gradient-hero p-10 lg:p-16 text-center text-primary-foreground shadow-elegant">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_oklch(0.82_0.16_85_/_0.25),_transparent_60%)]" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold">Prêt à connecter Dakar ?</h2>
            <p className="mt-3 text-white/85 max-w-xl mx-auto">
              Rejoignez la communauté DAKAR'CONNECT et redécouvrez votre ville.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-glow hover:scale-105 transition-smooth"
            >
              Commencer maintenant <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
