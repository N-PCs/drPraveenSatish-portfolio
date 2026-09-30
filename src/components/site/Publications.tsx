import { useMemo, useState } from "react";
import { ExternalLink, Search } from "lucide-react";

type Tab = "Peer-Reviewed Journals" | "Invited International Lectures";

interface Entry {
  tab: Tab;
  year: string;
  title: string;
  venue: string;
  meta: string;
}

const entries: Entry[] = [
  {
    tab: "Peer-Reviewed Journals",
    year: "2021",
    title:
      "Functional reconstruction of lateral oral tongue defects using K’s technique: Technical Note.",
    venue: "Advances in Oral and Maxillofacial Surgery",
    meta: "Kumar Praveen et al.",
  },
  {
    tab: "Peer-Reviewed Journals",
    year: "2020",
    title: "Hemangiolymphangioma of buccal cheek - a rare case report with review of literature.",
    venue: "Journal of Dental Health, Oral Disorders & Therapy",
    meta: "Khaunte Divyachampa et al.",
  },
  {
    tab: "Peer-Reviewed Journals",
    year: "2020",
    title:
      "A Randomized Control Trial to Assess Intraoperative and Postoperative Outcomes of Colorado Microdissection Needle Versus Conventional Surgical Knife in Neck Dissection.",
    venue: "Journal of Maxillofacial and Oral Surgery",
    meta: "Kumar Praveen et al.",
  },
  {
    tab: "Peer-Reviewed Journals",
    year: "2020",
    title: "Jugular Lymphadenitis as a Precursor to Burkholderia Pseudomallei Sepsis.",
    venue: "Journal of Maxillofacial and Oral Surgery",
    meta: "Rodrigues Edlyn et al.",
  },
  {
    tab: "Peer-Reviewed Journals",
    year: "2018",
    title:
      "Fractures of Maxillary Tuberosity during Extraction of Maxilloary Molar - A Case Report and Review.",
    venue: "Medico Research Chronicles",
    meta: "Naik Mohan et al.",
  },
  {
    tab: "Peer-Reviewed Journals",
    year: "2018",
    title:
      "Extra nodal natural killer lymphoma mimicking canine Fossa infection–a clinical report.",
    venue: "International Clinical Pathology Journal",
    meta: "Kumar Praveen et al.",
  },
  {
    tab: "Peer-Reviewed Journals",
    year: "2017",
    title:
      "Tracheal Tube Blockage by Fractured Middle Turbinate During Nasal Intubation: A Rare Airway Cmplication.",
    venue: "Journal of Maxillofacial and Oral Surgery",
    meta: "Kumar Praveen et al.",
  },
  {
    tab: "Peer-Reviewed Journals",
    year: "2015",
    title: "Foreign Body in the Orbital Floor: A Case Report.",
    venue: "Journal of Maxillofacial and Oral Surgery",
    meta: "Kumar G. et al.",
  },
  {
    tab: "Peer-Reviewed Journals",
    year: "2014",
    title:
      "Eruption Status Of Third Molar And Its Possible Influence On The Location Of Mandibular Angle Fracture",
    venue: "J.Maxillofac.Oral Surg.",
    meta: "Praveen Satish Kumar et al.",
  },
  {
    tab: "Invited International Lectures",
    year: "2025",
    title:
      "Feasibility and functional outcome of Transpositional flap for reconstruction of medium sized ablative tongue defects",
    venue: "ICOMS",
    meta: "Singapore",
  },
  {
    tab: "Invited International Lectures",
    year: "2025",
    title:
      "Correlation between depth of invasion and nodal metastasis in OSCC- Effect on DFS And OS",
    venue: "AFCOMS",
    meta: "Adis Ababa, Ethiopia",
  },
  {
    tab: "Invited International Lectures",
    year: "2024",
    title: "Moderator – Reconstruction of Head and Neck Ablative Defects",
    venue: "ACOMS",
    meta: "Chennai, India",
  },
  {
    tab: "Invited International Lectures",
    year: "2023",
    title: "Panellist – Maxillofacial Trauma",
    venue: "MIDCOMS",
    meta: "Loni, Maharashtra",
  },
];

const tabs: Tab[] = ["Peer-Reviewed Journals", "Invited International Lectures"];

export function Publications() {
  const [tab, setTab] = useState<Tab>("Peer-Reviewed Journals");
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    return entries
      .filter((e) => e.tab === tab)
      .filter((e) =>
        q.trim() ? (e.title + e.venue + e.year).toLowerCase().includes(q.toLowerCase()) : true,
      );
  }, [tab, q]);

  return (
    <section id="publications" className="bg-surface-2 py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3 lg:mb-4">Research & Publications</p>
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl lg:text-5xl">
            Scientific authority, openly indexed.
          </h2>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:mt-12">
          <div className="inline-flex rounded-full border border-border bg-surface p-1">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-colors ${
                  tab === t
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-80">
            <Search
              size={16}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search publications..."
              className="w-full rounded-full border border-border bg-surface py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
            />
          </div>
        </div>

        <ul className="mt-10 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
          {list.map((e, i) => (
            <li
              key={i}
              className="group grid grid-cols-12 items-start gap-4 p-6 transition-colors hover:bg-surface-2 sm:p-7"
            >
              <div className="col-span-2 sm:col-span-1">
                <p className="text-2xl font-semibold tracking-tight text-foreground">{e.year}</p>
              </div>
              <span></span>
              <div className="col-span-9 sm:col-span-10">
                <h3 className="text-base font-medium text-foreground sm:text-lg">{e.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  <span className="text-foreground/80">{e.venue}</span>
                  <span className="mx-2 text-border-strong">·</span>
                  {e.meta}
                </p>
                <div className="col-span-1 flex justify-end">
                  <a
                    href="#"
                    aria-label="View paper"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-accent hover:text-accent group-hover:bg-surface"
                  >
                    <ExternalLink size={14} color="#040cffa0" />
                  </a>
                </div>
              </div>
            </li>
          ))}
          {list.length === 0 && (
            <li className="p-10 text-center text-sm text-muted-foreground">
              No entries match your search.
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}
