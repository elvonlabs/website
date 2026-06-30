import React from 'react';

/**
 * Centered section heading block: optional eyebrow, bold display title,
 * muted lead paragraph constrained to a readable measure.
 */
export function SectionHeading({ eyebrow, title, lead, align = 'center', style = {}, ...rest }) {
  const isCenter = align === 'center';
  return (
    <div
      style={{
        textAlign: align,
        maxWidth: isCenter ? '720px' : 'none',
        marginLeft: isCenter ? 'auto' : 0,
        marginRight: isCenter ? 'auto' : 0,
        ...style,
      }}
      {...rest}
    >
      {eyebrow && (
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--coral-600)', marginBottom: '14px' }}>
          {eyebrow}
        </div>
      )}
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '40px', fontWeight: 700, color: 'var(--text-strong)', lineHeight: 1.12, letterSpacing: '-0.02em', margin: 0 }}>
        {title}
      </h2>
      {lead && (
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '18px', lineHeight: 1.6, color: 'var(--text-muted)', marginTop: '16px', marginBottom: 0 }}>
          {lead}
        </p>
      )}
    </div>
  );
}
