import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', id: 'profile' },
    { label: 'Expertise', id: 'expertise' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Academics', id: 'timeline' },
    { label: 'Publications', id: 'publications' }
  ];

  const handleNav = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-3 left-0 right-0 z-50 px-3 md:px-8 max-w-7xl mx-auto"
        id="global-navbar"
      >
        <div className="backdrop-blur-xl bg-white/90 border border-slate-200/80 rounded-none px-3 md:px-4 py-2.5 flex items-center justify-between shadow-lg shadow-slate-100/50 transition-all duration-300">

          {/* Left: Logo */}
          <div
            onClick={() => handleNav('profile')}
            className="cursor-pointer group flex items-center gap-2 pl-1"
            id="nav-logo-container"
          >
            <div>
              <div className="text-brand-dark font-black text-[20px] sm:text-sm md:text-base group-hover:text-brand-slate transition-colors duration-300 font-sans">
                Dr. PRAVEEN SATISH
              </div>
              <div className="text-[10px] text-brand-charcoal tracking-widest font-mono font-bold -mt-0.5 hidden sm:block">
                SENIOR MAXILLOFACIAL &amp; ONCO SURGEON
              </div>
            </div>
          </div>

          {/* Center: Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 rounded-none p-1 border border-slate-200/50" id="nav-menu">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`px-4 py-1.5 rounded-none text-xs font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                  activeSection === item.id
                    ? 'bg-brand-dark text-white shadow-sm'
                    : 'text-brand-charcoal hover:text-brand-dark hover:bg-brand-pale/40'
                }`}
                id={`nav-link-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right: CTA + hamburger */}
          <div className="flex items-center gap-2 pr-1" id="nav-cta-container">
            {/* Book button — always visible */}
            <button
              onClick={() => onNavigate('contact')}
              className="bg-brand-dark hover:bg-brand-deep text-white text-[10px] sm:text-xs font-bold px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-none flex items-center gap-1.5 shadow-md shadow-slate-200/30 transition-all duration-300 hover:scale-102 active:scale-95 group cursor-pointer"
              id="nav-book-now-button"
            >
              <span className="hidden sm:inline">Book</span>
              <span className="hidden md:inline"> Appointment</span>
              <span className="sm:hidden">Appt.</span>
            </button>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden h-8 w-8 flex items-center justify-center border border-brand-pale bg-brand-ice rounded-none text-brand-dark cursor-pointer"
              aria-label="Open navigation menu"
              id="nav-hamburger"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-[60] bg-brand-dark/40 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-72 bg-white border-l border-brand-pale shadow-2xl flex flex-col lg:hidden"
              id="mobile-nav-drawer"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-brand-pale">
                <div>
                  <p className="text-brand-dark font-black text-sm">DR. PRAVEEN SATISH</p>
                  <p className="text-[9px] text-brand-charcoal font-mono font-bold tracking-widest">MAXILLOFACIAL &amp; ONCO SURGEON</p>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="h-8 w-8 flex items-center justify-center border border-brand-pale bg-brand-ice rounded-none text-brand-dark cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Nav Items */}
              <nav className="flex flex-col p-4 gap-1 flex-1">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNav(item.id)}
                    className={`w-full text-left px-4 py-3 text-sm font-bold tracking-wide transition-all rounded-none cursor-pointer flex items-center justify-between group ${
                      activeSection === item.id
                        ? 'bg-brand-dark text-white'
                        : 'text-brand-charcoal hover:bg-brand-ice hover:text-brand-dark border border-transparent hover:border-brand-pale'
                    }`}
                    id={`nav-mobile-drawer-${item.id}`}
                  >
                    <span>{item.label}</span>
                    {activeSection === item.id && (
                      <span className="h-1.5 w-1.5 rounded-none bg-brand-ice" />
                    )}
                  </button>
                ))}
              </nav>

              {/* Drawer CTA footer */}
              <div className="p-4 border-t border-brand-pale">
                <button
                  onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }}
                  className="w-full bg-brand-dark text-white font-black text-xs py-3.5 rounded-none flex items-center justify-center gap-2 cursor-pointer"
                >
                  Book Appointment
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
