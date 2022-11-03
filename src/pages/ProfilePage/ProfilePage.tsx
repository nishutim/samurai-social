import React, { FC, useEffect } from "react";
import { Page, PageBody } from "../../components/styled/Page";
import PagePreloader from "../../components/PagePreloader/PagePreloader";
import Profile from "../../components/Profile/Profile";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { auth_selectAuthUser, auth_selectAuthUserStatus } from "../../store/reducers/auth/selectors";
import { fetchProfileData } from "../../store/reducers/profile/thunk-creators";
import { profile_selectIsLoading, profile_selectProfile, profile_selectStatus } from "../../store/reducers/profile/selectors";

const ProfilePage: FC = () => {
   const isLoading = useAppSelector(profile_selectIsLoading);
   const profile = useAppSelector(profile_selectProfile);
   const status = useAppSelector(profile_selectStatus);
   const authUserProfile = useAppSelector(auth_selectAuthUser);
   const authUserStatus = useAppSelector(auth_selectAuthUserStatus);

   const userId = Number(useParams().id);

   const currentProfile = userId ? profile : authUserProfile;
   const currentStatus = userId ? status : authUserStatus;
   const isOwner = !userId;

   const dispatch = useAppDispatch();

   useEffect(() => {
      if (userId) {
         dispatch(fetchProfileData(userId));
      }
   }, []);

   if (!currentProfile || !currentStatus || isLoading) return <PagePreloader />

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