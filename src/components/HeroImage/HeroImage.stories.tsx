import type { Meta, StoryObj } from '@storybook/react-webpack5';
import HeroImage from './HeroImage';

const meta: Meta<typeof HeroImage> = {
    title: 'Components/HeroImage',
    component: HeroImage,
    tags: ['autodocs'],
    argTypes: {
        heading: { control: 'text' },
        subheading: { control: 'text' },
        textColor: { control: 'color' },
        disabled: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
    args: {
        imageUrl: 'https://picsum.photos/800/400',
        heading: 'Welcome to our site',
        subheading: 'Discover something great today',
        textColor: '#ffffff',
        disabled: false,
    },
};

export const Disabled: Story = {
    args: {
        imageUrl: 'https://picsum.photos/800/400',
        heading: 'Welcome to our site',
        subheading: 'Discover something great today',
        textColor: '#ffffff',
        disabled: true,
    },
};