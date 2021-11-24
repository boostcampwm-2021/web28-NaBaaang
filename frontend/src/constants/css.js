import { css } from 'styled-components';
import { colorMixin } from '@/styles/mixins';

const BORDER_RADIUS_TYPE = {
    squre: css`
        border-radius: 20%;
    `,
    circle: css`
        border-radius: 50%;
    `,
};

const BUTTON_SIZE_TYPE = {
    small: css`
        width: 1rem;
        height: 1rem;
        padding: 0.3rem;
    `,
    medium: css`
        width: 1.5rem;
        height: 1.5rem;
        padding: 0.3rem;
    `,
    large: css`
        width: 2rem;
        height: 2rem;
        padding: 0.3rem;
    `,
};

const BUTTON_COLOR_TYPE = {
    error: css`
        ${({ theme: { color } }) => colorMixin(color.white, color.red)}
    `,
    success: css`
        ${({ theme: { color } }) => colorMixin(color.white, color.primary)}
    `,
    light: css`
        ${({ theme: { color } }) => colorMixin(color.black, color.gray3)}
    `,
};

export { BORDER_RADIUS_TYPE, BUTTON_SIZE_TYPE, BUTTON_COLOR_TYPE };
