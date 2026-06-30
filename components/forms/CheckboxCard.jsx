import React from 'react';

/**
 * Selectable option card — a checkbox in a rounded tile that lights up
 * indigo when checked. For multi-select grids like "Areas of interest".
 */
export function CheckboxCard({ label, checked = false, onChange, name, value, style = {}, ...rest }) {
  return (
    <label
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        cursor: 'pointer',
        padding: '12px 16px',
        borderRadius: 'var(--radius-md)',
        border: '1.5px solid',
        borderColor: checked ? 'var(--indigo-500)' : 'var(--border-strong)',
        background: checked ? 'var(--indigo-100)' : 'var(--white)',
        transition: 'border-color 200ms ease, background-color 200ms ease',
        ...style,
      }}
      {...rest}
    >
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        style={{ accentColor: 'var(--indigo-600)', width: '17px', height: '17px', flexShrink: 0 }}
      />
      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, color: checked ? 'var(--indigo-700)' : 'var(--text-body)' }}>{label}</span>
    </label>
  );
}
