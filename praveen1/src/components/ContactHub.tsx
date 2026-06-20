import React from 'react';
import { Phone, MapPin, Mail, Stethoscope, UserRound, ArrowRight } from 'lucide-react';

export default function ContactHub() {
  return (
    <section id="contact" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-teal font-extrabold bg-brand-teal/10 px-3 py-1 rounded-full">
            PATIENT & REFERRAL HUB
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-primary tracking-tight mt-4">
            Two paths in — both received with care.
          </h2>
        </div>

        {/* Dual Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Card A — For Patients */}
          <div className="bg-brand-slate-light border border-gray-200 rounded-2xl p-6 sm:p-8 flex flex-col shadow-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-brand-teal rounded-xl text-white">
                <UserRound className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-brand-primary tracking-tight">
                  For Patients
                </h3>
                <p className="text-[11px] text-gray-500 font-mono uppercase tracking-wider">
                  Appointment Request
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-600 leading-relaxed mb-6 font-sans">
              Share a few details and our team will reach out to schedule your consultation.
            </p>

            <form
              className="space-y-4 flex-1 flex flex-col"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Full name"
                  className="w-full bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs text-brand-primary placeholder:text-gray-400 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone number"
                  className="w-full bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs text-brand-primary placeholder:text-gray-400 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                />
              </div>
              <textarea
                rows={3}
                placeholder="Briefly describe your concern"
                className="w-full bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs text-brand-primary placeholder:text-gray-400 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal resize-none"
              />
              <button
                type="submit"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 py-3 px-6 bg-brand-teal hover:bg-brand-teal/95 text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-sm mt-auto"
              >
                Request appointment
                <ArrowRight size={14} />
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200/60 space-y-3 text-xs">
              <div className="flex items-start gap-3 text-gray-600">
                <MapPin size={16} className="mt-0.5 text-brand-teal shrink-0" />
                <span className="font-sans">Bambolim, Goa — India</span>
              </div>
              <div className="flex items-start gap-3 text-gray-600">
                <Phone size={16} className="mt-0.5 text-brand-teal shrink-0" />
                <a href="tel:+919881954606" className="font-sans hover:text-brand-teal transition-colors">
                  Call or WhatsApp: +91 98819 54606
                </a>
              </div>
            </div>
          </div>

          {/* Card B — For Medical Professionals */}
          <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-black pointer-events-none rounded-2xl" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-brand-teal/20 rounded-xl border border-brand-teal/30 text-brand-teal">
                  <Stethoscope className="w-5 h-5 text-brand-teal" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white tracking-tight">
                    For Medical Professionals
                  </h3>
                  <p className="text-[11px] text-gray-400 font-mono uppercase tracking-wider">
                    Physician & Referral Gateway
                  </p>
                </div>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed mb-6 font-sans">
                A secure channel for case consultations, second opinions and inter-specialty referrals. Encrypted intake. Acknowledged within 24 hours.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:praveenmaxfacs@icloud.com"
                  className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-4 transition-colors hover:bg-white/10"
                >
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-brand-teal shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold font-mono">
                        Professional Email
                      </p>
                      <p className="text-sm font-semibold text-white">praveenmaxfacs@icloud.com</p>
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-gray-500 shrink-0" />
                </a>
                <a
                  href="tel:+919881954606"
                  className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-4 transition-colors hover:bg-white/10"
                >
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-brand-teal shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold font-mono">
                        Direct Consultation Desk
                      </p>
                      <p className="text-sm font-semibold text-white">+91 98819 54606</p>
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-gray-500 shrink-0" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
