import { ProfileActions } from './index';
import { AppDispatch } from "../..";
import ProfileService from '../../../services/profileService';

export const fetchProfileData = (id: number) => async (dispatch: AppDispatch) => {
   dispatch(ProfileActions.fetchProfileDataStarted());
   try {
      const profile = await ProfileService.fetchProfile(id);
      const status = await ProfileService.fetchStatus(id);
      dispatch(ProfileActions.fetchProfileDataSuccess({ profile, status }));
   } catch (e: any) {
      dispatch(ProfileActions.fetchProfileDataFail(e.message));
      alert(e.message + ' Please, reload page');
   }
}