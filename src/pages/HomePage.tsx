import { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../sections/HeroSection';
import { MissionSection } from '../sections/MissionSection';
import { FeaturedProductSection } from '../sections/FeaturedProductSection';
import { FeaturesSection } from '../sections/FeaturesSection';
import { VisionSection } from '../sections/VisionSection';
import { BuiltBySection } from '../sections/BuiltBySection';
import { FoundingTeamSection } from '../sections/FoundingTeamSection';
import { RoadmapSection } from '../sections/RoadmapSection';
import { FAQSection } from '../sections/FAQSection';
import { MinigameSection } from '../sections/MinigameSection';
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
      <main className="flex-grow pt-10 md:pt-14">
        <HeroSection />
        <MissionSection />
        <FeaturedProductSection />
        <FeaturesSection />
        <VisionSection />
        <BuiltBySection />
        <FoundingTeamSection />
        <RoadmapSection />
        <FAQSection />
        <MinigameSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
