import styled from "styled-components";
import { Avatar } from "../styled";

export const StyledProfileAvatar = styled.div`
   border: 1px solid ${props => props.theme.colors.$lightGray};
   border-radius: 5px;
   align-self: flex-start;
   display: flex;
   flex-direction: column;

   &:not(:last-child) {
      margin-bottom: 40px;
   }
`;

export const ProfileAvatarAvatar = styled(Avatar)`
   height: 300px;
   width: 260px;
   border-bottom: 1px solid ${props => props.theme.colors.$lightGray};
   border-radius: 5px;
   border-bottom-left-radius: 0;
   border-bottom-right-radius: 0;

   img {
      border-radius: 5px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
   }
`;

export const UploadPhotoBtn = styled.label`
   padding: 5px 15px;
   border-radius: 5px;
   border-top-left-radius: 0;
   border-top-right-radius: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #E89F71;
   font-size: 18px;
   color: white;
   transition: all 0.3s ease;

   &:hover {
      background-color: #c48864;
   }

   input {
      display: none;
   }
`;