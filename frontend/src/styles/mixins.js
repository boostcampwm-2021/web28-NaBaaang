import { css } from 'styled-components';

const sizeMixin = (width = '100px', height = '100px') => css`
    width: ${width};
    height: ${height};
`;

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

export { flexMixin, borderBoxMixin, sizeMixin };
