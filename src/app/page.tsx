"use client";

import { useState } from 'react';
import Image from 'next/image';

function FooterScene({ dark }: { dark: boolean }) {
  const c = (a: number) => dark ? `rgba(255,255,255,${a})` : `rgba(0,0,0,${a})`;
  const mx = 960, my = 72, mr = 48;
  return (
    <svg viewBox="0 0 1200 280" className="w-full block" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="fd1" width="9" height="9" patternUnits="userSpaceOnUse">
          <circle cx="4.5" cy="4.5" r="0.8" fill={c(0.25)}/>
        </pattern>
        <pattern id="fd2" width="7" height="7" patternUnits="userSpaceOnUse">
          <circle cx="3.5" cy="3.5" r="1" fill={c(0.42)}/>
        </pattern>
        <pattern id="fd3" width="5" height="5" patternUnits="userSpaceOnUse">
          <circle cx="2.5" cy="2.5" r="1.1" fill={c(0.62)}/>
        </pattern>
        <pattern id="fd4" width="4" height="4" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.3" fill={c(0.82)}/>
        </pattern>
        <clipPath id="moonClip">
          <circle cx={mx} cy={my} r={mr}/>
        </clipPath>
      </defs>
      <circle cx={mx} cy={my} r={mr} fill="none" stroke={c(0.4)} strokeWidth="1"/>
      <g clipPath="url(#moonClip)">
        {[...Array(11)].map((_, i) => (
          <rect key={i} x={mx - mr} y={my - mr + i * 9} width={mr * 2} height="4" fill={c(0.25)}/>
        ))}
      </g>
      <path d="M728,42 Q735,35 742,42" stroke={c(0.45)} fill="none" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M752,28 Q759,21 766,28" stroke={c(0.35)} fill="none" strokeWidth="1.5" strokeLinecap="round"/>
      <ellipse cx="165" cy="68" rx="62" ry="17" fill="url(#fd1)"/>
      <ellipse cx="395" cy="90" rx="46" ry="13" fill="url(#fd1)"/>
      <path d="M0,280 L0,195 L70,148 L130,178 L200,130 L270,165 L340,108 L410,155 L480,118 L550,150 L620,98 L690,145 L760,115 L830,150 L900,125 L970,155 L1040,128 L1110,150 L1170,125 L1200,138 L1200,280 Z" fill="url(#fd1)"/>
      <path d="M0,280 L0,228 L65,192 L130,215 L210,168 L290,208 L370,172 L450,208 L530,165 L610,205 L690,172 L770,208 L850,178 L930,208 L1010,178 L1090,205 L1170,182 L1200,200 L1200,280 Z" fill="url(#fd2)"/>
      <path d="M0,280 L0,252 L85,218 L165,248 L248,205 L330,244 L412,208 L494,244 L576,212 L658,248 L740,218 L822,248 L904,222 L986,248 L1068,222 L1150,244 L1200,228 L1200,280 Z" fill="url(#fd3)"/>
      <path d="M0,280 L0,268 L18,252 L32,264 L48,245 L62,260 L78,242 L93,257 L108,240 L123,255 L138,240 L153,255 L168,268 L183,254 L198,240 L213,255 L228,267 L243,250 L258,262 L273,246 L288,258 L303,270 L318,253 L333,263 L348,248 L363,260 L378,272 L393,256 L408,266 L423,250 L438,262 L453,273 L468,257 L483,267 L498,250 L513,262 L528,274 L543,258 L558,268 L573,253 L588,263 L603,276 L618,260 L633,270 L648,253 L663,263 L678,276 L693,260 L708,270 L723,253 L738,263 L753,276 L768,260 L783,268 L798,253 L813,263 L828,276 L843,260 L858,268 L873,253 L888,263 L903,276 L918,260 L933,268 L948,253 L963,263 L978,276 L993,260 L1008,268 L1023,253 L1038,263 L1053,276 L1068,260 L1083,268 L1098,253 L1113,263 L1128,276 L1143,260 L1158,268 L1173,253 L1190,263 L1200,270 L1200,280 Z" fill="url(#fd4)"/>
    </svg>
  );
}

const FILTERS = ['All', 'Hardware', 'Software'];

