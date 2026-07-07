import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';

describe('HeroImage', () => {
    test('renders and is visible on the screen', () => {
        render(<HeroImage imageUrl="https://picsum.photos/800/400" heading="Welcome" />);
        expect(screen.getByText('Welcome')).toBeVisible();
    });

    test('visual style changes when disabled (greyscale filter applied)', () => {
        const { container } = render(
            <HeroImage imageUrl="https://picsum.photos/800/400" heading="Welcome" disabled={true} />
        );
        const wrapper = container.firstChild;
        expect(wrapper).toHaveStyle('filter: grayscale(100%)');
    });
});