'use client';

import { useIntersectionObserver, useWindowScroll, useWindowSize } from '@uidotdev/usehooks';
import { useMemo } from 'react';
import { MdOutlineArrowDownward } from 'react-icons/md';

function Arrow() {
  const [scroll] = useWindowScroll();
  const { width, height } = useWindowSize();

  const arrowOpacity = useMemo(() => {
    if (scroll.y === null || width === null || height === null) return 0;

    const scrollY = scroll.y;
    const windowHeight = height;

    const scrollPercentage = scrollY / windowHeight;

    return Math.max(0, 1 - scrollPercentage * 2);
  }, [scroll, width, height]);

  return <MdOutlineArrowDownward size={48} style={{ opacity: arrowOpacity }} />;
}

export default function FadingArrow() {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
  });

  const visible = entry?.isIntersecting ?? true;

  return <div ref={ref}>{visible ? <Arrow /> : <div className="size-[48px]" />}</div>;
}
