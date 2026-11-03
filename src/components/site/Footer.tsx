import { MapPin, ShieldCheck, Scale, AlertTriangle, FileText, Lock } from "lucide-react";
import { openLegalModal } from "@/lib/legal";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-10 lg:px-10 lg:py-12">
        {/* Main Footer Row */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-[0.18em] text-foreground">
              DR. PRAVEEN SATISH
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Maxillofacial &amp; Oral Onco Surgeon ·{" "}
              <a
                href="https://maps.app.goo.gl/q31XrD5zoB65SoQR9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition-colors text-accent inline-flex items-center gap-0.5"
              >
                Old Goa
              </a>
              {" · "}
              <a
                href="https://maps.app.goo.gl/Cu2k5zeTHPEn9rXY9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition-colors text-accent inline-flex items-center gap-0.5"
              >
                Mapusa
              </a>
              {" · "}
              <a
                href="https://maps.app.goo.gl/4kTNZ4JSW1Y7joKS9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition-colors text-accent inline-flex items-center gap-0.5"
              >
                Panjim <MapPin size={13} className="inline-flex shrink-0 ml-0.5" />
              </a>
            </p>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              MDS, FDS RCPS (UK), Fellow AOCMF (Austria), FIBOMS, FIBCSOMS, Diploma in Oral
              Oncology. Regulated Specialist in Maxillofacial Surgery under the Dental Council of
              India (DCI) and State Dental Council.
            </p>
          </div>

          {/* Legal & Regulatory Navigation Triggers */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-muted-foreground">
            <button
              type="button"
              onClick={() => openLegalModal("disclaimer")}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent cursor-pointer"
            >
              <AlertTriangle size={13} className="text-accent" />
              <span>Medical Disclaimer</span>
            </button>
            <span className="text-border hidden sm:inline">•</span>
            <button
              type="button"
              onClick={() => openLegalModal("consent")}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent cursor-pointer"
            >
              <FileText size={13} className="text-accent" />
              <span>Case Consent &amp; Photos</span>
            </button>
            <span className="text-border hidden sm:inline">•</span>
            <button
              type="button"
              onClick={() => openLegalModal("privacy")}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent cursor-pointer"
            >
              <Lock size={13} className="text-accent" />
              <span>Privacy Policy (DPDP Act)</span>
            </button>
            <span className="text-border hidden sm:inline">•</span>
            <button
              type="button"
              onClick={() => openLegalModal("terms")}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent cursor-pointer"
            >
              <Scale size={13} className="text-accent" />
              <span>Terms &amp; Jurisdiction</span>
            </button>
          </div>
        </div>

        {/* Statutory & Non-Solicitation Ethics Disclaimer Box */}
        <div className="mt-8 rounded-xl border border-border bg-surface-2/60 p-4 text-[11px] leading-relaxed text-muted-foreground">
          <div className="flex items-start gap-2.5">
            <ShieldCheck size={16} className="text-accent shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-semibold text-foreground">
                Statutory Notice &amp; Code of Medical Ethics Compliance
              </p>
              <p>
                In strict adherence to the Dental Council of India (Revised Dentists Code of Ethics
                Regulations) and National Medical Commission (NMC) regulations, this digital portal
                is published exclusively for patient education, scientific reference, and
                appointment scheduling. It does not constitute medical advertising, solicitation of
                patients, or a promise or guarantee of specific surgical outcomes. Case photographs
                are displayed under documented patient informed consent.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright & Jurisdiction Line */}
        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-muted-foreground border-t border-border pt-4">
          <p>© {new Date().getFullYear()} Dr. Praveen Satish. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
