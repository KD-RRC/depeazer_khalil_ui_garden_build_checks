import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<{
    $textColor: string;
    $backgroundColor: string;
    disabled?: boolean;
}>`
  display: inline-block;
  font-size: 0.95rem;
  font-weight: 600;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  color: ${(props) => (props.disabled ? '#999999' : props.$textColor)};
  background-color: ${(props) =>
        props.disabled ? '#eeeeee' : props.$backgroundColor};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  max-width: 100%;
  word-wrap: break-word;

  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 0.25rem 0.5rem;
  }
`;

const Label: React.FC<LabelProps> = ({
    text,
    textColor = '#222222',
    backgroundColor = '#f0f0f0',
    disabled = false,
}) => {
    return (
        <StyledLabel
            $textColor={textColor}
            $backgroundColor={backgroundColor}
            disabled={disabled}
        >
            {text}
        </StyledLabel>
    );
};

export default Label;