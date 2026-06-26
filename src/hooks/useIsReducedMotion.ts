'use client';

import useMatchMedia from './useMatchMedia';

export default function useIsReducedMotion() {
  return useMatchMedia('(prefers-reduced-motion: reduce)');
}
