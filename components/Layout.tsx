import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();

  // Use the Cloudinary URL provided - Optimized for performance
  const LOGO_URL = "https://res.cloudinary.com/diduw1fmf/image/upload/f_auto,q_auto/v1768229079/drewimages-logo-b_x34u39.png";

  const toggleMenu = () => {
    if (isMenuOpen) {
      handleClose();
    } else {
      setIsMenuOpen(true);
    }
  };

  const handleClose = () => {
    // Only trigger if currently open to avoid double-firing or state issues
    if (isMenuOpen) {
      setIsClosing(true);
      setIsMenuOpen(false);
      // Wait for the background transition (500ms) to finish
      setTimeout(() => {
        setIsClosing(false);
      }, 500);
    }
  };

  // Close menu on route change (in case navigation happens without link click, e.g. back button)
  useEffect(() => {
    if (isMenuOpen) {
      handleClose();
    }
  }, [location]);

  // Handle scroll effect for nav
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine header style based on path and scroll state
  const isHome = location.pathname === '/';
  const isTransparent = isHome && !scrolled && !isMenuOpen;

  // Header Background Logic
  // 1. If Menu Open OR Closing: Force Solid Warm Cream (#F3E6C8) to maintain legibility during transition.
  // 2. If Transparent state: Transparent.
  // 3. If Scrolled: Glassy Cream.
  const isMenuVisualState = isMenuOpen || isClosing;

  const headerBgClass = isMenuVisualState
    ? 'bg-[#F3E6C8] transition-colors duration-300' 
    : (isTransparent 
        ? 'bg-transparent border-transparent py-4 md:py-6' 
        : 'bg-paper/95 backdrop-blur-md border-b border-ink/10 shadow-sm py-3');
    
  // Text & Icon Colors
  // If Menu Visual State (Open/Closing) OR Not Transparent: Ink (Black).
  const shouldUseDarkText = isMenuVisualState || !isTransparent;
  
  const navTextClass = shouldUseDarkText
    ? 'text-ink hover:text-burgundy'
    : 'text-paper hover:text-white';

  const logoFilterClass = shouldUseDarkText
    ? 'opacity-100' // Normal Black Logo
    : 'invert brightness-0 opacity-100'; // White Logo

  const mobileButtonClass = shouldUseDarkText
    ? 'text-ink border-ink/20' 
    : 'text-paper border-paper/40';

  return (
    <div className="min-h-screen flex flex-col font-sans text-ink bg-paper bg-grain selection:bg-burgundy selection:text-paper">
      {/* Navigation */}
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${headerBgClass}`}
      >
        {/* Mobile Gradient Overlay for legibility ONLY when transparent and closed */}
        {isTransparent && !isMenuVisualState && (
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent -z-10 md:hidden pointer-events-none transition-opacity duration-300 h-24"></div>
        )}

        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-12 md:h-16 relative z-50">
          {/* Logo */}
          <Link to="/" className="relative group block shrink-0 z-50" onClick={handleClose}>
             {!logoError ? (
               <img 
                 src={LOGO_URL} 
                 alt="DrewImages Studio" 
                 onError={() => setLogoError(true)}
                 className={`h-8 md:h-14 w-auto object-contain transition-all duration-300 group-hover:opacity-80 ${logoFilterClass}`}
               />
             ) : (
               <span className={`font-serif italic text-2xl md:text-3xl tracking-tight ${shouldUseDarkText ? 'text-ink' : 'text-paper'}`}>
                 DrewImages<span className="opacity-50 font-sans text-xs uppercase tracking-widest not-italic ml-1">.studio</span>
               </span>
             )}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-bold uppercase tracking-widest transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-current after:transition-all hover:after:w-full ${
                  location.pathname === link.path 
                    ? 'after:w-full' 
                    : ''
                } ${navTextClass}`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className={`ml-4 text-xs font-bold uppercase tracking-widest px-6 py-3 transition-colors shadow-sm ${isTransparent ? 'bg-paper text-ink hover:bg-white' : 'bg-ink text-paper hover:bg-burgundy'}`}>
              Inquire
            </Link>
          </nav>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-3 z-50">
             {/* Mobile Inquire Button (Hide when menu is open to clean up UI) */}
             {!isMenuOpen && (
               <Link 
                  to="/contact" 
                  className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 border rounded-full transition-colors ${mobileButtonClass}`}
                >
                  Inquire
               </Link>
             )}

             {/* Menu Toggle */}
             <button 
                onClick={toggleMenu}
                className={`p-1 focus:outline-none ${shouldUseDarkText ? 'text-ink' : 'text-paper'}`}
                aria-label="Toggle menu"
              >
                <div className="w-6 h-4 flex flex-col justify-between items-end">
                  <span className={`w-full h-0.5 bg-current transition-transform duration-300 origin-right ${isMenuOpen ? '-rotate-45 -translate-y-[1px] -translate-x-[1px]' : ''}`} />
                  <span className={`w-3/4 h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                  <span className={`w-full h-0.5 bg-current transition-transform duration-300 origin-right ${isMenuOpen ? 'rotate-45 -translate-y-[1px] -translate-x-[1px]' : ''}`} />
                </div>
             </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {/* 
            ANIMATION LOGIC:
            - The Container (Background) transitions over 500ms.
            - The Content (Links) transitions independently.
            - This creates a 'curtain' effect where content vanishes/appears, then the background curtain lifts.
        */}
        <div 
          className={`fixed inset-0 bg-[#F3E6C8] z-40 flex flex-col pt-24 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden 
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
        >
          {/* Inner container for Staggered Fade of Content */}
          <div className={`flex-grow flex flex-col items-center justify-center space-y-8 p-6 transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 translate-y-4 delay-0'}`}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleClose}
                className="font-serif text-5xl text-ink italic hover:text-burgundy transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="w-12 h-px bg-ink/10 my-8"></div>
             <Link
                to="/contact"
                onClick={handleClose}
                className="font-sans font-bold text-xs uppercase tracking-widest bg-ink text-paper px-10 py-4 shadow-lg active:scale-95 transition-transform"
              >
                Inquire About Project
              </Link>
          </div>
          
          {/* Mobile Menu Footer */}
          <div className={`p-8 text-center border-t border-ink/5 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 delay-200' : 'opacity-0'}`}>
             <p className="text-[10px] font-bold uppercase tracking-widest text-ink/30">NYC — Worldwide</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-ink text-paper py-16 relative">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            {/* Footer Logo - Inverted for dark background */}
            <div className="mb-8">
              {!logoError ? (
                 <img 
                   src={LOGO_URL} 
                   alt="DrewImages.studio" 
                   className="h-10 w-auto invert grayscale opacity-90" 
                 />
              ) : (
                 <span className="font-serif italic text-2xl text-paper tracking-tight">
                   DrewImages<span className="opacity-50 font-sans text-xs uppercase tracking-widest not-italic ml-1">.studio</span>
                 </span>
              )}
            </div>
            
            <div className="flex gap-6 text-xs font-bold uppercase tracking-widest text-paper/60">
                <a href="mailto:hello@drewbordeaux.com" className="hover:text-white transition-colors">Email</a>
                <a href="https://www.instagram.com/drewimages/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            </div>
          </div>

          <div className="text-right">
             <p className="text-xs uppercase tracking-widest text-paper/40 mb-1">Location</p>
             <p className="font-serif italic text-xl text-paper">NYC / Hudson Valley</p>
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-white/10 text-[10px] uppercase tracking-widest text-paper/30 flex justify-between">
            <span>&copy; {new Date().getFullYear()} DrewImages.studio.</span>
            <span>All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;