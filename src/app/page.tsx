"use client";

import { useState } from 'react';

function FooterScene() {
  const mx = 960, my = 72, mr = 48;
  return (
    <svg viewBox="0 0 1200 280" className="w-full block" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="fd1" width="9" height="9" patternUnits="userSpaceOnUse">
          <circle cx="4.5" cy="4.5" r="0.8" fill="rgba(255,255,255,0.11)"/>
        </pattern>
        <pattern id="fd2" width="7" height="7" patternUnits="userSpaceOnUse">
          <circle cx="3.5" cy="3.5" r="1" fill="rgba(255,255,255,0.2)"/>
        </pattern>
        <pattern id="fd3" width="5" height="5" patternUnits="userSpaceOnUse">
          <circle cx="2.5" cy="2.5" r="1.1" fill="rgba(255,255,255,0.3)"/>
        </pattern>
        <pattern id="fd4" width="4" height="4" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.3" fill="rgba(255,255,255,0.42)"/>
        </pattern>
        <clipPath id="moonClip">
          <circle cx={mx} cy={my} r={mr}/>
        </clipPath>
      </defs>

      {/* Moon */}
      <circle cx={mx} cy={my} r={mr} fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1"/>
      <g clipPath="url(#moonClip)">
        {[...Array(11)].map((_, i) => (
          <rect key={i} x={mx - mr} y={my - mr + i * 9} width={mr * 2} height="4" fill="rgba(255,255,255,0.11)"/>
        ))}
      </g>

      {/* Birds */}
      <path d="M728,42 Q735,35 742,42" stroke="rgba(255,255,255,0.22)" fill="none" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M752,28 Q759,21 766,28" stroke="rgba(255,255,255,0.18)" fill="none" strokeWidth="1.5" strokeLinecap="round"/>

      {/* Clouds */}
      <ellipse cx="165" cy="68" rx="62" ry="17" fill="url(#fd1)"/>
      <ellipse cx="395" cy="90" rx="46" ry="13" fill="url(#fd1)"/>

      {/* Back mountains */}
      <path d="M0,280 L0,195 L70,148 L130,178 L200,130 L270,165 L340,108 L410,155 L480,118 L550,150 L620,98 L690,145 L760,115 L830,150 L900,125 L970,155 L1040,128 L1110,150 L1170,125 L1200,138 L1200,280 Z" fill="url(#fd1)"/>

      {/* Mid mountains */}
      <path d="M0,280 L0,228 L65,192 L130,215 L210,168 L290,208 L370,172 L450,208 L530,165 L610,205 L690,172 L770,208 L850,178 L930,208 L1010,178 L1090,205 L1170,182 L1200,200 L1200,280 Z" fill="url(#fd2)"/>

      {/* Near mountains */}
      <path d="M0,280 L0,252 L85,218 L165,248 L248,205 L330,244 L412,208 L494,244 L576,212 L658,248 L740,218 L822,248 L904,222 L986,248 L1068,222 L1150,244 L1200,228 L1200,280 Z" fill="url(#fd3)"/>

      {/* Foreground treeline */}
      <path d="M0,280 L0,268 L18,252 L32,264 L48,245 L62,260 L78,242 L93,257 L108,240 L123,255 L138,240 L153,255 L168,268 L183,254 L198,240 L213,255 L228,267 L243,250 L258,262 L273,246 L288,258 L303,270 L318,253 L333,263 L348,248 L363,260 L378,272 L393,256 L408,266 L423,250 L438,262 L453,273 L468,257 L483,267 L498,250 L513,262 L528,274 L543,258 L558,268 L573,253 L588,263 L603,276 L618,260 L633,270 L648,253 L663,263 L678,276 L693,260 L708,270 L723,253 L738,263 L753,276 L768,260 L783,268 L798,253 L813,263 L828,276 L843,260 L858,268 L873,253 L888,263 L903,276 L918,260 L933,268 L948,253 L963,263 L978,276 L993,260 L1008,268 L1023,253 L1038,263 L1053,276 L1068,260 L1083,268 L1098,253 L1113,263 L1128,276 L1143,260 L1158,268 L1173,253 L1190,263 L1200,270 L1200,280 Z" fill="url(#fd4)"/>
    </svg>
  );
}

const FILTERS = ['All', 'Hardware', 'Software', 'Research'];

const projects = [
  { title: 'Project Title', tags: ['Hardware'], year: '2025', category: 'Hardware' },
  { title: 'Project Title', tags: ['Software'], year: '2025', category: 'Software' },
  { title: 'Project Title', tags: ['Research'], year: '2024', category: 'Research' },
  { title: 'Project Title', tags: ['Hardware'], year: '2024', category: 'Hardware' },
];

