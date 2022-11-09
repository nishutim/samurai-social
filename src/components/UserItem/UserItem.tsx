import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import defaultAvatar from "../../assets/img/default-user-photo.jpg";
import { IUser } from "../../models/IUser";
import { RouteNames } from "../../router/RouteNames";
import { Button } from "../styled";
import {
   StyledUserItem,
   UserItemActions,
   UserItemAvatar,
   UserItemBody,
   UserItemInfo,
   UserItemName,
   UserItemStatus
} from "./style";

interface Props {
   user: IUser
   toggleFollowing: (id: number, followed: boolean) => Promise<void>
}

const UserItem: FC<Props> = React.memo(({ user, toggleFollowing }) => {
   const { id, name, photos, status, followed } = user;

   const avatarUrl = photos.small || defaultAvatar;
   const btnText = followed ? 'Unfollow' : 'Follow';
   const statusText = status || 'I don\'t have a status';

   const [disabled, setDisabled] = useState(false);

   const handleBtnClick = async () => {
      setDisabled(true);
      await toggleFollowing(id, followed);
      setDisabled(false);
   }

   return (
      <StyledUserItem>
         <UserItemBody>
            <UserItemActions>
               <NavLink to={RouteNames.PROFILE + `/${id}`}>
                  <UserItemAvatar>
                     <img src={avatarUrl} alt="Avatar" />
                  </UserItemAvatar>
               </NavLink>
               <Button
                  p="0px 5px"
                  disabled={disabled}
                  onClick={handleBtnClick}
               >
                  {btnText}
               </Button>
            </UserItemActions>
            <UserItemInfo>
               <UserItemName>{name}</UserItemName>
               <UserItemStatus>{statusText}</UserItemStatus>
            </UserItemInfo>
         </UserItemBody>
      </StyledUserItem>
   );
})

export default UserItem;