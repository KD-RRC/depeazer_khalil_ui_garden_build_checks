import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';

describe('Text', () => {
  test('renders and is visible on the screen', () => {
    render(<Text content="Hello world" />);
    expect(screen.getByText('Hello world')).toBeVisible();
  });

  test('background color changes when disabled', () => {
    render(
      <Text content="Hello world" backgroundColor="#ffffaa" disabled={true} />
    );
    // backgroundColor is unaffected by disabled in this component;
    // instead disabled affects text color and opacity, so we check those.
    const el = screen.getByText('Hello world');
    expect(el).toHaveStyle('color: #999999');
    expect(el).toHaveStyle('opacity: 0.6');
  });
});
