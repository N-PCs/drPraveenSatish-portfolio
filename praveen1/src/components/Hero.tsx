import React from 'react';
import { Calendar, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="home-section" className="relative bg-white overflow-hidden border-b border-gray-200/80">
      {/* Background Decorative Mesh overlays */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-teal/25 rounded-full filter blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-sky-200/30 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Right Column - Illustration / Medical Diagram & Headshot Graphic */}
          <div className="lg:col-span-5 relative mt-0 order-1 lg:order-2">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto max-w-[380px] sm:max-w-[420px] lg:max-w-none"
            >
              {/* Main surgical avatar / abstract aesthetic visual container */}
              <div id="surgical-graphic-wrapper" className="relative rounded-2xl bg-white border border-gray-200 shadow-xl p-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/10 rounded-full filter blur-xl"></div>
                
                {/* Simulated radiographic surgical-alignment frame */}
                <div className="relative aspect-square rounded-xl bg-brand-slate-light flex flex-col items-center justify-center border border-gray-200/80 overflow-hidden group">
                  {/* Outer anatomy crosshairs overlay */}
                  <div className="absolute inset-0 border border-brand-teal/10 pointer-events-none"></div>
                  <div className="absolute top-1/2 left-4 right-4 h-[1px] bg-brand-teal/10"></div>
                  <div className="absolute left-1/2 top-4 bottom-4 w-[1px] bg-brand-teal/10"></div>
                  
                  {/* Aesthetic visual rendering: high quality Unsplash clinical portraits or high-fidelity clinical model */}
                  <img 
                    src="/dr-profile.jpeg"
                    alt="Dr. Praveen Satish surgical portrait backdrop representation" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top opacity-95 transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Patient reassuring card */}
                <div className="mt-5 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="p-1 px-2 rounded-lg bg-brand-teal/10 border border-brand-teal/20 text-xs text-brand-teal font-mono font-bold">
                      19+ Yrs Experience
                    </div>
                                {/* Status Pill */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-1 px-2 rounded-lg bg-brand-teal/10 border border-brand-teal/20 text-xs text-brand-teal font-mono font-bold">
              <span className="text-brand-teal text-xs font-semibold tracking-wide uppercase font-mono">
                DUAL BOARD-CERTIFIED 
              </span>
            </motion.div>
                  </div>
                </div>

              </div>

            </motion.div>
          </div>

          {/* Left Column - Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left order-2 lg:order-1">
            {/* Core Value Proposition Statement */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-primary tracking-tight leading-[1.05]"
            >
              Restoring <span className="text-brand-teal relative">Function</span>, 
              <br />Form, and Quality of Life.
            </motion.h1>

            {/* Sub-text conveying authoritative clinical security */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl font-medium"
            >
              Dual Board certified Senior Maxillofacial Surgeon with 20+ years of clinical and academic leadership and 1,000+ operative cases in oral oncology, complex reconstruction, and facial trauma.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md sm:max-w-none"
            >
              <button
                onClick={() => onNavigate('contact')}
                className="flex items-center justify-center gap-2 px-7 py-4 bg-brand-teal hover:bg-brand-teal/95 text-white font-medium text-sm rounded-xl shadow-lg shadow-brand-teal/20 transition-all hover:translate-y-[-1px] cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Schedule Consultation
                <ArrowRight className="w-4 h-4 text-teal-200" />
              </button>
              
              <button
                onClick={() => onNavigate('contact')}
                className="flex items-center justify-center gap-2 px-7 py-4 bg-brand-slate-light hover:bg-gray-100 text-brand-primary border border-gray-250/80 font-medium text-sm rounded-xl transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-brand-teal" />
                Refer a Patient
              </button>
            </motion.div>

            {/* Board Credentials Trust Row */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <span className="text-gray-500 text-xs font-mono uppercase tracking-widest block mb-4 font-bold">
                Affiliations & Board Certifications
              </span>
              <div className="flex flex-wrap gap-4 sm:gap-6 items-center">
                
                {/* IBCSOMS Badge */}
                <div className="flex items-center space-x-2.5 bg-brand-slate-light/80 border border-gray-200 rounded-xl px-3.5 py-2 hover:bg-gray-100 transition-colors">
                  <img src="/ibcsoms.png" alt="IBCSOMS" className="w-7 h-7 object-contain shrink-0" />
                  <div>
                    <div className="text-[10px] font-mono text-brand-teal font-bold leading-none">IBCSOMS</div>
                    <div className="text-[9px] text-gray-600 mt-0.5 font-medium">Board Examiner (USA)</div>
                  </div>
                </div>

                {/* RCPS Glasgow Badge */}
                <div className="flex items-center space-x-2.5 bg-brand-slate-light/80 border border-gray-200 rounded-xl px-3.5 py-2 hover:bg-gray-100 transition-colors">
                  <img src="/fdsrcps.png" alt="FDS RCPS" className="w-7 h-7 object-contain shrink-0" />
                  <div>
                    <div className="text-[10px] font-mono text-brand-teal font-bold leading-none">FDS RCPS</div>
                    <div className="text-[9px] text-gray-600 mt-0.5 font-medium">Fellow (Glasgow)</div>
                  </div>
                </div>

                {/* AOCMF Badge */}
                <div className="flex items-center space-x-2.5 bg-brand-slate-light/80 border border-gray-200 rounded-xl px-3.5 py-2 hover:bg-gray-100 transition-colors">
                  <img src="/aocmf.png" alt="AOCMF" className="w-7 h-7 object-contain shrink-0" />
                  <div>
                    <div className="text-[10px] font-mono text-brand-teal font-bold leading-none">AOCMF</div>
                    <div className="text-[9px] text-gray-600 mt-0.5 font-medium">Alumnus (Austria)</div>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
