import { RotlessText } from '../components/ui/RotlessText';
import { GravityGame } from '../components/ui/GravityGame';

export const MinigameSection = () => {
  return (
    <section className="py-12 bg-bg-primary relative overflow-hidden border-t border-border-subtle/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <RotlessText variant="label" className="text-primary-default mb-4 uppercase tracking-widest">AntiRot Gravity</RotlessText>
            <RotlessText variant="boom" className="mb-6">Take a break.</RotlessText>
            <RotlessText variant="normal" className="text-text-secondary max-w-md mx-auto lg:mx-0">
              We're building platforms for deeper thinking, but everyone needs a tiny break. Pull back the mascot and release to shatter the ROT.
            </RotlessText>
          </div>
          
          <div className="flex-1 w-full max-w-sm mx-auto lg:mx-0">
            <GravityGame />
          </div>
        </div>
      </div>
    </section>
  );
};
