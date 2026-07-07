import React from 'react';
import styled from 'styled-components';
import { TableCellProps } from './TableCell.types';

const StyledTd = styled.td<{ $backgroundColor: string; disabled?: boolean }>`
  background-color: ${(props) => (props.disabled ? '#eeeeee' : props.$backgroundColor)};
  color: ${(props) => (props.disabled ? '#999999' : '#222222')};
  padding: 0.6rem 0.8rem;
  border: 1px solid #dddddd;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  @media (max-width: 480px) {
    padding: 0.4rem 0.5rem;
    font-size: 0.85rem;
  }
`;

const StyledTh = styled.th<{ $backgroundColor: string; disabled?: boolean }>`
  background-color: ${(props) => (props.disabled ? '#eeeeee' : props.$backgroundColor)};
  color: ${(props) => (props.disabled ? '#999999' : '#222222')};
  padding: 0.6rem 0.8rem;
  border: 1px solid #dddddd;
  font-weight: 700;
  text-align: left;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  @media (max-width: 480px) {
    padding: 0.4rem 0.5rem;
    font-size: 0.85rem;
  }
`;

const TableCell: React.FC<TableCellProps> = ({
  content,
  isHeader = false,
  backgroundColor = '#ffffff',
  disabled = false,
}) => {
  if (isHeader) {
    return (
      <StyledTh $backgroundColor={backgroundColor} disabled={disabled}>
        {content}
      </StyledTh>
    );
  }
  return (
    <StyledTd $backgroundColor={backgroundColor} disabled={disabled}>
      {content}
    </StyledTd>
  );
};

export default TableCell;
