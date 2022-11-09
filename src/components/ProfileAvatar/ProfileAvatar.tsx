import React, { ChangeEvent, FC } from "react";
import { ProfileAvatarAvatar, StyledProfileAvatar, UploadPhotoBtn } from "./style";
import defaultAvatar from '../../assets/img/default-user-photo.jpg';
import { useAppDispatch } from "../../hooks/redux";
import { updatePhoto } from "../../store/reducers/auth/thunk-creators";

interface Props {
   photo: string | null
   isOwner: boolean
}

const ProfileAvatar: FC<Props> = React.memo(({ photo, isOwner }) => {
   const avatarUrl = photo || defaultAvatar;

   const dispatch = useAppDispatch();

   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
         dispatch(updatePhoto(file));
      }
   }

   return (
      <StyledProfileAvatar>
         <ProfileAvatarAvatar>
            <img src={avatarUrl} alt="Profile Avatar" />
         </ProfileAvatarAvatar>
         {isOwner &&
            <UploadPhotoBtn>
               Upload new photo
               <input type="file" onChange={handleFileChange} />
            </UploadPhotoBtn>}
      </StyledProfileAvatar>
   );
})

export default ProfileAvatar;