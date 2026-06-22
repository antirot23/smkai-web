import { motion } from 'framer-motion';
import { RotlessText } from '../components/ui/RotlessText';
import { ROADMAP_DATA } from '@/constants';

export const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-12 md:py-16 bg-bg-primary relative overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-border-default to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 md:mb-20">
          <RotlessText variant="label" className="text-primary-default mb-4 uppercase tracking-widest font-bold">What Comes Next</RotlessText>
          <RotlessText variant="boom" className="mb-6">The Antirot Roadmap</RotlessText>
          <RotlessText variant="normal" className="text-text-secondary max-w-2xl mx-auto">
            We are building in public. Here is our path to creating the thinking platform of tomorrow.
          </RotlessText>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[24px] left-0 right-0 h-[2px] bg-border-subtle z-0">
            <motion.div 
              className="h-full bg-primary-default"
              initial={{ width: "0%" }}
              whileInView={{ width: "50%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {ROADMAP_DATA.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-row md:flex-col items-center md:items-start group"
              >
                {/* Mobile line (vertical) */}
                <div className="md:hidden w-[2px] h-full absolute left-[23px] bg-border-subtle -z-10" />
                
                {/* Dot */}
                <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center shrink-0 mb-0 md:mb-6 z-10 bg-bg-primary transition-colors duration-300
                  ${index === 0 || index === 1 ? 'border-primary-default text-primary-default' : 'border-border-default text-text-tertiary group-hover:border-primary-light'}`}
                >
                  <span className="text-sm font-bold">{index + 1}</span>
                </div>
                
                {/* Content */}
                <div className="ml-6 md:ml-0 bg-bg-secondary md:bg-transparent p-5 md:p-0 rounded-2xl md:rounded-none border md:border-none border-border-subtle w-full transition-transform duration-300 group-hover:-translate-y-1">
                  <RotlessText variant="title" className={`mb-2 text-lg ${index === 0 || index === 1 ? 'text-primary-default' : 'text-text-primary'}`}>
                    {step.phase}
                  </RotlessText>
                  <RotlessText variant="chat" className="text-text-secondary text-sm">
                    {step.description}
                  </RotlessText>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};
