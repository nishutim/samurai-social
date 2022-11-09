import React, { FC } from "react";
import { IUser } from "../../models/IUser";
import UserItem from "../UserItem/UserItem";
import { StyledUsersList } from "./style";

interface Props {
   users: IUser[]
   toggleFollowing: (id: number, followed: boolean) => Promise<void>
}

const UsersList: FC<Props> = React.memo(({ users, toggleFollowing }) => {
   return (
      <StyledUsersList>
         {users.map(user => (
            <UserItem
               key={user.id}
               user={user}
               toggleFollowing={toggleFollowing} />
         ))}
      </StyledUsersList>
   );
})

export default UsersList;