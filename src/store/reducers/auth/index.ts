import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPhotos } from '../../../models/IPhotos';
import { IProfile } from '../../../models/IProfile';
import { IProfileData } from '../../../models/IProfileData';
import { IUserData } from './../../../models/IUserData';

interface InitialState {
   isLoading: boolean
   isAuth: boolean
   id: number | null
   email: string | null
   login: string | null
   authUser: IProfileData | null
   authUserStatus: string
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
   authUserStatus: '',
   captchaUrl: '',
   error: ''
};

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      toggleIsLoading: (state, action: PayloadAction<boolean>) => {
         state.isLoading = action.payload
      },
      loginSuccess: (state, action: PayloadAction<IUserData>) => {
         state.isAuth = true
         state.id = action.payload.id
         state.email = action.payload.email
         state.login = action.payload.login
         state.captchaUrl = ''
         state.error = ''
      },
      fetchCaptchaSuccess: (state, action: PayloadAction<string>) => {
         state.captchaUrl = action.payload
      },
      logoutSuccess: (state) => {
         state.isAuth = false
         state.id = null
         state.email = null
         state.login = null
         state.authUser = null
         state.authUserStatus = ''
      },
      fetchAuthUserDataSuccess: (state, action: PayloadAction<{ profile: IProfileData, status: string }>) => {
         state.isLoading = false
         state.authUser = action.payload.profile
         state.authUserStatus = action.payload.status
         state.error = ''
      },
      fetchAuthUserDataFail: (state, action: PayloadAction<string>) => {
         state.error = action.payload
      },
      updatePhotoSuccess: (state, action: PayloadAction<IPhotos>) => {
         const newProfile = { ...state.authUser, photos: action.payload } as IProfileData
         state.authUser = newProfile
      },
      updateStatusSuccess: (state, action: PayloadAction<string>) => {
         state.authUserStatus = action.payload
      },
      updateProfileSuccess: (state, action: PayloadAction<IProfile>) => {
         const newProfile = { ...state.authUser, ...action.payload } as IProfileData
         state.authUser = newProfile
      },
      setError: (state, action: PayloadAction<string>) => {
         state.error = action.payload
      }
   }
});

export const AuthActions = authSlice.actions;

export default authSlice.reducer;