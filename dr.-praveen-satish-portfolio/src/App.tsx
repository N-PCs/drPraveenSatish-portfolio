import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, 
  ShieldCheck, 
  Award, 
  Activity, 
  ChevronRight, 
  Heart, 
  Clock, 
  Stethoscope, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  MapPin
} from 'lucide-react';

// Components
import { Navbar } from './components/Navbar';
import { SurgicalDomains } from './components/SurgicalDomains';
import { PortfolioCases } from './components/PortfolioCases';
import { AcademicTimeline } from './components/AcademicTimeline';
import { PublicationsSection } from './components/PublicationsSection';
import { ReferralPortal } from './components/ReferralPortal';
import { AppointmentBooker } from './components/AppointmentBooker';

export default function App() {
  const [activeSection, setActiveSection] = useState('profile');
  const [isBookerOpen, setIsBookerOpen] = useState(false);

  // Smooth scroll helper
  const handleScrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 90; // Adjust for sticky floating nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Viewport tracking logic
  useEffect(() => {
    const sections = ['profile', 'portfolio', 'timeline', 'publications'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5fcfe] text-slate-900 selection:bg-brand-dark selection:text-brand-ice" id="main-app">
      
      {/* Translucent Floating Global Navbar */}
      <Navbar 
        onNavigate={handleScrollToSection} 
        activeSection={activeSection}
        onOpenBooker={() => setIsBookerOpen(true)}
      />

      {/* Main Core Viewport */}
      <main className="relative" id="main-content-scroll">
        
        {/* VIEW PROFILE & IMMERSIVE HERO ZONE */}
        <section className="relative pt-24 pb-20 flex flex-col justify-center overflow-hidden bg-gradient-to-br from-brand-ice/40 via-white to-brand-pale/30" id="profile">
          
          {/* Subtle medical grid illustration background */}
          <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
            <img 
              src="/src/assets/images/medical_bg_1780591975939.png" 
              alt="Medical background grid illustration"
              className="w-full h-full object-cover mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 mt-4">
            
            {/* Left Column: Core clinical copy and action items */}
            <div className="flex-1 text-left space-y-6 max-w-2xl">
              
              {/* Custom Heltro style soft badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded-none bg-brand-ice text-brand-dark font-sans border border-brand-pale"
                id="hero-badge"
              >
                <span className="h-1.5 w-1.5 rounded-none bg-brand-slate animate-pulse"></span>
                <span className="text-[10px] font-black tracking-widest uppercase">Clinical Leadership</span>
              </motion.div>

              {/* Huge bold modern heading */}
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-black text-brand-dark tracking-tight leading-[1.08]"
                id="hero-title"
              >
                Smarter precision <br />for better patient care
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-600 text-sm md:text-base leading-relaxed font-semibold max-w-xl"
                id="hero-subtitle"
              >
                Experience the next generation of specialized oral oncology, reconstructive microvascular surgery, and facial trauma solutions delivered with elite dual board-certified clinical expertise.
              </motion.p>

              {/* Advanced metrics strip embedded directly into hero body to keep it lightweight */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-3 gap-6 py-4 border-y border-brand-pale/50 max-w-lg"
                id="hero-stats-strip"
              >
                <div>
                  <div className="text-2xl md:text-3xl font-black text-brand-dark">1k+</div>
                  <div className="text-[9px] text-brand-charcoal font-extrabold uppercase tracking-wide">Recovered Patients</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-black text-brand-dark">18%</div>
                  <div className="text-[9px] text-brand-charcoal font-extrabold uppercase tracking-wide">Reduced Wait Times</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-black text-brand-dark">20%</div>
                  <div className="text-[9px] text-brand-charcoal font-extrabold uppercase tracking-wide">Care Efficiency</div>
                </div>
              </motion.div>

              {/* Action Buttons styled like Heltro buttons */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4 pt-2"
                id="hero-actions"
              >
                <button
                  onClick={() => setIsBookerOpen(true)}
                  className="bg-brand-dark hover:bg-brand-deep text-white font-extrabold text-xs px-8 py-4 rounded-none flex items-center justify-center gap-2.5 shadow-lg shadow-brand-dark/10 transition-all hover:scale-102 group w-full sm:w-auto cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-brand-ice" />
                  <span>Schedule Consultation</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>

                <button
                  onClick={() => handleScrollToSection('portfolio')}
                  className="bg-white hover:bg-brand-ice/20 text-brand-dark font-extrabold text-xs px-8 py-4 rounded-none border border-brand-pale flex items-center justify-center gap-2.5 shadow-xs transition-all hover:scale-101 w-full sm:w-auto cursor-pointer"
                >
                  <span>Explore Portfolio</span>
                </button>
              </motion.div>
            </div>

            {/* Right Column: Beautiful clinical profile image layout */}
            <div className="flex-1 relative w-full max-w-md lg:max-w-none flex justify-center" id="hero-media-panel">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-sm aspect-[4/5] rounded-none overflow-hidden bg-gradient-to-tr from-brand-pale to-brand-ice p-1.5 border border-brand-slate/30 shadow-lg"
              >
                {/* Doctor main portrait */}
                <img
                  src="/src/assets/images/surgeon_profile_1780591995445.png"
                  alt="Dr. Praveen Satish Senior Surgeon holding consult"
                  className="w-full h-full object-cover rounded-none shadow-inner"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

          </div>

        </section>

        {/* CLINICAL PORTFOLIO GRID PREVIEW (THE PEEKING CARDS LAYOUT) */}
        {/* Situating underneath the hero text overlapping dynamically */}
        <PortfolioCases />

        {/* BIOGRAPHICAL SPECIATION (SURGEON PROFILE PRESENTATION) */}
        <section className="py-20 px-4 md:px-8 bg-white border-t border-brand-pale/40 relative overflow-hidden" id="speciation-bio">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-ice/50 rounded-full blur-3xl"></div>
          
          <div className="max-w-5xl mx-auto relative z-10 space-y-12">
            
            {/* Chief Surgeon bio details in 1 single ultra-clean high-contrast rows */}
            <div className="space-y-6 text-center">
              <span className="uppercase tracking-widest text-brand-dark font-black font-mono text-[9px] px-3 py-1 bg-brand-ice rounded-none border border-brand-pale">
                CHIEF SURGEON SUMMARY
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tight leading-tight">
                Pioneering Cranio-Maxillofacial & Onco Rehabilitation
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-semibold max-w-3xl mx-auto">
                Dual Board certified Senior Maxillofacial Surgeon with 20+ years of clinical and academic leadership and 1,000+ operative cases in oral oncology, complex reconstruction, and facial trauma. Internationally active leader— Senate member and Examination Director for the International Board (IBCSOMS) and AOCMF faculty—specialising in ablative head & neck resections, locoregional flap reconstruction, TMJ arthroscopy, total joint replacement, and pan facial trauma management. Recognised educator, examiner researcher and published with a proven track record of building multidisciplinary teams, specialists, and mentoring delivering patient centred, outcome focused surgical care.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4" id="bio-achievements-checklist">
              <div className="bg-[#f2fbfa]/60 p-5 rounded-none border border-brand-pale/50 shadow-xs flex flex-col justify-between">
                <div className="h-8 w-8 rounded-none bg-brand-ice flex items-center justify-center text-brand-dark mb-3">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-brand-dark uppercase tracking-wider font-mono">Dual Board Credentials</h4>
                  <p className="text-[11px] text-slate-500 mt-1 leading-snug">Accredited Internationally in elite high-risk OMFS surgery.</p>
                </div>
              </div>

              <div className="bg-[#f2fbfa]/60 p-5 rounded-none border border-brand-pale/50 shadow-xs flex flex-col justify-between">
                <div className="h-8 w-8 rounded-none bg-brand-ice flex items-center justify-center text-brand-dark mb-3">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-brand-dark uppercase tracking-wider font-mono">Advanced Microsurgery</h4>
                  <p className="text-[11px] text-slate-500 mt-1 leading-snug">Vascularized bony tissue transfers & custom CAD guides.</p>
                </div>
              </div>

              <div className="bg-[#f2fbfa]/60 p-5 rounded-none border border-brand-pale/50 shadow-xs flex flex-col justify-between">
                <div className="h-8 w-8 rounded-none bg-brand-ice flex items-center justify-center text-brand-dark mb-3">
                  <Stethoscope className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-brand-dark uppercase tracking-wider font-mono">Critical Trauma Care</h4>
                  <p className="text-[11px] text-slate-500 mt-1 leading-snug">Triage management of midfacial & jaw trauma fractures.</p>
                </div>
              </div>

              <div className="bg-[#f2fbfa]/60 p-5 rounded-none border border-brand-pale/50 shadow-xs flex flex-col justify-between">
                <div className="h-8 w-8 rounded-none bg-brand-ice flex items-center justify-center text-brand-dark mb-3">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-brand-dark uppercase tracking-wider font-mono">15+ Peer Journals</h4>
                  <p className="text-[11px] text-slate-500 mt-1 leading-snug">Index-linked scientific publications in microvascular design.</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-2">
              <button
                onClick={() => handleScrollToSection('timeline')}
                className="bg-brand-dark hover:bg-brand-deep text-white font-extrabold text-xs px-6 py-3 rounded-none flex items-center gap-2 group transition-all cursor-pointer shadow-sm"
                id="bio-timeline-cta"
              >
                <span>Verify Academic Milestones</span>
                <ArrowRight className="w-3.5 h-3.5 text-brand-ice group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* CORE SURGICAL DOMAINS SECTION */}
        <SurgicalDomains />

        {/* ACADEMIC TIMELINE SECTION */}
        <AcademicTimeline />

        {/* PUBLICATIONS INDEX SECTION */}
        <PublicationsSection />

        {/* CLINICAL REFERRALS & PROFESSIONAL HUB ZONE (FOOTER BLOCK) */}
        <ReferralPortal />

      </main>

      {/* FIXED STATIC BRANDING FOOTER */}
      <footer className="bg-brand-deep py-12 px-4 md:px-8 border-t border-white/5 text-center text-xs text-slate-500" id="global-footer">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left font-mono">
            <p className="text-slate-300 font-extrabold">DR. PRAVEEN SATISH</p>
            <p className="text-[10px] text-slate-500">Dual Board-Certified Maxillofacial & Oral Onco Surgeon</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-[11px] text-slate-400">
            <button onClick={() => handleScrollToSection('profile')} className="hover:text-white transition-colors">Biography</button>
            <button onClick={() => handleScrollToSection('portfolio')} className="hover:text-white transition-colors">Case Portfolio</button>
            <button onClick={() => handleScrollToSection('timeline')} className="hover:text-white transition-colors">Academic Milestones</button>
            <button onClick={() => handleScrollToSection('publications')} className="hover:text-white transition-colors">Publications</button>
          </div>
          <p className="text-[10px]">
            &copy; {new Date().getFullYear()} Dr. Praveen Satish surgical portal. Integrated with 256-bit security. All rights reserved.
          </p>
        </div>
      </footer>

      {/* APPOINTMENT BOOKER DIALOG MODAL LAYOUT */}
      <AppointmentBooker 
        isOpen={isBookerOpen} 
        onClose={() => setIsBookerOpen(false)} 
      />

    </div>
  );
}
