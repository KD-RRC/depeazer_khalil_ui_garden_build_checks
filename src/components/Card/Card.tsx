import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<{ $backgroundColor: string; disabled?: boolean }>`
  background-color: ${(props) => (props.disabled ? '#eeeeee' : props.$backgroundColor)};
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  max-width: 320px;
  width: 100%;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 0.75rem;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 6px;
  margin-bottom: 0.75rem;
  display: block;
`;

const CardTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
`;

const CardDescription = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #555555;
`;

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  backgroundColor = '#ffffff',
  disabled = false,
}) => {
  return (
    <StyledCard $backgroundColor={backgroundColor} disabled={disabled}>
      {imageUrl && <CardImage src={imageUrl} alt={title} />}
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </StyledCard>
  );
};

export default Card;
