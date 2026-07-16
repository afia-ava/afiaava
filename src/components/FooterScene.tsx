export function FooterScene({ dark }: { dark: boolean }) {
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
