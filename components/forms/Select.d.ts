import * as React from 'react';

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'placeholder'> {
  /** Optional stacked label. */
  label?: string;
  /** Option strings. */
  options?: string[];
  /** Disabled first option shown when nothing is selected. */
  placeholder?: string;
  /** Style for the wrapping column. */
  wrapStyle?: React.CSSProperties;
}

/** Dropdown select with a custom chevron, matching the Input style. */
export function Select(props: SelectProps): JSX.Element;
