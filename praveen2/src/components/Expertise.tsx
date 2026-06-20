import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldAlert,
  Sparkles,
  Activity,
  Maximize2,
  CheckCircle2,
  X,
  ChevronRight,
} from 'lucide-react';
import { SURGICAL_DOMAINS } from '../data';
import { SurgicalDomain } from '../types';

// Map icon name strings to Lucide Components for dynamic rendering
const getIcon = (name: string, large = false) => {
  const cls = large ? 'w-5 h-5 text-brand-dark' : 'w-4 h-4 text-brand-dark';
  switch (name) {
    case 'ShieldAlert': return <ShieldAlert className={cls} />;
    case 'Sparkles':    return <Sparkles className={cls} />;
    case 'Maximize2':   return <Maximize2 className={cls} />;
    case 'Activity':    return <Activity className={cls} />;
    default:            return <CheckCircle2 className={cls} />;
  }
};

export const Expertise: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<SurgicalDomain | null>(null);

  return (
    <section id="expertise" className="py-20 bg-white border-t border-brand-pale/40">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="uppercase tracking-widest text-brand-dark font-black font-mono text-[9px] px-3 py-1 bg-brand-ice rounded-none border border-brand-pale">
            SURGICAL SCOPE OF PRACTICE
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tight mt-4">
            Core Surgical Expertise Matrix
          </h2>
        </div>

        {/* 6-Domain Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SURGICAL_DOMAINS.map((domain, idx) => (
            <motion.div
              id={`expertise-card-${domain.id}`}
              key={domain.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.15 } }}
              className="bg-[#f5fcfe] border border-brand-pale rounded-none p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-brand-dark/30 hover:bg-white group transition-all"
            >
              <div>
                {/* Icon — Heltro square button style */}
                <div className="h-10 w-10 rounded-none bg-white border border-brand-pale flex items-center justify-center shadow-xs group-hover:bg-brand-ice transition-all">
                  {getIcon(domain.iconName)}
                </div>

                <h3 className="font-black text-lg text-brand-dark tracking-tight mt-5 group-hover:text-brand-slate transition-colors">
                  {domain.title}
                </h3>
                <span className="text-[10px] font-mono text-brand-charcoal font-extrabold tracking-widest uppercase mt-1 block">
                  {domain.subtitle}
                </span>

                <p className="text-slate-600 text-xs mt-3 leading-relaxed">
                  {domain.description}
                </p>
              </div>

              {/* Explore trigger */}
              <div className="mt-7 pt-4 border-t border-brand-pale/50 flex justify-between items-center">
                <button
                  onClick={() => setSelectedItem(domain)}
                  className="inline-flex items-center gap-1.5 text-[10px] font-black text-brand-dark hover:text-brand-slate uppercase tracking-wider group-hover:translate-x-1 transition-all cursor-pointer font-mono"
                >
                  Explore Procedures
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detailed Overlay Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">

            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-brand-dark/70 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative max-w-2xl w-full bg-white rounded-none shadow-2xl p-5 sm:p-8 border border-brand-pale mx-auto z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-brand-ice rounded-none transition-colors cursor-pointer"
                aria-label="Close detailed view"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title */}
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 shrink-0 rounded-none bg-brand-ice border border-brand-pale flex items-center justify-center">
                  {getIcon(selectedItem.iconName, true)}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-brand-dark tracking-tight">
                    {selectedItem.title}
                  </h3>
                  <p className="text-[10px] font-mono text-brand-charcoal uppercase font-extrabold mt-0.5 tracking-widest">
                    {selectedItem.subtitle}
                  </p>
                </div>
              </div>

              {/* Scope Overview */}
              <div className="mt-6">
                <h4 className="text-[9px] font-mono uppercase tracking-widest text-slate-400 font-black mb-1">
                  Scope Overview
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {selectedItem.longDescription}
                </p>
              </div>

              {/* Procedures List */}
              <div className="mt-6">
                <h4 className="text-[9px] font-mono uppercase tracking-widest text-brand-dark font-black mb-3">
                  Routine &amp; Advanced Surgical Procedures
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedItem.highlights.map((proc, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-brand-ice/60 border border-brand-pale/70 p-2.5 rounded-none">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-dark shrink-0 mt-0.5" />
                      <span className="text-[11px] text-slate-700 font-semibold leading-normal">{proc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clinical Impact Callout */}
              <div className="mt-7 pt-5 border-t border-brand-pale">
                <div className="bg-brand-ice border border-brand-pale p-4 rounded-none">
                  <h4 className="text-[9px] font-mono uppercase tracking-widest text-brand-dark font-black">
                    CLINICAL IMPACT &amp; TARGET OUTCOME
                  </h4>
                  <p className="text-xs text-slate-700 mt-1.5 leading-relaxed font-semibold">
                    {selectedItem.clinicalSignificance}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-5 py-2.5 border border-brand-pale hover:border-brand-dark/20 text-slate-700 text-xs font-bold rounded-none cursor-pointer transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
