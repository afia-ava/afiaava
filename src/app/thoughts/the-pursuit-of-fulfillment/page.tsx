"use client";

import Link from 'next/link';
import { useTheme } from '@/components/useTheme';
import { FooterScene } from '@/components/FooterScene';
import { Nav } from '@/components/Nav';

export default function ThePursuitOfFulfillment() {
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
            The Pursuit of Fulfillment
          </h1>

          <p className={`font-bold text-base tracking-tight mb-10 ${dark ? 'text-[#666]' : 'text-[#777]'}`}>
            November 7, 2026
          </p>

          <article className={`flex flex-col gap-6 font-medium text-base md:text-lg leading-relaxed tracking-tight ${dark ? 'text-[#e6d6c8]' : 'text-[#222]'}`}>
            <p>
              Five years ago, I used to spend hours going through debate videos, taking notes, and preparing for upcoming tournaments. I wasn&rsquo;t particularly great at it, but I enjoyed the community and friendships I made. Anyway, today I&rsquo;m writing down some rambling thoughts inspired by the WSDC 2026 Finals.
            </p>
            <p>
              If you&rsquo;re unfamiliar, WSDC is the World Schools Debating Championship. Many high school debaters spend their year preparing for it. Beyond the tournament, it offers a great opportunity to learn to speak eloquently, make friends, and defend perspectives you don&rsquo;t even believe in!
            </p>
            <p>
              The motion is &ldquo;This house believes that humans led more fulfilled lives before the Neolithic Revolution&rdquo;, with an info slide: The Neolithic Revolution, starting around 10,000 BCE, was the shift from small and mobile groups who survived by hunting wild animals and gathering wild plants to larger and more settled communities that grew crops and kept domesticated animals.
            </p>
            <p>
              I was really hoping for more well-thought-out arguments, especially considering the teams had eight weeks to prepare. The main arguments revolved around living conditions, uncertainty, the significance of community, the role of technological progress, and whether struggle contributes to a fulfilling life.
            </p>
            <p>
              The proposition argued that pre-agricultural societies offered greater excitement, stronger community bonds, and more personal meaning. The opposition, on the other hand, argued that agricultural societies offered greater security, social mobility, and opportunities for personal fulfillment.
            </p>
            <p>
              I&rsquo;d define a fulfilled life as one lived with a deep sense of meaning, purpose, and direction. However, fulfillment is inherently subjective, and what makes life meaningful can look wildly different for different people.
            </p>
            <p>
              I find it interesting that both teams placed considerable emphasis on excitement, or the lack thereof, when determining whether people lived fulfilling lives. Riding crazy roller coasters is pretty thrilling; does it really make me feel fulfilled in life? To me, perhaps, the most interesting question is what my version of a fulfilled life looks like.
            </p>
            <p>
              First, I love giving up sleep to work on problems that genuinely interest me. I don&rsquo;t particularly see the point of uncertainty for its own sake, but I love exploring and learning new things that are meaningful to me. I also think that struggle and uncertainty, at least to some extent, make life more meaningful. Overcoming difficult circumstances and working through problems make me appreciate the journey much more.
            </p>
            <p>
              Second, people make our lives awesome. I&rsquo;m still learning, but I want to be a kinder person and nurture my relationships better. All my friends bring new perspectives into my life, and these experiences have made me a more thoughtful person over the years. I&rsquo;ve taken on challenges I never thought I could handle, largely because other people believed I could. After all, what&rsquo;s the point of having incredible experiences if you have no one to share them with?
            </p>
            <p>
              Third, I want to be financially independent and, hopefully, support my family. I don&rsquo;t aspire to become extremely wealthy just for the sake of it. I live a fairly minimalist life and don&rsquo;t get much enjoyment out of buying material things (well, I want to buy a lot of hardware stuff and plants if that counts). I always prefer experiences over things. When I&rsquo;m able to, I plan to use any excess wealth to advance scientific progress and education for children in low-income families.
            </p>
            <p>
              I suppose there&rsquo;s no universal formula for a fulfilling life. We have access to so many things, just as the debate suggests, but having unlimited options doesn&rsquo;t mean we&rsquo;re making the most of them.
            </p>
            <p>
              I don&rsquo;t have everything figured out, and I&rsquo;m pretty sure my definition of fulfillment may evolve as I grow older and experience more of the world. For now, I want to live a life where I&rsquo;m constantly learning, surrounded by people I love, and making meaningful contributions to the world.
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
