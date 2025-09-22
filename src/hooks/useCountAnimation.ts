'use client';

import { useState, useEffect } from 'react';
import { useScrollAnimation } from './useScrollAnimation';

interface CountAnimationOptions {
  duration?: number;
  threshold?: number;
  rootMargin?: string;
}

export function useCountAnimation(
  targetValue: number,
  options: CountAnimationOptions = {}
) {
  const { duration = 2000, threshold = 0.3, rootMargin = '0px' } = options;
  const { elementRef, isVisible } = useScrollAnimation({ threshold, rootMargin });
  const [currentValue, setCurrentValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
      const startTime = Date.now();
      const startValue = 0;
      const endValue = targetValue;

      const animate = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const value = Math.round(startValue + (endValue - startValue) * easeOutQuart);

        setCurrentValue(value);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isVisible, hasAnimated, targetValue, duration]);

  return [elementRef, currentValue, isVisible] as const;
}

export function usePercentageAnimation(
  targetValue: number,
  options: CountAnimationOptions = {}
) {
  const [elementRef, currentValue, isVisible] = useCountAnimation(targetValue, options);
  return [elementRef, `${currentValue}%`, isVisible] as const;
}

export function usePlusCountAnimation(
  targetValue: number,
  options: CountAnimationOptions = {}
) {
  const [elementRef, currentValue, isVisible] = useCountAnimation(targetValue, options);
  const formattedValue = currentValue >= 1000 
    ? `+${(currentValue / 1000).toFixed(1)}k`.replace('.0k', 'k')
    : `+${currentValue}`;
  return [elementRef, formattedValue, isVisible] as const;
}