import { ArrowRight } from "lucide-react";
import { IBCSOMSLogo, FDSRCPsLogo, AOCMFLogo } from "./Logos";

const badges = [
  { code: "IBCSOMS", region: "USA", logo: IBCSOMSLogo },
  { code: "FDS RCPS", region: "Glasgow", logo: FDSRCPsLogo },
  { code: "AOCMF", region: "Austria", logo: AOCMFLogo },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16 lg:pt-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_10%,color-mix(in_oklab,var(--color-accent)_10%,transparent),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,var(--color-background))]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-5 pb-20 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:pb-32">
        <div className="lg:col-span-5 lg:order-2 animate-rise [animation-delay:120ms]">
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

        <div className="lg:col-span-7 lg:order-1 animate-rise">
          <h1 className="text-2xl font-semibold leading-[1.1] text-foreground sm:text-3xl lg:text-[64px]">
            Restoring{" "}
            <span className="text-accent">function, form </span><span>and</span> <span className="text-accent">quality of life</span>{" "}
             through specialized maxillofacial care.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-md lg:mt-8">
            Dual board certified senior maxillofacial surgeon with{" "}
            <span className="font-medium text-foreground">19+ years</span> of
            clinical and academic leadership and over{" "}
            <span className="font-medium text-foreground">1,000 operative cases</span>{" "}
            in oral oncology, complex reconstruction, and facial trauma. Internationally active leader— Senate member and Examination Director for the International Board (IBCSOMS) and AOCMF faculty.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3 lg:mt-10 lg:gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-accent lg:px-7 lg:py-3.5"
            >
              Schedule a consultation
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/>
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent lg:px-7 lg:py-3.5"
            >
              View surgical portfolio
            </a>
          </div>

          <div className="mt-10 lg:mt-14">
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-muted-foreground lg:mb-5">
              Board certifications &amp; affiliations
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4 lg:gap-x-8">
              {badges.map(({ code, region, logo: Logo }) => (
                <div
                  key={code}
                  className="flex items-center gap-3 border-l border-border-strong pl-4"
                >
                  <Logo />
                  <div>
                    <span className="text-sm font-semibold tracking-wider text-foreground">
                      {code}
                    </span>
                    <span className="ml-2 text-xs text-muted-foreground">{region}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
