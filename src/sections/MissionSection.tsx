import { motion } from 'framer-motion';
import { RotlessText } from '../components/ui/RotlessText';
import { MISSION_DATA } from '@/constants';
import poster from '@/assets/mission-poster.png';

export const MissionSection = () => {
  return (
    <section id="mission" className="py-20 bg-bg-primary relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <RotlessText variant="label" className="text-primary-default mb-4 uppercase tracking-widest">{MISSION_DATA.title}</RotlessText>
            <RotlessText variant="boom" className="mb-6">
              {MISSION_DATA.headline}
            </RotlessText>
            <RotlessText variant="normal" className="text-text-secondary max-w-lg mb-8">
              {MISSION_DATA.description}
            </RotlessText>
            
            <div className="flex flex-col gap-6">
              {MISSION_DATA.points.map((point, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary-light flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-primary-default" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <RotlessText variant="title" className="mb-1">{point.title}</RotlessText>
                    <RotlessText variant="chat">{point.description}</RotlessText>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[500px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl"
          >
            <img src={poster} alt="AntiRot App Experience" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
