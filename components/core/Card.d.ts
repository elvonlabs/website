import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Warm the border to blue on hover. @default true */
  hover?: boolean;
  /** CSS padding. @default '24px' */
  padding?: string;
  /** Render element. @default 'div' */
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

/**
 * Translucent slate card with a blue-on-hover border.
 *
 * @startingPoint section="Core" subtitle="Translucent card with hover border" viewport="700x220"
 */
export function Card(props: CardProps): JSX.Element;
