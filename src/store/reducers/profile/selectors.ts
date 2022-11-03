import { RootState } from "../..";

export const profile_selectIsLoading = (state: RootState) => state.profile.isLoading;
export const profile_selectProfile = (state: RootState) => state.profile.profile;
export const profile_selectStatus = (state: RootState) => state.profile.status;
export const profile_selectError = (state: RootState) => state.profile.error;