import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo-leboutte.png";
import heroBg from "@/assets/hero-bg.jpg";
import {
  Globe,
  Wifi,
  GraduationCap,
  Monitor,
  ServerCog,
  Globe2,
  MapPin,
  Phone,
  Clock,
  Mail,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  {
    icon: ServerCog,
    title: "Consultant en informatique",
    desc: "Conseil, audit et accompagnement personnalisé pour vos projets numériques.",
  },
  {
    icon: Globe,
    title: "Création & mise à jour de sites",
    desc: "Sites vitrines modernes, performants et adaptés à votre activité.",
  },
  {
    icon: Globe2,
    title: "Réservation de noms de domaine",
    desc: "Choix, achat et gestion technique de votre identité en ligne.",
  },
  {
    icon: Wifi,
    title: "Configuration réseau Wifi",
    desc: "Déploiement, sécurisation et optimisation de vos réseaux sans fil.",
  },
  {
    icon: GraduationCap,
    title: "Configuration e-learning",
    desc: "Mise en place de plateformes de formation en ligne sur mesure.",
  },
  {
    icon: Monitor,
    title: "Écrans d'affichage d'information",
    desc: "Solutions de digital signage pour entreprises et institutions.",
  },
];

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[color:var(--surface-darker)]/95 border-b border-black/30">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Leboutte Informatique" className="h-11 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-parchment/80">
            <a href="#services" className="hover:text-[color:var(--gold)] transition">Services</a>
            <a href="#apropos" className="hover:text-[color:var(--gold)] transition">À propos</a>
            <a href="#contact" className="hover:text-[color:var(--gold)] transition">Contact</a>
          </nav>
          <a href="#contact" className="btn-gold text-sm">
            <Phone className="h-4 w-4" /> Rendez-vous
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative isolate overflow-hidden"
        style={{
          background: `linear-gradient(to bottom, rgba(39,48,52,0.78) 0%, rgba(39,48,52,0.92) 100%), url(${heroBg}) center/cover no-repeat, #273034`,
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-28 md:py-40 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-8 text-parchment">
            <span className="inline-block text-xs tracking-[0.25em] uppercase text-[color:var(--gold)] mb-5">
              Webmaster · Réseau · E-learning
            </span>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-parchment">
              Leboutte Informatique
            </h1>
            <p className="mt-6 text-lg md:text-xl text-parchment/80 max-w-2xl leading-relaxed">
              Didier Leboutte — votre consultant informatique à Marche-en-Famenne.
              Solutions sur mesure pour indépendants, PME.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#services" className="btn-gold">
                Découvrir les services <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:+32477385200"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-parchment/30 text-parchment hover:bg-parchment/10 transition"
              >
                <Phone className="h-4 w-4" /> 0477 38 52 00
              </a>
            </div>
          </div>
          <div className="md:col-span-4 hidden md:block">
            <div className="panel-parchment p-6 shadow-[var(--shadow-elevated)]">
              <div className="text-xs uppercase tracking-widest text-[color:var(--surface-darker)]/70 mb-3">
                Sur rendez-vous
              </div>
              <div className="flex items-start gap-3 text-sm text-foreground">
                <Clock className="h-4 w-4 mt-0.5 text-[color:var(--surface-darker)]" />
                <div>
                  <div className="font-semibold whitespace-pre-line">Ouvert de 9:00 à 17:00{"\n"}Uniquement sur rendez-vous</div>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm text-foreground mt-4">
                <MapPin className="h-4 w-4 mt-0.5 text-[color:var(--surface-darker)]" />
                <div>
                  Rue Jamodenne 44<br />
                  6900 Marche-en-Famenne
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm text-foreground mt-4">
                <Phone className="h-4 w-4 mt-0.5 text-[color:var(--surface-darker)]" />
                <a href="tel:+32477385200" className="hover:underline">0477 38 52 00</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="inline-block text-xs tracking-[0.25em] uppercase text-[color:var(--surface-darker)]/70 mb-4">
              Prestations
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              Des compétences au service de vos projets
            </h2>
            <p className="mt-5 text-foreground/70 text-lg">
              De la stratégie à la mise en œuvre, un interlocuteur unique pour
              tous vos besoins informatiques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <article
                key={title}
                className="group panel-parchment p-7 hover:shadow-[var(--shadow-elevated)] transition-shadow"
              >
                <div className="h-12 w-12 rounded-md flex items-center justify-center mb-5 bg-[color:var(--surface-darker)] text-[color:var(--gold)] group-hover:scale-105 transition-transform">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* À propos */}
      <section
        id="apropos"
        className="py-24 text-parchment"
        style={{ background: "var(--gradient-dark)" }}
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <span className="inline-block text-xs tracking-[0.25em] uppercase text-[color:var(--gold)] mb-4">
              À propos
            </span>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Une expertise locale, des solutions sur mesure
            </h2>
            <p className="text-parchment/80 text-lg leading-relaxed mb-4">
              Depuis Marche-en-Famenne, Didier Leboutte accompagne entreprises,
              indépendants et institutions dans leurs projets numériques :
              création de sites internet, configuration de réseaux Wifi, mise
              en place de plateformes e-learning et écrans d'affichage.
            </p>
            <p className="text-parchment/70 leading-relaxed">
              L'écoute, la disponibilité et la qualité du conseil sont au cœur
              de chaque mission, pour des solutions durables et parfaitement
              adaptées à votre activité.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="panel-parchment p-8">
              <div className="text-xs uppercase tracking-widest text-foreground/60 mb-4">
                Coordonnées
              </div>
              <ul className="space-y-4 text-foreground">
                <li className="flex gap-3">
                  <MapPin className="h-5 w-5 mt-0.5 text-[color:var(--surface-darker)]" />
                  <span>Rue Jamodenne 44<br />6900 Marche-en-Famenne</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 mt-0.5 text-[color:var(--surface-darker)]" />
                  <a href="tel:+32477385200" className="hover:underline">0477 38 52 00</a>
                </li>
                <li className="flex gap-3">
                  <Globe className="h-5 w-5 mt-0.5 text-[color:var(--surface-darker)]" />
                  <a href="https://leboutte.pro" className="hover:underline">leboutte.pro</a>
                </li>
                <li className="flex gap-3">
                  <Clock className="h-5 w-5 mt-0.5 text-[color:var(--surface-darker)]" />
                  <span>Ouvert de 9:00 à 17:00<br /><em className="text-foreground/60 not-italic text-sm">Uniquement sur rendez-vous</em></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-xs tracking-[0.25em] uppercase text-[color:var(--surface-darker)]/70 mb-4">
            Prendre rendez-vous
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-5">
            Parlons de votre projet
          </h2>
          <p className="text-foreground/70 text-lg mb-10 max-w-2xl mx-auto">
            Contactez Didier Leboutte par téléphone pour fixer un rendez-vous et
            discuter de vos besoins.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="tel:+32477385200" className="btn-gold">
              <Phone className="h-4 w-4" /> 0477 38 52 00
            </a>
            <a
              href="https://www.google.com/maps?q=Rue+Jamodenne+44,+6900+Marche-en-Famenne"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-foreground/20 text-foreground hover:bg-foreground/5 transition"
            >
              <MapPin className="h-4 w-4" /> {"\n"}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[color:var(--surface-darker)] text-parchment/70 py-10 mt-auto">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Leboutte Informatique" className="h-8 w-auto" />
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+32477385200" className="hover:text-[color:var(--gold)] transition flex items-center gap-2">
              <Phone className="h-4 w-4" /> 0477 38 52 00
            </a>
            <a href="https://leboutte.pro" className="hover:text-[color:var(--gold)] transition flex items-center gap-2">
              <Mail className="h-4 w-4" /> leboutte.pro
            </a>
          </div>
          <div className="text-xs text-parchment/50">
            © {new Date().getFullYear()} Leboutte Informatique
          </div>
        </div>
      </footer>
    </div>
  );
}
