import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Award, GraduationCap, Briefcase, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TIMELINE_EVENTS } from '../data';
import { TimelineEvent } from '../types';

const institutionLogo: Record<string, string> = {
  'IBSCOMS': '/ibcsoms.png',
  'AOMSI': '/aomsi.png',
  'IDA': '/ida.png',
  'AOCMF': '/aocmf.png',
  'FDS RCPS (Glasgow)': '/fdsrcps.png',
  'University Klinik Innsbruck, Austria': '/uniaustria.png',
  'Rajiv Gandhi University of Health Sciences': '/rajivgandhiuni.png',
  'Goa Medical College': '/gmc.png',
  'Goa Dental College': '/gdc.png'
};

function getLogoForInstitution(inst: string): string | null {
  for (const [key, path] of Object.entries(institutionLogo)) {
    if (inst.includes(key)) return path;
  }
  return null;
}

type Category = TimelineEvent['category'];

const CATEGORIES: { key: Category; label: string }[] = [
  { key: 'academic',    label: 'Academic & Clinical' },
  { key: 'leadership',  label: 'Leadership' },
  { key: 'fellowship',  label: 'Fellowships' },
  { key: 'credential',  label: 'Credentials' },
];

const getCategoryConfig = (category: Category) => {
  switch (category) {
    case 'academic':
      return {
        icon: <Briefcase className="w-3.5 h-3.5" />,
        badge: 'bg-brand-ice border-brand-pale text-brand-dark',
        label: 'Academic / Clinical',
        dot: 'bg-brand-dark',
      };
    case 'leadership':
      return {
        icon: <ShieldCheck className="w-3.5 h-3.5" />,
        badge: 'bg-purple-50 border-purple-100 text-purple-800',
        label: 'Leadership',
        dot: 'bg-purple-600',
      };
    case 'fellowship':
      return {
        icon: <GraduationCap className="w-3.5 h-3.5" />,
        badge: 'bg-emerald-50/70 border-emerald-200 text-emerald-800',
        label: 'Fellowship',
        dot: 'bg-emerald-600',
      };
    case 'credential':
      return {
        icon: <Award className="w-3.5 h-3.5" />,
        badge: 'bg-amber-50 border-amber-100 text-amber-800',
        label: 'Credential',
        dot: 'bg-amber-500',
      };
    default:
      return {
        icon: <Star className="w-3.5 h-3.5" />,
        badge: 'bg-brand-ice border-brand-pale text-brand-dark',
        label: 'Milestone',
        dot: 'bg-brand-dark',
      };
  }
};

