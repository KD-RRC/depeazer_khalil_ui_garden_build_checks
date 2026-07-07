import React from 'react';
import { render, screen } from '@testing-library/react';
import TableRow from './TableRow';
import TableCell from '../TableCell/TableCell';

describe('TableRow', () => {
    test('renders and is visible on the screen', () => {
        render(
            <table>
                <tbody>
                    <TableRow>
                        <TableCell content="Row content" />
                    </TableRow>
                </tbody>
            </table>
        );
        expect(screen.getByText('Row content')).toBeVisible();
    });

    test('background color changes when disabled', () => {
        render(
            <table>
                <tbody>
                    <TableRow backgroundColor="#ffffff" disabled={true}>
                        <TableCell content="Row content" />
                    </TableRow>
                </tbody>
            </table>
        );
        const rowElement = screen.getByText('Row content').closest('tr');
        expect(rowElement).toHaveStyle('background-color: #eeeeee');
    });
});