import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the UI Garden hero heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Depeazer Khalil UI Garden/i);
  expect(headingElement).toBeVisible();
});

test('renders all major component sections', () => {
  render(<App />);
  expect(screen.getByText('Buttons')).toBeVisible();
  expect(screen.getByText('Labels & Text')).toBeVisible();
  expect(screen.getByText('Images')).toBeVisible();
  expect(screen.getByText('Card')).toBeVisible();
  expect(screen.getByText('Dropdown')).toBeVisible();
  expect(screen.getByText('Radio Buttons')).toBeVisible();
  expect(screen.getByText('Table')).toBeVisible();
});
