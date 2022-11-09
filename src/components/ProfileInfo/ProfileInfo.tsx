import React, { FC, useCallback, useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { IProfile } from "../../models/IProfile";
import { IProfileData } from "../../models/IProfileData";
import { SetStatusT } from "../../types";
import { StyledProfileInfo } from "./style";
import { updateProfile } from "../../store/reducers/auth/thunk-creators";
import Info from "./Info";
import InfoForm from "./InfoForm";

interface Props {
   profile: IProfileData
   isOwner: boolean
}

const ProfileInfo: FC<Props> = React.memo(({ profile, isOwner }) => {
   const [editMode, setEditMode] = useState(false);

   const dispatch = useAppDispatch();

   const handleEditBtnClick = () => {
      setEditMode(true);
   }

   const handleSaveBtnClick = useCallback(async (profile: IProfile, setStatus: SetStatusT) => {
      try {
         await dispatch(updateProfile(profile, setStatus));
         setEditMode(false);
      } catch (e: any) {
         alert(e);
      }
   }, [])

   return (
      <StyledProfileInfo>
         {!editMode ?
            <Info
               profile={profile}
               isOwner={isOwner}
               handleEditBtnClick={handleEditBtnClick} />
            :
            <InfoForm
               profile={profile}
               handleSaveBtnClick={handleSaveBtnClick} />
         }
      </StyledProfileInfo>
   );
})

export default ProfileInfo;