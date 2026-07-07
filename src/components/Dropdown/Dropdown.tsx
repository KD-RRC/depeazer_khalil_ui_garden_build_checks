import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<{
    $backgroundColor: string;
    $textColor: string;
    disabled?: boolean;
}>`
  background-color: ${(props) => (props.disabled ? '#eeeeee' : props.$backgroundColor)};
  color: ${(props) => (props.disabled ? '#999999' : props.$textColor)};
  border: 1px solid #cccccc;
  border-radius: 6px;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  width: 100%;
  max-width: 280px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const Dropdown: React.FC<DropdownProps> = ({
    options,
    value,
    backgroundColor = '#ffffff',
    textColor = '#222222',
    disabled = false,
    onChange,
}) => {
    return (
        <StyledSelect
            $backgroundColor={backgroundColor}
            $textColor={textColor}
            disabled={disabled}
            value={value}
            onChange={(e) => onChange && onChange(e.target.value)}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </StyledSelect>
    );
};

export default Dropdown;