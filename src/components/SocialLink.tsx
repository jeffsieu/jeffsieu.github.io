'use client';

import { borderedButtonNoColorsClassName } from '@/theme/styles';
import { sendGAEvent } from '@next/third-parties/google';
import clsx from 'clsx';
import { IconType } from 'react-icons';

export default function SocialLink({
  icon: Icon,
  href,
  label,
  color,
}: {
  icon: IconType;
  href: string;
  label: string;
  color: string;
}) {
  return (
    <a
      href={href}
      className={clsx(
        borderedButtonNoColorsClassName,
        'flex gap-2 items-center px-4 py-2',
        'text-sm font-semibold',
        'bg-[color-mix(in_lch,_var(--color-neutral-100),_var(--color-bg)_20%)]',
        'dark:bg-[color-mix(in_lch,_var(--color-neutral-900),_var(--color-bg)_20%)]',
        'text-[color-mix(in_lch,_var(--color-neutral-900),_var(--color-text)_20%)]',
        'dark:text-[color-mix(in_lch,_var(--color-neutral-100),_var(--color-text)_20%)]',
      )}
      onClick={() => {
        sendGAEvent('event', 'navigation', {
          action: 'social_link_click',
          target: label,
          href,
        });
      }}
      style={
        {
          '--color-text': `lch(from ${color} 100% calc(c * 2) h)`,
          '--color-bg': `lch(from ${color} 100% calc(c * 2) h)`,
        } as React.CSSProperties
      }
      target="_blank"
      rel="noreferrer"
    >
      <Icon size={24} aria-label={label} />
      {label}
    </a>
  );
}
