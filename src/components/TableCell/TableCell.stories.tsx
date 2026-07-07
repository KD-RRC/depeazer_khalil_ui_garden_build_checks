import type { Meta, StoryObj } from '@storybook/react-webpack5';
import TableCell from './TableCell';

const meta: Meta<typeof TableCell> = {
    title: 'Components/TableCell',
    component: TableCell,
    tags: ['autodocs'],
    argTypes: {
        content: { control: 'text' },
        isHeader: { control: 'boolean' },
        backgroundColor: { control: 'color' },
        disabled: { control: 'boolean' },
    },
    decorators: [(Story) => <table><tbody><tr><Story /></tr></tbody></table>],
};

export default meta;
type Story = StoryObj<typeof TableCell>;

export const Default: Story = {
    args: {
        content: 'Cell content',
        isHeader: false,
        backgroundColor: '#ffffff',
        disabled: false,
    },
};

export const Disabled: Story = {
    args: {
        content: 'Cell content',
        isHeader: false,
        backgroundColor: '#ffffff',
        disabled: true,
    },
};