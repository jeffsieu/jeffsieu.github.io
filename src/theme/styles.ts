import clsx from 'clsx';

export const borderedBoxClassName = clsx(
  'border shadow-[2px_2px_0_0]',
  'dark:border-neutral-200 dark:shadow-neutral-200',
  'border-neutral-700 shadow-neutral-700',
  'rounded',
);

export const borderedButtonNoColorsClassName = clsx(
  'shadow-[2px_2px_0_0]',
  'focus-visible:shadow-[4px_4px_0_0] focus-visible:-translate-y-0.5 focus-visible:-translate-x-0.5',
  'hover:not-active:shadow-[4px_4px_0_0] hover:not-active:-translate-y-0.5 hover:not-active:-translate-x-0.5',
  'active:translate-y-0.5 active:translate-x-0.5 active:shadow-none',
  'border rounded transition cursor-pointer',
);

export const borderedButtonClassName = clsx(
  borderedButtonNoColorsClassName,
  'dark:text-neutral-200 dark:border-neutral-200 dark:shadow-neutral-200',
  'dark:bg-neutral-900 dark:hover:bg-neutral-700 dark:focus-visible:bg-neutral-700',
  'text-neutral-700 border-neutral-700 shadow-neutral-700',
  'bg-white hover:bg-neutral-100 focus-visible:bg-neutral-100',
);
