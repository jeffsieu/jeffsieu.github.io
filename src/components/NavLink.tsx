'use client';

import { borderedButtonClassName } from '@/theme/styles';
import { sendGAEvent } from '@next/third-parties/google';
import clsx from 'clsx';

export default function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      onClick={() => {
        sendGAEvent('event', 'navigation', {
          action: 'navigation_link_click',
          target: label,
          href,
        });
      }}
      className={clsx(borderedButtonClassName, 'font-semibold sm:text-xl tracking-wider px-2 py-1')}
    >
      {label}
    </a>
  );
}
