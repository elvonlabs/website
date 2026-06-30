import * as React from 'react';

export type IconName =
  | 'ai' | 'healthcare' | 'quantum' | 'telecom'
  | 'cs' | 'robotics' | 'book' | 'check' | 'cube' | 'arrow';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  /** Which glyph to render. @default 'cube' */
  name?: IconName;
  /** Pixel size (width & height). @default 24 */
  size?: number;
  /** Override the path stroke width. */
  strokeWidth?: number;
}

/**
 * Single-color outline icon, inherits `currentColor`.
 */
export function Icon(props: IconProps): JSX.Element;
