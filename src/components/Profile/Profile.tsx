import React, { FC } from "react";
import { IProfileData } from "../../models/IProfileData";
import { StyledProfile } from "./style";
import ProfileAvatar from "../ProfileAvatar/ProfileAvatar";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import ProfileStatus from "../ProfileStatus/ProfileStatus";

interface Props {
   profile: IProfileData
   status: string
   isOwner: boolean
}

const Profile: FC<Props> = React.memo(({ profile, status, isOwner }) => {
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
})

export default Profile;