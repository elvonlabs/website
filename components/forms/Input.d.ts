import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Optional stacked label above the field. */
  label?: string;
  /** Style for the wrapping column. */
  wrapStyle?: React.CSSProperties;
}

/**
 * Sunken dark text input with a blue focus ring.
 *
 * @startingPoint section="Forms" subtitle="Labeled text field" viewport="700x150"
 */
export function Input(props: InputProps): JSX.Element;
