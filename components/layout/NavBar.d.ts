import * as React from 'react';

export interface NavBarProps extends React.HTMLAttributes<HTMLElement> {
  /** Nav link labels. @default ['Programs','Method','Founder','FAQ'] */
  items?: string[];
  /** Lowercased id of the active link. */
  active?: string;
  /** Called with a lowercased link id on click. */
  onNavigate?: (id: string) => void;
  /** Optional trailing element (e.g. a Button) on the right. */
  cta?: React.ReactNode;
}

/**
 * Fixed glass top-nav with the Elvon logo and links.
 *
 * @startingPoint section="Layout" subtitle="Glass top navigation bar" viewport="1200x70"
 */
export function NavBar(props: NavBarProps): JSX.Element;
