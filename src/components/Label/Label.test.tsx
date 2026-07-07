import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from './Label';

describe('Label', () => {
  test('renders and is visible on the screen', () => {
    render(<Label text="Username" />);
    expect(screen.getByText('Username')).toBeVisible();
  });

  test('background color changes when disabled', () => {
    render(<Label text="Username" backgroundColor="#f0f0f0" disabled={true} />);
    expect(screen.getByText('Username')).toHaveStyle(
      'background-color: #eeeeee'
    );
  });
});
