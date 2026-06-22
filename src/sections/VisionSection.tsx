import { motion } from 'framer-motion';
import { RotlessText } from '../components/ui/RotlessText';
import { VISION_DATA, COMPANY } from '@/constants';

export const VisionSection = () => {
  return (
    <section id="vision" className="py-32 bg-bg-dark text-text-inverse relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-default opacity-5" />
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <svg className="w-12 h-12 mx-auto text-primary-default mb-8 opacity-80" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.714-4.676-10.39-10.39-10.39H2v15.782h12.017zM22 21v-7.391c0-5.714-4.676-10.39-10.39-10.39h-1.626v15.782H22z" />
          </svg>
          
          <RotlessText variant="boom" className="text-white mb-8 leading-relaxed font-normal">
            "{VISION_DATA.quote}"
          </RotlessText>

          <RotlessText variant="chat" className="text-text-tertiary mb-8 max-w-lg mx-auto">
            {VISION_DATA.footer}
          </RotlessText>
          
          <RotlessText variant="label" className="text-primary-default uppercase tracking-widest">
            The {COMPANY.name} Vision
          </RotlessText>
        </motion.div>
      </div>
    </section>
  );
};
