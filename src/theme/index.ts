import { ITheme } from "styled-components";

const $maxWidthContainer = 1270 + 'px';
const $md1 = $maxWidthContainer + 12 + 'px';
const $md2 = '991.98px';
const $md3 = '767.98px';
const $md4 = '479.98px';

const $black = '#3A3A3A';
const $darkGray = '#616161';
const $gray = '#898989';
const $lightGray = '#D8D8D8';
const $lightGrayBG = '#F4F5F7';
const $orange = '#E89F71';
const $orangeHover = '#c48864';
const $green = '#2EC1AC';
const $red = '#E97171';
const $cremaBG = '#FCF8F3';
const $darkCremaBG = '#F9F1E7';

const $fontFamily = 'Gilroy';
const $fontWeight = 500;
const $fontSize = '16px';
const $lineHeight = 1.5;
const $color = $black;

const theme: ITheme = {
   font: {
      $fontFamily,
      $fontWeight,
      $fontSize,
      $lineHeight,
      $color
   },
   colors: {
      $black,
      $darkGray,
      $gray,
      $lightGray,
      $lightGrayBG,
      $orange,
      $orangeHover,
      $green,
      $red,
      $cremaBG,
      $darkCremaBG
   },
   media: {
      $md1,
      $md2,
      $md3,
      $md4
   }
};

export default theme;