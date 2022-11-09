import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { IMessage } from '../../models/IMessage';
import defaultAvatar from '../../assets/img/default-user-photo.jpg';
import { MessageItemAvatar, MessageItemMessage, StyledMessageItem } from "./style";
import { RouteNames } from "../../router/RouteNames";

interface Props {
   messageBody: IMessage
}

const MessageItem: FC<Props> = React.memo(({ messageBody }) => {
   const { message, photo, userId, userName } = messageBody;

   const avatarUrl = photo || defaultAvatar;

   return (
      <StyledMessageItem>
         <NavLink className="messageItemLink" to={RouteNames.PROFILE + `/${userId}`}>
            <MessageItemAvatar>
               <img src={avatarUrl} alt="Avatar" />
            </MessageItemAvatar>
         </NavLink>
         <MessageItemMessage>
            <h4>{userName}</h4>
            <p>{message}</p>
         </MessageItemMessage>
      </StyledMessageItem>
   );
})

export default MessageItem;