import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
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

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Beta Banner */}
      <motion.div 
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Branding */}
          <a href="#" className="flex items-center gap-4 group">
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
                className="text-base font-medium text-text-secondary hover:text-primary-default transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-text-primary ml-auto flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Premium Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
                className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40 h-screen"
                style={{ top: '0' }}
              />
              
              {/* Floating Menu Card */}
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="lg:hidden absolute top-[100%] left-4 right-4 mt-4 bg-bg-elevated/95 backdrop-blur-xl border border-border-subtle rounded-[32px] shadow-2xl z-50 overflow-hidden"
              >
                <div className="px-6 py-8 flex flex-col gap-2">
                  <div className="mb-6 pb-6 border-b border-border-subtle">
                    <RotlessText variant="title" className="text-text-primary text-2xl font-bold mb-1">{COMPANY.legalName}</RotlessText>
                  </div>
                  
                  {navLinks.map((link, i) => (
                    <motion.a
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.1, ease: [0.16, 1, 0.3, 1] }}
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xl font-medium text-text-primary hover:text-primary-default py-3 rounded-2xl transition-colors flex items-center justify-between group"
                    >
                      {link.name}
                      <ArrowRight size={18} className="text-text-tertiary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </motion.a>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-6 pt-6 border-t border-border-subtle"
                  >
                    <a 
                      href={INSTAGRAM_URL}
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-text-primary text-bg-primary font-medium active:scale-95 transition-transform"
                    >
                      Join Beta <ArrowRight size={16} />
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
};
