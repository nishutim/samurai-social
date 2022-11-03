import React, { FC, useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { updateStatus } from "../../store/reducers/auth/thunk-creators";
import { SetStatusT } from "../../types";
import StatusForm from "./StatusForm";
import { EditBtn, Status, StatusText, StyledProfileStatus } from "./style";

interface Props {
   status: string
   isOwner: boolean
}

const ProfileStatus: FC<Props> = ({ status, isOwner }) => {
   const [editMode, setEditMode] = useState(false);

   const dispatch = useAppDispatch();

   const handleEditBtnClick = () => {
      setEditMode(true);
   }

   const handleSaveBtnClick = async (status: string) => {
      try {
         await dispatch(updateStatus(status));
         setEditMode(false);
      } catch (e: any) {
         alert(e);
      }
   }

   return (
      <StyledProfileStatus>
         {!editMode ?
            <Status>
               {isOwner && <EditBtn onClick={handleEditBtnClick}>Edit</EditBtn>}
               <StatusText>{status || 'I don\'t have a status'}</StatusText>
            </Status>
            :
            <StatusForm
               status={status}
               handleSaveBtnClick={handleSaveBtnClick} />
         }
      </StyledProfileStatus>
   );
}

export default ProfileStatus;