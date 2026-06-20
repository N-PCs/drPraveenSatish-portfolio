import { useMemo, useState } from "react";
import { AlertTriangle, Eye, EyeOff } from "lucide-react";
import caseOncology from "@/assets/case-oncology.jpg";
import caseTrauma from "@/assets/case-trauma.jpg";
import caseTmj from "@/assets/case-tmj.jpg";

type Category = "All" | "Oral Cancer" | "Facial Trauma" | "TMJ & Pathology";

interface CaseItem {
  id: string;
  category: Exclude<Category, "All">;
  title: string;
  summary: string;
  image: string;
  sensitive: boolean;
  span: "tall" | "wide" | "square";
}

const cases: CaseItem[] = [
  {
    id: "c1",
    category: "Oral Cancer",
    title: "Functional Tongue Reconstruction (K-technique)",
    summary:
      "Composite resection of T2 SCC tongue with primary closure using the K-technique, preserving articulation and deglutition.",
    image: caseOncology,
    sensitive: true,
    span: "tall",
  },
  {
    id: "c2",
    category: "Facial Trauma",
    title: "Pan-facial Fracture Reconstruction",
    summary:
      "Three-dimensional reconstruction of pan-facial fractures via titanium mesh and rigid internal fixation.",
    image: caseTrauma,
    sensitive: false,
    span: "square",
  },
  {
    id: "c3",
    category: "TMJ & Pathology",
    title: "Arthroscopic Joint Lysis & Lavage",
    summary:
      "Minimally invasive arthroscopy for internal derangement of the TMJ with restored translation.",
    image: caseTmj,
    sensitive: false,
    span: "wide",
  },
  {
    id: "c4",
    category: "TMJ & Pathology",
    title: "Parotid Tumor — Facial Nerve Preservation",
    summary:
      "Superficial parotidectomy for pleomorphic adenoma with complete preservation of the facial nerve.",
    image: caseOncology,
    sensitive: true,
    span: "square",
  },
  {
    id: "c5",
    category: "Facial Trauma",
    title: "Orbital Floor Reconstruction",
    summary:
      "Transconjunctival approach with patient-specific implant for orbital blowout fracture.",
    image: caseTrauma,
    sensitive: false,
    span: "tall",
  },
  {
    id: "c6",
    category: "Oral Cancer",
    title: "Segmental Mandibulectomy & Plate Reconstruction",
    summary:
      "Segmental resection with reconstruction plate and locoregional flap coverage.",
    image: caseTmj,
    sensitive: true,
    span: "wide",
  },
];

const filters: Exclude<Category, "All">[] = ["Oral Cancer", "Facial Trauma", "TMJ & Pathology"];

function CaseCard({ item }: { item: CaseItem }) {
  const [revealed, setRevealed] = useState(!item.sensitive);
  const spanClass =
    item.span === "tall"
      ? "row-span-2"
      : item.span === "wide"
        ? "md:col-span-2"
        : "";

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition-all hover:shadow-elevated ${spanClass}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-foreground">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className={`h-full w-full object-cover transition-all duration-500 ${
            revealed ? "" : "scale-105 blur-2xl"
          } group-hover:scale-[1.03]`}
        />
        {!revealed && (
          <button
            onClick={() => setRevealed(true)}
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-foreground/60 p-6 text-center text-background backdrop-blur-sm transition-colors hover:bg-foreground/70"
          >
            <AlertTriangle size={22} className="text-accent" />
            <p className="text-xs uppercase tracking-[0.2em] text-background/80">
              Medical Content Warning
            </p>
            <p className="max-w-[26ch] text-sm">
              Contains intra-operative imagery intended for clinicians.
            </p>
            <span className="mt-2 inline-flex items-center gap-2 rounded-full border border-background/40 px-4 py-2 text-xs font-medium">
              <Eye size={14} /> Click to unblur
            </span>
          </button>
        )}
        {revealed && item.sensitive && (
          <button
            onClick={() => setRevealed(false)}
            className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-foreground/80 px-3 py-1.5 text-xs text-background backdrop-blur transition-colors hover:bg-foreground"
          >
            <EyeOff size={12} /> Hide
          </button>
        )}
      </div>
      <div className="p-6">
        <p className="eyebrow text-[10px]">{item.category}</p>
        <h3 className="mt-2 text-base font-semibold text-foreground">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
      </div>
    </article>
  );
}

export function Portfolio() {
  const [active, setActive] = useState<Exclude<Category, "All">>("Oral Cancer");
  const filtered = useMemo(
    () => cases.filter((c) => c.category === active),
    [active]
  );

  return (
    <section id="portfolio" className="bg-surface-2 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">Surgical Portfolio</p>
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
              Clinical evidence, presented with care.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all ${
                  active === f
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-surface text-muted-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid auto-rows-[minmax(0,1fr)] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <CaseCard key={c.id} item={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
