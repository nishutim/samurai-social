import React, { FC } from "react";
import { IUser } from "../../models/IUser";
import UserItem from "../UserItem/UserItem";
import { StyledUsersList } from "./style";

interface Props {
   users: IUser[]
}

const UsersList: FC<Props> = ({ users }) => {
   return (
      <StyledUsersList>
         {users.map(user => (
            <UserItem key={user.id} user={user} />
         ))}
      </StyledUsersList>
   );
}

export default UsersList;