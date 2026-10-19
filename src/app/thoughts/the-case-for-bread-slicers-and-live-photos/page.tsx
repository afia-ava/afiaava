"use client";

import Link from 'next/link';
import { useTheme } from '@/components/useTheme';
import { FooterScene } from '@/components/FooterScene';
import { Nav } from '@/components/Nav';

export default function BreadSlicersAndLivePhotos() {
  const [theme, setTheme] = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={`min-h-screen flex flex-col ${dark ? 'bg-black' : 'bg-[#fff6ee]'}`}>
      <Nav dark={dark} setTheme={setTheme} />

      <main className="flex flex-col items-center flex-1 pt-20 md:pt-36 pb-40 md:pb-56 px-14 md:px-12">
        <div className="w-full max-w-2xl">
          <Link
            href="/thoughts"
            className={`font-bold text-sm tracking-tight transition ${dark ? 'text-[#666] hover:text-[#fff6ee]' : 'text-[#999] hover:text-black'}`}
          >
            ← Thoughts
          </Link>

          <h1 className={`text-2xl md:text-4xl font-bold tracking-tight mt-6 mb-3 ${dark ? 'text-[#fff6ee]' : 'text-black'}`}>
            The Case for Bread Slicers and Live Photos
          </h1>

          <p className={`font-bold text-base tracking-tight mb-10 ${dark ? 'text-[#666]' : 'text-[#999]'}`}>
            by palooza, giragon, aka
          </p>

          <article className={`flex flex-col gap-6 font-medium text-base md:text-lg leading-relaxed tracking-tight ${dark ? 'text-[#e6d6c8]' : 'text-[#777]'}`}>
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

      <footer className={`w-full border-t overflow-hidden ${dark ? 'bg-black border-[#1a1a1a]' : 'bg-[#fff6ee] border-[#e5e5e5]'}`}>
        <FooterScene dark={dark} />
      </footer>
    </div>
  );
}
