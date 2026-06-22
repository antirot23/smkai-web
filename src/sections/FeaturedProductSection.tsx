import { motion, useScroll, useTransform } from 'framer-motion';
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

  return (
    <section id="product" className="py-32 bg-bg-dark text-text-inverse relative overflow-hidden">
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
              <a href="https://instagram.com/antirot" target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto px-8">Get {COMPANY.productName}</Button>
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-7 relative w-full pt-10 lg:pt-0"
            style={{ y }}
          >
            {/* Horizontal Scrolling Gallery */}
            <div className="relative w-full overflow-hidden rounded-[40px] p-4 lg:p-8 bg-white/5 border border-white/10 backdrop-blur-xl">
              <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory pb-8 pt-4 px-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <style>{`
                  .scrollbar-hide::-webkit-scrollbar {
                      display: none;
                  }
                `}</style>
                {SCREENSHOTS.map((src, i) => (
                  <motion.div 
                    key={i} 
                    className="min-w-[280px] sm:min-w-[320px] max-w-[320px] aspect-[9/19] rounded-[30px] overflow-hidden snap-center shrink-0 border-[6px] border-[#2A2A2A] shadow-2xl relative"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                    whileHover={{ y: -10 }}
                  >
                    {/* Dynamic Island Placeholder */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-20"></div>
                    
                    <img src={src} alt={`App Screenshot ${i + 1}`} className="w-full h-full object-cover" />
                  </motion.div>
                ))}
              </div>
              
              <div className="absolute bottom-4 left-0 w-full flex justify-center gap-2 pointer-events-none">
                <RotlessText variant="tiny" className="text-text-tertiary uppercase tracking-widest bg-bg-dark/80 px-4 py-1 rounded-full backdrop-blur-md">Swipe to explore</RotlessText>
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
