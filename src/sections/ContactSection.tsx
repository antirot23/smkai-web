import { useState } from 'react';
import { RotlessText } from '../components/ui/RotlessText';
import { Button } from '../components/ui/Button';
import { COMPANY } from '@/constants';

export const ContactSection = () => {
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
    <section id="contact" className="py-12 bg-bg-primary relative overflow-hidden">
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
            
            <div className="flex flex-col gap-4 items-center justify-center w-full max-w-3xl mb-8">
              <div className="flex flex-col md:flex-row gap-4 w-full">
                <div className="flex items-center justify-between w-full flex-1 bg-white rounded-2xl p-2 border border-border-subtle shadow-sm min-w-max">
                  <div className="flex items-center gap-3 pl-3">
                    <svg className="w-5 h-5 text-text-tertiary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <RotlessText variant="label" className="text-text-primary whitespace-nowrap">Antirot12@gmail.com</RotlessText>
                  </div>
                  <Button variant="ghost" onClick={handleCopyEmail} className="px-4 py-2 text-sm bg-bg-secondary hover:bg-border-subtle ml-2 shrink-0">
                    {copiedEmail ? 'Copied!' : 'Copy'}
                  </Button>
                </div>

                <div className="flex items-center justify-between w-full flex-1 bg-white rounded-2xl p-2 border border-border-subtle shadow-sm min-w-max">
                  <div className="flex items-center gap-3 pl-3">
                    <svg className="w-5 h-5 text-text-tertiary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <RotlessText variant="label" className="text-text-primary whitespace-nowrap">+91 91311 40406</RotlessText>
                  </div>
                  <Button variant="ghost" onClick={handleCopyPhone} className="px-4 py-2 text-sm bg-bg-secondary hover:bg-border-subtle ml-2 shrink-0">
                    {copiedPhone ? 'Copied!' : 'Copy'}
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-center w-full bg-white rounded-2xl p-4 border border-border-subtle shadow-sm">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-text-tertiary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <RotlessText variant="label" className="text-text-primary text-center">54 Bhat Gali, Bahadurganj, Ujjain, 456010</RotlessText>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3NG6TAiwc6lQxkNLwVegiMS19ck20qpmhcORqQObo83xPww/viewform?usp=sharing&ouid=116044772597740770916" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto shrink-0">
                <Button variant="outline" className="w-full sm:w-auto flex items-center justify-center gap-2 group border-border-default hover:bg-bg-elevated hover:border-text-secondary">
                  Join the Beta
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
