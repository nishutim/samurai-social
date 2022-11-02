import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProfileData } from '../../../models/IProfileData';
import { IUserData } from './../../../models/IUserData';

interface InitialState {
   isLoading: boolean
   isAuth: boolean
   id: number | null
   email: string | null
   login: string | null
   authUser: IProfileData | null
   captchaUrl: string
   error: string
}

const initialState: InitialState = {
   isLoading: false,
   isAuth: false,
   id: null,
   email: null,
   login: null,
   authUser: null,
   captchaUrl: '',
   error: ''
};

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      loginStarted: (state) => {
         state.isLoading = true
      },
      loginSuccess: (state, action: PayloadAction<IUserData>) => {
         state.isLoading = false
         state.isAuth = true
         state.id = action.payload.id
         state.email = action.payload.email
         state.login = action.payload.login
         state.captchaUrl = ''
         state.error = ''
      },
      loginFail: (state, action: PayloadAction<string>) => {
         state.isLoading = false
         state.error = action.payload
      },
      fetchCaptchaSuccess: (state, action: PayloadAction<string>) => {
         state.captchaUrl = action.payload
      },
      logoutStarted: (state) => {
         state.isLoading = true
      },
      logoutSuccess: (state) => {
         state.isLoading = false
         state.isAuth = false
         state.id = null
         state.email = null
         state.login = null
      },
      logoutFail: (state) => {
         state.isLoading = false
      },
      fetchAuthUserStarted: (state) => {
         state.isLoading = true
      },
      fetchAuthUserSuccess: (state, action: PayloadAction<IProfileData>) => {
         state.isLoading = false
         state.authUser = { ...action.payload }
      },
      fetchAuthUserFail: (state) => {
         state.isLoading = false
      }
   }
});

export const AuthActions = authSlice.actions;

export default authSlice.reducer;