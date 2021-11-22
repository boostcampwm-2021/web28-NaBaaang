import { createGlobalStyle, css } from 'styled-components';
import notoSansLight from '@/assets/fonts/NotoSansKR-Light.otf';
import notoSansMedium from '@/assets/fonts/NotoSansKR-Medium.otf';
import notoSansBold from '@/assets/fonts/NotoSansKR-Bold.otf';

const fontMixin = (fontName, fontUrl) => css`
    @font-face {
        font-family: ${fontName};
        src: local(${fontName}), url(${fontUrl}) format('opentype');
    }
`;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
    box-sizing: border-box;
  }

  html, body, #root{
    width: 100%;
    height: 100%;
  }

  a{
    text-decoration: none;
  }

  button{
    outline: none;
    border: none;
    background: none;
  }
    
  

  ${fontMixin('notoSansLight', notoSansLight)}
  ${fontMixin('notoSansMedium', notoSansMedium)}
  ${fontMixin('notoSansBold', notoSansBold)}
`;

export default GlobalStyle;