export default function Home() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <div id="home" className="bg-black min-h-screen flex flex-col">
      <nav className="w-full flex items-center justify-center px-8 py-6 bg-black/95 border-b border-[#232323] sticky top-0 z-50">
        <div className="flex items-center gap-10">
          <span className="text-white/70 font-bold text-base tracking-tight cursor-default">Projects</span>
          <span className="text-white/70 font-bold text-base tracking-tight cursor-default">About</span>
          <span className="text-white/70 font-bold text-base tracking-tight cursor-default">Thoughts</span>
        </div>
      </nav>

      <main className="flex flex-col items-center flex-1 pt-36 pb-20 px-6">
        <h1 className="text-center text-3xl md:text-4xl font-bold tracking-tight text-white mb-3 leading-snug max-w-5xl">
          I&apos;m Afia — hacking on engineering projects<br />and supporting tech education initiatives.
        </h1>

        <section className="w-full max-w-4xl mt-20">
          <div className="flex gap-3 mb-10 justify-center flex-wrap">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-1.5 rounded-full text-sm font-bold tracking-tight border transition ${
                  active === f
                    ? 'border-white text-white'
                    : 'border-[#333] text-[#666] hover:border-[#555] hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-12">
            {filtered.map((p, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="w-full aspect-video rounded-xl bg-[#111] border border-[#1e1e1e] mb-4" />
                <h3 className="text-white font-bold text-lg tracking-tight">{p.title}</h3>
                <div className="flex gap-3 mt-1 flex-wrap">
                  {p.tags.map(tag => (
                    <span key={tag} className="text-[#999] text-xs font-medium">{tag}</span>
                  ))}
                </div>
                <p className="text-[#444] text-xs mt-1">{p.year}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full max-w-4xl mt-32">
          <div className="flex gap-16">
            <div className="w-36 flex-shrink-0">
              <h2 className="text-white font-bold text-2xl tracking-tight">About me</h2>
            </div>
            <div className="flex-1 text-[#bdbdbd] text-xl leading-relaxed">
              <p>Hi, Nice to meet you!</p>
              <p className="mt-4">I&apos;m Afia, currently on a gap year fellowship at Hack Club doing cool things with even cooler people. I listen to pop music, read self-development &amp; science fiction books, and love to meet new people in new places.</p>
              <p className="mt-4">Please feel free to reach me at <a href="mailto:afiakhanomava@gmail.com" className="text-white hover:underline">afiakhanomava@gmail.com</a>!</p>
              <div className="flex gap-4 mt-6">
                <a href="https://github.com/Afia-Ava" target="_blank" rel="noopener noreferrer" className="text-[#888] hover:text-white transition">
                  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/afia-ava/" target="_blank" rel="noopener noreferrer" className="text-[#888] hover:text-white transition">
                  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.07-.93-2-2-2s-2 .93-2 2v4.5h-3v-9h3v1.22c.41-.63 1.36-1.22 2.25-1.22 1.93 0 3.5 1.57 3.5 3.5v5.5z"/></svg>
                </a>
                <a href="https://x.com/aafia_ava" target="_blank" rel="noopener noreferrer" className="text-[#888] hover:text-white transition">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.53 3H21L13.47 10.62L22.25 21H15.97L10.77 14.67L4.97 21H1L9.03 12.82L0.75 3H7.18L12 8.73L17.53 3ZM16.32 19H18.13L7.75 5.08H5.81L16.32 19Z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full max-w-4xl mt-40">
          <div className="flex gap-16">
            <div className="w-36 flex-shrink-0">
              <h2 className="text-white font-bold text-2xl tracking-tight">Thoughts</h2>
            </div>
            <div className="flex-1">
              <p className="text-[#555] text-xs font-medium mb-3 tracking-wide uppercase">June 2026</p>
              <div className="flex flex-col gap-3">
                <span className="text-[#bdbdbd] text-xl hover:text-white transition cursor-pointer">Making Intentional Choices Before Life Decides for You</span>
                <span className="text-[#bdbdbd] text-xl hover:text-white transition cursor-pointer">The Maker and the Institution</span>
              </div>
            </div>
          </div>
        </section>

        <div className="h-52" />
      </main>

      <footer className="w-full bg-black border-t border-[#1a1a1a] overflow-hidden">
        <FooterScene />
      </footer>
    </div>
  );
}
