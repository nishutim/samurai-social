import React, { FC } from 'react';
import { AuthUserAvatar, StyledAuthUser, UserName } from './style';
import defaultUserAvatar from '../../assets/img/user-icon.png';
import { useAppSelector } from '../../hooks/redux';
import { auth_selectAuthUser, auth_selectLogin } from '../../store/reducers/auth/selectors';

const AuthUser: FC = React.memo(() => {
   const login = useAppSelector(auth_selectLogin);
   const authUserAvatar = useAppSelector(auth_selectAuthUser)?.photos.small;

   const avatarUrl = authUserAvatar || defaultUserAvatar;

   return (
      <StyledAuthUser>
         <AuthUserAvatar>
            <img src={avatarUrl} alt="Avatar" />
         </AuthUserAvatar>
         <UserName>{login}</UserName>
      </StyledAuthUser>
   );
})

export default AuthUser;