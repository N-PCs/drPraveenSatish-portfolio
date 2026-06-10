import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Globe, Library, BookOpen, Volume2, Bookmark, Check } from 'lucide-react';
import { publicationsData } from '../data';
import { PublicationItem } from '../types';

export default function Publications() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeType, setActiveType] = useState<'journal' | 'lecture'>('journal');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredItems = publicationsData.filter((pub) => {
    const matchesType = pub.type === activeType;
    const matchesSearch = 
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.forum.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (pub.location && pub.location.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesType && matchesSearch;
  });

  const handleCopyCitation = (pub: PublicationItem) => {
    const citationText = pub.citation || `${pub.authors} (${pub.year}). ${pub.title} ${pub.forum}.`;
    navigator.clipboard.writeText(citationText);
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="research" className="py-20 bg-brand-slate-light border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-teal font-extrabold bg-brand-teal/10 px-3 py-1 rounded-full">
            SCIENTIFIC RESEARCH
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-primary tracking-tight mt-4">
            Research & Academic Publications
          </h2>
        </div>

        {/* Database Search & Controls */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-xs max-w-4xl mx-auto mb-10">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            
            {/* Search Input bar */}
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by keyword, author, or city (e.g. tongue, microvascular, Singapore)..."
                className="w-full pl-10 pr-4 py-2.5 bg-brand-slate-light border border-gray-200 rounded-xl text-sm text-brand-primary focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all"
              />
            </div>

            {/* Publication Category Selector Toggles */}
            <div className="flex bg-brand-slate-light p-1 rounded-xl border border-gray-200">
              <button
                onClick={() => setActiveType('journal')}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all ${
                  activeType === 'journal'
                    ? 'bg-brand-teal text-white shadow-xs'
                    : 'text-gray-600 hover:text-brand-primary'
                }`}
              >
                Publications
              </button>
              <button
                onClick={() => setActiveType('lecture')}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all ${
                  activeType === 'lecture'
                    ? 'bg-brand-teal text-white shadow-xs'
                    : 'text-gray-600 hover:text-brand-primary'
                }`}
              >
                Lectures
              </button>
            </div>

          </div>
        </div>

        {/* List of filtered results */}
        <div id="publications-results" className="max-w-4xl mx-auto space-y-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((pub, idx) => (
              <motion.div
                id={`pub-item-${pub.id}`}
                key={pub.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs hover:shadow-md hover:border-brand-teal/20 transition-all flex flex-col md:flex-row justify-between gap-6"
              >
                {/* Text section */}
                <div className="flex-1">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    {pub.type === 'journal' ? (
                      <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold tracking-widest uppercase text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                        <BookOpen className="w-3 h-3" />
                        Peer-Reviewed Journal
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold tracking-widest uppercase text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
                        <Volume2 className="w-3.5 h-3.5" />
                        Invited Keynote Lecture
                      </span>
                    )}

                    <span className="text-[10px] font-mono text-gray-400">
                      Pub. Year: {pub.year}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-base text-brand-primary leading-snug tracking-tight">
                    {pub.title}
                  </h3>

                  <div className="text-xs text-brand-teal font-medium mt-1 font-mono">
                    {pub.authors}
                  </div>

                  <div className="text-xs text-gray-500 mt-2 flex flex-wrap items-center gap-1.5 font-sans">
                    <span className="font-semibold text-gray-700 capitalize">{pub.forum}</span>
                    {pub.location && (
                      <span className="text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded-md text-[10px]">
                        📍 {pub.location}
                      </span>
                    )}
                  </div>

                  {/* Impact Highlight bullet */}
                  <div className="mt-4 bg-brand-slate-light/60 border border-gray-100 p-3 rounded-xl flex items-start gap-2">
                    <Bookmark className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-700 italic leading-relaxed">
                      {pub.highlight}
                    </p>
                  </div>
                </div>

                {/* DOI / Citation interaction section */}
                <div className="flex md:flex-col justify-end md:justify-center gap-2 md:items-end border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6 shrink-0">
                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 hover:bg-brand-primary hover:text-white border border-gray-200 text-gray-800 rounded-xl font-mono text-[10px] uppercase tracking-wider font-bold transition-colors cursor-pointer"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      View doi Link
                    </a>
                  )}

                  <button
                    onClick={() => handleCopyCitation(pub)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-brand-teal/10 hover:bg-brand-teal/20 text-brand-teal hover:text-brand-teal-dark rounded-xl font-mono text-[10px] uppercase tracking-wider font-bold transition-all cursor-pointer"
                  >
                    {copiedId === pub.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Library className="w-3.5 h-3.5" />
                        Copy Citation
                      </>
                    )}
                  </button>
                </div>

              </motion.div>
            ))
          ) : (
            <div className="text-center bg-white border border-gray-200 rounded-2xl p-12 max-w-lg mx-auto">
              <Library className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h4 className="font-display font-bold text-gray-700">No Publications Found</h4>
              <p className="text-xs text-gray-400 mt-1 max-w-xs mx-auto">
                No articles matched "{searchTerm}". Try refining search words or toggle standard work classifications.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
