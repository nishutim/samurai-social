import React, { FC } from "react";
import { IProfileData } from "../../models/IProfileData";
import ProfileAvatar from "../ProfileAvatar/ProfileAvatar";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import { StyledProfile } from "./style";

interface Props {
   profile: IProfileData
   status: string
   isOwner: boolean
}

const Profile: FC<Props> = ({ profile, status, isOwner }) => {
   const photo = profile.photos.large;

   return (
      <StyledProfile>
         <ProfileAvatar
            photo={photo}
            isOwner={isOwner} />
         <ProfileStatus
            status={status}
            isOwner={isOwner} />
         <ProfileInfo
            profile={profile}
            isOwner={isOwner} />
      </StyledProfile>
   );
}

export default Profile;