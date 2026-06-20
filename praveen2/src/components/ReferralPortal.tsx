import React from 'react';
import { Phone, MapPin, Mail, Stethoscope, UserRound, ArrowRight, Calendar } from 'lucide-react';

export const ReferralPortal: React.FC = () => {
  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-[#f5fafb]/70 border-t border-brand-pale/50" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="px-3.5 py-1.5 bg-brand-ice border border-brand-pale text-brand-dark rounded-none text-[10px] font-black tracking-widest uppercase">
            Patient & Referral Hub
          </span>
          <h2 className="text-3xl md:text-4xl font-black mt-3 text-brand-dark tracking-tight">
            Two paths in — both received with care.
          </h2>
        </div>

        {/* Dual Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Card A — For Patients */}
          <div className="bg-white border border-brand-pale shadow-md shadow-slate-100/40 p-6 md:p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 bg-brand-ice border border-brand-pale flex items-center justify-center">
                <UserRound size={18} className="text-brand-dark" />
              </div>
              <span className="text-[10px] font-black text-brand-dark uppercase tracking-widest font-mono">
                For Patients
              </span>
            </div>

            <h3 className="text-2xl font-black text-brand-dark tracking-tight">
              Request an appointment
            </h3>
            <p className="text-sm text-brand-charcoal mt-2 leading-relaxed">
              Share a few details and our team will reach out to schedule your consultation.
            </p>

            <form
              className="mt-6 space-y-4 flex-1 flex flex-col"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Full name"
                  className="w-full bg-brand-ice/30 border border-brand-pale px-4 py-3 text-sm text-brand-dark placeholder:text-brand-charcoal/50 focus:outline-none focus:border-brand-dark/40 font-semibold"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone number"
                  className="w-full bg-brand-ice/30 border border-brand-pale px-4 py-3 text-sm text-brand-dark placeholder:text-brand-charcoal/50 focus:outline-none focus:border-brand-dark/40 font-semibold"
                />
              </div>
              <textarea
                rows={3}
                placeholder="Briefly describe your concern"
                className="w-full bg-brand-ice/30 border border-brand-pale px-4 py-3 text-sm text-brand-dark placeholder:text-brand-charcoal/50 focus:outline-none focus:border-brand-dark/40 resize-none font-semibold"
              />
              <button
                type="submit"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-brand-dark hover:bg-brand-deep text-white font-black text-xs px-6 py-3.5 transition-all mt-auto cursor-pointer"
              >
                Request appointment
                <ArrowRight size={14} />
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-brand-pale/50 space-y-3 text-sm">
              <div className="flex items-start gap-3 text-brand-charcoal">
                <MapPin size={16} className="mt-0.5 text-brand-dark shrink-0" />
                <span className="font-semibold">Bambolim, Goa — India</span>
              </div>
              <div className="flex items-start gap-3 text-brand-charcoal">
                <Phone size={16} className="mt-0.5 text-brand-dark shrink-0" />
                <a href="tel:+919881954606" className="font-semibold hover:text-brand-dark transition-colors">
                  Call or WhatsApp: +91 98819 54606
                </a>
              </div>
            </div>
          </div>

          {/* Card B — For Medical Professionals */}
          <div className="bg-brand-dark border border-brand-pale shadow-md p-6 md:p-8 flex flex-col relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark/95 to-brand-deep pointer-events-none" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 bg-brand-ice border border-brand-pale flex items-center justify-center">
                  <Stethoscope size={18} className="text-brand-dark" />
                </div>
                <span className="text-[10px] font-black text-brand-ice uppercase tracking-widest font-mono">
                  For Medical Professionals
                </span>
              </div>

              <h3 className="text-2xl font-black text-white tracking-tight">
                Refer a patient securely
              </h3>
              <p className="text-sm text-brand-ice/70 mt-2 leading-relaxed">
                A secure channel for case consultations, second opinions and inter-specialty referrals. Encrypted intake. Acknowledged within 24 hours.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="mailto:praveenmaxfacs@icloud.com"
                  className="flex items-center justify-between gap-4 border border-white/10 bg-white/5 px-5 py-4 transition-colors hover:bg-white/10"
                >
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-brand-ice shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-brand-ice/60 font-bold font-mono">
                        Professional Email
                      </p>
                      <p className="text-sm font-semibold text-white">praveenmaxfacs@icloud.com</p>
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-brand-ice/60 shrink-0" />
                </a>
                <a
                  href="tel:+919881954606"
                  className="flex items-center justify-between gap-4 border border-white/10 bg-white/5 px-5 py-4 transition-colors hover:bg-white/10"
                >
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-brand-ice shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-brand-ice/60 font-bold font-mono">
                        Direct Consultation Desk
                      </p>
                      <p className="text-sm font-semibold text-white">+91 98819 54606</p>
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-brand-ice/60 shrink-0" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
