import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — DAKAR'CONNECT" },
      { name: "description", content: "Contactez l'équipe DAKAR'CONNECT : email, formulaire et réseaux sociaux." },
      { property: "og:title", content: "Contactez DAKAR'CONNECT" },
      { property: "og:description", content: "Une question, un partenariat ? Écrivez-nous." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-bold">Parlons de votre projet</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Une question, un partenariat ou simplement envie d'en savoir plus ? Nous vous répondons rapidement.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Mail, title: "Email", value: "contact@dakarconnect.sn" },
              { icon: Phone, title: "Téléphone", value: "+221 33 000 00 00" },
              { icon: MapPin, title: "Adresse", value: "Dakar, Sénégal" },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-border bg-card p-5 shadow-soft flex items-start gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{c.title}</div>
                  <div className="font-semibold">{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          <form
            className="lg:col-span-3 rounded-2xl border border-border bg-card p-6 lg:p-8 shadow-soft"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            {sent ? (
              <div className="text-center py-10">
                <CheckCircle2 className="mx-auto h-14 w-14 text-primary" />
                <h2 className="mt-4 text-2xl font-bold">Message envoyé !</h2>
                <p className="mt-2 text-muted-foreground">Merci, nous vous répondons rapidement.</p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Nom</label>
                    <input required className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input required type="email" className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="text-sm font-medium">Sujet</label>
                  <input className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div className="mt-4">
                  <label className="text-sm font-medium">Message</label>
                  <textarea required rows={5} className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
                </div>
                <button
                  type="submit"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition-smooth"
                >
                  Envoyer le message <Send className="h-4 w-4" />
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
