import React from 'react';
import { cn } from '@/utils/cn';

export type RotlessTextVariant = 
  | 'scream' | 'shout' | 'yell' | 'boom'
  | 'loud1' | 'loud2' | 'loud3'
  | 'title' | 'label' | 'normal' | 'chat' | 'tiny'
  | 'accent';

interface RotlessTextProps extends React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement> {
  variant?: RotlessTextVariant;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<RotlessTextVariant, string> = {
  scream: 'text-[42px] md:text-[56px] leading-[1.2] font-bold tracking-tight',
  shout: 'text-[36px] md:text-[42px] leading-[1.2] font-bold tracking-tight',
  yell: 'text-[28px] md:text-[36px] leading-[1.2] font-semibold tracking-tight',
  boom: 'text-[24px] md:text-[32px] leading-[1.2] font-semibold',
  loud1: 'text-[24px] md:text-[28px] leading-[1.3] font-bold',
  loud2: 'text-[20px] md:text-[24px] leading-[1.3] font-semibold',
  loud3: 'text-[18px] md:text-[20px] leading-[1.4] font-semibold',
  title: 'text-[18px] leading-[26px] font-semibold',
  label: 'text-[16px] leading-[24px] font-medium',
  normal: 'text-[16px] leading-[24px] font-normal text-text-secondary',
  chat: 'text-[14px] leading-[22px] font-normal text-text-secondary',
  tiny: 'text-[12px] leading-[18px] font-normal text-text-tertiary',
  accent: 'font-accent text-[48px] md:text-[64px] leading-[1] text-primary-default',
};

export const RotlessText = React.forwardRef<HTMLElement, RotlessTextProps>(
  ({ variant = 'normal', as: Component = 'p', className, children, ...props }, ref) => {
    return (
      <Component
        // @ts-ignore
        ref={ref}
        className={cn(variantStyles[variant], className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

RotlessText.displayName = 'RotlessText';
