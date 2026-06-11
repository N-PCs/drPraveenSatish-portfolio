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
import { Stats } from './components/Stats';
import { Expertise } from './components/Expertise';
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
    const sections = ['profile', 'portfolio', 'expertise', 'timeline', 'publications'];
    
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
        <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-20 flex flex-col justify-center overflow-hidden bg-gradient-to-br from-brand-ice/40 via-white to-brand-pale/30" id="profile">
          
          {/* Subtle medical grid illustration background */}
          <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
            <img 
              src="/src/assets/images/medical_bg_1780591975939.png" 
              alt="Medical background grid illustration"
              className="w-full h-full object-cover mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 mt-4">
            
            {/* Left Column: Core clinical copy and action items */}
            <div className="flex-1 text-left space-y-5 sm:space-y-6 max-w-2xl order-2 lg:order-1">   
              {/* Huge bold modern heading */}
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark tracking-tight leading-[1.08]"
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
            <div className="flex-1 relative w-full max-w-[280px] sm:max-w-sm lg:max-w-none flex justify-center order-1 lg:order-2" id="hero-media-panel">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[4/5] sm:aspect-[4/5] rounded-none overflow-hidden bg-gradient-to-tr from-brand-pale to-brand-ice p-1.5 border border-brand-slate/30 shadow-lg"
              >
                {/* Doctor main portrait */}
                <img
                  src="/dr-profile.jpeg"
                  alt="Dr. Praveen Satish Senior Surgeon holding consult"
                  className="w-full h-full object-cover rounded-none shadow-inner"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>    
              {/* QUICK STATS STRIP */}
                  <Stats />

        </section>

        {/* CLINICAL PORTFOLIO GRID PREVIEW (THE PEEKING CARDS LAYOUT) */}
        {/* CORE EXPERTISE / SURGICAL DOMAINS SECTION */}
        <Expertise />

                {/* Situating underneath the hero text overlapping dynamically */}
        <PortfolioCases />

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
