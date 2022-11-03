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
}

const UserItem: FC<Props> = ({ user }) => {
   const { id, name, photos, status, followed } = user;
   const avatarUrl = photos.small || defaultAvatar;
   const btnText = followed ? 'Unfollow' : 'Follow';
   const statusText = status || 'I don\'t have a status';

   const [disabled, setDisabled] = useState(false);

   const toggleFollowing = async () => {
      setDisabled(true);
      setTimeout(() => {
         console.log('Followed/Unfollowed');
         setDisabled(false);
      }, 1200);
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
                  onClick={toggleFollowing}
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
}

export default UserItem;