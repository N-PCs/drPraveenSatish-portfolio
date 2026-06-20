import { Phone, MapPin, Mail, Stethoscope, UserRound, ArrowRight} from "lucide-react";
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
          {/* Card A — Patients */}
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 shadow-card transition-all hover:shadow-elevated lg:p-10">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <UserRound size={20} strokeWidth={1.6} />
              </div>
              <p className="eyebrow">For Patients</p>
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-foreground">
              Request an appointment
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Share a few details and our team will reach out to schedule your consultation.
            </p>

            <form
              className="mt-8 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  required
                  placeholder="Full name"
                  className="w-full rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone number"
                  className="w-full rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                />
              </div>
              <textarea
                rows={3}
                placeholder="Briefly describe your concern"
                className="w-full rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
              />
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent sm:w-auto"
              >
                Request appointment
                <ArrowRight size={14} />
              </button>
            </form>

            <div className="mt-8 hairline" />

            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={16} className="mt-0.5 text-accent" />
                <span>Bambolim, Goa — India</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <Phone size={16} className="mt-0.5 text-accent" />
                <a href="tel:+919881954606" className="hover:text-foreground">
                  Call or WhatsApp: +91 98819 54606
                </a>
              </div>
            </dl>
          </div>

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
                  For Medical Professionals
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
