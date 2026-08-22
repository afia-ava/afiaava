"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FooterScene } from '@/components/FooterScene';

export default function BreadSlicersAndLivePhotos() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const dark = theme === 'dark';

  return (
    <div className={`min-h-screen flex flex-col ${dark ? 'bg-black' : 'bg-white'}`}>
      <nav className={`w-full flex items-center px-6 md:px-8 py-6 border-b sticky top-0 z-50 ${dark ? 'bg-black/95 border-[#232323]' : 'bg-white/95 border-[#e5e5e5]'}`}>
        <div className="flex-1" />
        <div className="flex items-center gap-10">
          <Link href="/about" className={`font-bold text-base tracking-tight transition ${dark ? 'text-white/70 hover:text-white' : 'text-black/60 hover:text-black'}`}>About</Link>
          <Link href="/thoughts" className={`font-bold text-base tracking-tight transition ${dark ? 'text-white/70 hover:text-white' : 'text-black/60 hover:text-black'}`}>Thoughts</Link>
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

      <main className="flex flex-col items-center flex-1 pt-20 md:pt-36 pb-40 md:pb-56 px-4 md:px-6">
        <div className="w-full max-w-2xl">
          <Link
            href="/thoughts"
            className={`font-bold text-sm tracking-tight transition ${dark ? 'text-[#666] hover:text-white' : 'text-[#999] hover:text-black'}`}
          >
            ← Thoughts
          </Link>

          <h1 className={`text-3xl md:text-4xl font-bold tracking-tight mt-6 mb-3 ${dark ? 'text-white' : 'text-black'}`}>
            The Case for Bread Slicers and Live Photos
          </h1>

          <p className={`font-bold text-base tracking-tight mb-10 ${dark ? 'text-[#666]' : 'text-[#999]'}`}>
            by palooza, giragon, aka
          </p>

          <article className={`flex flex-col gap-6 font-medium text-lg leading-relaxed tracking-tight ${dark ? 'text-[#bbb]' : 'text-[#777]'}`}>
            <p>
              The mundane things in life are what make it awesome. One fine morning, you wake up and get bread from the farmers market. The machine, the machine cuts it for you. With its loving whir and sweet gentle opening of its lid. It doesn&rsquo;t want to hurt you. It slices the bread and gives it back. Then it&rsquo;s so good. So good. And then you put butter on it and toast it and it&apos;s delicious. It&rsquo;s really good. But, does the bread suffer?
            </p>
            <p>
              It&rsquo;s just like the question of whether people in live photos are real. You tap the screen, just a little, and those awesome people start talking again. Photos were always just meant to stay the same, but it moves and wiggles and jiggles and captures all the fun. The whole deal you signed with a camera is you point it at a second, the second dies, and you keep the moment as a pressed flower. But now the flower breathes. They move on your screen, but they&rsquo;re just little colored squares. The live photos make them real. The frozen people come alive and dance.
            </p>
            <p>
              Greatness is the refusal of ordinary things to remain ordinary. A perfectly sliced piece of bread toast (with avocado of course) and a photo that keeps breathing are both doing the same spiritual work. They both make our life a little more alive, and that&rsquo;s why they belong in the top 10 inventions ever on earth.
            </p>
            <p>
              Thank you, bread slicer. Thank you, Apple. I love you, Tim Cook.
            </p>
          </article>
        </div>
      </main>

      <footer className={`w-full border-t overflow-hidden ${dark ? 'bg-black border-[#1a1a1a]' : 'bg-white border-[#e5e5e5]'}`}>
        <FooterScene dark={dark} />
      </footer>
    </div>
  );
}
