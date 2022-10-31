import { createGlobalStyle } from 'styled-components';
import GilroyRegularEot from './assets/fonts/Gilroy-Regular.eot';
import GilroyRegularTtf from './assets/fonts/Gilroy-Regular.ttf';
import GilroyRegularWoff from './assets/fonts/Gilroy-Regular.woff';
import GilroyRegularWoff2 from './assets/fonts/Gilroy-Regular.woff2';
import GilroyMediumEot from './assets/fonts/Gilroy-Medium.eot';
import GilroyMediumTtf from './assets/fonts/Gilroy-Medium.ttf';
import GilroyMediumWoff from './assets/fonts/Gilroy-Medium.woff';
import GilroyMediumWoff2 from './assets/fonts/Gilroy-Medium.woff2';
import GilroySemiboldEot from './assets/fonts/Gilroy-Semibold.eot';
import GilroySemiboldTtf from './assets/fonts/Gilroy-Semibold.ttf';
import GilroySemiboldWoff from './assets/fonts/Gilroy-Semibold.woff';
import GilroySemiboldWoff2 from './assets/fonts/Gilroy-Semibold.woff2';
import GilroyBoldEot from './assets/fonts/Gilroy-Bold.eot';
import GilroyBoldTtf from './assets/fonts/Gilroy-Bold.ttf';
import GilroyBoldWoff from './assets/fonts/Gilroy-Bold.woff';
import GilroyBoldWoff2 from './assets/fonts/Gilroy-Bold.woff2';

const GlobalStyle = createGlobalStyle`
   *{
      padding: 0;
      margin: 0;
      border: 0;
   }
   *,*::before,*::after{
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
   }
   :focus,:active{outline: none;}
   a:focus,a:active{outline: none;}

   nav,footer,header,aside{display: block;}

   html,body{
      height: 100%;
      width: 100%;
      font-size: 100%;
      line-height: 1;
      font-size: 14px;
      -ms-text-size-adjust: 100%;
      -moz-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
   }
   input,button,textarea{font-family: inherit;}

   input::-ms-clear{display: none;}
   button{cursor: pointer; background-color: transparent;}
   button::-moz-focus-inner{padding: 0;border: 0;}
   a, a:visited{text-decoration: none;}
   a:hover{text-decoration: none;}
   ul li{list-style: none;}
   img{vertical-align: top;}

   h1,h2,h3,h4,h5,h6{font-size: inherit;font-weight: 400;}

   @font-face {
      font-family: 'Gilroy';
      src: url(${GilroyRegularEot});
      src: local('Gilroy Regular'), local('Gilroy-Regular'),
          url(${GilroyRegularEot + '?#iefix'}) format('embedded-opentype'),
          url(${GilroyRegularWoff2}) format('woff2'),
          url(${GilroyRegularWoff}) format('woff'),
          url(${GilroyRegularTtf}) format('truetype');
      font-weight: normal;
      font-style: normal;
   }
  
   @font-face {
      font-family: 'Gilroy';
      src: url(${GilroyMediumEot});
      src: local('Gilroy Medium'), local('Gilroy-Medium'),
          url(${GilroyMediumEot + '?#iefix'}) format('embedded-opentype'),
          url(${GilroyMediumWoff2}) format('woff2'),
          url(${GilroyMediumWoff}) format('woff'),
          url(${GilroyMediumTtf}) format('truetype');
      font-weight: 500;
      font-style: normal;
   }
  
   @font-face {
      font-family: 'Gilroy';
      src: url(${GilroySemiboldEot});
      src: local('Gilroy Semibold'), local('Gilroy-Semibold'),
          url(${GilroySemiboldEot + '?#iefix'}) format('embedded-opentype'),
          url(${GilroySemiboldWoff2}) format('woff2'),
          url(${GilroySemiboldWoff}) format('woff'),
          url(${GilroySemiboldTtf}) format('truetype');
      font-weight: 600;
      font-style: normal;
   }
  
   @font-face {
      font-family: 'Gilroy';
      src: url(${GilroyBoldEot});
      src: local('Gilroy Bold'), local('Gilroy-Bold'),
          url(${GilroyBoldEot + '?#iefix'}) format('embedded-opentype'),
          url(${GilroyBoldWoff2}) format('woff2'),
          url(${GilroyBoldWoff}) format('woff'),
          url(${GilroyBoldTtf}) format('truetype');
      font-weight: bold;
      font-style: normal;
   }

   body {
      font-family: 'Gilroy';
      font-weight: 500;
      font-size: 16px;
      line-height: 1.5;
      color: #3A3A3A;
   }

   button {
      font-weight: inherit;
      font-size: inherit;
      line-height: inherit;
      color: inherit;
   }
`;

export default GlobalStyle;