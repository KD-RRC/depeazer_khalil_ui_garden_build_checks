import type { Meta, StoryObj } from '@storybook/react-webpack5';
import TableFooter from './TableFooter';
import TableCell from '../TableCell/TableCell';

const meta: Meta<typeof TableFooter> = {
  title: 'Components/TableFooter',
  component: TableFooter,
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
type Story = StoryObj<typeof TableFooter>;

export const Default: Story = {
  args: {
    backgroundColor: '#f0f0f0',
    disabled: false,
    children: (
      <>
        <TableCell content="Total" />
        <TableCell content="$100" />
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    backgroundColor: '#f0f0f0',
    disabled: true,
    children: (
      <>
        <TableCell content="Total" />
        <TableCell content="$100" />
      </>
    ),
  },
};
