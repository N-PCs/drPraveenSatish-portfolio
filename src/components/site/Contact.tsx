import { Phone, MapPin, Mail, Stethoscope, UserRound, ArrowRight } from "lucide-react";
import clinic from "@/assets/clinic-interior.jpg";

export function Contact() {
  return (
    <section id="contact" className="relative py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3 lg:mb-4">Patient & Referral Hub</p>
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl lg:text-5xl">
            Two paths in — both received with care.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:mt-16 lg:grid-cols-2 lg:gap-6">

          {/* Card B — Professionals */}
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-foreground p-8 text-background shadow-card transition-all hover:shadow-elevated lg:p-10">
            <div
              className="absolute inset-0 -z-0 opacity-20"
              style={{
                backgroundImage: `url(${clinic})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "grayscale(1)",
              }}
            />
            <div className="absolute inset-0 -z-0 bg-gradient-to-br from-foreground via-foreground/95 to-foreground/80" />

            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <Stethoscope size={20} strokeWidth={1.6} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  For Patients
                </p>
              </div>
              <h3 className="mt-6 text-2xl font-semibold">Refer a patient securely</h3>
              <p className="mt-3 text-sm leading-relaxed text-background/70">
                A secure channel for case consultations, second opinions and inter-specialty
                referrals. Encrypted intake. Acknowledged within 24 hours.
              </p>

              <div className="mt-10 space-y-4">
                <a
                  href="mailto:praveenmaxfacs@icloud.com"
                  className="group/btn flex items-center justify-between gap-4 rounded-xl border border-background/15 bg-background/5 px-5 py-4 transition-colors hover:bg-background/10"
                >
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-accent" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-background/60">
                        Professional Email
                      </p>
                      <p className="text-sm font-medium">praveenmaxfacs@icloud.com</p>
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-background/60 transition-transform group-hover/btn:translate-x-1"
                  />
                </a>
                <a
                  href="tel:+919881954606"
                  className="group/btn flex items-center justify-between gap-4 rounded-xl border border-background/15 bg-background/5 px-5 py-4 transition-colors hover:bg-background/10"
                >
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-accent" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-background/60">
                        Direct Consultation Desk
                      </p>
                      <p className="text-sm font-medium">+91 98819 54606</p>
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-background/60 transition-transform group-hover/btn:translate-x-1"
                  />
                </a>
              </div><p></p><div></div>
                <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={16} className="mt-0.5 text-accent" />
                <span>
                  <a
                    href="https://www.google.com/maps/place/Goa+Dental+College+and+Hospital/@15.4652614,73.8570885,17z/data=!3m1!4b1!4m6!3m5!1s0x3bbfbf4c4ef3f9eb:0x5bc4c62df09d48af!8m2!3d15.4652614!4d73.8570885!16s%2Fm%2F06w9gkb?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                  >
                    Bambolim, Goa, India
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
