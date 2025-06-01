'use client';

import { borderedButtonClassName } from '@/theme/styles';
import { sendGAEvent } from '@next/third-parties/google';
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
    const newTheme = (() => {
      if (activeTheme === 'light') return 'dark';
      if (activeTheme === 'dark') return 'system';
      return 'light';
    })();
    setTheme(newTheme);
    sendGAEvent('event', 'theme_toggle', {
      from: activeTheme,
      to: newTheme,
    });
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
