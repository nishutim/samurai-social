import { AppDispatch, GetState } from './../../index';
import { AuthActions } from '.';
import AuthService from '../../../services/authService';
import { ResultCodes } from '../../../models/ResultCodes';
import { ResultCodeForCaptcha } from './../../../models/ResultCodes';
import CaptchaService from '../../../services/captchaService';
import { SetStatusT } from '../../../types';
import ProfileService from '../../../services/profileService';
import { IProfile } from '../../../models/IProfile';

export const checkAuth = () => async (dispatch: AppDispatch) => {
   dispatch(AuthActions.toggleIsLoading(true));
   try {
      const data = await AuthService.checkAuth();
      if (data.resultCode === ResultCodes.SUCCESS) {
         dispatch(AuthActions.loginSuccess(data.data));
      }
   } catch (e: any) {
      dispatch(AuthActions.setError(e.message));
   }
   dispatch(AuthActions.toggleIsLoading(false));
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
   dispatch(AuthActions.toggleIsLoading(true));
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
      dispatch(AuthActions.setError(e.message));
   }
   dispatch(AuthActions.toggleIsLoading(false));
}

export const logout = () => async (dispatch: AppDispatch) => {
   dispatch(AuthActions.toggleIsLoading(true));
   try {
      const data = await AuthService.logout();
      if (data.resultCode === ResultCodes.SUCCESS) {
         dispatch(AuthActions.logoutSuccess());
      } else {
         alert(data.messages[0]);
      }
   } catch (e: any) {
      alert(e.message);
   }
   dispatch(AuthActions.toggleIsLoading(false));
}

export const fetchAuthUserData = () => async (dispatch: AppDispatch, getState: GetState) => {
   dispatch(AuthActions.toggleIsLoading(true));
   try {
      const userId = getState().auth.id;
      if (userId) {
         const profile = await ProfileService.fetchProfile(userId);
         const status = await ProfileService.fetchStatus(userId);
         dispatch(AuthActions.fetchAuthUserDataSuccess({ profile, status }));
      }
   } catch (e: any) {
      dispatch(AuthActions.fetchAuthUserDataFail(e.message));
      alert(e.message + ' Please, reload page');
   }
   dispatch(AuthActions.toggleIsLoading(false));
}

export const updatePhoto = (photo: File) => async (dispatch: AppDispatch) => {
   try {
      const data = await ProfileService.updatePhoto(photo);
      if (data.resultCode === ResultCodes.SUCCESS) {
         dispatch(AuthActions.updatePhotoSuccess(data.data.photos));
      } else {
         alert(data.messages[0]);
      }
   } catch (e: any) {
      alert(e.message);
   }
}

export const updateStatus = (status: string) => async (dispatch: AppDispatch) => {
   try {
      const data = await ProfileService.updateStatus(status);
      if (data.resultCode === ResultCodes.SUCCESS) {
         dispatch(AuthActions.updateStatusSuccess(status));
      } else {
         return Promise.reject(data.messages[0]);
      }
   } catch (e: any) {
      alert(e.message);
   }
}

export const updateProfile = (profile: IProfile, setStatus: SetStatusT) => async (dispatch: AppDispatch) => {
   try {
      const data = await ProfileService.updateProfile(profile);
      if (data.resultCode === ResultCodes.SUCCESS) {
         dispatch(AuthActions.updateProfileSuccess(profile));
      } else {
         setStatus(data.messages[0]);
         return Promise.reject(data.messages[0]);
      }
   } catch (e: any) {
      alert(e.message);
   }
}