const projects = [
  { title: 'Model Rocket', tags: ['Hardware'], year: '2026', category: 'Hardware', image: '/projects/rocket-launch.jpeg', link: 'https://github.com/afia-ava/model-rocket' },
  { title: 'Breadboard', tags: ['Software'], year: '2026', category: 'Software', image: '/projects/breadboard.png', link: 'https://github.com/afia-ava/breadboard' },
  { title: 'Hot Potato', tags: ['Hardware'], year: '2026', category: 'Hardware', image: '/projects/hot-potato.jpg', link: 'https://github.com/afia-ava/shake-shake-boom' },
  { title: 'Armtender', tags: ['Hardware'], year: '2025', category: 'Hardware', image: '/projects/armtender.jpeg', link: 'https://github.com/afia-ava/Armtender' },
  { title: 'Drone', tags: ['Hardware'], year: '2025', category: 'Hardware', image: '/projects/drone.jpeg' },
  { title: 'Video Cassette Recorder', tags: ['Hardware'], year: '2025', category: 'Hardware', image: '/projects/vcr.jpeg' },
  { title: 'Cadence', tags: ['Hardware'], year: '2026', category: 'Hardware', image: '/projects/cadence.jpeg', link: 'https://github.com/afia-ava/cadence-lab' },
  { title: 'Statuesque', tags: ['Software'], year: '2025', category: 'Software', image: '/projects/statuesque.png', link: 'https://github.com/afia-ava/statuesque' },
];

export default function Home() {
  const [active, setActive] = useState('All');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const dark = theme === 'dark';
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <div id="home" className={`min-h-screen flex flex-col ${dark ? 'bg-black' : 'bg-white'}`}>
      <nav className={`w-full flex items-center px-6 md:px-8 py-6 border-b sticky top-0 z-50 ${dark ? 'bg-black/95 border-[#232323]' : 'bg-white/95 border-[#e5e5e5]'}`}>
        <div className="flex-1" />
        <div className="flex items-center gap-10">
          <a href="#projects" className={`font-bold text-base tracking-tight transition ${dark ? 'text-white/70 hover:text-white' : 'text-black/60 hover:text-black'}`}>Projects</a>
          <a href="#about" className={`font-bold text-base tracking-tight transition ${dark ? 'text-white/70 hover:text-white' : 'text-black/60 hover:text-black'}`}>About</a>
          <a href="#thoughts" className={`font-bold text-base tracking-tight transition ${dark ? 'text-white/70 hover:text-white' : 'text-black/60 hover:text-black'}`}>Thoughts</a>
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
        <h1 className={`text-center text-2xl md:text-4xl font-bold tracking-tight mb-3 leading-snug max-w-5xl ${dark ? 'text-white' : 'text-black'}`}>
          I&apos;m Afia — hacking on engineering projects <br className="max-md:hidden" />and supporting tech education initiatives.
        </h1>

        <section id="projects" className="w-full max-w-4xl mt-16 md:mt-20 scroll-mt-24">
          <div className="flex gap-3 mb-10 justify-center flex-wrap">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-1.5 rounded-full text-sm font-bold tracking-tight border transition ${
                  active === f
                    ? dark ? 'border-white text-white' : 'border-black text-black'
                    : dark ? 'border-[#333] text-[#666] hover:border-[#555] hover:text-white' : 'border-[#ccc] text-[#999] hover:border-[#888] hover:text-black'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 md:gap-y-12">
            {filtered.map((p, i) => (
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
              <p className="mt-4">Please feel free to reach me at <a href="mailto:afiakhanomava@gmail.com" className={`hover:underline ${dark ? 'text-white' : 'text-black'}`}>afiakhanomava@gmail.com</a>!</p>
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
              <div className="flex flex-col gap-3">
                <span className={`text-lg md:text-xl transition cursor-pointer ${dark ? 'text-[#bdbdbd] hover:text-white' : 'text-[#444] hover:text-black'}`}>Making Intentional Choices Before Life Decides for You</span>
                <span className={`text-lg md:text-xl transition cursor-pointer ${dark ? 'text-[#bdbdbd] hover:text-white' : 'text-[#444] hover:text-black'}`}>The Maker and the Institution</span>
              </div>
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
