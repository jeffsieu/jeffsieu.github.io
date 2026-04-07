'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

interface Dot {
  x: number;
  y: number;
  baseRadius: number;
  currentRadius: number;
  brightness: number;
}

export default function DottedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const cursorRef = useRef({ x: -1000, y: -1000 });
  const animationFrameRef = useRef<number | null>(null);
  const [isReduced, setIsReduced] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReduced(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReduced(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Set canvas size to window size
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);

      // Regenerate dots on resize
      generateDots();
    };

    // Generate dot grid
    const generateDots = () => {
      const spacing = 20.8; // 1.3rem in pixels (roughly)
      const baseRadius = 4; // 0.25rem
      const dots: Dot[] = [];

      for (let y = 0; y < window.innerHeight + spacing; y += spacing) {
        for (let x = 0; x < window.innerWidth + spacing; x += spacing) {
          dots.push({
            x,
            y,
            baseRadius,
            currentRadius: baseRadius,
            brightness: 0,
          });
          // Offset every other row for checkerboard pattern
          dots.push({
            x: x + spacing / 2,
            y: y + spacing / 2,
            baseRadius,
            currentRadius: baseRadius,
            brightness: 0,
          });
        }
      }

      dotsRef.current = dots;
    };

    // Track cursor position
    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
    };

    // Animation loop
    const animate = () => {
      const isDark = resolvedTheme === 'dark';
      const bgColor = isDark ? '#0a0a0a' : '#ffffff';
      const dotColor = isDark ? '#262626' : '#f5f5f5'; // neutral-900 / neutral-100

      // Clear canvas
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      const dots = dotsRef.current;
      const cursor = cursorRef.current;
      const maxDistance = isReduced ? 0 : 150; // Influence radius
      const maxGrowth = 3; // How much dots can grow
      const maxBrightness = 0.1; // How much brighter they can get

      // Update and draw each dot
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        if (!isReduced) {
          // Calculate distance to cursor
          const dx = dot.x - cursor.x;
          const dy = dot.y - cursor.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            // Calculate influence (1 at center, 0 at maxDistance)
            const influence = 1 - distance / maxDistance;
            const eased = influence * influence; // Quadratic easing

            dot.currentRadius = dot.baseRadius + maxGrowth * eased;
            dot.brightness = maxBrightness * eased;
          } else {
            dot.currentRadius = dot.baseRadius;
            dot.brightness = 0;
          }
        } else {
          // Static dots when reduced motion is enabled
          dot.currentRadius = dot.baseRadius;
          dot.brightness = 0;
        }

        // Draw dot with brightness
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.currentRadius, 0, Math.PI * 2);

        if (dot.brightness > 0.01) {
          // Mix base color with highlighted color
          const r = isDark ? 38 + 200 * dot.brightness : 245 - 100 * dot.brightness;
          const g = isDark ? 38 + 200 * dot.brightness : 245 - 100 * dot.brightness;
          const b = isDark ? 38 + 200 * dot.brightness : 245 - 100 * dot.brightness;
          ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        } else {
          ctx.fillStyle = dotColor;
        }

        ctx.fill();
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [resolvedTheme, isReduced]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ willChange: 'contents' }}
    />
  );
}
