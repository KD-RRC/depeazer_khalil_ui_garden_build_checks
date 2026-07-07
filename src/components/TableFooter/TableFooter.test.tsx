import React from 'react';
import { render, screen } from '@testing-library/react';
import TableFooter from './TableFooter';
import TableCell from '../TableCell/TableCell';

describe('TableFooter', () => {
  test('renders and is visible on the screen', () => {
    render(
      <table>
        <TableFooter>
          <TableCell content="Total" />
        </TableFooter>
      </table>
    );
    expect(screen.getByText('Total')).toBeVisible();
  });

  test('background color changes when disabled', () => {
    render(
      <table>
        <TableFooter backgroundColor="#f0f0f0" disabled={true}>
          <TableCell content="Total" />
        </TableFooter>
      </table>
    );
    const footElement = screen.getByText('Total').closest('tfoot');
    expect(footElement).toHaveStyle('background-color: #eeeeee');
  });
});
