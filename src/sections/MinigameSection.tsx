import { useState } from 'react';
import { motion } from 'framer-motion';
import { RotlessText } from '../components/ui/RotlessText';
import { Button } from '../components/ui/Button';
import appLogo from '@/assets/antirot-app-logo.png';

export const MinigameSection = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('Antirot12@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+91 91311 40406');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section className="py-12 bg-bg-primary relative overflow-hidden border-t border-border-subtle/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Contact Box */}
          <div className="flex-1 w-full max-w-2xl mx-auto lg:mx-0">
            <div className="bg-primary-light/30 rounded-[40px] p-8 border border-border-subtle text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#E3C48A]/20 blur-[60px] rounded-full pointer-events-none" />
              
              <div className="relative z-10 flex flex-col items-center">
                <RotlessText variant="boom" className="mb-8">Let's build the future.</RotlessText>
                
                <div className="flex flex-col gap-4 items-center justify-center w-full mb-8">
                  <div className="flex flex-col xl:flex-row gap-4 w-full">
                    <div className="flex items-center justify-between w-full flex-1 bg-white rounded-2xl p-2 border border-border-subtle shadow-sm min-w-max">
                      <div className="flex items-center gap-3 pl-3">
                        <RotlessText variant="label" className="text-text-primary whitespace-nowrap">Antirot12@gmail.com</RotlessText>
                      </div>
                      <Button variant="ghost" onClick={handleCopyEmail} className="px-4 py-2 text-sm bg-bg-secondary hover:bg-border-subtle ml-2 shrink-0">
                        {copiedEmail ? 'Copied!' : 'Copy'}
                      </Button>
                    </div>

                    <div className="flex items-center justify-between w-full flex-1 bg-white rounded-2xl p-2 border border-border-subtle shadow-sm min-w-max">
                      <div className="flex items-center gap-3 pl-3">
                        <RotlessText variant="label" className="text-text-primary whitespace-nowrap">+91 91311 40406</RotlessText>
                      </div>
                      <Button variant="ghost" onClick={handleCopyPhone} className="px-4 py-2 text-sm bg-bg-secondary hover:bg-border-subtle ml-2 shrink-0">
                        {copiedPhone ? 'Copied!' : 'Copy'}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center w-full bg-white rounded-2xl p-4 border border-border-subtle shadow-sm">
                    <RotlessText variant="label" className="text-text-primary text-center">54 Bhat Gali, Bahadurganj, Ujjain, 456010</RotlessText>
                  </div>
                </div>
                
                <a href="https://www.instagram.com/k_shastri03/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto shrink-0">
                  <Button variant="outline" className="w-full sm:w-auto flex items-center justify-center gap-2 group border-border-default hover:bg-bg-elevated hover:border-text-secondary">
                    Join Instagram
                  </Button>
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Side: Logo */}
          <div className="flex-1 w-full max-w-sm mx-auto lg:mx-0 group flex flex-col items-center justify-center">
            <motion.div 
              className="flex-1 w-full flex items-center justify-center relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <img src={appLogo} alt="AntiRot App Logo" className="w-[70%] max-w-[320px] h-auto object-contain drop-shadow-xl filter transition-transform duration-700 rounded-3xl" />
            </motion.div>
            
            <div className="mt-8 mb-4 relative z-10">
              <span className="text-sm md:text-base uppercase tracking-[0.25em] text-text-tertiary font-bold group-hover:text-primary-default transition-colors duration-500">
                Talk Nerdy To Me.
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
