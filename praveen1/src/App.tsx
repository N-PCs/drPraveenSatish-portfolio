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

     {/* FIXED STATIC BRANDING FOOTER */}
      <footer className="bg-black py-12 px-4 md:px-8 border-t border-white/5 text-center text-xs text-slate-500" id="global-footer">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left font-mono">
            <p className="text-slate-300 font-extrabold">DR. PRAVEEN SATISH</p>
            <p className="text-[12px] text-slate-500">Dual Board-Certified Maxillofacial & Oral Onco Surgeon</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-[11px] text-slate-400">
            <button onClick={() => handleScrollToSection('profile')} className="hover:text-white transition-colors">Home</button>
            <button onClick={() => handleScrollToSection('portfolio')} className="hover:text-white transition-colors">Case Portfolio</button>
            <button onClick={() => handleScrollToSection('timeline')} className="hover:text-white transition-colors">Academic Milestones</button>
            <button onClick={() => handleScrollToSection('publications')} className="hover:text-white transition-colors">Publications</button>
          </div>
          <p className="text-[12px]">
            &copy; {new Date().getFullYear()} Dr. Praveen Satish.All rights reserved.
          </p>
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
