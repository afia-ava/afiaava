"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FooterScene } from '@/components/FooterScene';

const items = [
  { title: 'Choose Good Quests', url: 'https://www.piratewires.com/p/choose-good-quests' },
  { title: 'This is Water', url: 'https://fs.blog/david-foster-wallace-this-is-water/' },
  { title: 'Ford v Ferrari', url: 'https://www.imdb.com/title/tt1950186/' },
  { title: 'Fahrenheit 451', url: 'https://en.wikipedia.org/wiki/Fahrenheit_451' },
];

export default function Archive() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const dark = theme === 'dark';

  return (
    <div className={`min-h-screen flex flex-col ${dark ? 'bg-black' : 'bg-white'}`}>
      <nav className={`w-full flex items-center px-6 md:px-8 py-6 border-b sticky top-0 z-50 ${dark ? 'bg-black/95 border-[#232323]' : 'bg-white/95 border-[#e5e5e5]'}`}>
        <div className="flex-1" />
        <div className="flex items-center gap-10">
          <Link href="/#projects" className={`font-bold text-base tracking-tight transition ${dark ? 'text-white/70 hover:text-white' : 'text-black/60 hover:text-black'}`}>Projects</Link>
          <Link href="/#about" className={`font-bold text-base tracking-tight transition ${dark ? 'text-white/70 hover:text-white' : 'text-black/60 hover:text-black'}`}>About</Link>
          <Link href="/#thoughts" className={`font-bold text-base tracking-tight transition ${dark ? 'text-white/70 hover:text-white' : 'text-black/60 hover:text-black'}`}>Thoughts</Link>
          <Link href="/archive" className={`font-bold text-base tracking-tight transition ${dark ? 'text-white/70 hover:text-white' : 'text-black/60 hover:text-black'}`}>Archive</Link>
        </div>
        <div className="flex-1 flex justify-end">
          <button
            onClick={() => setTheme(dark ? 'light' : 'dark')}
            className={`p-2 rounded-full transition ${dark ? 'text-white/50 hover:text-white' : 'text-black/40 hover:text-black'}`}
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
        </div>
      </nav>

      <main className="flex flex-col items-center flex-1 pt-20 md:pt-36 pb-20 px-4 md:px-6">
        <div className="w-full max-w-2xl">
          <h1 className={`text-3xl md:text-4xl font-bold tracking-tight mb-3 ${dark ? 'text-white' : 'text-black'}`}>
            Archive
          </h1>
          <p className={`text-lg md:text-xl max-w-xl ${dark ? 'text-[#bdbdbd]' : 'text-[#333]'}`}>
            A list of interesting and inspiring pieces I&apos;ve come across
          </p>

          <section className="mt-6">
            <ul className="flex flex-col gap-3 list-disc pl-5">
              {items.map((item) => (
                <li key={item.url}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-bold text-base tracking-tight underline ${dark ? 'text-white' : 'text-black'}`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <footer className={`w-full border-t overflow-hidden ${dark ? 'bg-black border-[#1a1a1a]' : 'bg-white border-[#e5e5e5]'}`}>
        <FooterScene dark={dark} />
      </footer>
    </div>
  );
}
