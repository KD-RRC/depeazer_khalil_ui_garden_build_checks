import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';
import TableHeader from '../TableHeader/TableHeader';
import TableRow from '../TableRow/TableRow';
import TableCell from '../TableCell/TableCell';
import TableFooter from '../TableFooter/TableFooter';

const StyledTable = styled.table<{
  $backgroundColor: string;
  disabled?: boolean;
}>`
  width: 100%;
  border-collapse: collapse;
  background-color: ${(props) => (props.disabled ? '#eeeeee' : props.$backgroundColor)};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};

  @media (max-width: 480px) {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
`;

const Table: React.FC<TableProps> = ({
  headers,
  rows,
  footer,
  backgroundColor = '#ffffff',
  disabled = false,
}) => {
  return (
    <StyledTable $backgroundColor={backgroundColor} disabled={disabled}>
      <TableHeader backgroundColor={backgroundColor} disabled={disabled}>
        {headers.map((headerText, index) => (
          <TableCell
            key={`header-${index}`}
            content={headerText}
            isHeader
            disabled={disabled}
          />
        ))}
      </TableHeader>
      <tbody>
        {rows.map((row, rowIndex) => (
          <TableRow
            key={`row-${rowIndex}`}
            backgroundColor={backgroundColor}
            disabled={disabled}
          >
            {row.map((cellText, cellIndex) => (
              <TableCell
                key={`cell-${rowIndex}-${cellIndex}`}
                content={cellText}
                disabled={disabled}
              />
            ))}
          </TableRow>
        ))}
      </tbody>
      {footer && (
        <TableFooter backgroundColor={backgroundColor} disabled={disabled}>
          {footer.map((footerText, index) => (
            <TableCell
              key={`footer-${index}`}
              content={footerText}
              disabled={disabled}
            />
          ))}
        </TableFooter>
      )}
    </StyledTable>
  );
};

export default Table;
