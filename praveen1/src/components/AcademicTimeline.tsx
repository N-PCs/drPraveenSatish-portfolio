import React from 'react';
import { motion } from 'motion/react';
import { Award, GraduationCap, Building2, Bookmark } from 'lucide-react';
import { academicTimeline } from '../data';

const institutionLogo: Record<string, string> = {
  'IBSCOMS': '/ibcsoms.png',
  'AOMSI': '/aomsi.png',
  'IDA': '/ida.png',
  'AOCMF': '/aocmf.png',
  'FDS RCPS (Glasgow)': '/fdsrcps.png',
  'University Klinik Innsbruck, Austria': '/uniaustria.png',
  'Rajiv Gandhi University of Health Sciences': '/rajivgandhiuni.png',
  'Goa Medical College': '/gmc.png',
  'Goa Dental College': '/gdc.png',
};

function getLogoForInstitution(inst: string): string | null {
  for (const [key, path] of Object.entries(institutionLogo)) {
    if (inst.includes(key)) return path;
  }
  return null;
}

export default function AcademicTimeline() {
  // Separate academic list into Leadership/Boards vs Academic Timeline for flawless dual-column presentation
  const leadershipRoles = academicTimeline.filter(
    (item) => item.category === 'leadership'
  );
  
  const academicRoles = academicTimeline.filter(
    (item) => item.category !== 'leadership'
  );

  return (
    <section id="academic" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-teal font-extrabold bg-brand-teal/10 px-3 py-1 rounded-full">
            THE SURGICAL PEDIGREE
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-primary tracking-tight mt-4">
            Academic Pedigree & Global Leadership
          </h2>
          <p className="text-gray-600 font-sans mt-3 text-base sm:text-lg">
            A dual-track summary of international board directorships, national presidencies, and elite academic appointments.
          </p>
        </div>

        {/* Dual-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Column 1: Board Leadership & Governance */}
          <div id="col-leadership">
            <div className="flex items-center gap-3.5 border-b border-gray-100 pb-4 mb-8">
              <div className="p-2.5 bg-brand-teal/10 rounded-xl border border-brand-teal/20 text-brand-teal">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-brand-primary">
                  Board Leadership 
                </h3>
              </div>
            </div>

            <div className="space-y-8 relative before:absolute before:top-2 before:left-[19px] before:bottom-2 before:w-[2px] before:bg-brand-teal/15">
              {leadershipRoles.map((role, idx) => (
                <motion.div
                  key={role.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative pl-12 group"
                >
                  {/* Bullet Dot */}
                  <div className="absolute top-1.5 left-2 w-7 h-7 rounded-full bg-white border-2 border-brand-teal flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-brand-teal transition-all">
                    <Award className="w-3.5 h-3.5 text-brand-teal group-hover:text-white transition-colors" />
                  </div>

                  {/* Body Info */}
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-brand-teal/10 text-brand-teal text-[10px] font-mono tracking-wider font-extrabold uppercase">
                      {role.year}
                    </span>
                    <h4 className="font-display font-bold text-base text-brand-primary tracking-tight mt-2 group-hover:text-brand-teal transition-all">
                      {role.title}
                    </h4>
                    <p className="text-xs font-semibold text-gray-700 mt-1 flex items-center gap-1.5">
                      {(() => {
                        const logoPath = getLogoForInstitution(role.institution);
                        return logoPath ? <img src={logoPath} alt="" className="h-4 w-4 object-contain shrink-0" /> : null;
                      })()}
                      {role.institution}
                    </p>
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                      {role.description}
                    </p>
                    {/* Unique Highlight indicator */}
                    <div className="mt-3 inline-flex items-center gap-1.5 bg-brand-slate-light border border-gray-100 px-3 py-1.5 rounded-xl text-[11px] text-gray-600 font-mono">
                      <Bookmark className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                      <span>{role.highlight}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2: Academics, Fellowships & Teachings */}
          <div id="col-academic">
            <div className="flex items-center gap-3.5 border-b border-gray-100 pb-4 mb-8">
              <div className="p-2.5 bg-brand-teal/10 rounded-xl border border-brand-teal/20 text-brand-teal font-bold">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-brand-primary">
                  Academic Appointments & Specializations
                </h3>
              </div>
            </div>

            <div className="space-y-8 relative before:absolute before:top-2 before:left-[19px] before:bottom-2 before:w-[2px] before:bg-brand-teal/15">
              {academicRoles.map((role, idx) => (
                <motion.div
                  key={role.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative pl-12 group"
                >
                  {/* Bullet Dot */}
                  <div className="absolute top-1.5 left-2 w-7 h-7 rounded-full bg-white border-2 border-brand-teal flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-brand-teal transition-all">
                    <Building2 className="w-3.5 h-3.5 text-brand-teal group-hover:text-white transition-colors" />
                  </div>

                  {/* Body Info */}
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-brand-teal/15 text-brand-teal text-[10px] font-mono tracking-wider font-extrabold uppercase">
                      {role.year}
                    </span>
                    <h4 className="font-display font-bold text-base text-brand-primary tracking-tight mt-2 group-hover:text-brand-teal transition-all">
                      {role.title}
                    </h4>
                    <p className="text-xs font-semibold text-gray-700 mt-1 flex items-center gap-1.5">
                      {(() => {
                        const logoPath = getLogoForInstitution(role.institution);
                        return logoPath ? <img src={logoPath} alt="" className="h-4 w-4 object-contain shrink-0" /> : null;
                      })()}
                      {role.institution}
                    </p>
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                      {role.description}
                    </p>
                    {/* Unique Highlight indicator */}
                    <div className="mt-3 inline-flex items-center gap-1.5 bg-brand-slate-light border border-gray-100 px-3 py-1.5 rounded-xl text-[11px] text-gray-600 font-mono">
                      <Bookmark className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                      <span>{role.highlight}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
