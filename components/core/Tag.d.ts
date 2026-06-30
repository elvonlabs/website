import * as React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color family. @default 'indigo' */
  variant?: 'indigo' | 'coral' | 'sun' | 'mint' | 'neutral';
  children?: React.ReactNode;
}

/** Soft uppercase pill tag for research domains and topic labels. */
export function Tag(props: TagProps): JSX.Element;
