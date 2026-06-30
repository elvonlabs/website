import React from 'react';

/** Dropdown select, matching the Input field. `options` is a string array. */
export function Select({ label, id, options = [], placeholder, style = {}, wrapStyle = {}, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? `sel-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', ...wrapStyle }}>
      {label && (
        <label
          htmlFor={inputId}
          style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 600, color: 'var(--text-body)', marginBottom: '8px' }}
        >
          {label}
        </label>
      )}
      <select
        id={inputId}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          width: '100%',
          boxSizing: 'border-box',
          fontFamily: 'var(--font-sans)',
          fontSize: '15px',
          color: 'var(--ink-900)',
          background: 'var(--white)',
          border: '1px solid',
          borderColor: focus ? 'var(--indigo-500)' : 'var(--border-strong)',
          borderRadius: 'var(--radius-md)',
          padding: '12px 16px',
          outline: 'none',
          appearance: 'none',
          backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23726c84\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'><path d=\'M6 9l6 6 6-6\'/></svg>")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 14px center',
          backgroundSize: '16px',
          paddingRight: '40px',
          boxShadow: focus ? 'var(--ring-accent)' : 'none',
          transition: 'box-shadow 140ms ease, border-color 140ms ease',
          ...style,
        }}
        {...rest}
      >
        {placeholder && <option value="" disabled>{placeholder}</option>}
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
