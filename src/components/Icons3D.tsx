import { useId } from 'react';

interface Icon3DProps {
  className?: string;
}

export function Icon3DDesign({ className = 'w-11 h-11' }: Icon3DProps) {
  const uid = useId().replace(/:/g, '');
  const baseGrad = `${uid}-base`;
  const accentGrad = `${uid}-accent`;
  const penGrad = `${uid}-pen`;
  const shadowId = `${uid}-shadow`;

  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={baseGrad} x1="6" y1="10" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#DCE4FF" />
        </linearGradient>
        <linearGradient id={accentGrad} x1="12" y1="12" x2="36" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#5C7FFF" />
          <stop offset="100%" stopColor="#2F5BFF" />
        </linearGradient>
        <linearGradient id={penGrad} x1="28" y1="6" x2="42" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
        <filter id={shadowId} x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3" stdDeviation="2.2" floodColor="#1637B8" floodOpacity="0.22" />
        </filter>
      </defs>

      {/* Extruded 3D canvas thickness */}
      <rect x="6" y="13" width="32" height="28" rx="6" fill="#B6C6FF" />
      {/* Front artboard face */}
      <rect
        x="6"
        y="10"
        width="32"
        height="28"
        rx="6"
        fill={`url(#${baseGrad})`}
        stroke="#94A6FF"
        strokeWidth="1"
      />

      {/* Recessed UI layout blocks on canvas */}
      <rect x="10.5" y="15" width="14" height="8" rx="2.5" fill={`url(#${accentGrad})`} />
      <rect x="10.5" y="25.5" width="23" height="3" rx="1.5" fill="#C7D4FF" />
      <rect x="10.5" y="30.5" width="16" height="3" rx="1.5" fill="#DCE4FF" />

      {/* Floating 3D UI card */}
      <g filter={`url(#${shadowId})`}>
        <rect x="20" y="18" width="14" height="12" rx="3.5" fill="#FFFFFF" stroke="#94A6FF" strokeWidth="0.9" />
        <circle cx="24.5" cy="23" r="2.2" fill="#2F5BFF" />
        <rect x="28" y="21.5" width="4" height="1.5" rx="0.75" fill="#94A6FF" />
        <rect x="28" y="24" width="3" height="1.5" rx="0.75" fill="#CBD5E1" />
      </g>

      {/* 3D Stylus / Pen floating top-right */}
      <g filter={`url(#${shadowId})`}>
        <path
          d="M37.8 6.8C38.5 6.1 39.6 6.1 40.3 6.8L41.7 8.2C42.4 8.9 42.4 10 41.7 10.7L30.5 21.9L25.5 23L26.6 18L37.8 6.8Z"
          fill={`url(#${penGrad})`}
        />
        <path d="M36.3 8.3L40.2 12.2L41.7 10.7L37.8 6.8L36.3 8.3Z" fill="#5C7FFF" />
        <path d="M26.6 18L30.5 21.9L25.5 23L26.6 18Z" fill="#94A6FF" />
      </g>
    </svg>
  );
}

