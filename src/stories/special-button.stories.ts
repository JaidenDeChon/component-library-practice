import { SpecialButton } from '../web-components/special-button/index';
import type { Meta, StoryObj } from '@storybook/web-components';
import type { SpecialButtonProps } from '../web-components/special-button/index';

const meta = {
    title: 'Practice/special-button',
    tags: ['autodocs'],
    render: (args) => SpecialButton(args),
    argTypes: {
        backgroundColor: { control: 'color' },
        onClick: { action: 'onClick' },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large']
        }
    }
} satisfies Meta<SpecialButtonProps>;

const content = 'Click me';

type Story = StoryObj<SpecialButtonProps>;

export const Primary: Story = { args: { content, primary: true } };
export const Secondary: Story = { args: { content }};
export const Small: Story = { args: { content, size: 'small' }};
export const Medium: Story = { args: { content, size: 'medium' }};
export const Large: Story = { args: { content, size: 'large' }};

export default meta;
