import * as React from 'react';

export interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Wordmark size in px (mark scales with it). @default 26 */
  size?: number;
  /** Render just the circuit-cube mark. @default false */
  markOnly?: boolean;
  /** Wordmark color. @default 'var(--text-strong)' */
  color?: string;
}

/** Elvon Labs logo lockup: blue circuit-cube mark + ELVON LABS wordmark. */
export function Logo(props: LogoProps): JSX.Element;
