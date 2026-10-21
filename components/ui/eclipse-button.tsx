'use client';

import * as React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Props for the EclipseButton component.
 */
interface EclipseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The text label to display inside the button. */
  text?: string;
  /** Visual style variant controlling color and border. */
  variant?: 'primary' | 'outline' | 'ghost' | 'destructive' | 'gold';
  /** Size preset controlling padding and font size. */
  size?: 'default' | 'sm' | 'lg' | 'icon';
  /** If true, shows a loading spinner and disables interaction. */
  isLoading?: boolean;
  /** Icon element to display before the text. */
  leftIcon?: React.ReactNode;
  /** Icon element to display after the text. */
  rightIcon?: React.ReactNode;
}

/**
 * A highly interactive luxury button featuring subtle magnetic pull
 * and a smooth eclipse spotlight effect on hover.
 */
const EclipseButton = React.forwardRef<HTMLButtonElement, EclipseButtonProps>(
  (
    {
      text,
      variant = 'primary',
      size = 'default',
      isLoading = false,
      leftIcon,
      rightIcon,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const [isHovered, setIsHovered] = React.useState(false);
    const [btnDimensions, setBtnDimensions] = React.useState({ w: 200, h: 48 });

    const mouseX = useMotionValue(100);
    const mouseY = useMotionValue(24);

    const springConfig = { stiffness: 200, damping: 20 };
    const maskX = useSpring(mouseX, springConfig);
    const maskY = useSpring(mouseY, springConfig);

    // Subtle magnetic shift only when hovered
    const buttonX = useTransform(maskX, (x) =>
      isHovered ? (x - btnDimensions.w / 2) * 0.08 : 0
    );
    const buttonY = useTransform(maskY, (y) =>
      isHovered ? (y - btnDimensions.h / 2) * 0.08 : 0
    );

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!buttonRef.current || disabled || isLoading) return;
      const rect = buttonRef.current.getBoundingClientRect();
      setBtnDimensions({ w: rect.width, h: rect.height });
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
      setIsHovered(true);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!buttonRef.current || disabled || isLoading) return;
      const rect = buttonRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      mouseX.set(btnDimensions.w / 2);
      mouseY.set(btnDimensions.h / 2);
    };

    const variantStyles = {
      primary: {
        base: 'bg-[#171717] text-white border-[#171717] shadow-sm',
        overlay: 'bg-[#C8A45D] text-[#171717]',
      },
      outline: {
        base: 'bg-transparent text-[#171717] border-[#171717]/30 hover:border-[#171717]',
        overlay: 'bg-[#171717] text-white',
      },
      gold: {
        base: 'bg-[#C8A45D] text-[#171717] border-[#C8A45D] shadow-sm',
        overlay: 'bg-[#171717] text-[#C8A45D]',
      },
      ghost: {
        base: 'bg-transparent text-neutral-700 border-transparent',
        overlay: 'bg-neutral-100 text-neutral-900',
      },
      destructive: {
        base: 'bg-red-600 text-white border-red-600',
        overlay: 'bg-white text-red-600',
      },
    };

    const sizeStyles = {
      default: 'h-12 px-7 text-xs',
      sm: 'h-10 px-5 text-[11px]',
      lg: 'h-14 px-9 text-sm',
      icon: 'h-12 w-12 p-0',
    };

    const currentVariant = variantStyles[variant as keyof typeof variantStyles] || variantStyles.primary;

    const renderContent = () => {
      const hasText = text && text.length > 0;

      return (
        <span
          className={cn(
            'inline-flex items-center justify-center font-bold uppercase tracking-wider',
            hasText && (leftIcon || rightIcon || isLoading) ? 'gap-2' : ''
          )}
        >
          {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
          {!isLoading && leftIcon && (
            <span className="flex items-center justify-center flex-shrink-0">{leftIcon}</span>
          )}
          {hasText && <span className="whitespace-nowrap">{text}</span>}
          {!isLoading && rightIcon && (
            <span className="flex items-center justify-center flex-shrink-0">{rightIcon}</span>
          )}
        </span>
      );
    };

    // Calculate max radius needed to cover button completely from any corner
    const maxRadius = Math.max(btnDimensions.w, btnDimensions.h) * 1.5;

    return (
      <motion.button
        ref={buttonRef}
        className={cn(
          'relative isolate overflow-hidden rounded-full border transition-shadow duration-300',
          'inline-flex items-center justify-center select-none text-center',
          currentVariant.base,
          sizeStyles[size],
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A45D] focus-visible:ring-offset-2',
          (disabled || isLoading) && 'cursor-not-allowed opacity-60',
          className
        )}
        style={{ x: buttonX, y: buttonY }}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        disabled={disabled || isLoading}
        whileTap={{ scale: 0.97 }}
        type="button"
        {...(props as any)}
      >
        {/* Base Layer */}
        <span className="relative z-10 pointer-events-none flex items-center justify-center">
          {renderContent()}
        </span>

        {/* Overlay Layer — smooth expanding spotlight eclipse */}
        <motion.div
          className={cn(
            'absolute inset-0 z-20 flex items-center justify-center',
            'pointer-events-none select-none',
            currentVariant.overlay
          )}
          style={{
            clipPath: useTransform([maskX, maskY], ([x, y]) =>
              isHovered
                ? `circle(${maxRadius}px at ${x}px ${y}px)`
                : `circle(0px at ${x}px ${y}px)`
            ),
            WebkitClipPath: useTransform([maskX, maskY], ([x, y]) =>
              isHovered
                ? `circle(${maxRadius}px at ${x}px ${y}px)`
                : `circle(0px at ${x}px ${y}px)`
            ),
          }}
          aria-hidden="true"
        >
          {renderContent()}
        </motion.div>
      </motion.button>
    );
  }
);

EclipseButton.displayName = 'EclipseButton';

export { EclipseButton };
