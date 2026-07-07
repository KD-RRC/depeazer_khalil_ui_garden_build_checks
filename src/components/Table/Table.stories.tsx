import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Table from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

const sampleHeaders = ['Name', 'Email', 'Role'];
const sampleRows = [
  ['Khalil Depeazer', 'khalil@example.com', 'Developer'],
  ['Jane Smith', 'jane@example.com', 'Designer'],
];
const sampleFooter = ['Total', '2 users', ''];

export const Default: Story = {
  args: {
    headers: sampleHeaders,
    rows: sampleRows,
    footer: sampleFooter,
    backgroundColor: '#ffffff',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    headers: sampleHeaders,
    rows: sampleRows,
    footer: sampleFooter,
    backgroundColor: '#ffffff',
    disabled: true,
  },
};