export function Icon3DAnalytics({ className = 'w-11 h-11' }: Icon3DProps) {
  const uid = useId().replace(/:/g, '');
  const barTop = `${uid}-top`;
  const barFront = `${uid}-front`;
  const barSide = `${uid}-side`;
  const shadowId = `${uid}-shadow`;

  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={barTop} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#94A6FF" />
          <stop offset="100%" stopColor="#5C7FFF" />
        </linearGradient>
        <linearGradient id={barFront} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3B66FF" />
          <stop offset="100%" stopColor="#1D44D8" />
        </linearGradient>
        <linearGradient id={barSide} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1637B8" />
          <stop offset="100%" stopColor="#0F237A" />
        </linearGradient>
        <filter id={shadowId} x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3" stdDeviation="2" floodColor="#0F172A" floodOpacity="0.16" />
        </filter>
      </defs>

      {/* Isometric 3D Base Deck */}
      <path d="M5 33L24 42L43 33L24 24L5 33Z" fill="#DCE4FF" />
      <path d="M5 33V36.5L24 45.5V42L5 33Z" fill="#B6C6FF" />
      <path d="M43 33V36.5L24 45.5V42L43 33Z" fill="#94A6FF" />

      {/* Bar 1 (Left, Short) */}
      <g filter={`url(#${shadowId})`}>
        <path d="M10 25L14.5 27.2V34L10 31.8V25Z" fill="#5C7FFF" />
        <path d="M19 25L14.5 27.2V34L19 31.8V25Z" fill="#2F5BFF" />
        <path d="M10 25L14.5 22.8L19 25L14.5 27.2L10 25Z" fill="#C7D4FF" />
      </g>

      {/* Bar 2 (Middle, Medium) */}
      <g filter={`url(#${shadowId})`}>
        <path d="M19.5 18L24 20.2V36.5L19.5 34.3V18Z" fill={`url(#${barFront})`} />
        <path d="M28.5 18L24 20.2V36.5L28.5 34.3V18Z" fill={`url(#${barSide})`} />
        <path d="M19.5 18L24 15.8L28.5 18L24 20.2L19.5 18Z" fill={`url(#${barTop})`} />
      </g>

      {/* Bar 3 (Right, Tallest Navy/Cobalt Accent) */}
      <g filter={`url(#${shadowId})`}>
        <path d="M29 11L33.5 13.2V32L29 29.8V11Z" fill="#1E293B" />
        <path d="M38 11L33.5 13.2V32L38 29.8V11Z" fill="#0F172A" />
        <path d="M29 11L33.5 8.8L38 11L33.5 13.2L29 11Z" fill="#5C7FFF" />
      </g>

      {/* Floating 3D Signal Node */}
      <circle cx="33.5" cy="6.5" r="2.5" fill="#2F5BFF" stroke="#FFFFFF" strokeWidth="1.2" />
    </svg>
  );
}

export function Icon3DBot({ className = 'w-11 h-11' }: Icon3DProps) {
  const uid = useId().replace(/:/g, '');
  const bodyGrad = `${uid}-body`;
  const visorGrad = `${uid}-visor`;
  const shadowId = `${uid}-shadow`;

  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={bodyGrad} x1="10" y1="10" x2="38" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="55%" stopColor="#E6ECFF" />
          <stop offset="100%" stopColor="#B8C8FF" />
        </linearGradient>
        <linearGradient id={visorGrad} x1="14" y1="18" x2="34" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#090E1A" />
        </linearGradient>
        <filter id={shadowId} x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3" stdDeviation="2.2" floodColor="#1637B8" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* Antenna Stem & 3D Orb */}
      <rect x="22.5" y="7" width="3" height="6" rx="1.5" fill="#2F5BFF" />
      <circle cx="24" cy="6.5" r="3.2" fill="#2F5BFF" />
      <circle cx="23" cy="5.5" r="1.1" fill="#94A6FF" />

      {/* Side Ear Pods (3D depth) */}
      <rect x="6" y="21" width="5" height="10" rx="2.5" fill="#2F5BFF" />
      <rect x="37" y="21" width="5" height="10" rx="2.5" fill="#1637B8" />

      {/* 3D Extruded Chassis */}
      <g filter={`url(#${shadowId})`}>
        <rect x="9.5" y="14" width="29" height="25" rx="9" fill="#94A6FF" />
        <rect
          x="9.5"
          y="12"
          width="29"
          height="24"
          rx="8.5"
          fill={`url(#${bodyGrad})`}
          stroke="#94A6FF"
          strokeWidth="0.9"
        />
      </g>

      {/* Top Specular Highlight */}
      <path d="M16 14.5H32" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />

      {/* Recessed Dark Navy Visor */}
      <rect x="13.5" y="18.5" width="21" height="11.5" rx="5.5" fill={`url(#${visorGrad})`} />

      {/* Glowing 3D Optical Eyes */}
      <circle cx="19.5" cy="24.2" r="2.4" fill="#5C7FFF" />
      <circle cx="18.8" cy="23.4" r="0.9" fill="#FFFFFF" />
      <circle cx="28.5" cy="24.2" r="2.4" fill="#5C7FFF" />
      <circle cx="27.8" cy="23.4" r="0.9" fill="#FFFFFF" />

      {/* Subtle Base Collar */}
      <rect x="18" y="38.5" width="12" height="3" rx="1.5" fill="#5C7FFF" />
    </svg>
  );
}

