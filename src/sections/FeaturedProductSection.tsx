import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { RotlessText } from '../components/ui/RotlessText';
import { PRODUCT_DATA } from '@/constants';

// Import screenshots
import screen1 from '@/assets/screenshots/DemoD.jpeg';
import screen2 from '@/assets/screenshots/DemoA.jpeg';
import screen3 from '@/assets/screenshots/DemoB.jpeg';
import screen4 from '@/assets/screenshots/DemoC.jpeg';

const SCREENSHOTS = [screen1, screen2, screen3, screen4];

export const FeaturedProductSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SCREENSHOTS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="product" className="py-12 md:py-16 bg-bg-dark text-text-inverse relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQTMiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djI2aDJWMzRoLTJ6bS0yIDBoLTJWMGgydjM0em0tMjIuNDUgMTQuNTRsMS40MTQgMS40MTRMMjUgMzguNTVsLTEuNDE0LTEuNDE0LTEwLjU0NyAxMC41NHptLTItMmwtMS40MTQtMS40MTRMMCAzNy42NzZsMS40MTQgMS40MTQgMTAuNTQ3LTEwLjU0N3ptMjQuOS0yNC45TDI1IDEuMTc2bDEuNDE0LTEuNDE0TDQwLjA4NiA4LjE4NCAzOC42NzIgOS41OThsLTEuNDE1LTEuNDE1em0tMi0ybC0xLjQxNC0xLjQxNEwxNy42NzIgMCAxNi4yNTggMS40MTRsMTAuNTQ3IDEwLjU0NyAxLjQxNC0xLjQxNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <RotlessText variant="label" className="text-primary-default mb-6 uppercase tracking-widest font-bold">The Solution</RotlessText>
            <RotlessText variant="scream" className="text-white mb-6 md:text-5xl">{PRODUCT_DATA.title}</RotlessText>
            <RotlessText variant="normal" className="text-text-tertiary max-w-2xl mx-auto text-lg">
              {PRODUCT_DATA.subtitle}
            </RotlessText>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          <motion.div 
            className="lg:col-span-5 flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {PRODUCT_DATA.features.map((feature, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-[32px] backdrop-blur-md hover:bg-white/10 transition-colors duration-300 group">
                <RotlessText variant="title" className="text-white mb-3 text-xl group-hover:text-primary-default transition-colors">{feature.title}</RotlessText>
                <RotlessText variant="chat" className="text-text-tertiary leading-relaxed text-[15px]">
                  {feature.description}
                </RotlessText>
              </div>
            ))}
          </motion.div>

          <motion.div 
            className="lg:col-span-7 relative w-full pt-10 lg:pt-0 flex items-center justify-center"
            style={{ y }}
          >
            {/* Auto-scrolling Static Phone Mockup */}
            <div className="relative w-[300px] sm:w-[340px] aspect-[9/19] bg-[#111] rounded-[48px] border-[12px] border-[#2A2A2A] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col z-20 transform transition-transform hover:scale-[1.02] duration-500">
              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full z-30 shadow-[0_0_10px_rgba(0,0,0,0.8)] border border-white/5 flex items-center justify-between px-3">
                <div className="w-2 h-2 rounded-full bg-success/80 animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-primary-default/50" />
              </div>
              
              {/* Slideshow Container */}
              <div className="relative w-full h-full bg-black overflow-hidden">
                <AnimatePresence initial={false} mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={SCREENSHOTS[currentIndex]}
                    alt={`Antirot App Screenshot ${currentIndex + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  />
                </AnimatePresence>
                
                {/* Internal gradient for premium feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
              </div>
            </div>
            
            {/* Floating Glow Elements */}
            <motion.div 
              className="absolute top-1/4 -right-10 w-64 h-64 bg-primary-default/20 rounded-full blur-[80px] -z-10 pointer-events-none mix-blend-screen"
              animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-1/4 -left-10 w-80 h-80 bg-success/10 rounded-full blur-[100px] -z-10 pointer-events-none mix-blend-screen"
              animate={{ y: [0, 40, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
