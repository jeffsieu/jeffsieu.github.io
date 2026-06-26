'use client';

import { useEffect, useRef, useMemo, useCallback } from 'react';
import { useTheme } from 'next-themes';
import { useWindowSize, useMouse } from '@uidotdev/usehooks';
import useIsReducedMotion from '@/hooks/useIsReducedMotion';
import useIsTouchScreen from '@/hooks/useIsTouchScreen';
import useAnimationFrame from '@/hooks/useAnimationFrame';

interface Dot {
  x: number;
  y: number;
}

function dotInfluence(dot: Dot, cx: number, cy: number) {
  const dx = dot.x - cx;
  const dy = dot.y - cy;
  const distance = Math.sqrt(dx * dx + dy * dy);
  if (distance < 1 || distance >= MAX_DISTANCE)
    return { radius: BASE_RADIUS, brightness: 0, ox: 0, oy: 0 };

  const t = distance / MAX_DISTANCE;
  const glow = 1 - t * t;
  const pull = glow * (1 - 2 * t); // +attract at center, crosses 0, -repel at edge

  return {
    radius: BASE_RADIUS,
    brightness: MAX_BRIGHTNESS * glow * glow,
    ox: -(dx / distance) * MAX_PULL * pull,
    oy: -(dy / distance) * MAX_PULL * pull,
  };
}

function lerpColor(isDark: boolean, t: number) {
  if (isDark) {
    const v = 38 + 200 * t;
    return `rgb(${v}, ${v}, ${v})`;
  }
  const v = 245 - 100 * t;
  return `rgb(${v}, ${v}, ${v})`;
}

const SPACING = 20.8;
const BASE_RADIUS = 4;
const MAX_DISTANCE = 180;
const MAX_BRIGHTNESS = 0.1;
const MAX_PULL = 2.0;

export default function DottedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const isReducedMotion = useIsReducedMotion();
  const isTouchScreen = useIsTouchScreen();
  const { width, height } = useWindowSize();
  const [{ elementX, elementY }, mouseRef] = useMouse<HTMLCanvasElement>();
  const { resolvedTheme } = useTheme();

  const setCanvasRef = useCallback(
    (node: HTMLCanvasElement | null) => {
      canvasRef.current = node;
      if (node) {
        mouseRef.current = node;
      }
    },
    [mouseRef],
  );
  const dots = useMemo(() => {
    if (width === null || height === null) return [];
    const result: Dot[] = [];

    for (let y = 0; y < height + SPACING; y += SPACING) {
      for (let x = 0; x < width + SPACING; x += SPACING) {
        result.push({ x, y });
        result.push({ x: x + SPACING / 2, y: y + SPACING / 2 });
      }
    }

    return result;
  }, [width, height]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || width === null || height === null) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;
    ctxRef.current = ctx;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);
  }, [width, height]);

  useAnimationFrame(() => {
    const ctx = ctxRef.current;
    if (!ctx || width === null || height === null) return;

    const isDark = resolvedTheme === 'dark';
    const bg = isDark ? '#0a0a0a' : '#ffffff';
    const baseColor = isDark ? '#262626' : '#f5f5f5';
    const active = !isReducedMotion && !isTouchScreen;

    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, width, height);

    for (const dot of dots) {
      const {
        radius,
        brightness,
        ox = 0,
        oy = 0,
      } = active ? dotInfluence(dot, elementX, elementY) : { radius: BASE_RADIUS, brightness: 0 };

      ctx.beginPath();
      ctx.arc(dot.x + ox, dot.y + oy, radius, 0, Math.PI * 2);
      ctx.fillStyle = brightness > 0.01 ? lerpColor(isDark, brightness) : baseColor;
      ctx.fill();
    }
  });

  return (
    <canvas
      ref={setCanvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ willChange: 'contents' }}
    />
  );
}
