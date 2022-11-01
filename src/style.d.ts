import 'styled-components';

declare module 'styled-components' {
   export interface ITheme {
      font: {
         $fontFamily: string
         $fontWeight: number
         $fontSize: string
         $lineHeight: number
         $color: string
      },
      colors: {
         $black: string
         $darkGray: string
         $gray: string
         $lightGray: string
         $lightGrayBG: string
         $orange: string
         $orangeHover: string
         $green: string
         $red: string
         $cremaBG: string
         $darkCremaBG: string
      },
      media: {
         $md1: string
         $md2: string
         $md3: string
         $md4: string
      }
   }
}