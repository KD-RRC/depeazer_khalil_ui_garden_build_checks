import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<{ $width: string; disabled?: boolean }>`
  width: ${(props) => props.$width};
  max-width: 100%;
  height: auto;
  border-radius: 6px;
  display: block;
  filter: ${(props) => (props.disabled ? 'grayscale(100%)' : 'none')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Img: React.FC<ImgProps> = ({ src, alt, width = '300px', disabled = false }) => {
    return <StyledImg src={src} alt={alt} $width={width} disabled={disabled} />;
};

export default Img;