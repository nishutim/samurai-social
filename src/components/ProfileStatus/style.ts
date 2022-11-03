import styled from "styled-components";
import { Button } from "../styled";

export const StyledProfileStatus = styled.div`
   &:not(:last-child) {
      margin-bottom: 40px;
   }
`;

export const Status = styled.div`
   display: flex;
   align-items: center;
`;

export const EditBtn = styled(Button)`
   min-width: 56.88px;
   padding: 5px 10px;
   font-size: 16px;
   margin-right: 10px;
`;

export const StatusText = styled.p`
   border: 1px solid transparent;
   border-left: none;
   font-size: 22px;
`;

export const StyledStatusForm = styled.form`
   display: flex;
   flex-direction: column;
`;

export const StatusFormStatus = styled.p`
   font-size: 16px;
   color: ${props => props.theme.colors.$red};
`;

export const StatusFormInput = styled.input`
   flex: 1 1 100%;
   max-width: 500px;
   min-height: 35px;
   border-bottom: 1px solid ${props => props.theme.colors.$lightGray};
   background-color: transparent;
   font-size: 22px;
   font-weight: 500;
   color: inherit;
`;