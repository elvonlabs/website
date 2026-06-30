import React from 'react';

/**
 * Pill tag for research domains and topic labels. Soft, rounded, warm.
 * Color families: `indigo` (default), `coral`, `sun`, `mint`, `neutral`.
 */
export function Tag({ variant = 'indigo', children, style = {}, ...rest }) {
  const variants = {
    indigo: { color: 'var(--indigo-700)', background: 'var(--indigo-100)' },
    coral: { color: 'var(--coral-600)', background: 'var(--coral-100)' },
    sun: { color: '#9a6a12', background: 'var(--sun-100)' },
    mint: { color: '#1c7a60', background: 'var(--mint-100)' },
    neutral: { color: 'var(--ink-700)', background: 'var(--cream-100)' },
  };
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontFamily: 'var(--font-sans)',
        fontSize: '12px',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        padding: '5px 13px',
        borderRadius: 'var(--radius-pill)',
        whiteSpace: 'nowrap',
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
