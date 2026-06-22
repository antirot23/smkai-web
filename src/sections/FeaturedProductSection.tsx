import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { RotlessText } from '../components/ui/RotlessText';
import { Button } from '../components/ui/Button';
import { PRODUCT_DATA, COMPANY } from '@/constants';

// Import screenshots
import screen1 from '@/assets/screenshots/DemoD.jpeg';
import screen2 from '@/assets/screenshots/DemoA.jpeg';
import screen3 from '@/assets/screenshots/DemoB.jpeg';
import screen4 from '@/assets/screenshots/DemoC.jpeg';

const SCREENSHOTS = [screen1, screen2, screen3, screen4];

export const FeaturedProductSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SCREENSHOTS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="product" className="py-20 bg-bg-dark text-text-inverse relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQTMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djI2aDJWMzRoLTJ6bS0yIDBoLTJWMGgydjM0em0tMjIuNDUgMTQuNTRsMS40MTQgMS40MTRMMjUgMzguNTVsLTEuNDE0LTEuNDE0LTEwLjU0NyAxMC41NHptLTItMmwtMS40MTQtMS40MTRMMCAzNy42NzZsMS40MTQgMS40MTQgMTAuNTQ3LTEwLjU0N3ptMjQuOS0yNC45TDI1IDEuMTc2bDEuNDE0LTEuNDE0TDQwLjA4NiA4LjE4NCAzOC42NzIgOS41OThsLTEuNDE1LTEuNDE1em0tMi0ybC0xLjQxNC0xLjQxNEwxNy42NzIgMCAxNi4yNTggMS40MTRsMTAuNTQ3IDEwLjU0NyAxLjQxNC0xLjQxNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <RotlessText variant="label" className="text-primary-default mb-4 uppercase tracking-widest">Featured Product</RotlessText>
            <RotlessText variant="scream" className="text-white mb-6">{PRODUCT_DATA.title}</RotlessText>
            <RotlessText variant="normal" className="text-text-tertiary max-w-2xl mx-auto">
              {PRODUCT_DATA.subtitle}
            </RotlessText>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <motion.div 
            className="lg:col-span-5 flex flex-col gap-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {PRODUCT_DATA.features.map((feature, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md hover:bg-white/10 transition-colors duration-300">
                <RotlessText variant="title" className="text-white mb-2">{feature.title}</RotlessText>
                <RotlessText variant="chat" className="text-text-tertiary">
                  {feature.description}
                </RotlessText>
              </div>
            ))}
            
            <div className="mt-4">
              <a href="https://www.instagram.com/joinantirot/" target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto px-8">Get {COMPANY.productName}</Button>
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-7 relative w-full pt-10 lg:pt-0 flex items-center justify-center"
            style={{ y }}
          >
            {/* Auto-scrolling Static Phone Mockup */}
            <div className="relative w-[280px] sm:w-[320px] aspect-[9/19] bg-bg-primary rounded-[40px] border-[10px] border-[#2A2A2A] shadow-2xl overflow-hidden flex flex-col z-20">
              {/* Dynamic Island */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-30 shadow-[0_0_10px_rgba(0,0,0,0.5)]"></div>
              
              {/* Slideshow Container */}
              <div className="relative w-full h-full bg-black overflow-hidden">
                <AnimatePresence initial={false}>
                  <motion.img
                    key={currentIndex}
                    src={SCREENSHOTS[currentIndex]}
                    alt={`App Screenshot ${currentIndex + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </AnimatePresence>
              </div>
            </div>
            
            {/* Floating Glow Elements */}
            <motion.div 
              className="absolute top-1/4 -right-10 w-48 h-48 bg-primary-default/20 rounded-full blur-3xl -z-10 pointer-events-none"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-1/4 -left-10 w-64 h-64 bg-success/10 rounded-full blur-3xl -z-10 pointer-events-none"
              animate={{ y: [0, 30, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
