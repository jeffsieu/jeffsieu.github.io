'use client';

import { borderedButtonClassName } from '@/theme/styles';
import { useWindowScroll, useWindowSize } from '@uidotdev/usehooks';
import clsx from 'clsx';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

export default function BackToTopButton({ className }: { className?: string }) {
  const [scroll] = useWindowScroll();
  const { height } = useWindowSize();

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const opacity = (() => {
    if (scroll.y === null || height === null) return 0;

    const scrollY = scroll.y;
    const windowHeight = height;

    const scrollPercentage = scrollY / windowHeight;

    return Math.min(1, scrollPercentage - 1);
  })();

  const shouldShowButton = opacity > 0;

  return (
    <div className={clsx('transition', !shouldShowButton && 'translate-y-[calc(100%+2rem)]')}>
      <button
        className={clsx(
          borderedButtonClassName,
          'flex p-2 gap-1 items-center text-sm font-semibold',
          className,
        )}
        disabled={!shouldShowButton}
        onClick={handleBackToTop}
      >
        <MdKeyboardDoubleArrowUp size={24} />
        <span>Back to top</span>
      </button>
    </div>
  );
}
