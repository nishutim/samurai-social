import { AppDispatch, GetState } from './../../index';
import { AuthActions } from '.';
import AuthService from '../../../services/authService';
import { ResultCodes } from '../../../models/ResultCodes';
import { ResultCodeForCaptcha } from './../../../models/ResultCodes';
import CaptchaService from '../../../services/captchaService';
import { SetStatusT } from '../../../types';
import ProfileService from '../../../services/profileService';

export const checkAuth = () => async (dispatch: AppDispatch) => {
   dispatch(AuthActions.loginStarted());
   try {
      const data = await AuthService.checkAuth();
      if (data.resultCode === ResultCodes.SUCCESS) {
         dispatch(AuthActions.loginSuccess(data.data));
      }
   } catch (e: any) {
      dispatch(AuthActions.loginFail(e.message));
      alert(e.message);
   }
}

export const fetchCaptcha = () => async (dispatch: AppDispatch) => {
   try {
      const data = await CaptchaService.fetchCaptcha();
      dispatch(AuthActions.fetchCaptchaSuccess(data.url));
   } catch (e: any) {
      alert(e.message);
   }
}

export const login = (email: string, password: string, rememberMe: boolean, captchaUrl: string, setStatus: SetStatusT) => async (dispatch: AppDispatch) => {
   dispatch(AuthActions.loginStarted());
   try {
      const data = await AuthService.login(email, password, rememberMe, captchaUrl);
      if (data.resultCode === ResultCodes.SUCCESS) {
         dispatch(checkAuth());
      } else if (data.resultCode === ResultCodeForCaptcha.CAPTCHA) {
         dispatch(fetchCaptcha());
      } else {
         setStatus(data.messages[0]);
      }
   } catch (e: any) {
      alert(e.message);
   }
}

export const logout = () => async (dispatch: AppDispatch) => {
   dispatch(AuthActions.logoutStarted());
   try {
      const data = await AuthService.logout();
      if (data.resultCode === ResultCodes.SUCCESS) {
         dispatch(AuthActions.logoutSuccess());
      } else {
         dispatch(AuthActions.logoutFail());
         alert(data.messages[0]);
      }
   } catch (e: any) {
      dispatch(AuthActions.logoutFail());
      alert(e.message);
   }
}

export const fetchAuthUser = () => async (dispatch: AppDispatch, getState: GetState) => {
   dispatch(AuthActions.fetchAuthUserStarted());
   try {
      const userId = getState().auth.id;
      if (userId) {
         const data = await ProfileService.fetchProfile(userId);
         dispatch(AuthActions.fetchAuthUserSuccess(data));
      }
   } catch (e: any) {
      dispatch(AuthActions.fetchAuthUserFail());
      alert(e.message + ' Please, reload page');
   }
}