import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import './style.css';

export interface SpecialButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    content: string;
    onClick?: () => void;
}

export const SpecialButton = ({ primary, backgroundColor, size, content, onClick }: SpecialButtonProps) => {
    const modifier = primary
        ? 'special-button--primary'
        : 'special-button--secondary';
    const classes = [
        'special-button',
        `special-button--${size || 'medium'}`,
        modifier
    ]
    const style = styleMap({ backgroundColor });

    return html`
        <button
            type="button"
            class="${classes.join(' ')}"
            style="${style}"
            @click="${onClick}"
        >
            ${content}
        </button>
    `;
};
