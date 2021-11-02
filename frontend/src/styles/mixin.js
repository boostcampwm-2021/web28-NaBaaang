import { css } from 'styled-components';

const borderBoxMixin = (stroke, radius, color = 'black') => css`
    border-radius: ${radius};
    border: ${stroke} solid ${color};
`;
export { borderBoxMixin };
