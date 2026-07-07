import React from 'react';
import { render, screen } from '@testing-library/react';
import Img from './Img';

describe('Img', () => {
    test('renders and is visible on the screen', () => {
        render(<Img src="https://picsum.photos/300/200" alt="Sample image" />);
        expect(screen.getByAltText('Sample image')).toBeVisible();
    });

    test('visual style changes when disabled (greyscale filter applied)', () => {
        render(<Img src="https://picsum.photos/300/200" alt="Sample image" disabled={true} />);
        expect(screen.getByAltText('Sample image')).toHaveStyle('filter: grayscale(100%)');
    });
});