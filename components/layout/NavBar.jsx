import React from 'react';
import { Logo } from '../core/Logo.jsx';
import { Icon } from '../core/Icon.jsx';

/**
 * Top navigation bar: a clean cream/white bar with the logo lockup,
 * nav links, and an optional CTA. Sticky, with a hairline bottom border.
 * Below 760px the links collapse behind a hamburger toggle so they don't
 * overflow the header on phones.
 */
export function NavBar({ items = ['Programs', 'Method', 'Founder', 'FAQ'], active, onNavigate, cta, style = {}, ...rest }) {
  const [isMobile, setIsMobile] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia('(max-width: 760px)');
    const sync = () => { setIsMobile(mq.matches); setOpen(false); };
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  const go = (id) => { setOpen(false); onNavigate && onNavigate(id); };

  const linkStyle = (isActive) => ({
    fontFamily: 'var(--font-sans)',
    fontSize: '15px',
    fontWeight: 500,
    textDecoration: 'none',
    color: isActive ? 'var(--indigo-600)' : 'var(--text-body)',
    transition: 'color 200ms ease',
  });

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
        <a href="#home" onClick={(e) => { e.preventDefault(); go('home'); }} style={{ textDecoration: 'none' }}>
          <Logo size={21} />
        </a>
        {isMobile ? (
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', background: 'var(--white)', color: 'var(--ink-900)', cursor: 'pointer', flexShrink: 0 }}
          >
            <Icon name={open ? 'close' : 'menu'} size={20} />
          </button>
        ) : (
          <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            {items.map((item) => {
              const id = item.toLowerCase();
              const isActive = active === id;
              return (
                <a
                  key={item}
                  href={`#${id}`}
                  onClick={(e) => { e.preventDefault(); go(id); }}
                  style={linkStyle(isActive)}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--indigo-600)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = isActive ? 'var(--indigo-600)' : 'var(--text-body)'; }}
                >
                  {item}
                </a>
              );
            })}
            {cta}
          </nav>
        )}
      </div>
      {isMobile && open && (
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: '4px 24px 20px' }}>
          {items.map((item) => {
            const id = item.toLowerCase();
            const isActive = active === id;
            return (
              <a
                key={item}
                href={`#${id}`}
                onClick={(e) => { e.preventDefault(); go(id); }}
                style={{ ...linkStyle(isActive), padding: '10px 0', borderTop: '1px solid var(--border-default)' }}
              >
                {item}
              </a>
            );
          })}
          {cta && <div style={{ marginTop: 12 }}>{cta}</div>}
        </nav>
      )}
    </header>
  );
}
