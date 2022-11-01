export enum ResultCodes {
   SUCCESS = 0,
   FAIL = 1
}

export enum ResultCodeForCaptcha {
   CAPTCHA = 10
}

export type ResultCodesWithCaptcha = ResultCodes | ResultCodeForCaptcha;