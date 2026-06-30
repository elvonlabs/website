import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** `primary` = indigo, `secondary` = coral, `soft` = indigo tint, `ghost` = outline. @default 'primary' */
  variant?: 'primary' | 'secondary' | 'soft' | 'ghost';
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Stretch to container width. @default false */
  full?: boolean;
  children?: React.ReactNode;
}

/**
 * Friendly pill call-to-action button.
 *
 * @startingPoint section="Core" subtitle="Pill CTA — primary, secondary, soft, ghost" viewport="700x150"
 */
export function Button(props: ButtonProps): JSX.Element;
