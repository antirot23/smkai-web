import { motion, useScroll, useTransform } from 'framer-motion';
import { RotlessText } from '../components/ui/RotlessText';
import { Button } from '../components/ui/Button';
import { HERO_DATA, COMPANY } from '@/constants';

export const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-[90svh] flex items-center justify-center overflow-hidden bg-bg-primary pt-16">
      {/* Premium Aurora Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-[10%] left-[20%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full blur-[100px] md:blur-[140px] opacity-50 mix-blend-multiply"
          style={{ backgroundColor: '#E3C48A' }}
          animate={{ x: [-30, 30], y: [-20, 20], scale: [1, 1.08] }}
          transition={{ duration: 18, repeat: Infinity, repeatType: 'mirror', ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-[40%] right-[10%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] rounded-full blur-[100px] md:blur-[140px] opacity-40 mix-blend-multiply"
          style={{ backgroundColor: '#C89B63' }}
          animate={{ x: [30, -30], y: [20, -20], scale: [1.08, 1] }}
          transition={{ duration: 22, repeat: Infinity, repeatType: 'mirror', ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute -bottom-[10%] left-[30%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full blur-[100px] md:blur-[140px] opacity-50 mix-blend-multiply"
          style={{ backgroundColor: '#F3E2BE' }}
          animate={{ x: [-20, 20], y: [30, -30], scale: [1, 1.05] }}
          transition={{ duration: 25, repeat: Infinity, repeatType: 'mirror', ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
        <motion.div
          style={{ y: y1, opacity }}
          className="flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)', y: 50, scale: 0.95 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-default bg-bg-elevated/50 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-success"></span>
            <RotlessText variant="chat" className="font-medium text-text-primary">{HERO_DATA.badge}</RotlessText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, filter: 'blur(15px)', y: 60, scale: 0.9 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <RotlessText variant="scream" className="max-w-4xl mx-auto mb-6">
              The future belongs to those who <span className="font-accent text-primary-default font-normal px-2">think</span> the most.
            </RotlessText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)', y: 40 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <RotlessText variant="loud3" className="max-w-2xl mx-auto text-text-secondary mb-10 font-normal">
              {HERO_DATA.subheadline}
            </RotlessText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 relative z-20"
          >
            <a href="https://www.instagram.com/joinantirot/" target="_blank" rel="noopener noreferrer">
              <Button className="px-8 py-4 text-base w-full sm:w-auto">Join {COMPANY.productName} on Instagram</Button>
            </a>
            <a href="#vision" className="w-full sm:w-auto">
              <Button variant="outline" className="px-8 py-4 text-base bg-bg-elevated/50 backdrop-blur-sm w-full">Read Our Vision</Button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - hidden on very short mobile screens to prevent overlap */}
      <motion.div 
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <RotlessText variant="tiny" className="uppercase tracking-widest text-text-tertiary">Scroll</RotlessText>
        <motion.div 
          className="w-[1px] h-12 bg-border-default relative overflow-hidden"
        >
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-primary-default"
            animate={{ top: ['-50%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-4 h-4 text-primary-default" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};
