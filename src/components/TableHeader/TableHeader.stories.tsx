import type { Meta, StoryObj } from '@storybook/react-webpack5';
import TableHeader from './TableHeader';
import TableCell from '../TableCell/TableCell';

const meta: Meta<typeof TableHeader> = {
  title: 'Components/TableHeader',
  component: TableHeader,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <table>
        <Story />
      </table>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TableHeader>;

export const Default: Story = {
  args: {
    backgroundColor: '#f5f5f5',
    disabled: false,
    children: (
      <>
        <TableCell content="Name" isHeader />
        <TableCell content="Email" isHeader />
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    backgroundColor: '#f5f5f5',
    disabled: true,
    children: (
      <>
        <TableCell content="Name" isHeader />
        <TableCell content="Email" isHeader />
      </>
    ),
  },
};
