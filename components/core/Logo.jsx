import React from 'react';
import { Icon } from './Icon.jsx';

/**
 * Elvon Labs lockup — the circuit-cube mark plus the ELVON LABS
 * wordmark. The mark is always indigo; the wordmark inherits `color`
 * (ink on light surfaces). Use `markOnly` for favicon-style use.
 */
export function Logo({ size = 24, markOnly = false, color = 'var(--ink-900)', style = {}, ...rest }) {
  return (
    <span
      style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', ...style }}
      {...rest}
    >
      <Icon name="cube" size={size * 1.05} style={{ color: 'var(--indigo-600)' }} />
      {!markOnly && (
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            letterSpacing: '-0.01em',
            fontSize: `${size}px`,
            color,
            whiteSpace: 'nowrap',
          }}
        >
          Elvon Labs
        </span>
      )}
    </span>
  );
}
