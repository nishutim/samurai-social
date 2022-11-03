import styled from "styled-components";

export const StyledProfileInfo = styled.div`
   display: flex;
   flex-direction: column;
`;

export const StyledInfo = styled.div`
   display: flex;
   flex-direction: column;
`;

export const InfoList = styled.ul`
   display: flex;
   flex-direction: column;
   gap: 5px;

   &:not(:first-child) {
      margin-top: 20px;
   }
`;

export const InfoListItem = styled.li`
   font-size: 20px;
   font-weight: 500;
   color: ${props => props.theme.colors.$gray};

   span {
      font-weight: 600;
      color: ${props => props.theme.colors.$black};
   }
`;

export const ContactsList = styled.ul`
   padding-left: 30px;
   display: flex;
   flex-direction: column;
`;

export const ContactsListItem = styled.li`
   font-size: 18px;
   color: ${props => props.theme.colors.$orange};

   span {
      color: ${props => props.theme.colors.$black};
   }
`;

export const StyledInfoForm = styled.form`
   display: flex;
   flex-direction: column;
`;

export const InfoFormStatus = styled.p`
   margin-bottom: 5px;
   color: ${props => props.theme.colors.$red};
`;

export const FieldList = styled(InfoList)`
   &:not(:first-child) {
      margin-top: 0;
   }
`;

export const FieldListItem = styled(InfoListItem)`
   display: flex;
   flex-direction: column;

   span {
      flex: 0 0 auto;
      margin-right: 5px;
   }

   input {
      width: 100%;
      background-color: transparent;
      font-size: 20px;
      font-weight: 500;
      color: ${props => props.theme.colors.$gray}
   }

   input[type="checkbox"] {
      width: auto;
   }
`;

export const ContactsFieldList = styled(ContactsList)`

`;

export const ContactsFieldListItem = styled(FieldListItem)`
   font-size: 18px;

   span {
      font-weight: 500;
   }

   input {
      font-size: 18px;
      color: ${props => props.theme.colors.$orange}
   }
`;

export const ErrorMessage = styled.p`
   font-size: 16px;
   color: ${props => props.theme.colors.$red}
`;