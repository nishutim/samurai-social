import styled from "styled-components";
import { Avatar } from "../styled";

export const StyledAuthUser = styled.div`
   display: flex;
   align-items: center;
`;

export const AuthUserAvatar = styled(Avatar)`
   width: 40px;
   height: 40px;
   border: 1px solid ${props => props.theme.$lightGray};
   border-radius: 50%;

   img {
      border-radius: 50%;
   }

   &:not(:last-child) {
      margin-right: 10px;
   }
`;

export const UserName = styled.p`
   font-size: 18px;
   font-weight: 600;
`;