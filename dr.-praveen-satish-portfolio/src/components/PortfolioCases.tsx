import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, ShieldCheck, CheckCircle2, AlertTriangle, ChevronRight, X, ChevronLeft } from 'lucide-react';
import { CASE_STUDIES } from '../data';
import { CaseStudy } from '../types';

export const PortfolioCases: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  // Track which cases are consented to (unblurred)
  const [consentedCases, setConsentedCases] = useState<Record<string, boolean>>({});

  const toggleConsent = (caseId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setConsentedCases(prev => ({
      ...prev,
      [caseId]: !prev[caseId]
    }));
  };

  return (
    <section className="relative py-16 px-4 md:px-8 max-w-7xl mx-auto z-10 border-t border-brand-pale/40" id="portfolio">
      <div className="pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="portfolio-peeking-cards">
          {CASE_STUDIES.map((caseStudy, idx) => {
            const isConsented = consentedCases[caseStudy.id] || false;
            return (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="bg-white border border-slate-200/60 rounded-none overflow-hidden shadow-lg hover:shadow-xl hover:border-slate-350 transition-all duration-500 flex flex-col group"
                id={`portfolio-card-${caseStudy.id}`}
              >
                {/* Header of the card */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between bg-white text-slate-900">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-[10px] uppercase font-bold font-mono tracking-widest text-brand-dark bg-brand-ice border border-brand-pale px-3 py-1 rounded-none">
                        {caseStudy.patientAgeGender}
                      </span>
                      <span className="text-[10px] uppercase font-bold font-mono tracking-wider text-slate-400">
                        Case Report
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-brand-dark tracking-tight leading-snug group-hover:text-brand-slate transition-colors">
                      {caseStudy.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 font-semibold">{caseStudy.subtitle}</p>

                    <p className="text-xs text-slate-600 mt-4 line-clamp-3 bg-slate-50 p-4 rounded-none border border-slate-100">
                      <strong className="text-slate-800 font-bold">Diagnosis:</strong> {caseStudy.diagnosis}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 text-[11px] text-slate-500">
                    <span className="bg-slate-100 px-3 py-1 rounded-none font-medium">3D Virtual Design</span>
                    <span className="bg-slate-100 px-3 py-1 rounded-none font-medium">Ablative Surgical Care</span>
                  </div>
                </div>

                {/* Split view or radiographic visualization box */}
                <div className="relative h-60 bg-slate-950 border-t border-slate-100 overflow-hidden group/img">
                  {isConsented ? (
                    /* Consented Screen: Shows detailed intra-op tech layout */
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="w-full h-full relative"
                    >
                      <img
                        src={caseStudy.intraOpGraphicUrl}
                        alt="Intra-operative surgical technical schematic"
                        className="w-full h-full object-cover grayscale opacity-90 transition-all duration-300 group-hover/img:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 right-3 bg-emerald-500 text-slate-950 font-bold text-[9px] px-2.5 py-1 rounded-none flex items-center gap-1 uppercase tracking-widest shadow-lg">
                        <ShieldCheck className="w-3 h-3" /> Technical Visualization Active
                      </div>
                      <button
                        onClick={(e) => toggleConsent(caseStudy.id, e)}
                        className="absolute bottom-3 left-3 bg-slate-950/90 text-white font-semibold text-[10px] px-3 py-1.5 rounded-none border border-white/10 hover:bg-slate-900 transition-all"
                      >
                        Hide Technical View
                      </button>
                    </motion.div>
                  ) : (
                    /* Default Screen: Open Radiograph/Skeletal Scannings with Consent Overlay over physical case study */
                    <div className="w-full h-full relative">
                      <img
                        src={caseStudy.radiographUrl}
                        alt="Panoramic Orthognathic X-ray"
                        className="w-full h-full object-cover opacity-30 blur-2xs transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />

                      {/* Explicit stylized white overlay for physical surgical cases guardrail */}
                      <div className="absolute inset-0 bg-brand-dark/95 backdrop-blur-md p-6 flex flex-col justify-between" id={`consent-overlay-${caseStudy.id}`}>
                        <div>
                          <div className="flex items-center gap-1.5 text-white font-black text-xs uppercase tracking-wider mb-2">
                            <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 animate-bounce" />
                            <span>Clinical Content Shield</span>
                          </div>
                          <p className="text-[10px] text-brand-ice/90 leading-relaxed font-medium">
                            This panel displays high-resolution clinical diagnostics & reconstructive scaffolding configurations. Verified patient consent is secured folder-wide.
                          </p>
                        </div>

                        <button
                          onClick={(e) => toggleConsent(caseStudy.id, e)}
                          className="w-full bg-brand-slate hover:bg-brand-pale/50 hover:text-brand-dark text-white font-black text-xs py-3 rounded-none flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                        >
                          <Eye className="w-4 h-4 text-white" />
                          <span>Click to View Surgical Case</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom trigger card strip */}
                <button
                  onClick={() => setSelectedCase(caseStudy)}
                  className="w-full bg-slate-50 hover:bg-brand-ice/30 py-4.5 border-t border-brand-pale/40 text-xs font-bold text-brand-dark flex items-center justify-center gap-1.5 transition-all group-hover:gap-2.5 cursor-pointer"
                  id={`view-full-case-btn-${caseStudy.id}`}
                >
                  <span>Verify Full Clinical Timeline</span>
                  <ChevronRight className="w-3.5 h-3.5 text-brand-slate" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Case Details Modal */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6" id="case-detail-modal">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCase(null)}
              className="absolute inset-0 bg-brand-deep/80 backdrop-blur-md"
            ></motion.div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              className="bg-white border border-slate-200 rounded-none w-full max-w-4xl overflow-hidden shadow-2xl relative z-10 flex flex-col lg:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-6 right-6 z-20 h-8 w-8 rounded-none bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                id="close-case-modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Left Side: Images Viewer with Selector tab */}
              <div className="w-full lg:w-1/2 bg-slate-50 p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-150">
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] uppercase font-bold font-mono text-emerald-800 bg-emerald-100/70 border border-emerald-200 px-3 py-1 rounded-none w-fit">
                    Interactive Clinical Scanning
                  </span>
                  <div className="relative rounded-none overflow-hidden h-72 border border-brand-pale bg-black flex items-center justify-center">
                    <img
                      src={selectedCase.radiographUrl}
                      alt="Mandibular radiograph orthopantomogram scan"
                      className="w-full h-full object-cover opacity-80"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-brand-dark/95 backdrop-blur-md text-[10px] text-white px-3 py-1 rounded-none border border-white/5 font-mono">
                      PANORAMIC RADIOGRAPH
                    </div>
                  </div>

                  <div className="relative rounded-none overflow-hidden h-72 border border-brand-pale bg-black flex items-center justify-center">
                    <img
                      src={selectedCase.intraOpGraphicUrl}
                      alt="Intraoperative planning scaffold mapping"
                      className="w-full h-full object-cover opacity-80 grayscale"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-brand-dark/95 backdrop-blur-md text-[10px] text-white px-3 py-1 rounded-none border border-white/5 font-mono">
                      VIRTUAL SURGICAL MODEL
                    </div>
                  </div>
                </div>

                <div className="text-[10px] text-slate-400 font-mono mt-4">
                  DR. PRAVEEN SATISH portfolio case logs. Authorized secure view only.
                </div>
              </div>

              {/* Right Side: Deep Clinical Log Text */}
              <div className="w-full lg:w-1/2 p-8 overflow-y-auto max-h-[85vh] lg:max-h-[600px] flex flex-col justify-between bg-white" id="case-deep-log">
                <div>
                  <div className="mb-6">
                    <span className="text-[11px] uppercase tracking-widest text-brand-dark font-extrabold font-mono">
                      CRANIOFACIAL DEEP ARCHIVE
                    </span>
                    <h3 className="text-2xl font-black text-brand-dark mt-1 leading-tight">
                      {selectedCase.title}
                    </h3>
                    <p className="text-xs text-slate-500 italic font-medium">{selectedCase.subtitle}</p>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-[#f2fbfa]/60 p-4 rounded-none border border-brand-pale/50 space-y-2">
                      <h4 className="text-xs font-bold text-brand-dark uppercase tracking-wider">Patient & Diagnostic Profile</h4>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="text-slate-600">Demographic: <span className="text-brand-dark font-bold">{selectedCase.patientAgeGender}</span></div>
                        <div className="text-slate-600">Status: <span className="text-emerald-700 font-bold">Reconstruction Saved</span></div>
                      </div>
                      <p className="text-xs text-slate-700 pt-1 border-t border-slate-200/60 mt-2">
                        <strong className="text-slate-950 font-bold">Diagnosis: </strong> {selectedCase.diagnosis}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Surgical Intervention Logs</h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-light">
                        {selectedCase.procedureText}
                      </p>
                    </div>

                    <div className="bg-emerald-50 p-4 rounded-none border border-emerald-105/80 space-y-2">
                      <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Clinical Outcome Score</span>
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-light">
                        {selectedCase.clinicalOutcome}
                      </p>
                    </div>

                    <div className="space-y-2 border-l-2 border-brand-slate pl-4 py-1">
                      <h4 className="text-xs font-bold text-brand-dark uppercase tracking-wider">Key Surgical Lesson</h4>
                      <p className="text-xs text-slate-600 italic">
                        "{selectedCase.keyTakeaway}"
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedCase(null)}
                    className="w-full bg-brand-dark hover:bg-brand-deep text-white text-xs font-bold py-3.5 rounded-none transition-transform active:scale-98 cursor-pointer"
                  >
                    Close Log Sheet
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
