import React, { FC, useEffect } from "react";
import { Page, PageBody } from "../../components/styled/Page";
import PagePreloader from "../../components/PagePreloader/PagePreloader";
import Profile from "../../components/Profile/Profile";
import { Navigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { auth_selectAuthUser, auth_selectAuthUserStatus, auth_selectId } from "../../store/reducers/auth/selectors";
import { fetchProfileData } from "../../store/reducers/profile/thunk-creators";
import { profile_selectError, profile_selectIsLoading, profile_selectProfile, profile_selectStatus } from "../../store/reducers/profile/selectors";
import { RouteNames } from "../../router/RouteNames";
import GlobalError from "../../components/GlobalError/GlobalError";

const ProfilePage: FC = () => {
   const authUserId = useAppSelector(auth_selectId);
   const isLoading = useAppSelector(profile_selectIsLoading);
   const profile = useAppSelector(profile_selectProfile);
   const status = useAppSelector(profile_selectStatus);
   const authUserProfile = useAppSelector(auth_selectAuthUser);
   const authUserStatus = useAppSelector(auth_selectAuthUserStatus);
   const error = useAppSelector(profile_selectError);

   const paramsId = Number(useParams().id);

   const currentProfile = paramsId ? profile : authUserProfile;
   const currentStatus = paramsId ? status : authUserStatus;
   const isOwner = !paramsId;

   const dispatch = useAppDispatch();

   useEffect(() => {
      if (paramsId) {
         dispatch(fetchProfileData(paramsId));
      }
   }, []);

   if (!currentProfile || isLoading) return <PagePreloader />
   if (error) return <GlobalError error={error} onPage />
   if (paramsId === authUserId) return <Navigate to={RouteNames.PROFILE} />

   return (
      <Page>
         <PageBody>
            <Profile
               profile={currentProfile}
               status={currentStatus}
               isOwner={isOwner} />
         </PageBody>
      </Page>
   );
}

export default ProfilePage;