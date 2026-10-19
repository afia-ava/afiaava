"use client";

import Link from 'next/link';
import { useTheme } from '@/components/useTheme';
import { FooterScene } from '@/components/FooterScene';
import { Nav } from '@/components/Nav';

const posts: { date: string; title: string; slug: string }[] = [
  { date: 'August 2026', title: 'The Case for Bread Slicers and Live Photos', slug: 'the-case-for-bread-slicers-and-live-photos' },
];

export default function Thoughts() {
  const [theme, setTheme] = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={`min-h-screen flex flex-col ${dark ? 'bg-black' : 'bg-[#fff6ee]'}`}>
      <Nav dark={dark} setTheme={setTheme} />

      <main className="flex flex-col items-center flex-1 pt-20 md:pt-36 pb-20 px-14 md:px-12">
        <div className="w-full max-w-2xl">
          <h1 className={`text-2xl md:text-4xl font-bold tracking-tight mb-3 ${dark ? 'text-[#fff6ee]' : 'text-black'}`}>
            Thoughts
          </h1>

          <section className="mt-6">
            <ul className="flex flex-col gap-3">
              {posts.map((post) => (
                <li key={post.title} className="flex items-baseline gap-5">
                  <span className={`font-bold text-base tracking-tight whitespace-nowrap ${dark ? 'text-[#666]' : 'text-[#999]'}`}>{post.date}</span>
                  <Link
                    href={`/thoughts/${post.slug}`}
                    className={`font-medium text-base md:text-lg tracking-tight transition ${dark ? 'text-[#e6d6c8] hover:text-[#fff6ee]' : 'text-[#777] hover:text-black'}`}
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
