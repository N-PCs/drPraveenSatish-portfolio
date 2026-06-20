import type { ComponentType } from "react";
import { IBCSOMSLogo, AOMSILogo, IDALogo, AOCMFLogo, FDSRCPsLogo, UIBKLogo, RGUHSLogo } from "./Logos";

const leadership = [
  {
    year: "Present",
    title: "Senate Member & Exam Director",
    org: "International Board of Certification — IBCSOMS",
    logo: IBCSOMSLogo,
  },
  {
    year: "2023-2024",
    title: "President, Goa State Chapter",
    org: "AOMSI",
    logo: AOMSILogo,
  },
  {
    year: "2015-2016",
    title: "President",
    org: "IDA Goa State Branch",
    logo: IDALogo,
  },
  {
    year: "2014-2019",
    title: "Secretary",
    org: "Goa chapter Of AOMSI",
    logo: AOMSILogo,
  },
];

const academic = [
  {
    year: "2024-2025",
    title: "Diploma in Oral Oncology",
    org: "AOCMF",
    logo: AOCMFLogo,
  },
  {
    year: "2023",
    title: "Diploma of Fellowship",
    org: "FDS RCPS (Glasgow)",
    logo: FDSRCPsLogo,
  },
  {
    year: "2015",
    title: "Fellowship in CMF Surgery",
    org: "University Klinik Innsbruck, Austria",
    logo: UIBKLogo,
  },
  {
    year: "2007",
    title: "Master of Dental Surgery",
    org: "Rajiv Gandhi University of Health Sciences",
    logo: RGUHSLogo,
  },
];

function Column({
  label,
  items,
}: {
  label: string;
  items: { year: string; title: string; org: string; logo: ComponentType<{ className?: string }> }[];
}) {
  return (
    <div>
      <p className="eyebrow mb-6 lg:mb-8">{label}</p>
      <ol className="relative space-y-8 border-l border-border pl-6 lg:space-y-10 lg:pl-8">
        {items.map((it, i) => {
          const Logo = it.logo;
          return (
            <li key={i} className="relative">
              <span className="absolute -left-[30px] top-1.5 flex h-3 w-3 items-center justify-center lg:-left-[38px]">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent/30" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <div className="flex items-start gap-3">
                <Logo />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {it.year}
                  </p>
                  <h3 className="mt-1.5 text-base font-semibold text-foreground lg:mt-2 lg:text-lg">{it.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{it.org}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export function Timeline() {
  return (
    <section id="timeline" className="py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3 lg:mb-4">Academic Timeline & Leadership</p>
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl lg:text-5xl">
            A pedigree built on rigor and global practice.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-24">
          <Column label="Leadership Roles" items={leadership} />
          <Column label="Academic Timeline" items={academic} />
        </div>
      </div>
    </section>
  );
}
