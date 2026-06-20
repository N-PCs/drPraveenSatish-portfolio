import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Eye, 
  EyeOff, 
  Layers, 
  ShieldAlert, 
  Filter, 
  CheckCircle,
  FileCheck,
  ChevronRight
} from 'lucide-react';
import { caseStudiesData } from '../data';
import { CaseStudy } from '../types';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<'all' | 'oncology' | 'trauma' | 'joint_pathology'>('all');
  const [unblurredImages, setUnblurredImages] = useState<Record<string, boolean>>({});

  const filterTabs = [
    { label: 'All Cases', id: 'all' },
    { label: 'Oral Cancer', id: 'oncology' },
    { label: 'Facial Trauma', id: 'trauma' },
    { label: 'TMJ & Pathology', id: 'joint_pathology' },
  ];

  const filteredCases = caseStudiesData.filter(
    (c) => activeTab === 'all' || c.category === activeTab
  );

  const toggleUnblur = (caseId: string) => {
    setUnblurredImages((prev) => ({
      ...prev,
      [caseId]: !prev[caseId],
    }));
  };

  return (
    <section id="portfolio" className="py-20 bg-brand-slate-light border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-teal font-extrabold bg-brand-teal/10 px-3 py-1 rounded-full">
              CLINICAL EVIDENCE & OUTCOMES
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-primary tracking-tight mt-4">
              Surgical Case Portfolio
            </h2>
          </div>

          {/* Quick Disclaimer Pill */}
          <div className="mt-4 md:mt-0 inline-flex items-center gap-2 bg-amber-50 border border-amber-200/60 rounded-xl px-3 py-1.5 w-fit">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span className="text-[10px] text-amber-800 font-sans font-medium">
              Intraoperative photos are masked for patient comfort.
            </span>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-2 border-b border-gray-200">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-brand-teal text-white shadow-md shadow-brand-teal/15'
                  : 'text-gray-600 hover:text-brand-primary hover:bg-white border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Case List Structure */}
        <div id="cases-grid" className="space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredCases.map((cs) => {
              const isUnblurred = !!unblurredImages[cs.id];
              return (
                <motion.div
                  id={`case-card-${cs.id}`}
                  key={cs.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    
                    {/* Left side case information column (Lg: col-span-5) */}
                    <div className="p-6 sm:p-8 lg:col-span-5 border-b lg:border-b-0 lg:border-r border-gray-100 flex flex-col justify-between bg-white">
                      <div>
                        {/* Tags */}
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-[9px] font-mono font-bold tracking-wider uppercase bg-brand-teal text-white px-2 py-0.5 rounded-full shadow-xs">
                            {cs.category === 'oncology' ? 'Oral Cancer' : cs.category === 'trauma' ? 'Facial Trauma' : 'TMJ & Pathology'}
                          </span>
                          <span className="text-[10px] font-mono text-gray-400">
                            ID: {cs.id.toUpperCase()}
                          </span>
                        </div>

                        {/* Case Title */}
                        <h3 className="text-xl font-display font-bold text-brand-primary tracking-tight">
                          {cs.title}
                        </h3>

                        {/* Demographics Outline */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-xs font-sans">
                          <div className="bg-brand-slate-light p-2.5 rounded-xl border border-gray-100">
                            <span className="text-gray-400 block font-mono text-[9px] uppercase tracking-wider">Patient cohort</span>
                            <span className="text-brand-primary font-semibold block mt-0.5">{cs.patientAgeGender}</span>
                          </div>
                          <div className="bg-brand-slate-light p-2.5 rounded-xl border border-gray-100">
                            <span className="text-gray-400 block font-mono text-[9px] uppercase tracking-wider">Diagnosis</span>
                            <span className="text-brand-primary font-semibold block mt-0.5 truncate" title={cs.diagnosis}>{cs.diagnosis}</span>
                          </div>
                        </div>

                        {/* Surgical Approach summary */}
                        <div className="mt-5 space-y-4">
                          <div>
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-teal flex items-center gap-1.5">
                              <FileCheck className="w-3.5 h-3.5" />
                              Technical Surgical Modality
                            </span>
                            <p className="text-xs text-gray-700 leading-relaxed font-sans mt-1">
                              {cs.technique}
                            </p>
                          </div>

                          <div>
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-teal flex items-center gap-1.5">
                              <Layers className="w-3.5 h-3.5" />
                              Reconstructive / Plate Configuration
                            </span>
                            <p className="text-xs text-gray-600 leading-relaxed font-sans mt-1">
                              {cs.reconstructionDetail}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Clinical Outcomes ribbon */}
                      <div className="mt-8 pt-5 border-t border-gray-100 bg-brand-teal-light/50 -mx-6 -mb-6 p-6">
                        <div className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[10px] font-mono tracking-widest uppercase font-extrabold text-brand-teal">FUNCTIONAL OUTCOME</span>
                            <p className="text-xs text-gray-800 font-semibold leading-relaxed mt-0.5">
                              {cs.clinicalOutcome}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right side interactive surgical images column (Lg: col-span-7) */}
                    <div className="lg:col-span-7 p-6 sm:p-8 bg-brand-slate-light/60 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">
                            Radiographic Comparison & Clinical Records
                          </span>
                          <button
                            onClick={() => toggleUnblur(cs.id)}
                            className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-teal-400 rounded-xl border border-brand-teal/30 font-mono text-[8px] uppercase tracking-wider cursor-pointer transition-colors"
                          >
                            {isUnblurred ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                            {isUnblurred ? 'Blur All' : 'Unblur All'}
                          </button>
                        </div>

                        {/* Pre & Post Op Images Side-by-Side */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* Pre-Op panel */}
                          <div className="bg-slate-900 border border-gray-200/60 rounded-xl p-2 text-center shadow-xs">
                            <span className="inline-block px-2 py-0.5 text-[8px] font-mono bg-white/10 text-gray-300 rounded-full uppercase tracking-wider mb-2">
                              Diagnostic Radiograph (Pre-Op)
                            </span>
                            <div className="aspect-video relative rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center border border-white/5">
                              <img 
                                src={cs.preOpImage} 
                                alt="Preoperative radiological reference representation" 
                                referrerPolicy="no-referrer"
                                className={`w-full h-full object-cover transition-all duration-300 ${isUnblurred ? 'opacity-60 filter grayscale' : 'opacity-20 blur-lg'}`}
                              />
                              <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]"></div>
                              <span className="absolute bottom-1.5 right-1.5 text-[9px] font-mono text-gray-400 uppercase bg-black/60 px-1 py-0.5 rounded-lg">
                                Contrast Outline
                              </span>
                            </div>
                          </div>

                          {/* Post-Op panel */}
                          <div className="bg-slate-900 border border-gray-200/60 rounded-xl p-2 text-center shadow-xs">
                            <span className="inline-block px-2 py-0.5 text-[8px] font-mono bg-brand-teal/30 text-teal-200 rounded-full uppercase tracking-wider mb-2">
                              Reconstructive Align (Post-Op)
                            </span>
                            <div className="aspect-video relative rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center border border-white/5">
                              <img 
                                src={cs.postOpImage} 
                                alt="Postoperative radiological reference representation" 
                                referrerPolicy="no-referrer"
                                className={`w-full h-full object-cover transition-all duration-300 ${isUnblurred ? 'opacity-60 filter grayscale' : 'opacity-20 blur-lg'}`}
                              />
                              <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]"></div>
                              <span className="absolute bottom-1.5 right-1.5 text-[9px] font-mono text-emerald-400 uppercase bg-black/60 px-1 py-0.5 rounded-lg">
                                Rigid Fix Complete
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Interactive Intra-Operative Panel (Warning masked) */}
                        <div className="mt-4 relative bg-slate-950 border border-brand-teal/10 rounded-2xl overflow-hidden">
                          {/* Main surgical photograph */}
                          <div className="aspect-[21/9] relative flex items-center justify-center overflow-hidden bg-slate-900">
                            <img 
                              src={cs.intraOpImage} 
                              alt="Intraoperative micro-dissection and tumor clearance surgical photo" 
                              referrerPolicy="no-referrer"
                              className={`w-full h-full object-cover transition-all duration-300 ${isUnblurred ? 'blur-0 opacity-100' : 'blur-xl opacity-35'}`}
                            />
                            
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent pointer-events-none"></div>

                            {/* Mask overlay warning when BLURRED */}
                            {!isUnblurred && (
                              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10 bg-slate-950/70">
                                <ShieldAlert className="w-8 h-8 text-amber-500 mb-2 animate-pulse" />
                                <div className="text-xs font-bold text-white uppercase tracking-wider">
                                  MEDICAL CONTENT WARNING
                                </div>
                                <div className="text-[10px] text-gray-300 mt-1 max-w-sm">
                                  This panel displays graphic surgical field exposures containing tumor resection bounds and margins. Intended strictly for board peers and clinical assessors.
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Dynamic detailed peer surgeon annotations */}
                          <div className="p-4 bg-slate-950/90 border-t border-white/5">
                            <span className="text-[9px] font-mono text-brand-teal font-extrabold uppercase tracking-wider block">
                              SURGEON ADJUVANT LOG & MARGIN REPORT
                            </span>
                            <p className="text-[11px] text-gray-300 leading-relaxed font-sans mt-1">
                              {cs.intraOpDesc}
                            </p>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
