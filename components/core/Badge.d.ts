import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default 'indigo' */
  tone?: 'indigo' | 'coral' | 'sun' | 'solid' | 'success';
  children?: React.ReactNode;
}

/** Figure/label badge for citation counts, flags, and inline metrics. */
export function Badge(props: BadgeProps): JSX.Element;
