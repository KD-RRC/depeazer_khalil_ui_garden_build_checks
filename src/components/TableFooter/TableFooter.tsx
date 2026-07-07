import React from 'react';
import styled from 'styled-components';
import { TableFooterProps } from './TableFooter.types';

const StyledTfoot = styled.tfoot<{
  $backgroundColor: string;
  disabled?: boolean;
}>`
  background-color: ${(props) => (props.disabled ? '#eeeeee' : props.$backgroundColor)};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  font-weight: 600;
`;

const TableFooter: React.FC<TableFooterProps> = ({
  children,
  backgroundColor = '#f0f0f0',
  disabled = false,
}) => {
  return (
    <StyledTfoot $backgroundColor={backgroundColor} disabled={disabled}>
      <tr>{children}</tr>
    </StyledTfoot>
  );
};

export default TableFooter;
