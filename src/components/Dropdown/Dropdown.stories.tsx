import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Dropdown from './Dropdown';

const meta: Meta<typeof Dropdown> = {
    title: 'Components/Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
        textColor: { control: 'color' },
        disabled: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const sampleOptions = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
];

export const Default: Story = {
    args: {
        options: sampleOptions,
        value: 'apple',
        backgroundColor: '#ffffff',
        textColor: '#222222',
        disabled: false,
    },
};

export const Disabled: Story = {
    args: {
        options: sampleOptions,
        value: 'apple',
        backgroundColor: '#ffffff',
        textColor: '#222222',
        disabled: true,
    },
};