import { borderedButtonNoColorsClassName } from '@/theme/styles';
import clsx from 'clsx';
import { IconType } from 'react-icons';

export default function ProjectCardButton({
  href,
  label,
  icon: Icon,
  onClick,
}: {
  href: string;
  label: string;
  icon: IconType;
  onClick?: () => void;
}) {
  return (
    <a
      className={clsx(
        borderedButtonNoColorsClassName,
        'flex gap-1 items-center',
        'dark:text-neutral-200 dark:border-neutral-200 dark:shadow-neutral-200',
        'dark:bg-black/20 dark:hover:bg-black/10 dark:focus-visible:bg-black/10',
        'bg-black/5 hover:bg-black/10 focus-visible:bg-black/10',
        'dark:bg-white/10 dark:hover:bg-white/20 dark:focus-visible:bg-white/20',
        'text-neutral-700 border-neutral-700 shadow-neutral-700',
        'font-semibold px-2 py-1',
      )}
      href={href}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon />
      <span>{label}</span>
    </a>
  );
}
