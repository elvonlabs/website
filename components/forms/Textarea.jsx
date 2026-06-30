import React from 'react';

/** Multi-line text field, matching the Input style. */
export function Textarea({ label, id, rows = 3, style = {}, wrapStyle = {}, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? `ta-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
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
      <textarea
        id={inputId}
        rows={rows}
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
          resize: 'vertical',
          boxShadow: focus ? 'var(--ring-accent)' : 'none',
          transition: 'box-shadow 140ms ease, border-color 140ms ease',
          ...style,
        }}
        {...rest}
      />
    </div>
  );
}
