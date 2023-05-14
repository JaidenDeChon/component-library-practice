import { SpecialButton } from '../web-components/special-button/index';
import type { Meta, StoryObj } from '@storybook/web-components';
import type { SpecialButtonProps } from '../web-components/special-button/index';

/** **This subtitle was inserted automatically via JSDoc.**
 * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
 * aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
 * Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
 * occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 */
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

/** **This subtitle was inserted automatically via JSDoc.** Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
 * do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 */
export const Primary: Story = { args: { content, primary: true } };
export const Secondary: Story = { args: { content }};
export const Small: Story = { args: { content, size: 'small' }};
export const Medium: Story = { args: { content, size: 'medium' }};
export const Large: Story = { args: { content, size: 'large' }};

export default meta;
