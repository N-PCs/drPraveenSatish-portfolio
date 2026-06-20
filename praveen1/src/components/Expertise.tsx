import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldAlert, 
  Sparkles, 
  Grid3x3, 
  Activity, 
  Layers, 
  ChevronsRight, 
  CheckCircle2, 
  X,
  Scale
} from 'lucide-react';
import { expertiseData } from '../data';
import { ExpertiseItem } from '../types';

// Map icon name strings to Lucide Components for dynamic rendering
const getIcon = (name: string) => {
  switch (name) {
    case 'ShieldAlert':
      return <ShieldAlert className="w-6 h-6 text-brand-teal" />;
    case 'Sparkles':
      return <Sparkles className="w-6 h-6 text-brand-teal" />;
    case 'Grid3X3':
      return <Grid3x3 className="w-6 h-6 text-brand-teal" />;
    case 'Infinity':
      return <Scale className="w-6 h-6 text-brand-teal" />; // TMJ / balance scale
    case 'Activity':
      return <Activity className="w-6 h-6 text-brand-teal" />;
    case 'Layers':
      return <Layers className="w-6 h-6 text-brand-teal" />;
    default:
      return <CheckCircle2 className="w-6 h-6 text-brand-teal" />;
  }
};

export default function Expertise() {
  const [selectedItem, setSelectedItem] = useState<ExpertiseItem | null>(null);

  return (
    <section id="expertise" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-teal font-extrabold bg-brand-teal/10 px-3 py-1 rounded-full">
            SURGICAL SCOPE OF PRACTICE
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-primary tracking-tight mt-4">
            Core Surgical Expertise Matrix
          </h2>
        </div>

        {/* 6-Core Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseData.map((item, idx) => (
            <motion.div
              id={`expertise-card-${item.id}`}
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -5, transition: { duration: 0.15 } }}
              className="bg-brand-slate-light border border-gray-200 rounded-2xl p-7 flex flex-col justify-between shadow-xs hover:shadow-lg hover:border-brand-teal/40 hover:bg-white group transition-all"
            >
              <div>
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-xs group-hover:bg-brand-teal/5 group-hover:border-brand-teal/30 transition-all">
                  {getIcon(item.iconName)}
                </div>

                <h3 className="font-display font-bold text-lg text-brand-primary tracking-tight mt-6 group-hover:text-brand-teal transition-colors">
                  {item.title}
                </h3>
                <span className="text-xs font-mono text-brand-teal font-semibold tracking-wide uppercase mt-1 block">
                  {item.subtitle}
                </span>

                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  {item.shortDesc}
                </p>
              </div>

              {/* Read More button trigger */}
              <div className="mt-8 pt-4 border-t border-gray-200/50 flex justify-between items-center">
                <button
                  onClick={() => setSelectedItem(item)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary hover:text-brand-teal uppercase tracking-wider group-hover:translate-x-1 transition-all cursor-pointer"
                >
                  Explore Procedures 
                  <ChevronsRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Expertise Detailed Overlay Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            
            {/* Modal Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-brand-primary/80 backdrop-blur-sm"
            ></motion.div>

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-brand-teal/20 mx-auto z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                aria-label="Close detailed view"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title Header inside Modal */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-brand-teal/10 flex items-center justify-center border border-brand-teal/20 font-bold">
                  {getIcon(selectedItem.iconName)}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-brand-primary tracking-tight">
                    {selectedItem.title}
                  </h3>
                  <p className="text-xs font-mono text-brand-teal uppercase font-bold mt-0.5 tracking-wider">
                    {selectedItem.subtitle}
                  </p>
                </div>
              </div>

              {/* Case Brief Details */}
              <div className="mt-6">
                <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 font-bold mb-1">
                  Scope Overview
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {selectedItem.fullDesc}
                </p>
              </div>

              {/* List of Key Procedures */}
              <div className="mt-6">
                <h4 className="text-xs font-mono uppercase tracking-widest text-brand-teal font-extrabold mb-3">
                  Routine & Advanced Surgical Procedures
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedItem.procedures.map((proc, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 bg-brand-slate-light border border-gray-100 p-2.5 rounded-xl">
                      <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-700 font-medium leading-normal">{proc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clinic/Board Significance Callout Box */}
              <div className="mt-8 pt-5 border-t border-gray-100">
                <div className="bg-brand-teal-light border border-brand-teal/20 rounded-xl p-4">
                  <h4 className="text-[11px] font-mono uppercase tracking-wider text-brand-teal font-extrabold">
                    CLINICAL IMPACT & TARGET OUTCOME
                  </h4>
                  <p className="text-xs text-gray-700 mt-1.5 leading-relaxed font-sans">
                    {selectedItem.clinicalSignificance}
                  </p>
                </div>
              </div>

              {/* Action Buttons in Modal */}
              <div className="mt-6 sm:mt-8 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-5 py-2.5 border border-gray-200 hover:border-gray-300 text-gray-700 text-xs font-semibold rounded-xl cursor-pointer"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => {
                    setSelectedItem(null);
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 bg-brand-teal hover:bg-brand-teal/90 text-white text-xs font-semibold rounded-xl cursor-pointer"
                >
                  Request Consultation
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
