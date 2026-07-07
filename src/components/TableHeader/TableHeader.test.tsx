import React from 'react';
import { render, screen } from '@testing-library/react';
import TableHeader from './TableHeader';
import TableCell from '../TableCell/TableCell';

describe('TableHeader', () => {
    test('renders and is visible on the screen', () => {
        render(
            <table>
                <TableHeader>
                    <TableCell content="Name" isHeader />
                </TableHeader>
            </table>
        );
        expect(screen.getByText('Name')).toBeVisible();
    });

    test('background color changes when disabled', () => {
        render(
            <table>
                <TableHeader backgroundColor="#f5f5f5" disabled={true}>
                    <TableCell content="Name" isHeader />
                </TableHeader>
            </table>
        );
        const headElement = screen.getByText('Name').closest('thead');
        expect(headElement).toHaveStyle('background-color: #eeeeee');
    });
});