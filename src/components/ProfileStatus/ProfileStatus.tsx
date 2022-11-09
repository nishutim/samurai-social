import React, { FC, useCallback, useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { updateStatus } from "../../store/reducers/auth/thunk-creators";
import StatusForm from "./StatusForm";
import { EditBtn, Status, StatusText, StyledProfileStatus } from "./style";

interface Props {
   status: string
   isOwner: boolean
}

const ProfileStatus: FC<Props> = React.memo(({ status, isOwner }) => {
   const [editMode, setEditMode] = useState(false);

   const dispatch = useAppDispatch();

   const handleEditBtnClick = () => {
      setEditMode(true);
   }

   const handleSaveBtnClick = useCallback(async (statusText: string) => {
      try {
         if (status !== statusText) {
            await dispatch(updateStatus(status));
         }
         setEditMode(false);
      } catch (e: any) {
         alert(e);
      }
   }, [status]);

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
})

export default ProfileStatus;