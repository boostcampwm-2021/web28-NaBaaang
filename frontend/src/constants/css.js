import { css } from 'styled-components';

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

export { BORDER_RADIUS_TYPE, BUTTON_SIZE_TYPE };
