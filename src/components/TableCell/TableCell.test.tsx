import React from 'react';
import { render, screen } from '@testing-library/react';
import TableCell from './TableCell';

describe('TableCell', () => {
    test('renders and is visible on the screen', () => {
        render(
            <table>
                <tbody>
                    <tr>
                        <TableCell content="Cell content" />
                    </tr>
                </tbody>
            </table>
        );
        expect(screen.getByText('Cell content')).toBeVisible();
    });

    test('background color changes when disabled', () => {
        render(
            <table>
                <tbody>
                    <tr>
                        <TableCell content="Cell content" backgroundColor="#ffffff" disabled={true} />
                    </tr>
                </tbody>
            </table>
        );
        expect(screen.getByText('Cell content')).toHaveStyle('background-color: #eeeeee');
    });
});