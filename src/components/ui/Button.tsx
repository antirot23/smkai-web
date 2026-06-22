import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { cn } from '@/utils/cn';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "variant"> {
  variant?: ButtonVariant;
  magnetic?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primary-default text-white hover:bg-primary-hover border border-transparent shadow-sm',
  secondary: 'bg-primary-light text-primary-dark hover:bg-[#FDE68A] border border-transparent',
  outline: 'bg-transparent border-[1.5px] border-primary-default text-primary-default hover:bg-bg-subtle',
  ghost: 'bg-transparent text-primary-default hover:bg-bg-subtle border border-transparent',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', magnetic = true, children, ...props }, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!magnetic || !buttonRef.current) return;
      const { clientX, clientY } = e;
      const { width, height, left, top } = buttonRef.current.getBoundingClientRect();
      const x = (clientX - (left + width / 2)) * 0.2; // magnetic strength
      const y = (clientY - (top + height / 2)) * 0.2;
      setPosition({ x, y });
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    return (
      <motion.button
        ref={(node) => {
          // @ts-ignore
          buttonRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node;
        }}
        className={cn(
          'relative inline-flex items-center justify-center px-6 py-3 font-medium text-[15px] leading-[19px] rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-default focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
          variantStyles[variant],
          className
        )}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
