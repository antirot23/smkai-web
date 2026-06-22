import { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../sections/HeroSection';
import { MissionSection } from '../sections/MissionSection';
import { FeaturedProductSection } from '../sections/FeaturedProductSection';
import { FeaturesSection } from '../sections/FeaturesSection';
import { VisionSection } from '../sections/VisionSection';
import { TimelineSection } from '../sections/TimelineSection';
import { FAQSection } from '../sections/FAQSection';
import { ContactSection } from '../sections/ContactSection';

export const HomePage = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-bg-primary">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <MissionSection />
        <FeaturedProductSection />
        <FeaturesSection />
        <VisionSection />
        <TimelineSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
