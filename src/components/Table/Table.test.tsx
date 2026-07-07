import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';

const headers = ['Name', 'Email'];
const rows = [['Khalil', 'khalil@example.com']];

describe('Table', () => {
  test('renders and is visible on the screen', () => {
    render(<Table headers={headers} rows={rows} />);
    expect(screen.getByText('Name')).toBeVisible();
    expect(screen.getByText('Khalil')).toBeVisible();
  });

  test('background color changes when disabled', () => {
    const { container } = render(
      <Table
        headers={headers}
        rows={rows}
        backgroundColor="#ffffff"
        disabled={true}
      />
    );
    const tableElement = container.querySelector('table');
    expect(tableElement).toHaveStyle('background-color: #eeeeee');
  });
});
