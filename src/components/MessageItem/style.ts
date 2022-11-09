import styled from "styled-components";
import { Avatar } from "../styled";

export const StyledMessageItem = styled.li`
   display: flex;
   align-items: flex-start;

   &:not(:last-child) {
      margin-bottom: 10px;
   }

   .messageItemLink {
      flex: 0 0 40px;
      margin-right: 15px;
   }
`;

export const MessageItemAvatar = styled(Avatar)`
   height: 40px;
   border: 1px solid ${props => props.theme.colors.$gray};
   border-radius: 50%;

   img {
      border-radius: 50%;
   }
`;

export const MessageItemMessage = styled.div`
   display: flex;
   flex-direction: column;

   h4 {
      margin-bottom: 5px;
      font-size: 18px;
      font-weight: 600;
      color: ${props => props.theme.colors.$green};
   }

   p {

   }
`;