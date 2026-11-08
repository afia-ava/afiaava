"use client";

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/components/useTheme';
import { FooterScene } from '@/components/FooterScene';
import { Nav } from '@/components/Nav';

// w/h are the real pixel dimensions; only the ratio matters for the layout.
const photos: { src: string; alt: string; w: number; h: number }[] = [
  { src: 'amdkeynote.PNG', alt: 'On stage at the AMD keynote', w: 1947, h: 1168 },
  { src: 'michael_dell.jpg', alt: 'With Michael Dell', w: 3024, h: 3150 },
  { src: 'hiking.jpg', alt: 'Hiking', w: 5712, h: 3213 },
  { src: 'unscrewing_vcr.jpg', alt: 'Unscrewing a VCR', w: 1170, h: 1730 },
  { src: 'elc-speech.png', alt: 'ELC speech', w: 3008, h: 2000 },
  { src: 'sphere.jpg', alt: 'The Sphere at night', w: 2981, h: 4450 },
  { src: 'amd_package.jpg', alt: 'AMD package', w: 5712, h: 4284 },
  { src: 'bonfire.jpg', alt: 'Bonfire by the water', w: 4032, h: 3024 },
  { src: 'ncwit-national-honorable-mention.jpg', alt: 'NCWIT national honorable mention', w: 3908, h: 2935 },
  { src: 'parthenon.jpg', alt: 'Parthenon', w: 1170, h: 653 },
  { src: 'yc-startup-school.png', alt: 'YC Startup School', w: 1168, h: 2033 },
  { src: 'la.jpg', alt: 'LA hills', w: 5712, h: 3213 },
  { src: 'daleluck_amiga.jpg', alt: 'Dale Luck and an Amiga', w: 4096, h: 3077 },
  { src: 'vermont_farmhouse.jpg', alt: 'Vermont farmhouse', w: 5712, h: 3213 },
  { src: 'ces_stage.jpg', alt: 'CES stage', w: 2123, h: 1170 },
  { src: 'lotta_lerobot_arms.jpg', alt: 'Lots of LeRobot arms', w: 3024, h: 4032 },
  { src: 'waterfront.jpg', alt: 'Waterfront marina', w: 5542, h: 3117 },
  { src: '5thels-stage.png', alt: '5th ELS stage', w: 1694, h: 1129 },
  { src: 'shipwrecked.jpg', alt: 'Shipwrecked', w: 3213, h: 5712 },
  { src: 'bartenderuhh.jpg', alt: 'Bartender robot build', w: 5712, h: 4284 },
  { src: 'john-cohn.jpg', alt: 'With John Cohn', w: 4032, h: 3024 },
  { src: 'btv.jpg', alt: 'BTV', w: 1130, h: 633 },
  { src: 'vegas.jpg', alt: 'Gondola in Vegas', w: 3016, h: 5362 },
  { src: 'duolingo.jpg', alt: 'Duolingo', w: 3024, h: 4032 },
  { src: 'nyc.jpg', alt: 'Manhattan Bridge in NYC', w: 5712, h: 3213 },
  { src: 'mountains.jpg', alt: 'Mountains', w: 2969, h: 5278 },
  { src: 'lenovotechworld.jpg', alt: 'Lenovo Tech World', w: 5712, h: 4284 },
  { src: 'maplesyrup.PNG', alt: 'Maple syrup shop', w: 1148, h: 646 },
  { src: 'north-beach.jpg', alt: 'North Beach', w: 5712, h: 3213 },
  { src: 'airplane_sim.jpg', alt: 'Airplane simulator', w: 3115, h: 5538 },
  { src: 'ohio.jpg', alt: 'Sunset in Ohio', w: 5712, h: 3213 },
  { src: 'vcr_outlook.jpg', alt: 'Inside a VCR', w: 1280, h: 959 },
  { src: 'dc.jpg', alt: 'DC', w: 1741, h: 2322 },
  { src: 'amd_stage.jpg', alt: 'AMD stage', w: 4032, h: 3024 },
  { src: 'nirav-patel.jpg', alt: 'With Nirav Patel', w: 5542, h: 4156 },
  { src: 'more_farms.jpg', alt: 'More farms', w: 5712, h: 3213 },
  { src: 'woodcut.jpg', alt: 'Wood carving of a horse', w: 5712, h: 4284 },
  { src: 'elc-banner.png', alt: 'ELC banner', w: 3303, h: 4955 },
  { src: 'ces.jpg', alt: 'CES', w: 2112, h: 1584 },
  { src: 'fourth_of_july.jpg', alt: 'Fourth of July', w: 1924, h: 3420 },
  { src: 'sf.jpg', alt: 'SF marina', w: 5712, h: 3213 },
  { src: 'lenovo_amd.jpg', alt: 'Lenovo and AMD', w: 5712, h: 4284 },
  { src: 'purdue.jpg', alt: 'Purdue', w: 1170, h: 1560 },
  { src: 'shipwrecked-topview.JPG', alt: 'Shipwrecked from above', w: 1170, h: 641 },
  { src: 'moremountainview.jpg', alt: 'More mountain views', w: 5635, h: 3169 },
  { src: 'vcr-stuff-unscrewed.jpg', alt: 'VCR parts unscrewed', w: 1219, h: 920 },
  { src: 'morenyc.jpg', alt: 'NYC skyline at night', w: 3845, h: 2163 },
  { src: 'hiking_gang.jpg', alt: 'Hiking gang', w: 4284, h: 5712 },
  { src: 'wayland.jpg', alt: 'Wayland lawn', w: 2100, h: 1576 },
  { src: '5thels-sppech.png', alt: '5th ELS speech', w: 3648, h: 4162 },
];