export function Icon3DCode({ className = 'w-11 h-11' }: Icon3DProps) {
  const uid = useId().replace(/:/g, '');
  const winGrad = `${uid}-win`;
  const codeGrad = `${uid}-code`;
  const shadowId = `${uid}-shadow`;

  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={winGrad} x1="6" y1="9" x2="42" y2="39" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#DCE4FF" />
        </linearGradient>
        <linearGradient id={codeGrad} x1="14" y1="20" x2="34" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4F74FF" />
          <stop offset="100%" stopColor="#1D44D8" />
        </linearGradient>
        <filter id={shadowId} x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="2.5" stdDeviation="1.8" floodColor="#1637B8" floodOpacity="0.22" />
        </filter>
      </defs>

      {/* Extruded Back Plate */}
      <rect x="6" y="13" width="36" height="27" rx="7" fill="#94A6FF" />

      {/* Main 3D Window */}
      <rect
        x="6"
        y="9.5"
        width="36"
        height="27.5"
        rx="7"
        fill={`url(#${winGrad})`}
        stroke="#94A6FF"
        strokeWidth="1"
      />

      {/* Window Header Bar */}
      <path d="M6.5 16.5H41.5" stroke="#CBD5E1" strokeWidth="1" />
      <circle cx="11.5" cy="13" r="1.4" fill="#2F5BFF" />
      <circle cx="16" cy="13" r="1.4" fill="#94A6FF" />
      <circle cx="20.5" cy="13" r="1.4" fill="#CBD5E1" />

      {/* Recessed Dark Terminal Well */}
      <rect x="9.5" y="19.5" width="29" height="14" rx="4" fill="#0F172A" />

      {/* Floating 3D Extruded Code Glyphs */}
      <g filter={`url(#${shadowId})`}>
        <path
          d="M18.5 22.5L13.8 26.5L18.5 30.5"
          stroke="#5C7FFF"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M29.5 22.5L34.2 26.5L29.5 30.5"
          stroke="#5C7FFF"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.6 21.5L22.4 31.5"
          stroke="#FFFFFF"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export function Icon3DVideo({ className = 'w-11 h-11' }: Icon3DProps) {
  const uid = useId().replace(/:/g, '');
  const bodyGrad = `${uid}-body`;
  const lensGrad = `${uid}-lens`;
  const shadowId = `${uid}-shadow`;

  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={bodyGrad} x1="6" y1="12" x2="36" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
        <linearGradient id={lensGrad} x1="20" y1="16" x2="40" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#5C7FFF" />
          <stop offset="100%" stopColor="#1D44D8" />
        </linearGradient>
        <filter id={shadowId} x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3" stdDeviation="2.2" floodColor="#0F172A" floodOpacity="0.24" />
        </filter>
      </defs>

      {/* Top 3D Film Reels */}
      <circle cx="15" cy="12" r="5" fill="#5C7FFF" />
      <circle cx="15" cy="12" r="2" fill="#EEF2FF" />
      <circle cx="26" cy="11" r="6" fill="#2F5BFF" />
      <circle cx="26" cy="11" r="2.3" fill="#EEF2FF" />

      {/* Extruded Camera Body Shadow Layer */}
      <rect x="6" y="18" width="28" height="21" rx="6" fill="#334155" />

      {/* Main 3D Camera Chassis */}
      <g filter={`url(#${shadowId})`}>
        <rect x="6" y="16" width="27" height="20" rx="5.5" fill={`url(#${bodyGrad})`} />
      </g>

      {/* 3D Side Lens Hood */}
      <path d="M33 21.5L42 17.5V34.5L33 30.5V21.5Z" fill="#2F5BFF" />
      <path d="M33 21.5L42 17.5V23L33 25V21.5Z" fill="#5C7FFF" />

      {/* Front Play Prism Accent */}
      <circle cx="19.5" cy="26" r="6.5" fill={`url(#${lensGrad})`} stroke="#94A6FF" strokeWidth="1" />
      <path d="M18 23.2L22.8 26L18 28.8V23.2Z" fill="#FFFFFF" />
    </svg>
  );
}

