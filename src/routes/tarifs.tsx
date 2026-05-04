import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, X, ArrowLeft, Phone } from "lucide-react";
import logo from "@/assets/logo-leboutte.png";

export const Route = createFileRoute("/tarifs")({
  component: TarifsPage,
  head: () => ({
    meta: [
      { title: "Tarifs — Leboutte Informatique" },
      {
        name: "description",
        content:
          "Tarifs indicatifs Leboutte Informatique : sites vitrines statiques, dynamiques BASIC et PRO, e-commerce. Devis sur demande.",
      },
      { property: "og:title", content: "Tarifs — Leboutte Informatique" },
      {
        property: "og:description",
        content: "Tarifs indicatifs pour sites vitrines et e-commerce. Devis sur demande.",
      },
    ],
  }),
});

type Cell = boolean | string;

const formulas = [
  "Site vitrine statique",
  "Site vitrine dynamique BASIC",
  "Site vitrine dynamique PRO",
  "Site e-commerce",
] as const;

const rows: { label: string; values: [Cell, Cell, Cell, Cell] }[] = [
  { label: "Un nom de domaine (ex. : monsite.be)", values: [true, true, true, true] },
  { label: "Une adresse email personnalisée (ex. : info@monsite.be)", values: [true, true, true, true] },
  { label: "Charte graphique personnalisée", values: [true, true, true, true] },
  { label: "Site responsive (smartphone, tablette)", values: [true, true, true, true] },
  { label: "Logo personnalisé", values: [false, false, true, true] },
  { label: "Slide photo d'accueil", values: [true, true, true, true] },
  { label: "Champ de recherche sur le site", values: [false, true, true, true] },
  { label: "Page d'identification (votre adresse)", values: [true, true, true, true] },
  { label: "Page de présentation avec photos (fournies)", values: [true, true, true, true] },
  { label: "Plan d'accès avec calcul d'itinéraire", values: [false, true, true, true] },
  { label: "Pages du site modifiables", values: [false, true, true, true] },
  { label: "Plan du site", values: [false, true, true, true] },
  { label: "Formulaire de contact", values: [false, true, true, true] },
  { label: "Lettre(s) d'information", values: [false, false, true, true] },
  { label: "Gestion commerciale", values: [false, false, false, true] },
  { label: "Statistiques de visite du site", values: [true, true, true, true] },
];

const prices: [string, string, string, string] = [
  "150,00 € HTVA",
  "500,00 € HTVA",
  "1000,00 € HTVA",
  "Sur devis",
];

function CellRender({ value }: { value: Cell }) {
  if (value === true)
    return <Check className="h-5 w-5 mx-auto text-[color:var(--surface-darker)]" aria-label="oui" />;
  if (value === false)
    return <X className="h-5 w-5 mx-auto text-foreground/30" aria-label="non" />;
  return <span className="text-sm">{value}</span>;
}

function TarifsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[color:var(--surface-darker)]/95 border-b border-black/30">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Leboutte Informatique" className="h-11 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-parchment/80">
            <Link to="/" className="hover:text-[color:var(--gold)] transition">Accueil</Link>
            <Link to="/tarifs" className="text-[color:var(--gold)]">Tarifs</Link>
          </nav>
          <a href="tel:+32477385200" className="btn-gold text-sm">
            <Phone className="h-4 w-4" /> 0477 38 52 00
          </a>
        </div>
      </header>

      <section
        className="py-20 text-parchment"
        style={{ background: "var(--gradient-dark)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <span className="inline-block text-xs tracking-[0.25em] uppercase text-[color:var(--gold)] mb-4">
            Tarifs
          </span>
          <h1 className="font-display text-4xl md:text-6xl mb-5">
            Nos formules de sites web
          </h1>
          <p className="text-parchment/80 text-lg max-w-2xl">
            Voici notre tarif à titre indicatif. Chaque projet est unique :
            n'hésitez pas à demander un devis personnalisé.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background flex-1">
        <div className="max-w-6xl mx-auto px-6">
          {/* Desktop table */}
          <div className="hidden md:block panel-parchment overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[color:var(--surface-darker)] text-parchment">
                    <th className="text-left p-4 font-medium w-[34%]">Caractéristiques</th>
                    {formulas.map((f) => (
                      <th key={f} className="p-4 font-display text-base text-[color:var(--gold)]">
                        {f}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr
                      key={r.label}
                      className={i % 2 === 0 ? "bg-transparent" : "bg-black/[0.03]"}
                    >
                      <td className="p-4 text-foreground/80">{r.label}</td>
                      {r.values.map((v, idx) => (
                        <td key={idx} className="p-4 text-center">
                          <CellRender value={v} />
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr className="bg-[color:var(--surface-darker)]/10 border-t border-foreground/20">
                    <td className="p-4 font-medium text-foreground">Prix de départ</td>
                    {prices.map((p, idx) => (
                      <td
                        key={idx}
                        className="p-4 text-center font-display text-lg text-foreground"
                      >
                        {p}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4"></td>
                    {formulas.map((f) => (
                      <td key={f} className="p-4 text-center">
                        <a href="tel:+32477385200" className="btn-gold text-sm">
                          Devis
                        </a>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-6">
            {formulas.map((f, fi) => (
              <article key={f} className="panel-parchment p-6">
                <h2 className="font-display text-xl text-foreground mb-1">{f}</h2>
                <div className="font-display text-2xl text-[color:var(--surface-darker)] mb-4">
                  {prices[fi]}
                </div>
                <ul className="space-y-2 text-sm">
                  {rows.map((r) => (
                    <li key={r.label} className="flex gap-3 items-start">
                      {r.values[fi] === true ? (
                        <Check className="h-4 w-4 mt-0.5 text-[color:var(--surface-darker)] shrink-0" />
                      ) : (
                        <X className="h-4 w-4 mt-0.5 text-foreground/30 shrink-0" />
                      )}
                      <span className={r.values[fi] ? "text-foreground/80" : "text-foreground/40 line-through"}>
                        {r.label}
                      </span>
                    </li>
                  ))}
                </ul>
                <a href="tel:+32477385200" className="btn-gold text-sm mt-5 inline-flex">
                  Demander un devis
                </a>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition"
            >
              <ArrowLeft className="h-4 w-4" /> Retour à l'accueil
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-[color:var(--surface-darker)] text-parchment/70 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-xs text-parchment/50">
          © {new Date().getFullYear()} Leboutte Informatique
        </div>
      </footer>
    </div>
  );
}
