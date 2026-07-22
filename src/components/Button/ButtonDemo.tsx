import React from 'react';
import Button from './Button';

const ButtonDemo: React.FC = () => {
  return (
    <div>
      <Button label="Default Button" backgroundColor="#3366ff" />
      <Button label="Disabled Button" disabled />
    </div>
  );
};

export default ButtonDemo;
