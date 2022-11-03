import React, { FC, useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { IProfile } from "../../models/IProfile";
import { IProfileData } from "../../models/IProfileData";
import { updateProfile } from "../../store/reducers/auth/thunk-creators";
import { SetStatusT } from "../../types";
import { Button } from "../styled";
import Info from "./Info";
import InfoForm from "./InfoForm";
import { StyledProfileInfo } from "./style";

interface Props {
   profile: IProfileData
   isOwner: boolean
}

const ProfileInfo: FC<Props> = ({ profile, isOwner }) => {
   const [editMode, setEditMode] = useState(false);

   const dispatch = useAppDispatch();

   const handleEditBtnClick = () => {
      setEditMode(true);
   }

   const handleSaveBtnClick = async (profile: IProfile, setStatus: SetStatusT) => {
      try {
         await dispatch(updateProfile(profile, setStatus));
         setEditMode(false);
      } catch (e: any) {
         alert(e);
      }
   }

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
}

export default ProfileInfo;