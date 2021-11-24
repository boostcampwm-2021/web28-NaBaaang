import { createGlobalStyle, css } from 'styled-components';
import NotoSansKRLightWOFF from '@/assets/fonts/NotoSansKR-Light.woff';
import NotoSansKRLightWOFF2 from '@/assets/fonts/NotoSansKR-Light.woff2';
import NotoSansKRLightOTF from '@/assets/fonts/NotoSansKR-Light.otf';
import NotoSansKRMeidumWOFF from '@/assets/fonts/NotoSansKR-Medium.woff';
import NotoSansKRMeidumWOFF2 from '@/assets/fonts/NotoSansKR-Medium.woff2';
import NotoSansKRMediumOTF from '@/assets/fonts/NotoSansKR-Medium.otf';
import NotoSansKRBoldWOFF from '@/assets/fonts/NotoSansKR-Bold.woff';
import NotoSansKRBoldWOFF2 from '@/assets/fonts/NotoSansKR-Bold.woff2';
import NotoSansKRBoldOTF from '@/assets/fonts/NotoSansKR-Bold.otf';

const fontMixin = ({ name, bold = 500, woff2, woff, otf }) => css`
    @font-face {
        font-family: ${name};
        font-weight: ${bold};
        font-display: fallback;
        src: local(${name}), url(${woff2}) format('woff2'),
            url(${woff}) format('woff'), url(${otf}) format('opentype');
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

  input,
  button{
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
  }
    
  

  ${fontMixin({
      name: 'Noto Sans Kr Light',
      bold: 300,
      woff: NotoSansKRLightWOFF,
      woff2: NotoSansKRLightWOFF2,
      otf: NotoSansKRLightOTF,
  })}
  ${fontMixin({
      name: 'Noto Sans Kr Medium',
      bold: 500,
      woff: NotoSansKRMeidumWOFF,
      woff2: NotoSansKRMeidumWOFF2,
      otf: NotoSansKRMediumOTF,
  })}
  ${fontMixin({
      name: 'Noto Sans KR Bold',
      bold: 900,
      woff: NotoSansKRBoldWOFF,
      woff2: NotoSansKRBoldWOFF2,
      otf: NotoSansKRBoldOTF,
  })}

`;

export default GlobalStyle;
