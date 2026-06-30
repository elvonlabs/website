import React from 'react';
import { Logo } from '../core/Logo.jsx';

/**
 * Top navigation bar: a clean cream/white bar with the logo lockup,
 * nav links, and an optional CTA. Sticky, with a hairline bottom border.
 */
export function NavBar({ items = ['Programs', 'Method', 'Founder', 'FAQ'], active, onNavigate, cta, style = {}, ...rest }) {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(252,249,244,0.85)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border-default)',
        ...style,
      }}
      {...rest}
    >
      <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('home'); }} style={{ textDecoration: 'none' }}>
          <Logo size={21} />
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          {items.map((item) => {
            const id = item.toLowerCase();
            const isActive = active === id;
            return (
              <a
                key={item}
                href={`#${id}`}
                onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(id); }}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '15px',
                  fontWeight: 500,
                  textDecoration: 'none',
                  color: isActive ? 'var(--indigo-600)' : 'var(--text-body)',
                  transition: 'color 200ms ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--indigo-600)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = isActive ? 'var(--indigo-600)' : 'var(--text-body)'; }}
              >
                {item}
              </a>
            );
          })}
          {cta}
        </nav>
      </div>
    </header>
  );
}
