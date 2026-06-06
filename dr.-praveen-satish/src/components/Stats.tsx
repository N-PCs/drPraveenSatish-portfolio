import React from 'react';
import { Calendar, Stethoscope, Presentation, FileText } from 'lucide-react';
import { motion } from 'motion/react';

export default function Stats() {
  const stats = [
    {
      id: 'stat_leadership',
      value: '19+',
      label: 'Years of Clinical Leadership',
      subtext: 'Directing surgical oncology & trauma settings',
      icon: Calendar,
      color: 'text-brand-teal bg-brand-teal/10 border-brand-teal/20',
    },
    {
      id: 'stat_cases',
      value: '1,000+',
      label: 'Operative Cases Completed',
      subtext: 'Active advanced surgical tumor & skeletal clearances',
      icon: Stethoscope,
      color: 'text-brand-teal bg-brand-teal/10 border-brand-teal/20',
    },
    {
      id: 'stat_lectures',
      value: '46+',
      label: 'International Lectures Delivered',
      subtext: 'Academic keynotes: Singapore, Canada, Ethiopia',
      icon: Presentation,
      color: 'text-brand-teal bg-brand-teal/10 border-brand-teal/20',
    },
    {
      id: 'stat_publications',
      value: '18+',
      label: 'Scientific Publications',
      subtext: 'In top-tier peer-reviewed medical specialty journals',
      icon: FileText,
      color: 'text-brand-teal bg-brand-teal/10 border-brand-teal/20',
    },
  ];

  return (
    <div id="quick-metrics" className="bg-brand-slate-light border-y border-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -3, transition: { duration: 0.1 } }}
                className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-xs flex items-start gap-4 transition-all hover:shadow-md hover:border-brand-teal/30 group"
              >
                {/* Metrics Icon wrapper */}
                <div className={`p-3 rounded-xl border shrink-0 group-hover:scale-105 transition-transform ${stat.color}`}>
                  <IconComponent className="w-5 h-5" />
                </div>

                <div>
                  <div className="text-3xl font-display font-extrabold text-brand-primary tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-gray-800 tracking-tight mt-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-400 mt-1 leading-normal">
                    {stat.subtext}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
