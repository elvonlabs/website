import React from 'react';

/**
 * Small label badge. A bold figure on a soft tinted chip — for citation
 * counts, "Most popular" flags, and inline metrics.
 */
export function Badge({ children, tone = 'indigo', style = {}, ...rest }) {
  const tones = {
    indigo: { color: 'var(--indigo-700)', background: 'var(--indigo-100)' },
    coral: { color: 'var(--coral-600)', background: 'var(--coral-100)' },
    sun: { color: '#9a6a12', background: 'var(--sun-100)' },
    solid: { color: 'var(--white)', background: 'var(--indigo-600)' },
    success: { color: '#1c7a60', background: 'var(--mint-100)' },
  };
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontFamily: 'var(--font-sans)',
        fontSize: '14px',
        fontWeight: 700,
        padding: '4px 12px',
        borderRadius: 'var(--radius-pill)',
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
