import $axios from "../axios";

class CaptchaService {
   static fetchCaptcha = async () => {
      const { data } = await $axios.get<{ url: string }>('/security/get-captcha-url');
      return data;
   }
}

export default CaptchaService;