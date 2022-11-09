import styled from "styled-components";

export const StyledMessages = styled.div`
   flex: 1 1 auto;
   height: 1px;
   display: flex;
   flex-direction: column;
   overflow-y: auto;

   &:not(:last-child) {
      margin-bottom: 20px;
   }
`;

export const MessagesList = styled.ul`
   display: flex;
   flex-direction: column;
`;