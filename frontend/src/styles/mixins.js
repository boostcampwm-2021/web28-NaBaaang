import { css } from 'styled-components';

const sizeMixin = (width = '100px', height = '100px') => css`
    width: ${width};
    height: ${height};
`;

const colorMixin = (color, backgroundColor) => css`
    color: ${color};
    background-color: ${backgroundColor};
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

const fontMixin = (
    size,
    lineh,
    fontFamily = 'notoSansLight',
    color = 'black',
) => css`
    font-size: ${size};
    line-height: ${lineh};
    font-family: '${fontFamily}';
    color: ${color};
`;

export { flexMixin, borderBoxMixin, sizeMixin, colorMixin, fontMixin };
