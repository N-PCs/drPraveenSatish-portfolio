import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Expertise from './components/Expertise';
import Portfolio from './components/Portfolio';
import AcademicTimeline from './components/AcademicTimeline';
import Publications from './components/Publications';
import FaqAccordion from './components/FaqAccordion';
import ContactHub from './components/ContactHub';
import { ArrowUp, Award, CheckCircle, ShieldAlert,Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor intersection of sections to highlight correct Nav elements dynamically
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);

    // Setup basic IntersectionObserver for crisp active section highlighting
    const sections = ['home-section', 'expertise', 'portfolio', 'academic', 'research', 'faq-section', 'contact'];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Convert element ID to actual matched nav ID
              if (id === 'home-section') setActiveSection('home');
              else if (id === 'faq-section') setActiveSection('faq');
              else setActiveSection(id);
            }
          });
        },
        { threshold: 0.25, rootMargin: '-10% 0px -40% 0px' } // triggers when header has scrolled past
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  const navigateToSection = (sectionId: string) => {
    let targetId = sectionId === 'home' ? 'home-section' : sectionId;
    if (sectionId === 'faq') targetId = 'faq-section';
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 100; // Offset for navbar height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-brand-slate-light text-brand-primary flex flex-col font-sans selection:bg-brand-teal/20 selection:text-brand-teal-dark">
      
      {/* Global Clinical and Academic Navigation */}
      <Navbar onNavigate={navigateToSection} activeSection={activeSection} />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Hero Section with abstract anatomical and board badges */}
        <Hero onNavigate={navigateToSection} />

        {/* Stats Section */}
        <Stats />

        {/* Core Expertise Matrix */}
        <Expertise />

        {/* Pre-Op & Post-Op Surgical Evidence Case Portfolio */}
        <Portfolio />

        {/* Academic Timeline & Board Governance pedigree */}
        <AcademicTimeline />

        {/* PubMed style Research & Invited Keynotes Publications list */}
        <Publications />

        {/* Interactive FAQ specifically for pre-operative and post-operative surgical care guidance */}
        <FaqAccordion />

        {/* Patient and Colleague Consultation Inquiry center */}
        <ContactHub />
      </main>

      {/* Trust-Focused Medical Footprint Footer */}
      <footer className="bg-brand-primary text-gray-400 border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
            
            {/* Left Brand Summary Column */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center space-x-2">
                <span className="font-display font-semibold text-lg text-white tracking-tight">
                  DR. PRAVEEN SATISH
                </span>
                
              </div>
              <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
                Dual Board certified Senior Maxillofacial Surgeon with 20+ years of clinical and academic leadership and 1,000+ operative cases in oral oncology, complex reconstruction, and facial trauma. Internationally active leader— Senate member and Examination Director for the International Board (IBCSOMS) and AOCMF faculty.
              </p>
              
              {/* Licensure & Registry note */}
              <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded px-3 py-1.5 text-[10px] text-gray-300 font-mono">
                <CheckCircle className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                <span>Certified Specialist: Dental Council of India (Reg. No: A-5211)</span>
              </div>
            </div>

            {/* Middle Quick Links Sitemap Column */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
                Navigational Sitemap
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button onClick={() => navigateToSection('home')} className="hover:text-brand-teal transition-all text-left block cursor-pointer">Home Hub</button>
                <button onClick={() => navigateToSection('expertise')} className="hover:text-brand-teal transition-all text-left block cursor-pointer">Expertise</button>
                <button onClick={() => navigateToSection('portfolio')} className="hover:text-brand-teal transition-all text-left block cursor-pointer">Portfolio Cases</button>
                <button onClick={() => navigateToSection('academic')} className="hover:text-brand-teal transition-all text-left block cursor-pointer">Timeline Pedigree</button>
                <button onClick={() => navigateToSection('research')} className="hover:text-brand-teal transition-all text-left block cursor-pointer">Science & Papers</button>
                <button onClick={() => navigateToSection('faq')} className="hover:text-brand-teal transition-all text-left block cursor-pointer">FAQ Prep</button>
                <button onClick={() => navigateToSection('contact')} className="hover:text-brand-teal transition-all text-left block cursor-pointer font-semibold text-brand-teal">Consultation Portal</button>
              </div>
            </div>

            {/* Right Urgent Clinical Triage Disclaimer */}
            <div className="md:col-span-4 space-y-4 bg-white/5 border border-white/10 p-5 rounded-lg">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0" />
                <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
                  Clinical & Legal Triage Disclaimer
                </h4>
              </div>
              <p className="text-[11px] text-gray-400 leading-relaxed font-sans">
                Notice: The information presented across this clinical portfolio is curated to demonstrate board-caliber surgical outcomes for peers and prospective patients. It does not replace on-call direct head/neck emergency evaluations.
              </p>
              <div className="text-[10px] font-mono text-gray-400">
                Goa Medical College Emergency Room is operational 24/7/365 for immediate pan-facial trauma/airway block management.
              </div>
            </div>

          </div>

          {/* Sub Footer Legal Credits and Boards logos */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-sans">
            <div>
              &copy; {new Date().getFullYear()} Dr. Praveen Satish. All academic and clinical rights reserved.
            </div>
            
            <div className="flex items-center space-x-4 text-gray-500">
              <span className="hover:text-brand-teal transition-colors">HIPAA Compliant Intakes</span>
              <span>&bull;</span>
              <span className="hover:text-brand-teal transition-colors">Evidence-Based Medicine</span>
              <span>&bull;</span>
              <span className="hover:text-brand-teal transition-colors">AOCMF Alumnus</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating back-to-top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-40 p-3 bg-brand-teal hover:bg-brand-teal/95 text-white rounded-full shadow-xl shadow-brand-teal/20 transition-all hover:-translate-y-0.5 cursor-pointer"
            title="Scroll to top"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
