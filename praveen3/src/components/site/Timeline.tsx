const leadership = [
  {
    year: "Present",
    title: "Senate Member & Exam Director",
    org: "International Board of Certification — IBCSOMS",
  },
  {
    year: "2023-2024",
    title: "President, Goa State Chapter",
    org: "AOMSI",
  },
  {
    year: "2015-2016",
    title: "President",
    org: "IDA Goa State Branch",
  },
  {
    year: "2014-2019",
    title: "Secretary",
    org: "Goa chapter Of AOMSI",
  },
];

const academic = [
  {
    year: "2024-2025",
    title: "Diploma in Oral Oncology",
    org: "AOCMF",
  },
  {
    year: "2023",
    title: "Diploma of Fellowship",
    org: "FDS RCPS (Glasgow)",
  },
  {
    year: "2015",
    title: "Fellowship in CMF Surgery",
    org: "University Klinik Innsbruck, Austria",
  },
  {
    year: "2007",
    title: "Master of Dental Surgery",
    org: "Rajiv Gandhi University of Health Sciences",
  },
];

function Column({
  label,
  items,
}: {
  label: string;
  items: { year: string; title: string; org: string }[];
}) {
  return (
    <div>
      <p className="eyebrow mb-8">{label}</p>
      <ol className="relative space-y-10 border-l border-border pl-8">
        {items.map((it, i) => (
          <li key={i} className="relative">
            <span className="absolute -left-[33px] top-1.5 flex h-3 w-3 items-center justify-center">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent/30" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {it.year}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-foreground">{it.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{it.org}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Timeline() {
  return (
    <section id="timeline" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">Academic Timeline & Leadership</p>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
            A pedigree built on rigor and global practice.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <Column label="Leadership Roles" items={leadership} />
          <Column label="Academic Timeline" items={academic} />
        </div>
      </div>
    </section>
  );
}
