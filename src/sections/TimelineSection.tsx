import { motion } from 'framer-motion';
import { RotlessText } from '../components/ui/RotlessText';
import { TIMELINE_DATA } from '@/constants';

export const TimelineSection = () => {
  return (
    <section id="timeline" className="py-12 bg-bg-secondary relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <RotlessText variant="label" className="text-primary-default mb-4 uppercase tracking-widest">Our Journey</RotlessText>
          <RotlessText variant="boom">The story so far.</RotlessText>
        </div>

        <div className="relative border-l border-border-default md:border-l-0 md:border-t md:flex md:justify-between pt-10 md:pt-0">
          {/* Timeline Line for Desktop */}
          <div className="hidden md:block absolute top-0 left-0 w-full h-[1px] bg-border-default" />
          
          {TIMELINE_DATA.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 md:pl-0 md:pt-10 mb-16 md:mb-0 md:w-1/4 md:px-4"
            >
              {/* Dot indicator */}
              <div className="absolute left-[-5px] md:left-1/2 md:-top-[5px] md:-translate-x-1/2 w-[11px] h-[11px] rounded-full bg-primary-default ring-4 ring-bg-secondary" />
              
              <RotlessText variant="title" className="text-primary-default mb-2 md:text-center font-bold">
                {event.year}
              </RotlessText>
              <RotlessText variant="label" className="mb-3 md:text-center text-text-primary">
                {event.title}
              </RotlessText>
              <RotlessText variant="chat" className="md:text-center">
                {event.description}
              </RotlessText>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
