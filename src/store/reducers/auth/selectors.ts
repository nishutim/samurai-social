import { RootState } from './../../index';

export const auth_selectIsLoading = (state: RootState) => state.auth.isLoading;
export const auth_selectIsAuth = (state: RootState) => state.auth.isAuth;
export const auth_selectId = (state: RootState) => state.auth.id;
export const auth_selectEmail = (state: RootState) => state.auth.email;
export const auth_selectLogin = (state: RootState) => state.auth.login;
export const auth_selectAuthUser = (state: RootState) => state.auth.authUser;
export const auth_selectCaptcha = (state: RootState) => state.auth.captchaUrl;
export const auth_selectError = (state: RootState) => state.auth.error;