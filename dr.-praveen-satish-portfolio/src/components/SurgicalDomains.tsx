import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, Sparkles, Activity, Maximize2, Check, ArrowRight, X } from 'lucide-react';
import { SURGICAL_DOMAINS } from '../data';
import { SurgicalDomain } from '../types';

const iconMap: Record<string, React.ComponentType<any>> = {
  ShieldAlert: ShieldAlert,
  Sparkles: Sparkles,
  Activity: Activity,
  Maximize2: Maximize2,
};

export const SurgicalDomains: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<SurgicalDomain | null>(null);

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto" id="surgical-domains-section">
      <div className="text-center mb-12">
        <span className="px-3 py-1 bg-brand-ice border border-brand-pale text-brand-dark rounded-none text-[9px] font-black tracking-widest uppercase">
          Precision Specialties
        </span>
        <h2 className="text-3xl md:text-4xl font-black mt-3 text-brand-dark tracking-tight">
          Core Surgical Domains
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="domains-grid">
        {SURGICAL_DOMAINS.map((domain, idx) => {
          const IconComponent = iconMap[domain.iconName] || Activity;
          return (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white border border-slate-200/80 shadow-md hover:shadow-xl hover:border-slate-300 rounded-none p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group cursor-pointer"
              onClick={() => setSelectedDomain(domain)}
              id={`domain-card-${domain.id}`}
            >
              {/* Background ambient radial glow on hover */}
              <div className="absolute inset-0 bg-radial from-brand-ice/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-none"></div>

              <div>
                {/* Icon Circle */}
                <div className="h-12 w-12 rounded-none bg-brand-ice border border-brand-pale text-brand-dark mb-6 group-hover:bg-brand-dark group-hover:text-white group-hover:border-brand-deep transition-all duration-300 shadow-inner flex items-center justify-center">
                  <IconComponent className="w-5 h-5" />
                </div>

                <h3 className="text-lg md:text-xl font-black text-brand-dark tracking-tight leading-snug mb-3">
                  {domain.title}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {domain.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-bold text-brand-dark bg-brand-ice px-2.5 py-1 rounded-none border border-brand-pale uppercase tracking-widest">
                  {domain.highlights.length} Technical Metrics
                </span>
                <span className="text-brand-dark hover:text-brand-deep text-xs font-black flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
                  Explore <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Domain Explanatory Drawer / Modal Overlay */}
      <AnimatePresence>
        {selectedDomain && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6" id="domain-detail-drawer">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDomain(null)}
              className="absolute inset-0 bg-brand-deep/80 backdrop-blur-md"
            ></motion.div>

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              className="bg-white border border-brand-pale rounded-none w-full max-w-2xl overflow-hidden shadow-2xl relative z-10"
            >
              {/* Top Blue Glow */}
              <div className="h-2 bg-gradient-to-r from-brand-dark via-brand-slate to-brand-dark"></div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedDomain(null)}
                className="absolute top-6 right-6 h-8 w-8 rounded-none bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                id="close-drawer-button"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-none bg-brand-ice border border-brand-pale flex items-center justify-center text-brand-dark">
                    {React.createElement(iconMap[selectedDomain.iconName] || Activity, { className: 'w-5 h-5' })}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-brand-dark font-extrabold font-mono bg-brand-ice px-2.5 py-0.5 rounded-none border border-brand-pale">
                      Surgical Domain Detail
                    </span>
                    <h3 className="text-xl md:text-2xl font-black text-brand-dark tracking-tight mt-1">
                      {selectedDomain.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-8">
                  {selectedDomain.longDescription}
                </p>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 font-mono">
                    Key Surgical Guidelines & Procedures Included:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="drawer-highlights">
                    {selectedDomain.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-none border border-slate-100"
                      >
                        <div className="mt-0.5 h-4 w-4 rounded-none bg-emerald-100/70 flex items-center justify-center text-emerald-800 shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="text-xs text-slate-700 font-semibold">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <p className="text-xs text-slate-500 text-center sm:text-left">
                    For consultations or patient references regarding {selectedDomain.title}.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedDomain(null);
                      // Custom event to scroll to book-form
                      const el = document.getElementById('appointment-booker-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full sm:w-auto px-6 py-3 bg-brand-dark text-white text-xs font-black rounded-none hover:bg-brand-deep transition-colors shadow-lg cursor-pointer"
                    id="drawer-book-button"
                  >
                    Schedule Direct Referral
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
