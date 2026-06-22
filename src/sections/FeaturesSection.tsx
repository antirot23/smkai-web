import { motion } from 'framer-motion';
import { RotlessText } from '../components/ui/RotlessText';
import { CHAI_TAPRI_FEATURES } from '@/constants';

const icons = [
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>,
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>,
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
  </svg>
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
  }
};

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-bg-primary relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-light/30 rounded-full blur-[120px] -z-10 pointer-events-none opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 md:mb-24">
          <RotlessText variant="label" className="text-primary-default mb-4 uppercase tracking-widest font-bold">Chai Tapri</RotlessText>
          <RotlessText variant="boom" className="mb-6 max-w-3xl mx-auto leading-tight text-4xl md:text-5xl">
            An Indianised community-first discussion ecosystem.
          </RotlessText>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {CHAI_TAPRI_FEATURES.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group p-10 rounded-[32px] bg-bg-secondary border border-border-subtle hover:border-primary-default/30 transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-10 opacity-0 group-hover:opacity-5 transition-opacity duration-500 transform translate-x-1/4 -translate-y-1/4 scale-150 pointer-events-none">
                {icons[index % icons.length]}
              </div>
              
              <div className="w-16 h-16 rounded-[20px] bg-bg-primary border border-border-subtle flex items-center justify-center text-primary-default mb-8 group-hover:scale-105 group-hover:shadow-sm transition-all duration-500 relative z-10">
                {icons[index % icons.length]}
              </div>
              
              <RotlessText variant="title" className="mb-4 text-xl md:text-2xl relative z-10">{feature.title}</RotlessText>
              <RotlessText variant="chat" className="text-text-secondary text-[16px] leading-relaxed relative z-10">{feature.description}</RotlessText>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
