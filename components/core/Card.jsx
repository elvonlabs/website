import React from 'react';

/**
 * Card surface. White, generously rounded, with a soft warm shadow that
 * deepens and lifts on hover. The workhorse container for program tiers,
 * research tracks, FAQs, and feature blocks.
 */
export function Card({
  hover = true,
  padding = '28px',
  as = 'div',
  children,
  style = {},
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const Tag = as;
  return (
    <Tag
      onMouseEnter={() => hover && setH(true)}
      onMouseLeave={() => hover && setH(false)}
      style={{
        background: 'var(--surface-card)',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-lg)',
        padding,
        boxShadow: h ? 'var(--shadow-lg)' : 'var(--shadow-card)',
        transform: h ? 'translateY(-3px)' : 'none',
        transition: 'box-shadow 240ms ease, transform 240ms cubic-bezier(0.34,1.56,0.64,1)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
