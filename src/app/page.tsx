"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FooterScene } from '@/components/FooterScene';

const projects = [
  { title: 'Model Rocket', tags: ['Hardware'], year: '2026', category: 'Hardware', image: '/projects/rocket-launch.jpeg', link: 'https://github.com/afia-ava/model-rocket' },
  { title: 'Armtender', tags: ['Hardware'], year: '2025', category: 'Hardware', image: '/projects/armtender.jpeg', link: 'https://github.com/afia-ava/Armtender' },
  { title: 'Hot Potato', tags: ['Hardware'], year: '2026', category: 'Hardware', image: '/projects/hot-potato.jpg', link: 'https://github.com/afia-ava/shake-shake-boom' },
  { title: 'Cadence', tags: ['Hardware'], year: '2026', category: 'Hardware', image: '/projects/cadence.jpeg', link: 'https://github.com/afia-ava/cadence-lab' },
  { title: 'Video Cassette Recorder', tags: ['Hardware'], year: '2025', category: 'Hardware', image: '/projects/vcr.jpeg' },
  { title: 'Drone', tags: ['Hardware'], year: '2025', category: 'Hardware', image: '/projects/drone.jpeg' },
];

export default function Home() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const dark = theme === 'dark';

  return (
    <div id="home" className={`min-h-screen flex flex-col ${dark ? 'bg-black' : 'bg-white'}`}>
      <nav className={`w-full flex items-center px-6 md:px-8 py-6 border-b sticky top-0 z-50 ${dark ? 'bg-black/95 border-[#232323]' : 'bg-white/95 border-[#e5e5e5]'}`}>
        <div className="flex-1" />
        <div className="flex items-center gap-10">
          <a href="#projects" className={`font-bold text-base tracking-tight transition ${dark ? 'text-white/70 hover:text-white' : 'text-black/60 hover:text-black'}`}>Projects</a>
          <a href="#about" className={`font-bold text-base tracking-tight transition ${dark ? 'text-white/70 hover:text-white' : 'text-black/60 hover:text-black'}`}>About</a>
          <a href="#thoughts" className={`font-bold text-base tracking-tight transition ${dark ? 'text-white/70 hover:text-white' : 'text-black/60 hover:text-black'}`}>Thoughts</a>
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
        <h1 className={`text-center text-3xl md:text-4xl font-bold tracking-tight mb-3 leading-snug max-w-5xl ${dark ? 'text-white' : 'text-black'}`}>
          I&apos;m Afia — hacking on<br className="md:hidden" /> engineering projects<br /> and supporting tech<br className="md:hidden" /> education initiatives.
        </h1>

        <section id="projects" className="w-full max-w-4xl mt-16 md:mt-20 scroll-mt-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 md:gap-y-12">
            {projects.map((p, i) => (
              <div key={i} className="group cursor-pointer">
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noopener noreferrer">
                    <div className={`w-full aspect-video rounded-xl mb-4 overflow-hidden relative border ${dark ? 'bg-[#111] border-[#1e1e1e]' : 'bg-[#f5f5f5] border-[#e0e0e0]'}`}>
                      {p.image && <Image src={p.image} alt={p.title} fill className="object-cover"/>}
                    </div>
                  </a>
                ) : (
                  <div className={`w-full aspect-video rounded-xl mb-4 overflow-hidden relative border ${dark ? 'bg-[#111] border-[#1e1e1e]' : 'bg-[#f5f5f5] border-[#e0e0e0]'}`}>
                    {p.image && <Image src={p.image} alt={p.title} fill className="object-cover"/>}
                  </div>
                )}
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className={`font-bold text-lg tracking-tight hover:underline ${dark ? 'text-white' : 'text-black'}`}>{p.title}</a>
                ) : (
                  <h3 className={`font-bold text-lg tracking-tight ${dark ? 'text-white' : 'text-black'}`}>{p.title}</h3>
                )}
                <div className="flex gap-3 mt-1 flex-wrap">
                  {p.tags.map(tag => (
                    <span key={tag} className={`text-xs font-medium ${dark ? 'text-[#999]' : 'text-[#666]'}`}>{tag}</span>
                  ))}
                </div>
                <p className={`text-xs mt-1 ${dark ? 'text-[#444]' : 'text-[#aaa]'}`}>{p.year}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="w-full max-w-4xl mt-24 md:mt-32 scroll-mt-24">
          <div className="flex flex-col gap-6 md:flex-row md:gap-16">
            <div className="md:w-36 md:flex-shrink-0">
              <h2 className={`font-bold text-2xl tracking-tight ${dark ? 'text-white' : 'text-black'}`}>About me</h2>
            </div>
            <div className={`flex-1 text-lg md:text-xl leading-relaxed ${dark ? 'text-[#bdbdbd]' : 'text-[#333]'}`}>
              <p>Hi, Nice to meet you!</p>
              <p className="mt-4">I&apos;m Afia, currently on a gap year fellowship at Hack Club doing cool things with even cooler people. I listen to pop music, read self-development &amp; science fiction books, and love to meet new people in new places.</p>
              <p className="mt-4">Please feel free to reach me at <a href="mailto:hi@afiaava.com" className={`hover:underline ${dark ? 'text-white' : 'text-black'}`}>hi@afiaava.com</a>!</p>
              <div className="flex gap-4 mt-6">
                <a href="https://github.com/Afia-Ava" target="_blank" rel="noopener noreferrer" className={`transition ${dark ? 'text-[#888] hover:text-white' : 'text-[#555] hover:text-black'}`}>
                  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/afia-ava/" target="_blank" rel="noopener noreferrer" className={`transition ${dark ? 'text-[#888] hover:text-white' : 'text-[#555] hover:text-black'}`}>
                  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.07-.93-2-2-2s-2 .93-2 2v4.5h-3v-9h3v1.22c.41-.63 1.36-1.22 2.25-1.22 1.93 0 3.5 1.57 3.5 3.5v5.5z"/></svg>
                </a>
                <a href="https://x.com/aafia_ava" target="_blank" rel="noopener noreferrer" className={`transition ${dark ? 'text-[#888] hover:text-white' : 'text-[#555] hover:text-black'}`}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.53 3H21L13.47 10.62L22.25 21H15.97L10.77 14.67L4.97 21H1L9.03 12.82L0.75 3H7.18L12 8.73L17.53 3ZM16.32 19H18.13L7.75 5.08H5.81L16.32 19Z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="thoughts" className="w-full max-w-4xl mt-28 md:mt-40 scroll-mt-24">
          <div className="flex flex-col gap-6 md:flex-row md:gap-16">
            <div className="md:w-36 md:flex-shrink-0">
              <h2 className={`font-bold text-2xl tracking-tight ${dark ? 'text-white' : 'text-black'}`}>Thoughts</h2>
            </div>
            <div className="flex-1">
              <p className={`text-xs font-medium mb-3 tracking-wide uppercase ${dark ? 'text-[#555]' : 'text-[#aaa]'}`}>June 2026</p>
              <span className={`text-lg md:text-xl ${dark ? 'text-[#555]' : 'text-[#bbb]'}`}>soon to be posted</span>
            </div>
          </div>
        </section>

        <div className="h-52" />
      </main>

      <footer className={`w-full border-t overflow-hidden ${dark ? 'bg-black border-[#1a1a1a]' : 'bg-white border-[#e5e5e5]'}`}>
        <FooterScene dark={dark} />
      </footer>
    </div>
  );
}
