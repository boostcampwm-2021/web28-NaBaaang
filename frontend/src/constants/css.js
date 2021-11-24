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

const ICON_BUTTON_SIZE_TYPE = {
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

const BUTTON_SIZE_TYPE = {
    small: css`
        padding: 10px 15px;
        font-size: 16px;
    `,
    medium: css`
        padding: 12px 20px;
        font-size: 18px;
    `,
    large: css`
        padding: 14px 25px;
        font-size: 24px;
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

export {
    BORDER_RADIUS_TYPE,
    ICON_BUTTON_SIZE_TYPE,
    BUTTON_SIZE_TYPE,
    BUTTON_COLOR_TYPE,
};
