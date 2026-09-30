import { useMemo, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
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
}

const cases: CaseItem[] = [
  {
    id: "c1",
    category: "Oral Cancer",
    title: "Functional Tongue Reconstruction (K-technique)",
    summary:
      "Composite resection of T2 SCC tongue with primary closure using the K-technique, preserving articulation and deglutition.",
    image: caseOncology,
  },
  {
    id: "c2",
    category: "Facial Trauma",
    title: "Pan-facial Fracture Reconstruction",
    summary:
      "Three-dimensional reconstruction of pan-facial fractures via titanium mesh and rigid internal fixation.",
    image: caseTrauma,
  },
  {
    id: "c3",
    category: "TMJ & Pathology",
    title: "Arthroscopic Joint Lysis & Lavage",
    summary:
      "Minimally invasive arthroscopy for internal derangement of the TMJ with restored translation.",
    image: caseTmj,
  },
  {
    id: "c4",
    category: "TMJ & Pathology",
    title: "Parotid Tumor — Facial Nerve Preservation",
    summary:
      "Superficial parotidectomy for pleomorphic adenoma with complete preservation of the facial nerve.",
    image: caseOncology,
  },
  {
    id: "c5",
    category: "Facial Trauma",
    title: "Orbital Floor Reconstruction",
    summary:
      "Transconjunctival approach with patient-specific implant for orbital blowout fracture.",
    image: caseTrauma,
  },
  {
    id: "c6",
    category: "Oral Cancer",
    title: "Segmental Mandibulectomy & Plate Reconstruction",
    summary: "Segmental resection with reconstruction plate and locoregional flap coverage.",
    image: caseTmj,
  },
];

const filters: Exclude<Category, "All">[] = ["Oral Cancer", "Facial Trauma", "TMJ & Pathology"];

function CaseCard({ item }: { item: CaseItem }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition-all hover:shadow-elevated">
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
            <Eye size={22} className="text-accent" />
            <p className="text-xs uppercase tracking-[0.2em] text-background/80">
              Click to view image
            </p>
            <span className="mt-2 inline-flex items-center gap-2 rounded-full border border-background/40 px-4 py-2 text-xs font-medium">
              <Eye size={14} /> Unblur
            </span>
          </button>
        )}
        {revealed && (
          <button
            onClick={() => setRevealed(false)}
            className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-foreground/80 px-3 py-1.5 text-xs text-background backdrop-blur transition-colors hover:bg-foreground"
          >
            <EyeOff size={12} /> Blur
          </button>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 lg:p-6">
        <p className="eyebrow text-[10px]">{item.category}</p>
        <h3 className="mt-2 text-base font-semibold text-foreground">{item.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
      </div>
    </article>
  );
}

export function Portfolio() {
  const [active, setActive] = useState<Exclude<Category, "All">>("Oral Cancer");
  const filtered = useMemo(() => cases.filter((c) => c.category === active), [active]);

  return (
    <section id="portfolio" className="bg-surface-2 py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3 lg:mb-4">Surgical Portfolio</p>
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl lg:text-5xl">
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

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {filtered.map((c) => (
            <CaseCard key={c.id} item={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
