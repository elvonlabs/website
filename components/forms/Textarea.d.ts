import * as React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Optional stacked label. */
  label?: string;
  /** Style for the wrapping column. */
  wrapStyle?: React.CSSProperties;
}

/** Multi-line text field in the Input style. */
export function Textarea(props: TextareaProps): JSX.Element;
