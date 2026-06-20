import { ArrowRight } from "lucide-react";

const badges = [
  { code: "IBCSOMS", region: "USA" },
  { code: "FDS RCPS", region: "Glasgow" },
  { code: "AOCMF", region: "Austria"},
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-5 lg:pt-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_10%,color-mix(in_oklab,var(--color-accent)_10%,transparent),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,var(--color-background))]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-24 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:pb-32">
        <div className="lg:col-span-7 animate-rise">
          <h1 className="text-xl font-semibold leading-[1.05] text-foreground sm:text-xl lg:text-[64px]">
            Restoring{" "}
            <span className="text-accent">function, form </span><span>and</span> <span className="text-accent">quality of life</span>{" "}
             through specialized maxillofacial care.
          </h1>
          <p className="mt-8 max-w-2xl text-md leading-relaxed text-muted-foreground">
            Dual board certified senior maxillofacial surgeon with{" "}
            <span className="font-medium text-foreground">19+ years</span> of
            clinical and academic leadership and over{" "}
            <span className="font-medium text-foreground">1,000 operative cases</span>{" "}
            in oral oncology, complex reconstruction, and facial trauma. Internationally active leader— Senate member and Examination Director for the International Board (IBCSOMS) and AOCMF faculty.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-all hover:bg-accent"
            >
              Schedule a consultation
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/>
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              View surgical portfolio
            </a>
          </div>

          <div className="mt-14">
            <p className="mb-5 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Board certifications &amp; affiliations
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {badges.map((b) => (
                <div
                  key={b.code}
                  className="flex items-center gap-3 border-l border-border-strong pl-4"
                >
                  <span className="text-sm font-semibold tracking-wider text-foreground">
                    {b.code}
                  </span>
                  <span className="text-xs text-muted-foreground">{b.region}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 animate-rise [animation-delay:120ms]">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-elevated">
              <img
                src="/dr-profile.jpeg"
                alt="Dr. Praveen Satish, Maxillofacial and Oral Onco Surgeon"
                width={896}
                height={1152}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-background/70">
                  Senior Consultant
                </p>
                <p className="mt-1 text-lg font-medium text-background">Dr. Praveen Satish, MDS</p>
                <p className="text-sm text-background/80">Maxillofacial &amp; Oral Onco Surgery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
