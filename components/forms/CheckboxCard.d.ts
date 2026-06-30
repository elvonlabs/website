import * as React from 'react';

export interface CheckboxCardProps extends React.HTMLAttributes<HTMLLabelElement> {
  /** Text beside the checkbox. */
  label: string;
  /** Controlled checked state. @default false */
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
  value?: string;
}

/** Checkbox inside a bordered tile that lights blue when checked. */
export function CheckboxCard(props: CheckboxCardProps): JSX.Element;
