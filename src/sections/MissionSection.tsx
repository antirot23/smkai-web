import { motion } from 'framer-motion';
import { RotlessText } from '../components/ui/RotlessText';
import { MISSION_DATA } from '@/constants';
import { GravityGame } from '../components/ui/GravityGame';

export const MissionSection = () => {
  return (
    <section id="mission" className="py-20 md:py-32 bg-bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <RotlessText variant="label" className="text-primary-default mb-6 uppercase tracking-widest font-bold">
              {MISSION_DATA.title}
            </RotlessText>
            
            <RotlessText variant="boom" className="mb-8 text-4xl md:text-5xl leading-tight">
              {MISSION_DATA.headline}
            </RotlessText>
            
            <RotlessText variant="normal" className="text-text-secondary text-lg md:text-xl leading-relaxed mb-12 max-w-xl">
              {MISSION_DATA.description}
            </RotlessText>
            
            <div className="flex flex-col gap-8 border-l border-border-default pl-6 md:pl-8">
              {MISSION_DATA.points.map((point, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[33px] md:-left-[41px] top-1 w-[14px] h-[14px] rounded-full bg-bg-primary border-[3px] border-border-subtle group-hover:border-primary-default transition-colors duration-300" />
                  <RotlessText variant="title" className="mb-2 text-text-primary text-[17px]">{point.title}</RotlessText>
                  <RotlessText variant="chat" className="text-text-tertiary text-[15px] max-w-md">{point.description}</RotlessText>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-auto min-h-[450px] lg:h-[600px] w-full rounded-[40px] overflow-hidden shadow-2xl bg-bg-secondary border border-border-subtle flex flex-col items-center justify-center p-6 sm:p-8 lg:p-12 group"
          >
            {/* Subtle radial gradient background */}
            {/* Subtle radial gradient background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
            
            <div className="flex-1 w-full flex flex-col items-center justify-center relative z-10 pt-4">
              <GravityGame />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