export function Icon3DSearch({ className = 'w-10 h-10' }: Icon3DProps) {
  const uid = useId().replace(/:/g, '');
  const ringGrad = `${uid}-ring`;
  const glassGrad = `${uid}-glass`;
  const shadowId = `${uid}-shadow`;

  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={ringGrad} x1="8" y1="6" x2="34" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#5C7FFF" />
          <stop offset="100%" stopColor="#1D44D8" />
        </linearGradient>
        <linearGradient id={glassGrad} x1="12" y1="10" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#DCE4FF" stopOpacity="0.85" />
        </linearGradient>
        <filter id={shadowId} x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3" stdDeviation="2.2" floodColor="#1637B8" floodOpacity="0.24" />
        </filter>
      </defs>

      {/* Subtle Isometric Target Card Underneath */}
      <rect x="7" y="13" width="22" height="22" rx="5" fill="#DCE4FF" />
      <rect x="12" y="18" width="12" height="2.5" rx="1.25" fill="#94A6FF" />
      <rect x="12" y="23" width="8" height="2.5" rx="1.25" fill="#B6C6FF" />

      {/* 3D Magnifying Glass */}
      <g filter={`url(#${shadowId})`}>
        {/* Handle */}
        <path
          d="M29.5 29.5L40 40"
          stroke="#0F172A"
          strokeWidth="5.5"
          strokeLinecap="round"
        />
        <path
          d="M29.5 29.5L39.5 39.5"
          stroke="#334155"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        {/* Extruded Outer Ring */}
        <circle cx="21" cy="21" r="12.5" fill="#1637B8" />
        <circle cx="21" cy="19.5" r="12" fill={`url(#${ringGrad})`} />
        {/* Frosted Convex Lens */}
        <circle cx="21" cy="19.5" r="8.2" fill={`url(#${glassGrad})`} />
        {/* Specular Arc */}
        <path
          d="M16 15.5C17.2 13.9 19.1 13 21.2 13"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export function Icon3DDraw({ className = 'w-10 h-10' }: Icon3DProps) {
  const uid = useId().replace(/:/g, '');
  const rulerGrad = `${uid}-ruler`;
  const bodyGrad = `${uid}-body`;
  const shadowId = `${uid}-shadow`;

  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={rulerGrad} x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#D6E0FF" />
        </linearGradient>
        <linearGradient id={bodyGrad} x1="12" y1="30" x2="38" y2="10" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#5C7FFF" />
          <stop offset="100%" stopColor="#1D44D8" />
        </linearGradient>
        <filter id={shadowId} x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3" stdDeviation="2.2" floodColor="#1637B8" floodOpacity="0.22" />
        </filter>
      </defs>

      {/* 3D Precision Set Square / Ruler */}
      <g filter={`url(#${shadowId})`}>
        <rect
          x="17"
          y="7"
          width="14"
          height="34"
          rx="4"
          transform="rotate(-45 24 24)"
          fill="#94A6FF"
        />
        <rect
          x="17"
          y="5.5"
          width="14"
          height="34"
          rx="4"
          transform="rotate(-45 24 24)"
          fill={`url(#${rulerGrad})`}
          stroke="#94A6FF"
          strokeWidth="0.9"
        />
      </g>

      {/* 3D Drafting Pen Crossing Over */}
      <g filter={`url(#${shadowId})`}>
        <path
          d="M34.5 9.5L38.5 13.5L17.5 34.5L11.5 36.5L13.5 30.5L34.5 9.5Z"
          fill={`url(#${bodyGrad})`}
        />
        <path d="M31.5 12.5L35.5 16.5L38.5 13.5L34.5 9.5L31.5 12.5Z" fill="#0F172A" />
        <path d="M13.5 30.5L17.5 34.5L11.5 36.5L13.5 30.5Z" fill="#FFFFFF" />
      </g>
    </svg>
  );
}

