'use client';

import { motion, useMotionValue, useSpring, useAnimationFrame, useTransform } from 'motion/react';
import { useRef } from 'react';
import { useMouse } from '@uidotdev/usehooks';
import useIsReducedMotion from '@/hooks/useIsReducedMotion';
import useIsTouchScreen from '@/hooks/useIsTouchScreen';

interface MagneticStarProps {
  children: React.ReactElement;
  className?: string;
  strength?: number;
  radius?: number;
}

const BLUR_MAX = 6; // max blur in px when cursor is far away
const BLUR_DEAD_ZONE = 0.25; // fraction of radius where blur stays at 0 (sharp center)

// Spring physics configuration
const springConfig = {
  stiffness: 150,
  damping: 15,
  mass: 0.1,
};

export default function MagneticStar({
  children,
  className = '',
  strength = 0.3,
  radius = 200,
}: MagneticStarProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isReducedMotion = useIsReducedMotion();
  const isTouchScreen = useIsTouchScreen();
  const [mouse] = useMouse();
  const pressedRef = useRef(false);
  const justReleased = useRef(false);
  const releaseTimestamp = useRef(0);
  const blurTarget = useRef(BLUR_MAX);
  const angularVelocity = useRef(0); // Degrees per second

  // Motion values for smooth spring animation
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotation = useMotionValue(0);
  const blur = useMotionValue(BLUR_MAX);
  const blurFilter = useTransform(blur, (v) => `blur(${v}px)`);

  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Apply magnetic pull, blur, and rotation each frame
  useAnimationFrame((time, delta) => {
    if (isReducedMotion) return;

    const deltaSeconds = delta / 1000;

    // Blur: snap sharp on press, hold 3s after release, then fade
    if (isTouchScreen) {
      if (justReleased.current) {
        releaseTimestamp.current = time;
        justReleased.current = false;
      }
      if (pressedRef.current) {
        blur.set(0);
      } else {
        const elapsed = (time - releaseTimestamp.current) / 1000;
        if (elapsed < 1) {
          blur.set(0);
        } else {
          blur.set(blur.get() + (BLUR_MAX - blur.get()) * 0.02);
        }
      }
    } else {
      const container = containerRef.current;
      if (container) {
        const rect = container.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2 + window.scrollX;
        const centerY = rect.top + rect.height / 2 + window.scrollY;
        const deltaX = mouse.x - centerX;
        const deltaY = mouse.y - centerY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        if (distance < radius) {
          const attractionFactor = 1 - distance / radius;
          const pullStrength = attractionFactor * strength;
          x.set(deltaX * pullStrength);
          y.set(deltaY * pullStrength);

          const deadZone = radius * BLUR_DEAD_ZONE;
          if (distance < deadZone) {
            blurTarget.current = 0;
          } else {
            const blurFraction = (distance - deadZone) / (radius - deadZone);
            blurTarget.current = Math.min(blurFraction, 1) * BLUR_MAX;
          }
        } else {
          x.set(0);
          y.set(0);
          blurTarget.current = BLUR_MAX;
        }
      }
    }

    // Lerp blur toward target (desktop cursor tracking)
    if (!isTouchScreen) {
      blur.set(blur.get() + (blurTarget.current - blur.get()) * 0.3);
    }

    // Apply current angular velocity
    if (Math.abs(angularVelocity.current) > 0.1) {
      const currentRotation = rotation.get();
      const rotationDelta = angularVelocity.current * deltaSeconds;
      rotation.set(currentRotation + rotationDelta);

      // Apply damping (quick slow-down)
      const damping = 0.92; // Higher = slower damping
      angularVelocity.current *= Math.pow(damping, deltaSeconds * 60);

      // Stop completely when very slow
      if (Math.abs(angularVelocity.current) < 0.1) {
        angularVelocity.current = 0;
      }
    }
  });

  // Handle click to add spin
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isReducedMotion) return;

    // Add to angular velocity (accumulates momentum)
    const spinBoost = 720; // degrees per second added per click
    angularVelocity.current += spinBoost;

    // Cap maximum velocity for safety
    if (Math.abs(angularVelocity.current) > 3600) {
      angularVelocity.current = Math.sign(angularVelocity.current) * 3600;
    }
  };

  // If reduced motion, render static star with positioning
  if (isReducedMotion) {
    return (
      <div className={className} aria-hidden="true">
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={containerRef}
      className={className}
      onClick={handleClick}
      onPointerDown={() => {
        pressedRef.current = true;
      }}
      onPointerUp={() => {
        pressedRef.current = false;
        justReleased.current = true;
      }}
      onPointerLeave={() => {
        pressedRef.current = false;
        justReleased.current = true;
      }}
      aria-hidden="true"
      tabIndex={-1}
      style={{
        x: springX,
        y: springY,
        filter: blurFilter,
        rotate: rotation,
        transformOrigin: 'center center',
        willChange: 'transform, filter',
        cursor: 'pointer',
        userSelect: 'none',
        WebkitUserSelect: 'none',
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
}
