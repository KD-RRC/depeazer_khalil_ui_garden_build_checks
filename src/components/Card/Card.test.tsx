import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  test('renders and is visible on the screen', () => {
    render(<Card title="Card title" description="Some description" />);
    expect(screen.getByText('Card title')).toBeVisible();
  });

  test('background color changes when disabled', () => {
    const { container } = render(
      <Card
        title="Card title"
        description="Some description"
        backgroundColor="#ffffff"
        disabled={true}
      />
    );
    const cardElement = container.firstChild;
    expect(cardElement).toHaveStyle('background-color: #eeeeee');
  });
});
