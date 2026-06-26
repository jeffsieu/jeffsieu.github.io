import { useEffect, useEffectEvent } from 'react';

export default function useAnimationFrame(callback: (time: number, delta: number) => void) {
  const onFrame = useEffectEvent(callback);

  useEffect(() => {
    let raf: number;
    let lastTime = performance.now();

    const loop = (time: number) => {
      raf = requestAnimationFrame(loop);
      const delta = time - lastTime;
      lastTime = time;
      onFrame(time, delta);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
}
