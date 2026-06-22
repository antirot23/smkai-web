import { motion, useScroll, useTransform } from 'framer-motion';
import { RotlessText } from '../components/ui/RotlessText';
import { Button } from '../components/ui/Button';
import { HERO_DATA, COMPANY } from '@/constants';

export const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-bg-primary pt-20">
      {/* Subtle Background Elements */}
      <motion.div 
        className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-primary-light/30 blur-[100px] -z-10"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-[#E0C513]/10 blur-[80px] -z-10"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

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
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="https://instagram.com/antirot" target="_blank" rel="noopener noreferrer">
              <Button className="px-8 py-4 text-base">Join {COMPANY.productName} on Instagram</Button>
            </a>
            <a href="#vision">
              <Button variant="outline" className="px-8 py-4 text-base bg-bg-elevated/50 backdrop-blur-sm">Read Our Vision</Button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
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
      </motion.div>
    </section>
  );
};
