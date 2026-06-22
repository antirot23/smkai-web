import { motion } from 'framer-motion';
import { RotlessText } from '../components/ui/RotlessText';
import { FOUNDER_NOTE, CURRENT_BUILDING, RECENT_PROGRESS } from '@/constants';
import { CheckCircle2, CircleDashed } from 'lucide-react';

export const BuiltBySection = () => {
  return (
    <section id="built-by" className="py-16 md:py-24 bg-bg-secondary relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <RotlessText variant="label" className="text-primary-default mb-4 uppercase tracking-widest font-bold">Built by SMKAI Ventures</RotlessText>
          <RotlessText variant="boom" className="mb-4">Small team. Big ambition.</RotlessText>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Founder Note */}
          <motion.div 
            className="lg:col-span-6 bg-bg-primary rounded-3xl p-8 md:p-10 border border-border-subtle shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-primary-default font-bold">
                <span className="text-lg">”</span>
              </div>
              <RotlessText variant="title" className="text-text-primary">{FOUNDER_NOTE.title}</RotlessText>
            </div>
            
            <p className="text-text-secondary leading-relaxed text-[17px] mb-8">
              {FOUNDER_NOTE.content}
            </p>
            
            <div className="pt-6 border-t border-border-subtle">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-border-default border-2 border-bg-primary flex items-center justify-center text-xs font-medium text-text-secondary overflow-hidden">
                    KS
                  </div>
                  <div className="w-10 h-10 rounded-full bg-border-default border-2 border-bg-primary flex items-center justify-center text-xs font-medium text-text-secondary overflow-hidden">
                    AM
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-text-primary">Kaustubhi & Anshul</span>
                  <span className="text-xs text-text-tertiary">Founders, SMKAI Ventures</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Progress & Changelog */}
          <motion.div 
            className="lg:col-span-6 flex flex-col gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Currently Building */}
            <div className="bg-bg-primary rounded-3xl p-8 border border-border-subtle shadow-sm">
              <RotlessText variant="title" className="text-text-primary mb-6 flex items-center gap-2">
                Currently Building
              </RotlessText>
              
              <div className="flex flex-col gap-4">
                {CURRENT_BUILDING.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    {item.status === 'done' ? (
                      <CheckCircle2 className="w-5 h-5 text-success group-hover:scale-110 transition-transform" />
                    ) : (
                      <CircleDashed className="w-5 h-5 text-primary-default animate-spin-slow" />
                    )}
                    <span className={`text-[15px] font-medium ${item.status === 'done' ? 'text-text-secondary line-through opacity-70' : 'text-text-primary'}`}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Progress / Changelog */}
            <div className="bg-bg-primary rounded-3xl p-8 border border-border-subtle shadow-sm">
              <RotlessText variant="title" className="text-text-primary mb-6 flex items-center gap-2">
                Recent Progress
              </RotlessText>
              
              <ul className="flex flex-col gap-3 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[2px] before:bg-border-subtle">
                {RECENT_PROGRESS.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 relative z-10">
                    <div className="w-[16px] h-[16px] rounded-full bg-bg-primary border-4 border-primary-light mt-1 shrink-0" />
                    <span className="text-[15px] text-text-secondary pt-[2px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
};
