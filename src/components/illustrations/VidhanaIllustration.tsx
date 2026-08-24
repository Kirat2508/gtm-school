/** Hand-drawn style Vidhana Soudha line art — navy ink editorial sketch */
export function VidhanaIllustration({ className = "" }: { className?: string }) {
  const ink = "#1B2A4A";
  const peach = "#F3DFD0";

  return (
    <svg
      className={className}
      viewBox="0 0 640 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Soft clouds */}
      <path
        d="M72 78c12-18 34-18 46-6 8-14 28-18 40-6 14-10 32-6 38 8"
        stroke={ink}
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M420 52c10-14 28-16 38-6 6-10 22-12 32-4 10-8 24-4 28 8"
        stroke={ink}
        strokeWidth="1.15"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M520 110c8-10 20-10 28-2 4-8 16-10 24-2"
        stroke={ink}
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.45"
      />

      {/* Tiny birds */}
      <path d="M180 96c4 3 8 3 12 0M186 100c4 3 8 3 12 0" stroke={ink} strokeWidth="1" strokeLinecap="round" opacity="0.55" />
      <path d="M560 88c3 2 6 2 9 0" stroke={ink} strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <path d="M490 130c3 2 7 2 10 0" stroke={ink} strokeWidth="1" strokeLinecap="round" opacity="0.45" />

      {/* Background trees — left */}
      <g stroke={ink} strokeWidth="1.15" strokeLinecap="round" opacity="0.75">
        <path d="M48 390c-8-40 6-70 28-78 14 22 8 52-4 78" />
        <path d="M88 400c-4-36 12-58 30-62 10 18 6 42-2 62" />
        <path d="M28 410c2-28 18-44 34-46" />
      </g>
      {/* Trees — right */}
      <g stroke={ink} strokeWidth="1.15" strokeLinecap="round" opacity="0.75">
        <path d="M580 395c8-42-4-72-26-80-12 24-6 52 4 80" />
        <path d="M610 405c4-34-10-56-28-60-8 20-4 42 2 60" />
      </g>

      {/* Main building fill (very light peach) */}
      <path
        d="M150 210 H490 V400 H150 Z"
        fill={peach}
        fillOpacity="0.35"
      />
      <path
        d="M230 95 L320 48 L410 95 V210 H230 Z"
        fill={peach}
        fillOpacity="0.28"
      />

      {/* Central dome structure */}
      <g stroke={ink} strokeWidth="1.55" strokeLinejoin="round" strokeLinecap="round">
        {/* Lion capital / finial */}
        <path d="M320 18 V32" strokeWidth="1.3" />
        <path d="M308 34 h24 M312 28 h16" strokeWidth="1.25" />
        <circle cx="320" cy="22" r="3.5" strokeWidth="1.2" />
        {/* Dome */}
        <path d="M248 118 Q320 28 392 118" strokeWidth="1.7" />
        <path d="M262 118 Q320 48 378 118" strokeWidth="1.2" opacity="0.7" />
        {/* Drum */}
        <rect x="250" y="112" width="140" height="28" rx="2" strokeWidth="1.5" />
        <path d="M265 112 V140 M295 112 V140 M320 112 V140 M345 112 V140 M375 112 V140" strokeWidth="1.15" />
        {/* Pediment / upper block */}
        <path d="M220 140 H420 V210 H220 Z" strokeWidth="1.6" />
        <path d="M235 155 H405" strokeWidth="1.1" opacity="0.6" />
        <path d="M250 140 V210 M290 140 V210 M320 140 V210 M350 140 V210 M390 140 V210" strokeWidth="1.15" />
        {/* Flag */}
        <path d="M320 148 V178" strokeWidth="1.2" />
        <path d="M320 150 H348 L340 160 L348 170 H320" strokeWidth="1.25" fill={peach} fillOpacity="0.4" />
      </g>

      {/* Side domes */}
      <g stroke={ink} strokeWidth="1.4" strokeLinejoin="round">
        <path d="M168 175 Q190 145 212 175" />
        <rect x="168" y="172" width="44" height="38" rx="1" />
        <path d="M428 175 Q450 145 472 175" />
        <rect x="428" y="172" width="44" height="38" rx="1" />
        {/* smaller corner cups */}
        <path d="M145 195 Q158 178 171 195" strokeWidth="1.2" />
        <path d="M469 195 Q482 178 495 195" strokeWidth="1.2" />
      </g>

      {/* Main colonnade body */}
      <g stroke={ink} strokeWidth="1.5" strokeLinejoin="round">
        <rect x="140" y="210" width="360" height="175" rx="2" />
        {/* Horizontal bands */}
        <path d="M140 235 H500" strokeWidth="1.2" />
        <path d="M140 255 H500" strokeWidth="1.05" opacity="0.65" />
        {/* Columns */}
        {[160, 190, 220, 250, 280, 310, 340, 370, 400, 430, 460].map((x) => (
          <path key={x} d={`M${x} 255 V385`} strokeWidth="1.25" />
        ))}
        {/* Arched openings suggestion */}
        <path d="M175 320 Q190 300 205 320" strokeWidth="1.15" opacity="0.7" />
        <path d="M295 320 Q310 298 325 320" strokeWidth="1.15" opacity="0.7" />
        <path d="M415 320 Q430 300 445 320" strokeWidth="1.15" opacity="0.7" />
        {/* Inscription band */}
        <rect x="210" y="238" width="220" height="14" rx="1" strokeWidth="1.1" />
      </g>

      {/* Steps */}
      <g stroke={ink} strokeWidth="1.35" strokeLinecap="round">
        <path d="M200 385 H440" />
        <path d="M190 395 H450" />
        <path d="M180 405 H460" />
        <path d="M170 415 H470" />
        <path d="M160 425 H480" strokeWidth="1.5" />
      </g>

      {/* Fence */}
      <g stroke={ink} strokeWidth="1.2" strokeLinecap="round">
        <path d="M40 445 H600" strokeWidth="1.4" />
        {Array.from({ length: 28 }).map((_, i) => {
          const x = 48 + i * 20;
          return <path key={x} d={`M${x} 445 V468`} strokeWidth="1.05" />;
        })}
        <path d="M40 468 H600" strokeWidth="1.3" />
        {/* Gate posts */}
        <rect x="250" y="430" width="10" height="42" rx="1" strokeWidth="1.25" />
        <rect x="380" y="430" width="10" height="42" rx="1" strokeWidth="1.25" />
      </g>

      {/* Equestrian statue hint — right foreground */}
      <g stroke={ink} strokeWidth="1.3" strokeLinejoin="round" strokeLinecap="round">
        <rect x="505" y="400" width="36" height="48" rx="1" />
        <path d="M512 400 V385 H534 V400" />
        <path d="M518 385 Q528 360 540 372 Q548 380 538 388" strokeWidth="1.25" />
        <path d="M528 365 V352" strokeWidth="1.15" />
      </g>

      {/* Ground line */}
      <path d="M20 490 H620" stroke={ink} strokeWidth="1.4" strokeLinecap="round" opacity="0.35" />
    </svg>
  );
}

/** Tiny mark for header */
export function VidhanaMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M16 2 L20 12 H12 L16 2Z M8 12 H24 V16 H8Z M6 16 H26 V32 H6Z"
        stroke="#1B2A4A"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M11 20 V32 M16 18 V32 M21 20 V32" stroke="#1B2A4A" strokeWidth="1.2" />
      <circle cx="16" cy="3.5" r="1.5" stroke="#1B2A4A" strokeWidth="1.1" />
    </svg>
  );
}
