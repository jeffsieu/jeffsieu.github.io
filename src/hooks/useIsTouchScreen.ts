'use client';

import useMatchMedia from './useMatchMedia';

export default function useIsTouchScreen() {
  return useMatchMedia('(hover: none) and (pointer: coarse)');
}
