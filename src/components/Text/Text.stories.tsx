import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Text from './Text';

const meta: Meta<typeof Text> = {
    title: 'Components/Text',
    component: Text,
    tags: ['autodocs'],
    argTypes: {
        content: { control: 'text' },
        textColor: { control: 'color' },
        backgroundColor: { control: 'color' },
        fontSize: { control: { type: 'number', min: 8, max: 48 } },
        disabled: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
    args: {
        content: 'This is some sample body text.',
        textColor: '#222222',
        backgroundColor: 'transparent',
        fontSize: 16,
        disabled: false,
    },
};

export const Disabled: Story = {
    args: {
        content: 'This is some sample body text.',
        textColor: '#222222',
        backgroundColor: 'transparent',
        fontSize: 16,
        disabled: true,
    },
};