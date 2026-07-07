import type { Meta, StoryObj } from '@storybook/react-webpack5';
import TableRow from './TableRow';
import TableCell from '../TableCell/TableCell';

const meta: Meta<typeof TableRow> = {
  title: 'Components/TableRow',
  component: TableRow,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <table>
        <tbody>
          <Story />
        </tbody>
      </table>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TableRow>;

export const Default: Story = {
  args: {
    backgroundColor: '#ffffff',
    disabled: false,
    children: (
      <>
        <TableCell content="Row 1, Cell 1" />
        <TableCell content="Row 1, Cell 2" />
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    backgroundColor: '#ffffff',
    disabled: true,
    children: (
      <>
        <TableCell content="Row 1, Cell 1" />
        <TableCell content="Row 1, Cell 2" />
      </>
    ),
  },
};
