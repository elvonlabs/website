import * as React from 'react';

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Small uppercase blue label above the title. */
  eyebrow?: string;
  /** The heading text. */
  title: React.ReactNode;
  /** Muted lead paragraph below. */
  lead?: React.ReactNode;
  /** @default 'center' */
  align?: 'center' | 'left';
}

/**
 * Section-intro block: eyebrow + bold title + muted lead.
 *
 * @startingPoint section="Layout" subtitle="Centered section intro" viewport="700x220"
 */
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
