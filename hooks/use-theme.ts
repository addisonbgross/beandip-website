'use client';

import { useCallback, useEffect, useState } from 'react';
import { Theme } from '../types';

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(Theme.Light);

  useEffect(() => {
    const localTheme = localStorage.getItem('beandip-theme');
    if (localTheme) {
      setTheme(localTheme === String(Theme.Dark) ? Theme.Dark : Theme.Light);
    } else {
      const nextTheme = window.matchMedia('(prefers-color-scheme: dark)')
        ? Theme.Dark
        : Theme.Light;
      setTheme(nextTheme);
      localStorage.setItem('beandip-theme', String(nextTheme));
    }
  }, []);

  useEffect(() => {
    if (theme === Theme.Dark) {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    }
  }, [theme]);

  const switchTheme = useCallback(() => {
    const nextTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;
    setTheme(nextTheme);
    localStorage.setItem('beandip-theme', String(nextTheme));
  }, [theme]);

  return [theme, switchTheme] as const;
};

export default useTheme;
