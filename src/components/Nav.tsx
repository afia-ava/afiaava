"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const links = [
  { href: '/about', label: 'about' },
  { href: '/thoughts', label: 'thoughts' },
  { href: '/archive', label: 'archive' },
  { href: '/things-about-stuff', label: 'things about stuff' },
];

export function Nav({ dark, setTheme }: { dark: boolean; setTheme: (theme: 'light' | 'dark') => void }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close the mobile menu on any press outside it (the toggle button handles itself).
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (!menuRef.current?.contains(target) && !buttonRef.current?.contains(target)) setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [open]);
  const linkClass = `font-bold text-base tracking-tight transition ${dark ? 'text-[#fff6ee]/70 hover:text-[#fff6ee]' : 'text-black/60 hover:text-black'}`;
  const iconClass = `p-2 rounded-full transition ${dark ? 'text-[#fff6ee]/50 hover:text-[#fff6ee]' : 'text-black/40 hover:text-black'}`;

  return (
    <nav className={`w-full flex items-center px-6 md:px-8 py-6 border-b sticky top-0 z-50 ${dark ? 'bg-black/95 border-[#232323]' : 'bg-[#fff6ee]/95 border-[#e5e5e5]'}`}>
      <Link href="/" className={`md:hidden ml-8 font-bold text-base tracking-tight ${dark ? 'text-[#fff6ee]' : 'text-black'}`}>Afia Ava</Link>
      <div className="hidden md:flex items-center gap-3 ml-16">
        {links.map((l, i) => (
          <span key={l.href} className="flex items-center gap-3">
            {i > 0 && <span className={dark ? 'text-[#fff6ee]/30' : 'text-black/30'}>/</span>}
            <Link href={l.href} className={linkClass}>{l.label}</Link>
          </span>
        ))}
      </div>
      <div className="flex-1 flex justify-end items-center">
        <button
          onClick={() => setTheme(dark ? 'light' : 'dark')}
          className={iconClass}
          aria-label="Toggle theme"
        >
          {dark ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>
        <button
          ref={buttonRef}
          onClick={() => setOpen(!open)}
          className={`md:hidden ${iconClass}`}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="6" y1="6" x2="18" y2="18"/>
              <line x1="18" y1="6" x2="6" y2="18"/>
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="6" x2="20" y2="6"/>
              <line x1="4" y1="12" x2="20" y2="12"/>
              <line x1="4" y1="18" x2="20" y2="18"/>
            </svg>
          )}
        </button>
      </div>
      {open && (
        <div ref={menuRef} className={`md:hidden absolute top-full left-0 right-0 flex flex-col items-end gap-4 px-8 py-6 border-b ${dark ? 'bg-black/95 border-[#232323]' : 'bg-[#fff6ee]/95 border-[#e5e5e5]'}`}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className={linkClass}>{l.label}</Link>
          ))}
        </div>
      )}
    </nav>
  );
}
