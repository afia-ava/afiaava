"use client";

import Image from 'next/image';
import { useTheme } from '@/components/useTheme';
import { FooterScene } from '@/components/FooterScene';
import { Nav } from '@/components/Nav';

const projects = [
  { title: 'Model Rocket', image: '/projects/rocket-launch.jpeg', link: 'https://github.com/afia-ava/model-rocket' },
  { title: 'Armtender', image: '/projects/armtender.jpeg', link: 'https://github.com/afia-ava/Armtender' },
  { title: 'Hot Potato', image: '/projects/hot-potato.jpg', link: 'https://github.com/afia-ava/shake-shake-boom' },
  { title: 'Cadence', image: '/projects/cadence.jpeg', link: 'https://github.com/afia-ava/cadence-lab' },
  { title: 'Video Cassette Recorder', image: '/projects/vcr.jpeg' },
  { title: 'Drone', image: '/projects/drone.jpeg' },
];

export default function Home() {
  const [theme, setTheme] = useTheme();
  const dark = theme === 'dark';

  return (
    <div id="home" className={`min-h-screen flex flex-col ${dark ? 'bg-black' : 'bg-[#fff6ee]'}`}>
      <Nav dark={dark} setTheme={setTheme} />

      <main className="flex flex-col items-center flex-1 pt-16 md:pt-20 pb-20 px-14 md:px-12">

        <section id="about" className="w-full max-w-4xl scroll-mt-24">
          <div className="flex flex-col gap-6 md:flex-row md:gap-16">
            <div className="md:w-36 md:flex-shrink-0">
              <h2 className={`font-bold text-2xl tracking-tight ${dark ? 'text-[#fff6ee]' : 'text-black'}`}>About</h2>
            </div>
            <div className={`flex-1 text-base md:text-xl leading-relaxed ${dark ? 'text-[#e6d6c8]' : 'text-[#333]'}`}>
              <p>Hi,</p>
              <p className="mt-4">Nice to meet you.</p>
              <p className="mt-4">I&apos;m Afia, currently doing cool things at <a href="https://hackclub.com/" target="_blank" rel="noopener noreferrer" className={`hover:underline ${dark ? 'text-[#fff6ee]' : 'text-black'}`}>Hack Club</a> with even cooler&nbsp;people. I enjoy exploring nature, reading fiction books,<br className="hidden md:block" /> and meeting new people.</p>
              <p className="mt-4">Feel free to reach me at <br className="md:hidden" /><a href="mailto:hi@afiaava.com" className={`whitespace-nowrap hover:underline ${dark ? 'text-[#fff6ee]' : 'text-black'}`}>hi [at] afiaava [dot] com</a>.</p>
              <div className="flex gap-4 mt-6">
                <a href="https://github.com/Afia-Ava" target="_blank" rel="noopener noreferrer" className={`transition ${dark ? 'text-[#888] hover:text-[#fff6ee]' : 'text-[#555] hover:text-black'}`}>
                  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/afia-ava/" target="_blank" rel="noopener noreferrer" className={`transition ${dark ? 'text-[#888] hover:text-[#fff6ee]' : 'text-[#555] hover:text-black'}`}>
                  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.07-.93-2-2-2s-2 .93-2 2v4.5h-3v-9h3v1.22c.41-.63 1.36-1.22 2.25-1.22 1.93 0 3.5 1.57 3.5 3.5v5.5z"/></svg>
                </a>
                <a href="https://x.com/aafia_ava" target="_blank" rel="noopener noreferrer" className={`transition ${dark ? 'text-[#888] hover:text-[#fff6ee]' : 'text-[#555] hover:text-black'}`}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.53 3H21L13.47 10.62L22.25 21H15.97L10.77 14.67L4.97 21H1L9.03 12.82L0.75 3H7.18L12 8.73L17.53 3ZM16.32 19H18.13L7.75 5.08H5.81L16.32 19Z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full max-w-4xl mt-24 md:mt-32 scroll-mt-24">
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
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className={`font-bold text-lg tracking-tight hover:underline ${dark ? 'text-[#fff6ee]' : 'text-black'}`}>{p.title}</a>
                ) : (
                  <h3 className={`font-bold text-lg tracking-tight ${dark ? 'text-[#fff6ee]' : 'text-black'}`}>{p.title}</h3>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className={`w-full border-t overflow-hidden ${dark ? 'bg-black border-[#1a1a1a]' : 'bg-[#fff6ee] border-[#e5e5e5]'}`}>
        <FooterScene dark={dark} />
      </footer>
    </div>
  );
}
