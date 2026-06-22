import { motion } from 'framer-motion';
import mascotImgSrc from '@/assets/mascot.png';

export const JumboText = ({ text }: { text: string }) => {
  return (
    <span className="inline-flex items-center gap-[2px] md:gap-1">
      {text.split('').map((char, index) => {
        const isMascot = char.toLowerCase() === 'o';
        
        return (
          <motion.span
            key={index}
            animate={{
              y: isMascot ? 0 : [0, Math.random() * -15 - 5, Math.random() * 10, 0],
              rotate: isMascot ? 0 : [0, Math.random() * 30 - 15, Math.random() * -30 + 15, 0],
              scale: [1, Math.random() * 0.5 + 1.1, Math.random() * 0.2 + 0.9, 1],
            }}
            transition={{
              duration: Math.random() * 2 + 1.5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: Math.random() * 1,
            }}
            className={`inline-block ${isMascot ? 'px-1' : 'text-primary-default font-black drop-shadow-sm hover:text-text-primary transition-colors cursor-crosshair'}`}
          >
            {isMascot ? (
              <img src={mascotImgSrc} alt="O" className="w-[0.75em] h-[0.75em] mx-[0.05em] object-contain drop-shadow-md pointer-events-none inline-block align-baseline" />
            ) : char === ' ' ? '\u00A0' : char}
          </motion.span>
        );
      })}
    </span>
  );
};
