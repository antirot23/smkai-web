import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { RotlessText } from '../ui/RotlessText';
import { cn } from '@/utils/cn';
import { COMPANY } from '@/constants';
import logo from '@/assets/logo.png';

const navLinks = [
  { name: 'The Problem', href: '#mission' },
  { name: 'Antirot', href: '#product' },
  { name: 'Chai Tapri', href: '#features' },
  { name: 'Why It Matters', href: '#vision' },
];

const INSTAGRAM_URL = "https://www.instagram.com/k_shastri03/";

const easeOutCubic = [0.33, 1, 0.68, 1];
const easeInOutCubic = [0.65, 0, 0.35, 1];

const backdropVariants = {
  hidden: { opacity: 0, transition: { duration: 0.3, ease: easeInOutCubic } },
  show: { opacity: 1, transition: { duration: 0.4, ease: easeOutCubic } }
};

const panelVariants = {
  hidden: { opacity: 0, y: 16, transition: { duration: 0.3, ease: easeInOutCubic } },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOutCubic } }
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: easeOutCubic } }
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Accessibility and scroll lock for mobile menu
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false);
        }
      };
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
      // Return focus to the hamburger button when closed
      if (buttonRef.current) {
        buttonRef.current.focus();
      }
    }
  }, [mobileMenuOpen]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Beta Banner */}
      <motion.div 
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: easeOutCubic }}
        className="bg-primary-default text-bg-primary py-2 px-4 text-center relative z-50 flex items-center justify-center gap-3 overflow-hidden"
      >
        <span className="text-sm font-medium tracking-wide">✨ Antirot Beta is Opening</span>
        <span className="hidden md:inline text-sm opacity-80">- We're looking for early testers to shape the future.</span>
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-bold underline underline-offset-2 hover:opacity-80 transition-opacity flex items-center gap-1">
          Connect on Insta <ArrowRight size={14} />
        </a>
      </motion.div>

      {/* Main Navbar */}
      <motion.header
        className={cn(
          'transition-all duration-500 w-full border-b backdrop-blur-md py-4',
          isScrolled ? 'bg-bg-primary/95 shadow-sm border-border-subtle' : 'bg-transparent border-transparent shadow-none'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: easeOutCubic }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Branding */}
          <a href="#" className="flex items-center gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-default rounded-xl">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl shadow-sm border border-black/5 flex items-center justify-center p-1 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
              <img src={logo} alt="SMKAI Logo" className="w-full h-full object-contain" />
            </div>
            <div className="hidden sm:flex flex-col">
              <RotlessText variant="title" className="text-text-primary text-base leading-tight">{COMPANY.legalName}</RotlessText>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-text-secondary hover:text-primary-default transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-default rounded-md px-2 py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            ref={buttonRef}
            className="lg:hidden p-2 text-text-primary ml-auto flex items-center justify-center transition-colors outline-none focus:outline-none"
            style={{ WebkitTapHighlightColor: 'transparent' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <div className="relative w-[22px] h-[16px]">
              <span className={cn(
                "absolute left-0 w-full h-[2px] bg-current rounded-full transition-all duration-300 ease-[cubic-bezier(0.33,1,0.68,1)]", 
                mobileMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
              )} />
              <span className={cn(
                "absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-current rounded-full transition-opacity duration-300 ease-[cubic-bezier(0.33,1,0.68,1)]", 
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              )} />
              <span className={cn(
                "absolute left-0 w-full h-[2px] bg-current rounded-full transition-all duration-300 ease-[cubic-bezier(0.33,1,0.68,1)]", 
                mobileMenuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
              )} />
            </div>
          </button>
        </div>

        {/* Premium Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                variants={backdropVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                onClick={() => setMobileMenuOpen(false)}
                className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-md z-40 h-[100dvh]"
                style={{ top: '0' }}
                aria-hidden="true"
              />
              
              {/* Floating Menu Card */}
              <motion.div
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
                variants={panelVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="lg:hidden absolute top-[100%] left-4 right-4 mt-4 bg-bg-elevated/95 backdrop-blur-2xl border border-border-subtle rounded-3xl shadow-2xl z-50 overflow-hidden"
              >
                <motion.div 
                  className="px-8 py-10 flex flex-col gap-2"
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                >
                  
                  {navLinks.map((link) => (
                    <motion.a
                      variants={itemVariants}
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xl font-gelica font-medium text-primary-default hover:text-primary-hover py-3.5 transition-colors duration-300 flex items-center justify-center text-center rounded-xl active:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-default"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                  
                  <motion.div
                    variants={itemVariants}
                    className="mt-2 pt-4 border-t border-border-subtle"
                  >
                    <a 
                      href={INSTAGRAM_URL}
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-primary-default hover:bg-primary-hover text-white font-medium text-[17px] active:scale-[0.98] transition-all duration-300 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-default focus-visible:ring-offset-2"
                    >
                      Connect with us on Instagram
                    </a>
                  </motion.div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
};
