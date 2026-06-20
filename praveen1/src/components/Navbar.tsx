import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, CalendarRange } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Expertise', id: 'expertise' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Academic', id: 'academic' },
    { label: 'Research', id: 'research' },
    { label: 'FAQ', id: 'faq' },
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <>
      {/* Main Bar */}
      <nav
        id="main-nav"
        className={`sticky top-0 z-50 w-full transition-all duration-350 ${
          isScrolled
            ? 'bg-white/95 shadow-md border-b border-gray-200/60 py-3 backdrop-blur-md'
            : 'bg-white py-4 border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo: Dr. Praveen Satish */}
            <div
              id="logo-container"
              className="flex flex-col cursor-pointer group"
              onClick={() => handleLinkClick('home')}
            >
              <div className="flex items-center space-x-2">
                <span className="font-display font-semibold text-lg sm:text-xl tracking-tight text-brand-primary group-hover:text-brand-teal transition-colors">
                  DR. PRAVEEN SATISH
                </span> 
              </div>
              <span className="text-xs text-gray-500 font-sans tracking-wide mt-0.5 font-medium">
                Senior Maxillofacial & Oral Onco Surgeon
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex space-x-1">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`px-3.5 py-2 text-sm font-medium tracking-wide rounded-md transition-all duration-200 cursor-pointer ${
                      activeSection === link.id
                        ? 'text-brand-teal bg-brand-teal/5 border-b-2 border-brand-teal'
                        : 'text-gray-600 hover:text-brand-primary hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              {/* Consultation / Referral Call to Action */}
              <button
                id="cta-nav"
                onClick={() => handleLinkClick('contact')}
                className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-brand-teal hover:bg-brand-teal/90 rounded-xl border border-brand-teal/20 transition-all active:scale-[0.98] shadow-sm hover:shadow-brand-teal/20 group cursor-pointer"
              >
                <CalendarRange className="w-4 h-4 text-white group-hover:-translate-y-0.5 transition-transform" />
                Intake / Referrals
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden items-center space-x-3">
              <a
                href="tel:+919881954606"
                className="p-2.5 bg-brand-teal/10 rounded-full text-brand-teal focus:outline-none flex sm:hidden"
                title="Phone Emergency Contact"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                id="mobile-menu-btn"
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-brand-primary p-2 focus:outline-none hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden border-t border-gray-200 bg-white"
            >
              <div className="px-4 pt-3 pb-6 space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`block w-full text-left px-4 py-3 rounded-md text-base font-medium transition-colors cursor-pointer ${
                      activeSection === link.id
                        ? 'text-brand-teal bg-brand-teal/10 border-l-4 border-brand-teal pl-3'
                        : 'text-gray-600 hover:text-brand-primary hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
                  <a
                    href="tel:+919881954606"
                    className="flex justify-center items-center gap-2 py-3 border border-brand-teal/30 rounded-xl text-brand-teal text-sm font-semibold hover:bg-brand-teal/5"
                  >
                    <Phone className="w-4 h-4" />
                    Emergency: +91 9881954606
                  </a>
                  <button
                    onClick={() => handleLinkClick('contact')}
                    className="flex justify-center items-center gap-2 py-3 bg-brand-teal rounded-xl text-white font-medium text-sm hover:bg-brand-teal/90"
                  >
                    <CalendarRange className="w-4 h-4" />
                    Book intake / Refer patient
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
