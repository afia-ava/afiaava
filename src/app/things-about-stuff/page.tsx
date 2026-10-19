"use client";

import { useTheme } from '@/components/useTheme';
import { FooterScene } from '@/components/FooterScene';
import { Nav } from '@/components/Nav';

const items: { title: string; url: string; meta?: string }[] = [];

export default function ThingsAboutStuff() {
  const [theme, setTheme] = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={`min-h-screen flex flex-col ${dark ? 'bg-black' : 'bg-[#fff6ee]'}`}>
      <Nav dark={dark} setTheme={setTheme} />

      <main className="flex flex-col items-center flex-1 pt-20 md:pt-36 pb-20 px-14 md:px-12">
        <div className="w-full max-w-2xl">
          <h1 className={`text-2xl md:text-4xl font-bold tracking-tight mb-3 ${dark ? 'text-[#fff6ee]' : 'text-black'}`}>
            Things about stuff
          </h1>
          <p className={`text-base md:text-xl max-w-xl ${dark ? 'text-[#e6d6c8]' : 'text-[#333]'}`}>
            pictures incoming
          </p>

          <section className="mt-6">
            <ul className="flex flex-col gap-3 list-disc pl-5">
              {items.map((item) => (
                <li key={item.url}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-bold text-base tracking-tight underline ${dark ? 'text-[#fff6ee]' : 'text-black'}`}
                  >
                    {item.title}
                  </a>
                  {item.meta && (
                    <span className={`text-sm ml-2 ${dark ? 'text-[#777]' : 'text-[#999]'}`}>{item.meta}</span>
                  )}
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
