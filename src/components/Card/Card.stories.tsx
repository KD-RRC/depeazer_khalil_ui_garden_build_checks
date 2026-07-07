import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Card from './Card';

const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text' },
        description: { control: 'text' },
        imageUrl: { control: 'text' },
        backgroundColor: { control: 'color' },
        disabled: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        title: 'Card title',
        description: 'A short description of this card goes here.',
        imageUrl: 'https://picsum.photos/300/180',
        backgroundColor: '#ffffff',
        disabled: false,
    },
};

export const Disabled: Story = {
    args: {
        title: 'Card title',
        description: 'A short description of this card goes here.',
        imageUrl: 'https://picsum.photos/300/180',
        backgroundColor: '#ffffff',
        disabled: true,
    },
};