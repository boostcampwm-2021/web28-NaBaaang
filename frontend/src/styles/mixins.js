import { css } from 'styled-components';

const flexMixin = (flexDirection, justifyContent, aligenItems) => css`
    display: flex;
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${aligenItems};
`;

const borderBoxMixin = (stroke, radius, color = 'black') => css`
    border-radius: ${radius};
    border: ${stroke} solid ${color};
`;

export { flexMixin, borderBoxMixin };