const GAP = 4;
const MIN_PER_ROW = 2;

// Split the photos (in order) into `rows` groups whose aspect-ratio sums are as even as possible.
// Every row gets at least MIN_PER_ROW photos, so no photo is ever left alone in a row.
function balancedRows(ratios: number[], rows: number): number[][] {
  const n = ratios.length;
  const prefix = [0];
  for (const r of ratios) prefix.push(prefix[prefix.length - 1] + r);
  const target = prefix[n] / rows;
  // cost[k][i] = best cost of putting the first i photos into k rows
  const cost = Array.from({ length: rows + 1 }, () => new Array(n + 1).fill(Infinity));
  const cut = Array.from({ length: rows + 1 }, () => new Array(n + 1).fill(0));
  cost[0][0] = 0;
  for (let k = 1; k <= rows; k++) {
    for (let i = k * MIN_PER_ROW; i <= n; i++) {
      for (let j = (k - 1) * MIN_PER_ROW; j <= i - MIN_PER_ROW; j++) {
        const c = cost[k - 1][j] + (prefix[i] - prefix[j] - target) ** 2;
        if (c < cost[k][i]) {
          cost[k][i] = c;
          cut[k][i] = j;
        }
      }
    }
  }
  const groups: number[][] = [];
  for (let k = rows, i = n; k > 0; k--) {
    const j = cut[k][i];
    groups.unshift(Array.from({ length: i - j }, (_, x) => j + x));
    i = j;
  }
  return groups;
}

export default function ThingsAboutStuff() {
  const [theme, setTheme] = useTheme();
  const dark = theme === 'dark';
  const ref = useRef<HTMLElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const ratios = photos.map((p) => p.w / p.h);
  const targetHeight = width < 768 ? 120 : 240;
  const rowCount = width
    ? Math.min(Math.floor(photos.length / MIN_PER_ROW), Math.max(1, Math.round((ratios.reduce((a, b) => a + b, 0) * targetHeight) / width)))
    : 0;
  const rows = rowCount ? balancedRows(ratios, rowCount) : [];

  return (
    <div className={`min-h-screen flex flex-col ${dark ? 'bg-black' : 'bg-[#fff6ee]'}`}>
      <Nav dark={dark} setTheme={setTheme} />

      <main className="flex-1">
        {/* Each row's height is chosen so its photos exactly fill the width; rows are balanced so none is stretched. */}
        <section ref={ref} className="w-full flex flex-col" style={{ gap: GAP }}>
          {rows.map((row) => {
            const sum = row.reduce((a, i) => a + ratios[i], 0);
            const height = (width - GAP * (row.length - 1)) / sum;
            return (
              <div key={row[0]} className="flex" style={{ gap: GAP, height }}>
                {row.map((i) => {
                  const p = photos[i];
                  return (
                    <div
                      key={p.src}
                      className={`relative overflow-hidden rounded-sm ${dark ? 'bg-[#111]' : 'bg-[#f0e4d8]'}`}
                      style={{ width: height * ratios[i] }}
                    >
                      <Image
                        src={`/things-about-stuff/${p.src}`}
                        alt={p.alt}
                        fill
                        sizes={`${Math.ceil(height * ratios[i])}px`}
                        className="object-cover"
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </section>
      </main>

      <footer className={`w-full border-t overflow-hidden ${dark ? 'bg-black border-[#1a1a1a]' : 'bg-[#fff6ee] border-[#e5e5e5]'}`}>
        <FooterScene dark={dark} />
      </footer>
    </div>
  );
}
