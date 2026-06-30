import React from 'react';

/**
 * Pill call-to-action button. Friendly and lifted: solid `primary`
 * indigo, warm `secondary` coral, low-key `soft` indigo tint, and an
 * outline `ghost`. Gentle bounce-lift on hover.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  full = false,
  disabled = false,
  type = 'button',
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '9px 18px', fontSize: '14px' },
    md: { padding: '13px 26px', fontSize: '16px' },
    lg: { padding: '16px 34px', fontSize: '18px' },
  };

  const base = {
    primary: { background: 'var(--indigo-600)', color: 'var(--white)', boxShadow: 'var(--shadow-sm)' },
    secondary: { background: 'var(--coral-500)', color: 'var(--white)', boxShadow: 'var(--shadow-sm)' },
    soft: { background: 'var(--indigo-100)', color: 'var(--indigo-700)', boxShadow: 'none' },
    ghost: { background: 'transparent', color: 'var(--ink-900)', boxShadow: 'inset 0 0 0 1.5px var(--border-strong)' },
  };
  const hoverStyle = {
    primary: { background: 'var(--indigo-700)', boxShadow: 'var(--shadow-glow)' },
    secondary: { background: 'var(--coral-600)' },
    soft: { background: '#e1daf9' },
    ghost: { background: 'var(--cream-100)', boxShadow: 'inset 0 0 0 1.5px var(--ink-900)' },
  };

  const [hover, setHover] = React.useState(false);

  return (
    <button
      type={type}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        lineHeight: 1,
        border: 'none',
        borderRadius: 'var(--radius-pill)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.55 : 1,
        width: full ? '100%' : 'auto',
        transition: 'background-color 220ms cubic-bezier(0.4,0,0.2,1), box-shadow 220ms ease, transform 240ms cubic-bezier(0.34,1.56,0.64,1)',
        transform: hover && !disabled ? 'translateY(-2px)' : 'none',
        ...sizes[size],
        ...base[variant],
        ...(hover && !disabled ? hoverStyle[variant] : {}),
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
