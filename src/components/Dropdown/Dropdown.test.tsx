import React from 'react';
import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
];

describe('Dropdown', () => {
    test('renders and is visible on the screen', () => {
        render(<Dropdown options={options} value="apple" />);
        expect(screen.getByRole('combobox')).toBeVisible();
    });

    test('background color changes when disabled', () => {
        render(<Dropdown options={options} value="apple" backgroundColor="#ffffff" disabled={true} />);
        expect(screen.getByRole('combobox')).toHaveStyle('background-color: #eeeeee');
    });
});