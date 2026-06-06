import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Award, Star, BookOpen, Clock } from 'lucide-react';
import { TIMELINE_EVENTS } from '../data';
import { TimelineEvent } from '../types';

export const AcademicTimeline: React.FC = () => {
  const [filter, setFilter] = useState<TimelineEvent['type'] | 'all'>('all');

  const filteredEvents = TIMELINE_EVENTS.filter(
    (ev) => filter === 'all' || ev.type === filter
  );

  const getIcon = (type: TimelineEvent['type']) => {
    switch (type) {
      case 'academic':
        return <BookOpen className="w-3.5 h-3.5" />;
      case 'clinical':
        return <Star className="w-3.5 h-3.5" />;
      case 'leadership':
        return <ShieldCheck className="w-3.5 h-3.5" />;
      case 'award':
        return <Award className="w-3.5 h-3.5" />;
      default:
        return <Clock className="w-3.5 h-3.5" />;
    }
  };

  const getTimelineTagStyles = (type: TimelineEvent['type']) => {
    switch (type) {
      case 'academic': return 'bg-brand-ice border-brand-pale text-brand-dark';
      case 'clinical': return 'bg-emerald-50/70 border-emerald-200/50 text-emerald-800';
      case 'leadership': return 'bg-purple-50 border-purple-100 text-purple-800';
      case 'award': return 'bg-amber-50 border-amber-100 text-amber-800';
    }
  };

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto" id="timeline">
      <div className="text-center mb-12">
        <span className="px-3.5 py-1.5 bg-brand-ice border border-brand-pale text-brand-dark rounded-none text-[10px] font-black tracking-widest uppercase">
          Academic Track Record
        </span>
        <h2 className="text-3xl md:text-4xl font-black mt-4 text-brand-dark tracking-tight">
          Elite Specialist Journey
        </h2>
        <p className="text-slate-600 mt-4 max-w-lg mx-auto text-sm font-semibold">
          A progression of dual-board certifications, oncological surgical fellowships, and executive clinical leadership appointments spanning nearly two decades.
        </p>

        {/* Filter buttons styled as sharp rect capsules matching Heltro */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-slate-100/80 border border-slate-200 rounded-none w-fit mx-auto" id="timeline-filters">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-none text-xs font-bold tracking-wide transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-brand-dark text-white shadow-md'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            All Milestones
          </button>
          <button
            onClick={() => setFilter('academic')}
            className={`px-5 py-2 rounded-none text-xs font-bold tracking-wide transition-all cursor-pointer ${
              filter === 'academic'
                ? 'bg-brand-dark text-white shadow-md'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            Education & Boards
          </button>
          <button
            onClick={() => setFilter('clinical')}
            className={`px-5 py-2 rounded-none text-xs font-bold tracking-wide transition-all cursor-pointer ${
              filter === 'clinical'
                ? 'bg-brand-dark text-white shadow-md'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            Clinical Milestones
          </button>
          <button
            onClick={() => setFilter('leadership')}
            className={`px-5 py-2 rounded-none text-xs font-bold tracking-wide transition-all cursor-pointer ${
              filter === 'leadership'
                ? 'bg-brand-dark text-white shadow-md'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            Leadership
          </button>
        </div>
      </div>

      <div className="relative max-w-3xl mx-auto" id="timeline-line-container">
        {/* Draw central line on desktop, offset line on mobile */}
        <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 bg-slate-200 md:-translate-x-1/2"></div>

        <div className="space-y-12" id="timeline-items">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((ev, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={ev.year + ev.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className={`relative flex flex-col md:flex-row ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Dot Indicator */}
                  <div className="absolute left-4 md:left-1/2 top-7 h-6 w-6 rounded-none bg-white border-2 border-brand-dark -translate-x-[11px] md:-translate-x-3 flex items-center justify-center text-brand-slate font-bold z-10 shadow-sm">
                    <div className="h-2 w-2 rounded-none bg-brand-slate animate-pulse"></div>
                  </div>

                  {/* Content space cards */}
                  <div className={`pl-12 md:pl-0 w-full md:w-[46%] ${isEven ? 'md:text-right md:pr-10' : 'md:pl-10'}`}>
                    <div className="bg-white border border-slate-200 hover:border-brand-pale p-5 md:p-6 rounded-none transition-all relative group shadow-md hover:shadow-lg">
                      {/* Year badge label */}
                      <span className="text-2xl font-black text-brand-dark block tracking-wider font-mono">
                        {ev.year}
                      </span>

                      {/* Pill Tag Category */}
                      <span className={`inline-flex items-center gap-1.5 text-[9px] uppercase font-mono font-black border rounded-none px-2.5 py-0.5 mt-2 ${getTimelineTagStyles(ev.type)}`}>
                        {getIcon(ev.type)}
                        <span>{ev.type === 'academic' ? 'Boards & Degrees' : ev.type}</span>
                      </span>

                      <h3 className="text-base md:text-lg font-black text-slate-900 tracking-tight mt-3">
                        {ev.title}
                      </h3>
                      <h4 className="text-xs font-extrabold text-brand-slate mt-1 uppercase tracking-wider font-mono">
                        {ev.institution}
                      </h4>

                      <p className="text-xs text-slate-500 mt-3 leading-relaxed font-semibold">
                        {ev.description}
                      </p>
                    </div>
                  </div>

                  {/* Empty item matching balance placeholder for desktop alignment */}
                  <div className="hidden md:block w-[46%]"></div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
