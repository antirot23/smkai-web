import { motion, useScroll, useTransform } from 'framer-motion';
import { RotlessText } from '../components/ui/RotlessText';
import { Button } from '../components/ui/Button';
import { HERO_DATA, COMPANY } from '@/constants';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { JumboText } from '../components/ui/JumboText';

const INSTAGRAM_URL = "https://www.instagram.com/k_shastri03/";

export const HeroSection = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section className="relative min-h-[90svh] flex items-center justify-center overflow-hidden bg-bg-primary pt-16 pb-12">
      {/* Premium Aurora Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-[5%] left-[15%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full blur-[100px] md:blur-[130px] opacity-40 mix-blend-multiply"
          style={{ backgroundColor: '#E3C48A' }}
          animate={{ x: [-20, 20], y: [-15, 15], scale: [1, 1.05] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'mirror', ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-[30%] right-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full blur-[100px] md:blur-[130px] opacity-30 mix-blend-multiply"
          style={{ backgroundColor: '#C89B63' }}
          animate={{ x: [20, -20], y: [15, -15], scale: [1.05, 1] }}
          transition={{ duration: 25, repeat: Infinity, repeatType: 'mirror', ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute -bottom-[5%] left-[25%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full blur-[100px] md:blur-[130px] opacity-40 mix-blend-multiply"
          style={{ backgroundColor: '#F3E2BE' }}
          animate={{ x: [-15, 15], y: [20, -20], scale: [1, 1.03] }}
          transition={{ duration: 22, repeat: Infinity, repeatType: 'mirror', ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
        <motion.div
          style={{ opacity }}
          className="flex flex-col items-center"
        >


          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)', y: 40, scale: 0.95 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center mb-6"
          >
            <div className="mb-4 text-text-tertiary uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm font-bold flex items-center gap-3">
               <span className="hidden md:block w-8 h-[1px] bg-border-strong"></span>
               SMKAI Ventures Pvt. Ltd. presents
               <span className="hidden md:block w-8 h-[1px] bg-border-strong"></span>
            </div>
            <div className="text-[4.5rem] md:text-[7.5rem] leading-none tracking-tighter drop-shadow-sm">
              <JumboText text="AntiRot" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, filter: 'blur(12px)', y: 50, scale: 0.98 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <RotlessText variant="scream" className="w-full md:max-w-4xl mx-auto mb-6 text-[3.5rem] md:text-[5rem] leading-[1.1] md:leading-[1.05] tracking-tight text-text-primary">
              The social platform that rewards <span className="font-accent text-primary-default font-normal px-2 italic">thinking</span>, not scrolling.
            </RotlessText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)', y: 30 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <RotlessText variant="loud3" className="max-w-2xl mx-auto text-text-secondary mb-12 font-normal text-[1.1rem] md:text-[1.25rem] leading-relaxed">
              {HERO_DATA.subheadline}
            </RotlessText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full"
          >
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto group">
              <Button className="px-8 py-4 text-[15px] font-medium w-full shadow-lg shadow-primary-default/20 flex items-center justify-center gap-2 group-hover:scale-[1.02] transition-transform">
                Connect on Instagram
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#product" className="w-full sm:w-auto">
              <Button variant="outline" className="px-8 py-4 text-[15px] font-medium bg-bg-elevated/40 backdrop-blur-md w-full border-border-default hover:bg-bg-elevated hover:border-text-primary transition-all">
                See How It Works
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Premium Scroll Indicator */}
      <motion.div style={{ opacity }} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <motion.div 
          className="flex flex-col items-center text-text-tertiary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
