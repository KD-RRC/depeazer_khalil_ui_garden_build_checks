import { ReactNode } from 'react';

export interface TableProps {
  /** Column header labels, left to right */
  headers: string[];
  /** Table body rows: each row is an array of cell strings, matching header order */
  rows: string[][];
  /** Optional footer row cells, matching header order */
  footer?: string[];
  /** Background color of the overall table */
  backgroundColor?: string;
  /** Whether the table is disabled (visually muted) */
  disabled?: boolean;
}

export interface TableComposableProps {
  /** Pre-built TableHeader/TableRow/TableFooter elements */
  children: ReactNode;
  backgroundColor?: string;
  disabled?: boolean;
}
