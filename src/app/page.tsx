"use client";

import { useState } from 'react';

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
          <span className="text-white/70 font-bold text-base tracking-tight cursor-default">Contact</span>
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
            <div className="flex-1">
            </div>
          </div>
        </section>

        <section className="w-full max-w-4xl mt-40">
          <div className="flex gap-16">
            <div className="w-36 flex-shrink-0">
              <h2 className="text-white font-bold text-2xl tracking-tight">Thoughts</h2>
            </div>
            <div className="flex-1">
            </div>
          </div>
        </section>

        <section className="w-full max-w-4xl mt-52">
          <div className="flex gap-16">
            <div className="w-36 flex-shrink-0">
              <h2 className="text-white font-bold text-2xl tracking-tight">Contact</h2>
            </div>
            <div className="flex-1">
            </div>
          </div>
        </section>

        <div className="h-52" />
      </main>

      <footer className="w-full bg-black py-5 flex justify-end px-8">
        <span className="text-[#888] text-sm">© 2026 Afia Ava</span>
      </footer>
    </div>
  );
}
