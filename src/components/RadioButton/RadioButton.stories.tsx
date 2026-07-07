import type { Meta, StoryObj } from '@storybook/react-webpack5';
import RadioButton from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    label: 'Option A',
    name: 'demo-group',
    value: 'option-a',
    backgroundColor: '#f5f5f5',
    checked: false,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Option A',
    name: 'demo-group',
    value: 'option-a',
    backgroundColor: '#f5f5f5',
    checked: false,
    disabled: true,
  },
};
