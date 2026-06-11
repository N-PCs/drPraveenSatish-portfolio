import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Search, ExternalLink, ChevronDown, ChevronUp, FileText } from 'lucide-react';
import { PUBLICATIONS } from '../data';
import { Publication } from '../types';

export const PublicationsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Publication['category']>('oncology');
  const [expandedPubId, setExpandedPubId] = useState<string | null>(null);

  const toggleAbstract = (id: string) => {
    setExpandedPubId(expandedPubId === id ? null : id);
  };

  const filteredPublications = PUBLICATIONS.filter((pub) => {
    const matchesCategory = pub.category === selectedCategory;
    const matchesSearch = 
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto" id="publications">
      <div className="text-center mb-12">
        <span className="px-3.5 py-1.5 bg-brand-ice border border-brand-pale text-brand-dark rounded-none text-[10px] font-black tracking-widest uppercase">
          Peer-Reviewed Research
        </span>
        <h2 className="text-3xl md:text-4xl font-black mt-3 text-brand-dark tracking-tight">
          Scientific Contributions
        </h2>
      </div>

      <div className="bg-white border border-slate-200/80 rounded-none p-5 md:p-6 lg:p-8 shadow-lg shadow-slate-100/50 space-y-6" id="publications-container">
        {/* Search & Category Filter Header wrapper */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200/60">
          {/* Category Tabs — scroll on mobile */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-hide" id="pub-tabs" style={{ scrollbarWidth: 'none' }}>
            {['oncology', 'reconstruction', 'trauma', 'tmj'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat as any)}
                className={`px-4 py-2 rounded-none text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-brand-dark text-white shadow-sm font-bold'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search journals or abstracts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-250 rounded-none pl-11 pr-5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-brand-dark/60 focus:ring-1 focus:ring-brand-dark/20 transition-all font-semibold"
              id="pub-search-input"
            />
          </div>
        </div>

        {/* Publications loop list */}
        <div className="space-y-4" id="pub-items-list">
          {filteredPublications.length > 0 ? (
            filteredPublications.map((pub, idx) => {
              const isExpanded = expandedPubId === pub.id;
              return (
                <motion.div
                  key={pub.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="bg-white hover:bg-slate-50/70 border border-slate-200 rounded-none p-5 md:p-6 transition-all duration-300 shadow-sm"
                  id={`publication-${pub.id}`}
                >
                  <div className="flex items-start justify-between gap-4 flex-col sm:flex-row">
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-bold text-brand-dark bg-brand-ice border border-brand-pale px-2.5 py-0.5 rounded-none capitalize">
                          {pub.category} Studies
                        </span>
                        <span className="text-[10px] font-bold text-slate-500">
                          {pub.year} • {pub.journal}
                        </span>
                      </div>

                      <h3 className="text-base md:text-lg font-black text-brand-dark tracking-tight leading-snug">
                        {pub.title}
                      </h3>

                      <p className="text-xs text-slate-600 font-semibold font-mono">
                        Authors: {pub.authors}
                      </p>
                    </div>

                    <button
                      onClick={() => toggleAbstract(pub.id)}
                      className="h-9 px-4 rounded-none border border-slate-200 hover:border-brand-pale text-xs font-bold text-slate-700 hover:text-brand-dark flex items-center gap-1.5 shrink-0 transition-colors bg-slate-50 cursor-pointer"
                      id={`expand-abstract-btn-${pub.id}`}
                    >
                      <span>Abstract</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5 text-brand-dark" /> : <ChevronDown className="w-3.5 h-3.5 text-slate-500" />}
                    </button>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-5 pt-4 border-t border-slate-200/60 space-y-4">
                          <div className="bg-slate-50 p-4 rounded-none border border-slate-200">
                            <h4 className="text-[10px] uppercase font-black text-slate-500 tracking-wider mb-2 flex items-center gap-1.5 font-mono">
                              <FileText className="w-3 h-3 text-sky-650" />
                              <span>Clinical Abstract Synopsis</span>
                            </h4>
                            <p className="text-xs text-slate-700 leading-relaxed font-semibold">
                              {pub.abstract}
                            </p>
                          </div>

                          {pub.doi && (
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[11px] font-mono p-1 gap-2 border-t border-slate-100 pt-3">
                              <span className="text-slate-500 font-bold">
                                DOI Index: <span className="text-slate-800 font-bold">{pub.doi}</span>
                              </span>
                              <a
                                href={`https://doi.org/${pub.doi}`}
                                target="_blank"
                                rel="noreferrer"
                                className="text-brand-slate hover:text-brand-charcoal flex items-center gap-1 hover:underline font-bold"
                              >
                                View Publisher Site <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-slate-50 border border-dashed border-slate-200 rounded-none">
              <p className="text-sm text-slate-500 font-semibold">No publications match your selected filter parameters.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
