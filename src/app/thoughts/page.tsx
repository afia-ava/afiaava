"use client";

import Link from 'next/link';
import { useTheme } from '@/components/useTheme';
import { FooterScene } from '@/components/FooterScene';

const posts: { date: string; title: string; slug: string }[] = [
  { date: 'August 2026', title: 'The Case for Bread Slicers and Live Photos', slug: 'the-case-for-bread-slicers-and-live-photos' },
];

export default function Thoughts() {
  const [theme, setTheme] = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={`min-h-screen flex flex-col ${dark ? 'bg-black' : 'bg-[#fff6ee]'}`}>
      <nav className={`w-full flex items-center px-6 md:px-8 py-6 border-b sticky top-0 z-50 ${dark ? 'bg-black/95 border-[#232323]' : 'bg-[#fff6ee]/95 border-[#e5e5e5]'}`}>
        <div className="flex items-center gap-3 ml-4 md:ml-16">
          <Link href="/about" className={`font-bold text-base tracking-tight transition ${dark ? 'text-[#fff6ee]/70 hover:text-[#fff6ee]' : 'text-black/60 hover:text-black'}`}>about</Link>
          <span className={dark ? 'text-[#fff6ee]/30' : 'text-black/30'}>/</span>
          <Link href="/thoughts" className={`font-bold text-base tracking-tight transition ${dark ? 'text-[#fff6ee]/70 hover:text-[#fff6ee]' : 'text-black/60 hover:text-black'}`}>thoughts</Link>
          <span className={dark ? 'text-[#fff6ee]/30' : 'text-black/30'}>/</span>
          <Link href="/archive" className={`font-bold text-base tracking-tight transition ${dark ? 'text-[#fff6ee]/70 hover:text-[#fff6ee]' : 'text-black/60 hover:text-black'}`}>archive</Link>
          <span className={dark ? 'text-[#fff6ee]/30' : 'text-black/30'}>/</span>
          <Link href="/things-about-stuff" className={`font-bold text-base tracking-tight transition ${dark ? 'text-[#fff6ee]/70 hover:text-[#fff6ee]' : 'text-black/60 hover:text-black'}`}>things about stuff</Link>
        </div>
        <div className="flex-1 flex justify-end">
          <button
            onClick={() => setTheme(dark ? 'light' : 'dark')}
            className={`p-2 rounded-full transition ${dark ? 'text-[#fff6ee]/50 hover:text-[#fff6ee]' : 'text-black/40 hover:text-black'}`}
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
          <h1 className={`text-3xl md:text-4xl font-bold tracking-tight mb-3 ${dark ? 'text-[#fff6ee]' : 'text-black'}`}>
            Thoughts
          </h1>

          <section className="mt-6">
            <ul className="flex flex-col gap-3">
              {posts.map((post) => (
                <li key={post.title} className="flex items-baseline gap-5">
                  <span className={`font-bold text-base tracking-tight whitespace-nowrap ${dark ? 'text-[#666]' : 'text-[#999]'}`}>{post.date}</span>
                  <Link
                    href={`/thoughts/${post.slug}`}
                    className={`font-medium text-lg tracking-tight transition ${dark ? 'text-[#e6d6c8] hover:text-[#fff6ee]' : 'text-[#777] hover:text-black'}`}
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <footer className={`w-full border-t overflow-hidden ${dark ? 'bg-black border-[#1a1a1a]' : 'bg-[#fff6ee] border-[#e5e5e5]'}`}>
        <FooterScene dark={dark} />
      </footer>
    </div>
  );
}
