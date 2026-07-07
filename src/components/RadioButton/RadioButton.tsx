import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const Wrapper = styled.label<{ $backgroundColor: string; disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${(props) => (props.disabled ? '#eeeeee' : props.$backgroundColor)};
  padding: 0.4rem 0.6rem;
  border-radius: 6px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  @media (max-width: 480px) {
    padding: 0.3rem 0.5rem;
    font-size: 0.9rem;
  }
`;

const RadioButton: React.FC<RadioButtonProps> = ({
    label,
    name,
    value,
    checked = false,
    disabled = false,
    backgroundColor = '#f5f5f5',
    onChange,
}) => {
    return (
        <Wrapper $backgroundColor={backgroundColor} disabled={disabled}>
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                disabled={disabled}
                onChange={() => onChange && onChange(value)}
            />
            {label}
        </Wrapper>
    );
};

export default RadioButton;