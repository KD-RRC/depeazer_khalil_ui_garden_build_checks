import { ReactNode } from 'react';

export interface TableRowProps {
    /** TableCell elements to render inside this row */
    children: ReactNode;
    /** Background color of the row */
    backgroundColor?: string;
    /** Whether the row is disabled (visually muted) */
    disabled?: boolean;
}