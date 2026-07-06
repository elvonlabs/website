import React from 'react';

/**
 * Elvon Labs outline icon set. Single-color, inherits `currentColor`,
 * 24x24 viewBox, rounded joins — matching the site's stroke icons.
 */
const PATHS = {
  ai: { sw: 2, d: ['M13 10V3L4 14h7v7l9-11h-7z', 'M12 4.5a7.5 7.5 0 11-7.5 7.5'] },
  healthcare: { sw: 2, d: ['M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'] },
  quantum: { sw: 2, d: ['M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', 'M3.5 12h3m11 0h3M12 3.5v3m0 11v3'] },
  telecom: { sw: 2, d: ['M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M1.393 9.393a15 15 0 0121.214 0'] },
  cs: { sw: 2, d: ['M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'] },
  robotics: { sw: 2, d: ['M12 6V4m0 16v-2m8-8h2M4 12H2m16.938-6.938l1.414-1.414M4.646 19.354l1.414-1.414m13.292 0l-1.414-1.414M6.06 6.06l-1.414-1.414M12 18a6 6 0 100-12 6 6 0 000 12z'] },
  book: { sw: 1.5, d: ['M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'] },
  check: { sw: 2, d: ['M5 13l4 4L19 7'] },
  cube: { sw: 1.5, d: ['M12 2.5l-7 4v8l7 4 7-4v-8l-7-4z', 'M5 6.5l7 4 7-4', 'M12 21.5v-11', 'M12 2.5V1', 'M5 6.5L2 4.5', 'M19 6.5L22 4.5', 'M5 14.5L2 16.5', 'M19 14.5L22 16.5', 'M12 21.5V23'] },
  arrow: { sw: 2, d: ['M13 7l5 5m0 0l-5 5m5-5H6'] },
  menu: { sw: 2, d: ['M4 6h16M4 12h16M4 18h16'] },
  close: { sw: 2, d: ['M6 6l12 12M6 18L18 6'] },
};

export function Icon({ name = 'cube', size = 24, strokeWidth, className = '', style = {}, ...rest }) {
  const def = PATHS[name] || PATHS.cube;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      width={size}
      height={size}
      className={className}
      style={{ display: 'inline-block', flexShrink: 0, ...style }}
      aria-hidden="true"
      {...rest}
    >
      {def.d.map((d, i) => (
        <path
          key={i}
          d={d}
          stroke="currentColor"
          strokeWidth={strokeWidth || def.sw}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}
