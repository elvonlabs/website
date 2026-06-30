import * as React from 'react';

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The headline figure, e.g. "634" or "14 wks". */
  value: React.ReactNode;
  /** Caption beneath, e.g. "Citations". */
  label: React.ReactNode;
  /** Tinted background family. @default 'lavender' */
  tone?: 'lavender' | 'peach' | 'butter' | 'mint' | 'plain';
}

/**
 * Metric tile: big display figure over a muted label on a soft tint.
 *
 * @startingPoint section="Core" subtitle="Metric stat tile" viewport="700x160"
 */
export function StatCard(props: StatCardProps): JSX.Element;
