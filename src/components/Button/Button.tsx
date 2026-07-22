import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<{
  $backgroundColor: string;
  $textColor: string;
  disabled?: boolean;
}>`
  background-color: ${(props) =>
    props.disabled ? '#cccccc' : props.$backgroundColor};
  color: ${(props) => (props.disabled ? '#888888' : props.$textColor)};
  border: none;
  border-radius: 6px;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition:
    background-color 0.2s ease,
    opacity 0.2s ease;
  width: 100%;
  max-width: 240px;

  &:hover {
    filter: ${(props) => (props.disabled ? 'none' : 'brightness(0.92)')};
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 100%;
  }
`;

const Button: React.FC<ButtonProps> = ({
  label,
  backgroundColor = "#3366ff",
  textColor = '#ffffff',
  disabled = false,
  onClick,
}) => {
  return (
    <StyledButton
      $backgroundColor={backgroundColor}
      $textColor={textColor}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
