import { useState } from 'react';
import { RotlessText } from '../components/ui/RotlessText';
import { Button } from '../components/ui/Button';
import { COMPANY } from '@/constants';

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('hello@smkaiventures.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-bg-primary relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="bg-primary-light/30 rounded-[40px] p-10 md:p-12 border border-border-subtle text-center relative overflow-hidden">
          {/* Subtle Aurora Hint */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#E3C48A]/20 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#F3E2BE]/20 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            <RotlessText variant="boom" className="mb-4">Let's build the future.</RotlessText>
            <RotlessText variant="normal" className="mb-10 text-text-secondary max-w-md mx-auto">
              Whether you're an investor, a partner, or believe in {COMPANY.name}'s mission, we'd love to hear from you.
            </RotlessText>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-lg">
              <div className="flex items-center justify-between w-full bg-white rounded-2xl p-2 border border-border-subtle shadow-sm">
                <div className="flex items-center gap-3 pl-3">
                  <svg className="w-5 h-5 text-text-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <RotlessText variant="label" className="text-text-primary">hello@smkaiventures.com</RotlessText>
                </div>
                <Button variant="ghost" onClick={handleCopy} className="px-4 py-2 text-sm bg-bg-secondary hover:bg-border-subtle">
                  {copied ? 'Copied!' : 'Copy'}
                </Button>
              </div>
              
              <a href="https://www.instagram.com/joinantirot/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto shrink-0">
                <Button className="w-full px-6 py-4">Join Instagram</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
