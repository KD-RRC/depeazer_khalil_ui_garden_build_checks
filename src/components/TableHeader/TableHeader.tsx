import React from 'react';
import styled from 'styled-components';
import { TableHeaderProps } from './TableHeader.types';

const StyledThead = styled.thead<{
  $backgroundColor: string;
  disabled?: boolean;
}>`
  background-color: ${(props) => (props.disabled ? '#eeeeee' : props.$backgroundColor)};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;

const TableHeader: React.FC<TableHeaderProps> = ({
  children,
  backgroundColor = '#f5f5f5',
  disabled = false,
}) => {
  return (
    <StyledThead $backgroundColor={backgroundColor} disabled={disabled}>
      <tr>{children}</tr>
    </StyledThead>
  );
};

export default TableHeader;
