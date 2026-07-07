import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const HeroWrapper = styled.div<{ $imageUrl: string; disabled?: boolean }>`
  position: relative;
  width: 100%;
  height: 320px;
  background-image: ${(props) => `url(${props.$imageUrl})`};
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  filter: ${(props) => (props.disabled ? 'grayscale(100%)' : 'none')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 480px) {
    height: 200px;
  }
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.35);
  width: 100%;
  height: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const Heading = styled.h1<{ $textColor: string }>`
  color: ${(props) => props.$textColor};
  font-size: 2rem;
  margin: 0 0 0.5rem 0;

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const Subheading = styled.p<{ $textColor: string }>`
  color: ${(props) => props.$textColor};
  font-size: 1.1rem;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const HeroImage: React.FC<HeroImageProps> = ({
  imageUrl,
  heading,
  subheading,
  textColor = '#ffffff',
  disabled = false,
}) => {
  return (
    <HeroWrapper $imageUrl={imageUrl} disabled={disabled}>
      <Overlay>
        <Heading $textColor={textColor}>{heading}</Heading>
        {subheading && (
          <Subheading $textColor={textColor}>{subheading}</Subheading>
        )}
      </Overlay>
    </HeroWrapper>
  );
};

export default HeroImage;
