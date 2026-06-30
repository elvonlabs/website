import React from 'react';

/**
 * Stat panel — a big display figure over a muted label, on a soft
 * tinted tile. Used for citations / outcomes / "weeks" style metrics.
 */
export function StatCard({ value, label, tone = 'lavender', style = {}, ...rest }) {
  const tones = {
    lavender: { background: 'var(--band-lavender)', fig: 'var(--indigo-700)' },
    peach: { background: 'var(--band-peach)', fig: 'var(--coral-600)' },
    butter: { background: 'var(--band-butter)', fig: '#9a6a12' },
    mint: { background: 'var(--band-mint)', fig: '#1c7a60' },
    plain: { background: 'var(--surface-card)', fig: 'var(--indigo-700)' },
  };
  const t = tones[tone] || tones.lavender;
  return (
    <div
      style={{
        background: t.background,
        borderRadius: 'var(--radius-md)',
        padding: '20px 24px',
        textAlign: 'center',
        minWidth: '150px',
        ...style,
      }}
      {...rest}
    >
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '36px', fontWeight: 700, color: t.fig, lineHeight: 1.05, letterSpacing: '-0.01em' }}>
        {value}
      </div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, color: 'var(--text-muted)', marginTop: '6px' }}>
        {label}
      </div>
    </div>
  );
}
