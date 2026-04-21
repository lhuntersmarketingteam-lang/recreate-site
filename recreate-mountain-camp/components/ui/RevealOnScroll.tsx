'use client';

import { useReducedMotion, useInView, motion } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3;
  as?: 'div' | 'span' | 'li' | 'article' | 'section' | 'header' | 'footer' | 'p' | 'h2' | 'h3';
  className?: string;
}

export function RevealOnScroll({
  children,
  delay = 0,
  as = 'div',
  className,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, {
    amount: 0.12,
    margin: '0px 0px -60px 0px',
    once: true,
  });
  const prefersReducedMotion = useReducedMotion();

  const MotionTag = motion[as] as typeof motion.div;

  if (prefersReducedMotion) {
    const Tag = as;
    return (
      // @ts-expect-error dynamic tag
      <Tag ref={ref} className={className}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      // @ts-expect-error framer types for dynamic elements
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{
        duration: 1,
        delay: delay * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
