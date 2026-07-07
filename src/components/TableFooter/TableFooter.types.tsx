import { ReactNode } from 'react';

export interface TableFooterProps {
  /** TableCell elements to render inside this footer row */
  children: ReactNode;
  /** Background color of the footer */
  backgroundColor?: string;
  /** Whether the footer is disabled (visually muted) */
  disabled?: boolean;
}
