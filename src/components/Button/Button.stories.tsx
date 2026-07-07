import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Button from './Button';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        backgroundColor: { control: 'color' },
        textColor: { control: 'color' },
        disabled: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        label: 'Click me',
        backgroundColor: '#3366ff',
        textColor: '#ffffff',
        disabled: false,
    },
};

export const Disabled: Story = {
    args: {
        label: 'Click me',
        backgroundColor: '#3366ff',
        textColor: '#ffffff',
        disabled: true,
    },
};