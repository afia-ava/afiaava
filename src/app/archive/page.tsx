"use client";

import { useTheme } from '@/components/useTheme';
import { FooterScene } from '@/components/FooterScene';
import { Nav } from '@/components/Nav';

const items = [
  { title: 'Carrie (2026)', url: 'https://www.imdb.com/title/tt11540908/', meta: 'by Mike Flanagan' },
  { title: 'How I Built a Toaster From Scratch', url: 'https://www.ted.com/talks/thomas_thwaites_how_i_built_a_toaster_from_scratch', meta: 'by Thomas Thwaites' },
  { title: 'Choose Good Quests', url: 'https://www.piratewires.com/p/choose-good-quests', meta: 'by Trae Stephens and Markie Wagner' },
  { title: 'This is Water', url: 'https://fs.blog/david-foster-wallace-this-is-water/', meta: 'by David Foster Wallace' },
  { title: 'Ford v Ferrari (2019)', url: 'https://www.imdb.com/title/tt1950186/', meta: 'Directed by James Mangold' },
  { title: 'Fahrenheit 451', url: 'https://en.wikipedia.org/wiki/Fahrenheit_451', meta: 'by Ray Bradbury' },
  { title: 'The Sunflower', url: 'https://en.wikipedia.org/wiki/The_Sunflower_(book)', meta: 'by Simon Wiesenthal' },
];

export default function Archive() {
  const [theme, setTheme] = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={`min-h-screen flex flex-col ${dark ? 'bg-black' : 'bg-[#fff6ee]'}`}>
      <Nav dark={dark} setTheme={setTheme} />

      <main className="flex flex-col items-center flex-1 pt-20 md:pt-36 pb-20 px-14 md:px-12">
        <div className="w-full max-w-2xl">
          <h1 className={`text-2xl md:text-4xl font-bold tracking-tight mb-3 ${dark ? 'text-[#fff6ee]' : 'text-black'}`}>
            Archive
          </h1>
          <p className={`text-base md:text-xl max-w-xl ${dark ? 'text-[#e6d6c8]' : 'text-[#333]'}`}>
            A list of interesting and inspiring pieces
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
