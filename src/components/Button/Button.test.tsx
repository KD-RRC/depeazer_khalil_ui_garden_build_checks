import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
    test('renders and is visible on the screen', () => {
        render(<Button label="Click me" />);
        const buttonElement = screen.getByText('Click me');
        expect(buttonElement).toBeVisible();
    });

    test('background color changes when disabled', () => {
        render(
            <Button label="Click me" backgroundColor="#3366ff" disabled={true} />
        );
        const buttonElement = screen.getByText('Click me');
        // When disabled, our component overrides the background to grey (#cccccc)
        // instead of the passed-in backgroundColor prop.
        expect(buttonElement).toHaveStyle('background-color: #cccccc');
    });
});