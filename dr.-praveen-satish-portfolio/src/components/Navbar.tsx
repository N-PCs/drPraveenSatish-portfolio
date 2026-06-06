import React from 'react';
import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

interface NavbarProps {
  onNavigate: (section: string) => void;
  activeSection: string;
  onOpenBooker: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection, onOpenBooker }) => {
  const menuItems = [
    { label: 'View Profile', id: 'profile' },
    { label: 'Surgical Portfolio', id: 'portfolio' },
    { label: 'Academic Timeline', id: 'timeline' },
    { label: 'Publications', id: 'publications' },
  ];

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 max-w-7xl mx-auto"
      id="global-navbar"
    >
      <div className="backdrop-blur-xl bg-white/90 border border-slate-200/80 rounded-none px-4 py-2.5 flex items-center justify-between shadow-lg shadow-slate-100/50 transition-all duration-300">
        
        {/* Left Side: Logo */}
        <div 
          onClick={() => onNavigate('profile')} 
          className="cursor-pointer group flex items-center gap-2 pl-3"
          id="nav-logo-container"
        >
          {/* Custom Heltro Style Medical Cross Chevron Logo */}
          <div className="flex items-center justify-center p-1 bg-brand-ice rounded-none group-hover:bg-brand-dark transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-dark group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
          <div>
            <div className="text-brand-dark font-black tracking-tight text-sm md:text-base group-hover:text-brand-slate transition-colors duration-300 font-sans">
              DR. PRAVEEN SATISH
            </div>
            <div className="text-[9px] text-brand-charcoal tracking-widest font-mono font-bold -mt-0.5 hidden sm:block">
              MAXILLOFACIAL & ONCO SURGEON
            </div>
          </div>
        </div>

        {/* Center: Minimalist pill-shaped menu */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 rounded-none p-1 border border-slate-200/50" id="nav-menu">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`px-4 py-1.5 rounded-none text-xs font-bold tracking-wide transition-all duration-300 ${
                activeSection === item.id 
                  ? 'bg-brand-dark text-white shadow-sm scale-102' 
                  : 'text-brand-charcoal hover:text-brand-dark hover:bg-brand-pale/40'
              }`}
              id={`nav-link-${item.id}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Side: Appointment CTA */}
        <div className="flex items-center gap-2 pr-1" id="nav-cta-container">
          {/* Mobile menu trigger equivalent */}
          <div className="lg:hidden flex items-center gap-1 bg-slate-100/80 rounded-none p-1 border border-slate-200/40 mr-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-2.5 py-1 rounded-none text-[10px] font-bold tracking-tight transition-all ${
                  activeSection === item.id 
                    ? 'bg-brand-dark text-white' 
                    : 'text-brand-charcoal'
                }`}
                id={`nav-mobile-${item.id}`}
              >
                {item.label.split(' ')[1] || item.label}
              </button>
            ))}
          </div>

          <button
            onClick={onOpenBooker}
            className="bg-brand-dark hover:bg-brand-deep text-white text-xs font-bold px-4 md:px-5 py-2.5 rounded-none flex items-center gap-1.5 shadow-md shadow-slate-200/30 transition-all duration-300 hover:scale-102 active:scale-95 group cursor-pointer"
            id="nav-book-now-button"
          >
            <Calendar className="w-3.5 h-3.5 text-brand-ice group-hover:rotate-12 transition-transform" />
            <span>Book Appointment</span>
            <span className="hidden sm:inline group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

      </div>
    </motion.header>
  );
};
