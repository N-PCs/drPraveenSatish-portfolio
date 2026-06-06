import {
  Microscope,
  Scissors,
  ShieldPlus,
  Activity,
  Bone,
  Sparkles,
} from "lucide-react";

const items = [
  {
    icon: Microscope,
    title: "Oral Oncology & Ablative Surgery",
    desc: "Head & neck cancer resections with oncologic precision and functional preservation.",
  },
  {
    icon: Scissors,
    title: "Advanced Reconstructive Surgery",
    desc: "Locoregional flaps and microdissection for complex defect rehabilitation.",
  },
  {
    icon: ShieldPlus,
    title: "Maxillofacial Trauma Surgery",
    desc: "Pan-facial trauma management with rigid internal fixation protocols.",
  },
  {
    icon: Activity,
    title: "TMJ Surgery & Arthroscopy",
    desc: "Lysis, lavage, arthroscopic procedures and total joint replacement.",
  },
  {
    icon: Bone,
    title: "Orthognathic & Structural Jaw Surgery",
    desc: "Corrective skeletal procedures for occlusal and aesthetic balance.",
  },
  {
    icon: Sparkles,
    title: "Advanced Implantology",
    desc: "Implant placement, bone grafting and minor oral surgical procedures.",
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">Core Expertise</p>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
            Six surgical domains, refined over two decades.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            A focused practice across the full spectrum of maxillofacial and oral oncologic
            care — from primary resection to reconstructive rehabilitation.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative bg-surface p-8 transition-colors hover:bg-surface-2"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-soft text-accent transition-all group-hover:bg-accent group-hover:text-accent-foreground">
                <Icon size={22} strokeWidth={1.6} />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              <div className="mt-6 h-px w-12 bg-accent transition-all group-hover:w-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