export const AcademicTimeline: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Category | 'all'>('all');
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredEvents =
    activeFilter === 'all'
      ? TIMELINE_EVENTS
      : TIMELINE_EVENTS.filter((ev) => ev.category === activeFilter);

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = 340;
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -amount : amount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#f5fcfe] border-t border-brand-pale/40 overflow-hidden" id="timeline">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="px-3.5 py-1.5 bg-brand-ice border border-brand-pale text-brand-dark rounded-none text-[10px] font-black tracking-widest uppercase font-mono">
            Academic Track Record
          </span>
          <h2 className="text-3xl md:text-4xl font-black mt-4 text-brand-dark tracking-tight">
            Elite Specialist Journey
          </h2>
          <p className="text-slate-500 text-sm mt-2 font-semibold max-w-xl mx-auto leading-relaxed">
            Two decades of leadership, education, fellowships, and clinical milestones—from Goa to Glasgow.
          </p>
        </div>

        {/* Filter Pills — horizontally scrollable on mobile */}
        <div
          className="flex items-center justify-start lg:justify-center gap-2 mb-10 p-1.5 bg-white border border-brand-pale rounded-none w-full lg:w-fit mx-auto overflow-x-auto scrollbar-hide"
          id="timeline-filters"
          style={{ scrollbarWidth: 'none' }}
        >
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-5 py-2 rounded-none text-xs font-bold tracking-wide transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-brand-dark text-white shadow-sm'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            All Milestones
          </button>
          {CATEGORIES.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`px-5 py-2 rounded-none text-xs font-bold tracking-wide transition-all cursor-pointer ${
                activeFilter === key
                  ? 'bg-brand-dark text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── HORIZONTAL FLOWCHART ── */}
      <div className="relative">

        {/* Scroll Arrow — Left */}
        <button
          onClick={() => scroll('left')}
          aria-label="Scroll left"
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 h-9 w-9 rounded-none bg-white border border-brand-pale shadow-md flex items-center justify-center hover:bg-brand-ice text-brand-dark transition-all cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Scroll Arrow — Right */}
        <button
          onClick={() => scroll('right')}
          aria-label="Scroll right"
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 h-9 w-9 rounded-none bg-white border border-brand-pale shadow-md flex items-center justify-center hover:bg-brand-ice text-brand-dark transition-all cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Scrollable Track */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-0 pb-8 pt-4 scroll-smooth scrollbar-hide select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          id="timeline-track"
        >
          {/* Left edge padding */}
          <div className="shrink-0 w-16 md:w-24" />

          <AnimatePresence mode="popLayout">
            {filteredEvents.map((ev, idx) => {
              const cfg = getCategoryConfig(ev.category);
              const isLast = idx === filteredEvents.length - 1;

              return (
                <React.Fragment key={ev.id}>
                  {/* Card + Connector */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                    className="shrink-0 flex flex-col items-center"
                    style={{ width: 'clamp(240px, 75vw, 280px)' }}
                  >
                    {/* ── Top: Card ── */}
                    <div className="w-full bg-white border border-brand-pale rounded-none shadow-md hover:shadow-lg hover:border-brand-dark/30 p-5 transition-all group relative min-h-[300px] flex flex-col">

                      {/* Year — big anchor */}
                      <span className="text-2xl font-black text-brand-dark font-mono tracking-tight block">
                        {ev.year}
                      </span>

                      {/* Category badge */}
                      <span
                        className={`inline-flex items-center gap-1.5 text-[10px] uppercase font-mono font-bold border rounded-none px-2.5 py-0.5 mt-2 w-fit ${cfg.badge}`}
                      >
                        {cfg.icon}
                        <span>{cfg.label}</span>
                      </span>

                      {/* Title */}
                      <h3 className="text-sm font-bold text-slate-900 tracking-tight mt-3 leading-snug">
                        {ev.title}
                      </h3>

                      {/* Institution */}
                      <h4 className="text-[10px] font-bold text-brand-charcoal mt-1 uppercase tracking-wider font-mono flex items-center gap-1.5">
                        {(() => {
                          const logoPath = getLogoForInstitution(ev.institution);
                          return logoPath ? <img src={logoPath} alt="" className="h-4 w-4 object-contain shrink-0" /> : null;
                        })()}
                        {ev.institution}
                      </h4>

                      {/* Description */}
                      <p className="text-[11px] text-slate-500 mt-2.5 leading-relaxed flex-1">
                        {ev.description}
                      </p>

                      {/* Highlight chip */}
                      {ev.highlight && (
                        <div className="mt-auto pt-3 border-t border-brand-pale/50">
                          <span className="text-[10px] font-bold font-mono text-brand-dark tracking-widest uppercase bg-brand-ice border border-brand-pale px-2 py-0.5">
                            {ev.highlight}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* ── Bottom: Connector node ── */}
                    <div className="flex flex-col items-center mt-0">
                      {/* Vertical stem down */}
                      <div className="w-0.5 h-5 bg-brand-pale" />
                      {/* Circle node */}
                      <div className={`h-4 w-4 rounded-none border-2 border-brand-dark flex items-center justify-center bg-white`}>
                        <div className={`h-1.5 w-1.5 rounded-none ${cfg.dot}`} />
                      </div>
                    </div>
                  </motion.div>

                  {/* ── Horizontal connector line between cards ── */}
                  {!isLast && (
                    <div className="shrink-0 flex flex-col items-center justify-end" style={{ width: 20, paddingBottom: 20 }}>
                      <div className="w-full h-0.5 bg-brand-pale mt-auto mb-[10px]" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </AnimatePresence>

          {/* Right edge padding */}
          <div className="shrink-0 w-16 md:w-24" />
        </div>

        {/* Fade edges for scroll hint */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-8 w-20 bg-gradient-to-r from-[#f5fcfe] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-8 w-20 bg-gradient-to-l from-[#f5fcfe] to-transparent z-10" />
      </div>

      {/* Scrollbar hide style */}
      <style>{`
        #timeline-track::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};
