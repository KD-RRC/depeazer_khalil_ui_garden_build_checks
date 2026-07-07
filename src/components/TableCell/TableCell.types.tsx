export interface TableCellProps {
    /** Content displayed inside the cell */
    content: string;
    /** Whether this cell is a header cell (th) instead of a data cell (td) */
    isHeader?: boolean;
    /** Background color of the cell */
    backgroundColor?: string;
    /** Whether the cell is disabled (visually muted) */
    disabled?: boolean;
}