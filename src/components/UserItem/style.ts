import styled from "styled-components";
import { Avatar } from "../styled";

export const StyledUserItem = styled.li`
   padding: 20px 0;

   &:not(:last-child) {
      border-bottom: 1px solid ${props => props.theme.colors.$lightGray};
   }
`;

export const UserItemBody = styled.div`
   display: flex;
   align-items: center;
`;

export const UserItemActions = styled.div`
   display: flex;
   flex-direction: column;
   margin-right: 30px;
`;

export const UserItemAvatar = styled(Avatar)`
   height: 70px;
   width: 70px;
   margin-bottom: 15px;
   border: 1px solid ${props => props.theme.colors.$gray};
   border-radius: 50%;

   img {
      border-radius: 50%;
   }
`;

export const UserItemInfo = styled.div`
   flex: 1 1 auto;
   display: flex;
   flex-direction: column;
`;

export const UserItemName = styled.h4`
   margin-bottom: 5px;
   font-size: 22px;
   font-weight: 600;
   color: ${props => props.theme.colors.$green};
`;

export const UserItemStatus = styled.p`
   font-size: 20px;
   font-weight: 500;
   color: ${props => props.theme.colors.$gray};
`;