import $axios from "../axios";
import { ResultCodesWithCaptcha } from './../models/ResultCodes';
import { ResponseType } from "../models/ResponseType";
import { IUserData } from "../models/IUserData";
import { ILoginData } from "../models/ILoginData";

class AuthService {
   static checkAuth = async () => {
      const { data } = await $axios.get<ResponseType<IUserData>>('/auth/me');
      return data;
   }

   static login = async (email: string, password: string, rememberMe: boolean, captcha: string) => {
      const { data } = await $axios.post<ResponseType<ILoginData, ResultCodesWithCaptcha>>('/auth/login', { email, password, rememberMe, captcha });
      return data;
   }

   static logout = async () => {
      const { data } = await $axios.delete<ResponseType>('/auth/login');
      return data;
   }
}

export default AuthService;