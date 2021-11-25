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

const fontMixin = (size, lineh, fontFamily = 'Noto Sans Kr Medium') => css`
    font-size: ${size};
    line-height: ${lineh};
    font-family: '${fontFamily}';
`;

const fontFaceMixin = ({ name, bold = 500, woff2, woff, otf }) => css`
    @font-face {
        font-family: ${name};
        font-weight: ${bold};
        font-display: fallback;
        src: local(${name}), url(${woff2}) format('woff2'),
            url(${woff}) format('woff'), url(${otf}) format('opentype');
    }
`;

const hoverMixin = (bgColor, hoverColor) => css`
    background-color: ${bgColor};
    &:hover {
        background-color: ${hoverColor};
    }
`;

export {
    flexMixin,
    borderBoxMixin,
    sizeMixin,
    colorMixin,
    fontMixin,
    fontFaceMixin,
    hoverMixin,
};
