"use client";

import { useSyncExternalStore } from 'react';

type Theme = 'dark' | 'light';

const STORAGE_KEY = 'theme';
const listeners = new Set<() => void>();
// Fallback when storage is unavailable (e.g. private mode), so the toggle still works.
let current: Theme = 'dark';

function getTheme(): Theme {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') current = stored;
  } catch {}
  return current;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

// Shared across pages and persisted, so the chosen theme survives navigation and reloads.
export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => 'dark' as Theme);

  const setTheme = (next: Theme) => {
    current = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
    listeners.forEach((l) => l());
  };

  return [theme, setTheme] as const;
}
