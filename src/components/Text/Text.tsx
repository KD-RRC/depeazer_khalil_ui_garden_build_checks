import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<{
  $textColor: string;
  $backgroundColor: string;
  $fontSize: number;
  disabled?: boolean;
}>`
  color: ${(props) => (props.disabled ? '#999999' : props.$textColor)};
  background-color: ${(props) => props.$backgroundColor};
  font-size: ${(props) => props.$fontSize}px;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  margin: 0;
  line-height: 1.5;
  max-width: 100%;
  word-wrap: break-word;

  @media (max-width: 480px) {
    font-size: ${(props) => Math.max(props.$fontSize - 2, 10)}px;
  }
`;

const Text: React.FC<TextProps> = ({
  content,
  textColor = '#222222',
  backgroundColor = 'transparent',
  fontSize = 16,
  disabled = false,
}) => {
  return (
    <StyledText
      $textColor={textColor}
      $backgroundColor={backgroundColor}
      $fontSize={fontSize}
      disabled={disabled}
    >
      {content}
    </StyledText>
  );
};

export default Text;
