'use client';

import { motion, useMotionValue, useSpring, useAnimationFrame } from 'motion/react';
import { useEffect, useRef, useState, cloneElement } from 'react';

interface MagneticStarProps {
  children: React.ReactElement;
  strength?: number; // How strongly the star is attracted (0-1)
  radius?: number; // Magnetic radius in pixels
}

// Spring physics configuration
const springConfig = {
  stiffness: 150,
  damping: 15,
  mass: 0.1,
};

export default function MagneticStar({
  children,
  strength = 0.3,
  radius = 200,
}: MagneticStarProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReduced, setIsReduced] = useState(false);
  const angularVelocity = useRef(0); // Degrees per second

  // Motion values for smooth spring animation
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotation = useMotionValue(0);

  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Apply rotation with damping each frame
  useAnimationFrame((time, delta) => {
    if (isReduced) return;
    
    const deltaSeconds = delta / 1000; // Convert to seconds
    
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
    if (isReduced) return;
    
    // Add to angular velocity (accumulates momentum)
    const spinBoost = 720; // degrees per second added per click
    angularVelocity.current += spinBoost;
    
    // Cap maximum velocity for safety
    if (Math.abs(angularVelocity.current) > 3600) {
      angularVelocity.current = Math.sign(angularVelocity.current) * 3600;
    }
  };

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
    if (isReduced) return;

    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate distance from cursor to center
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distance < radius) {
        // Calculate magnetic attraction (stronger when closer)
        const attractionFactor = 1 - distance / radius;
        const pullStrength = attractionFactor * strength;

        // Move toward cursor
        x.set(deltaX * pullStrength);
        y.set(deltaY * pullStrength);
      } else {
        // Return to original position
        x.set(0);
        y.set(0);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [x, y, strength, radius, isReduced]);

  // If reduced motion is preferred, render without animation
  if (isReduced) {
    return children;
  }

  // Apply positioning classes to motion wrapper AND keep them on child
  const childProps = children.props as { className?: string };
  const childClassName = childProps.className || '';

  return (
    <motion.div
      ref={containerRef}
      className={childClassName}
      onClick={handleClick}
      style={{
        x: springX,
        y: springY,
        willChange: 'transform',
        cursor: 'pointer',
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        style={{
          rotate: rotation,
          transformOrigin: 'center center',
          position: 'relative',
        }}
      >
        {cloneElement(children, {
          className: childClassName.replace(/\babsolute\b/g, '').trim(),
          style: { pointerEvents: 'none', display: 'block' },
        } as Partial<typeof children.props>)}
      </motion.div>
    </motion.div>
  );
}
