import React from 'react';
import styled from 'styled-components';
import { TableRowProps } from './TableRow.types';

const StyledTr = styled.tr<{ $backgroundColor: string; disabled?: boolean }>`
  background-color: ${(props) => (props.disabled ? '#eeeeee' : props.$backgroundColor)};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  &:hover {
    filter: ${(props) => (props.disabled ? 'none' : 'brightness(0.97)')};
  }
`;

const TableRow: React.FC<TableRowProps> = ({
  children,
  backgroundColor = '#ffffff',
  disabled = false,
}) => {
  return (
    <StyledTr $backgroundColor={backgroundColor} disabled={disabled}>
      {children}
    </StyledTr>
  );
};

export default TableRow;
