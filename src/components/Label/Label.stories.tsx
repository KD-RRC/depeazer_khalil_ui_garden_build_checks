import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Label from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    textColor: { control: 'color' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: 'Username',
    textColor: '#222222',
    backgroundColor: '#f0f0f0',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    text: 'Username',
    textColor: '#222222',
    backgroundColor: '#f0f0f0',
    disabled: true,
  },
};
