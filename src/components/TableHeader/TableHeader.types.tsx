import { ReactNode } from 'react';

export interface TableHeaderProps {
    /** TableCell elements (with isHeader) to render inside this header row */
    children: ReactNode;
    /** Background color of the header */
    backgroundColor?: string;
    /** Whether the header is disabled (visually muted) */
    disabled?: boolean;
}