export function Icon3DTerminal({ className = 'w-10 h-10' }: Icon3DProps) {
  const uid = useId().replace(/:/g, '');
  const faceGrad = `${uid}-face`;
  const shadowId = `${uid}-shadow`;

  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={faceGrad} x1="8" y1="10" x2="40" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#090E1A" />
        </linearGradient>
        <filter id={shadowId} x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3" stdDeviation="2.2" floodColor="#0F172A" floodOpacity="0.22" />
        </filter>
      </defs>

      {/* Lower Stacked Cobalt Module */}
      <rect x="8" y="16" width="32" height="24" rx="6.5" fill="#2F5BFF" />
      <rect x="8" y="13.5" width="32" height="24" rx="6.5" fill="#5C7FFF" />

      {/* Top Extruded Dark Terminal Cube */}
      <g filter={`url(#${shadowId})`}>
        <rect
          x="8"
          y="9"
          width="32"
          height="24"
          rx="6.5"
          fill={`url(#${faceGrad})`}
          stroke="#475569"
          strokeWidth="0.9"
        />
      </g>

      {/* Glowing 3D Prompt Chevron & Cursor */}
      <path
        d="M15 17L20.5 21L15 25"
        stroke="#94A6FF"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="23.5" y="23.5" width="9" height="2.8" rx="1.4" fill="#FFFFFF" />
    </svg>
  );
}

export function Icon3DRocket({ className = 'w-10 h-10' }: Icon3DProps) {
  const uid = useId().replace(/:/g, '');
  const hullGrad = `${uid}-hull`;
  const flameGrad = `${uid}-flame`;
  const shadowId = `${uid}-shadow`;

  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={hullGrad} x1="16" y1="8" x2="36" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#DCE4FF" />
        </linearGradient>
        <linearGradient id={flameGrad} x1="10" y1="30" x2="18" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#5C7FFF" />
          <stop offset="100%" stopColor="#94A6FF" />
        </linearGradient>
        <filter id={shadowId} x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3" stdDeviation="2.2" floodColor="#1637B8" floodOpacity="0.22" />
        </filter>
      </defs>

      {/* Thruster Plume */}
      <path
        d="M14.5 28.5C11 29.5 8.5 33.5 8 39.5C14 39 18 36.5 19 33L14.5 28.5Z"
        fill={`url(#${flameGrad})`}
      />
      <path
        d="M14.5 30.5C12.5 31.2 11 33.5 10.8 36.5C13.8 36.2 16 34.8 16.5 32.8L14.5 30.5Z"
        fill="#FFFFFF"
      />

      {/* Rocket Fins */}
      <g filter={`url(#${shadowId})`}>
        <path d="M18 19L10.5 20.5L15 27.5L18 19Z" fill="#2F5BFF" />
        <path d="M29 30L27.5 37.5L20.5 33L29 30Z" fill="#1637B8" />

        {/* Main 3D Hull */}
        <path
          d="M39.5 8.5C32 8.5 24 12.5 17.5 20.5L15 26.5L21.5 33L27.5 30.5C35.5 24 39.5 16 39.5 8.5Z"
          fill={`url(#${hullGrad})`}
          stroke="#94A6FF"
          strokeWidth="1"
        />

        {/* Nose Cone Accent */}
        <path
          d="M39.5 8.5C36 8.5 32.5 9.6 29.5 11.5L36.5 18.5C38.4 15.5 39.5 12 39.5 8.5Z"
          fill="#2F5BFF"
        />

        {/* 3D Glass Porthole */}
        <circle cx="27.5" cy="20.5" r="3.6" fill="#0F172A" stroke="#94A6FF" strokeWidth="1.2" />
        <circle cx="26.6" cy="19.6" r="1.1" fill="#5C7FFF" />
      </g>
    </svg>
  );
}
