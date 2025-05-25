'use client';

import { borderedButtonClassName } from '@/theme/styles';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MdComputer, MdDarkMode, MdLightMode } from 'react-icons/md';

const themeIcons = {
  light: MdLightMode,
  dark: MdDarkMode,
  system: MdComputer,
};

export default function ThemeToggleButton({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  const activeTheme = (() => {
    if (theme === 'system' || theme === 'dark' || theme === 'light') {
      return theme;
    }

    return 'system';
  })();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    if (activeTheme === 'light') {
      setTheme('dark');
    } else if (activeTheme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const Icon = themeIcons[activeTheme];

  if (!mounted) {
    return null;
  }

  return (
    <button className={clsx(borderedButtonClassName, 'p-2', className)} onClick={handleToggle}>
      <Icon size={24} />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
