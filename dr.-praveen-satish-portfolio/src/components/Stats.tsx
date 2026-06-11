import React from 'react';
import { Calendar, Stethoscope, Presentation, FileText } from 'lucide-react';
import { motion } from 'motion/react';

export const Stats: React.FC = () => {
  const stats = [
    {
      id: 'stat_years',
      value: '20+',
      label: 'Years of Clinical Expertise',
      icon: Calendar,
    },
    {
      id: 'stat_cases',
      value: '1,000+',
      label: 'Operative Cases',
      icon: Stethoscope,
    },
    {
      id: 'stat_lectures',
      value: '46+',
      label: 'International Lectures',
      icon: Presentation,
    },
    {
      id: 'stat_publications',
      value: '18+',
      label: 'Scientific Publications',
      icon: FileText,
    },
  ];

  return (
    <div id="quick-metrics" className="bg-brand py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.id}
                id={stat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -3, transition: { duration: 0.1 } }}
                className="bg-white border border-brand-pale/80 rounded-none p-6 shadow-xs flex items-start gap-4 transition-all hover:shadow-md hover:border-brand-dark/20 group"
              >
                {/* Icon wrapper — Heltro sharp square */}
                <div className="h-10 w-10 rounded-none bg-brand-ice border border-brand-pale flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-brand-dark">
                  <IconComponent className="w-4.5 h-4.5" />
                </div>

                <div>
                  <div className="text-3xl font-black text-brand-dark tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-extrabold text-brand-charcoal tracking-wide uppercase mt-1 font-mono">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
