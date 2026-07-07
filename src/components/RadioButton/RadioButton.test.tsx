import React from 'react';
import { render, screen } from '@testing-library/react';
import RadioButton from './RadioButton';

describe('RadioButton', () => {
    test('renders and is visible on the screen', () => {
        render(<RadioButton label="Option A" name="group1" value="a" />);
        expect(screen.getByText('Option A')).toBeVisible();
    });

    test('background color changes when disabled', () => {
        const { container } = render(
            <RadioButton label="Option A" name="group1" value="a" backgroundColor="#f5f5f5" disabled={true} />
        );
        const wrapper = container.firstChild;
        expect(wrapper).toHaveStyle('background-color: #eeeeee');
    });
});