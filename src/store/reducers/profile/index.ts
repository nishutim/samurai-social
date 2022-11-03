import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPhotos } from '../../../models/IPhotos';
import { IProfile } from '../../../models/IProfile';
import { IProfileData } from "../../../models/IProfileData"

interface InitialValues {
   isLoading: boolean
   profile: IProfileData | null
   status: string
   error: string
}

const initialState = {
   isLoading: false,
   profile: null,
   status: '',
   error: ''
} as InitialValues;

const profileSlice = createSlice({
   name: 'profile',
   initialState,
   reducers: {
      fetchProfileDataStarted: (state) => {
         state.isLoading = true
      },
      fetchProfileDataSuccess: (state, action: PayloadAction<{ profile: IProfileData, status: string }>) => {
         state.isLoading = false
         state.profile = action.payload.profile
         state.status = action.payload.status
         state.error = ''
      },
      fetchProfileDataFail: (state, action: PayloadAction<string>) => {
         state.isLoading = false
         state.error = action.payload
      }
   }
});

export const ProfileActions = profileSlice.actions;

export default profileSlice.reducer;