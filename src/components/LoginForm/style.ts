import styled, { ITheme } from "styled-components";

interface IProps {
   theme?: ITheme
}

export const StyledLoginForm = styled.form<IProps>`
   min-width: 450px;
   padding: 25px;
   border: 1px solid ${props => props.theme.colors.$lightGray};
   border-radius: 10px;
   display: flex;
   flex-direction: column;
   background-color: ${props => props.theme.colors.$darkCremaBG};
`;

export const LoginFormTitle = styled.h1`
   font-size: 28px;
   text-align: center;

   &:not(:last-child) {
      margin-bottom: 20px;
   }
`;

export const LoginFormStatus = styled.h3`
   font-size: 18px;
   color: ${props => props.theme.colors.$red};
   text-align: center;

   &:not(:last-child) {
      margin-bottom: 10px;
   }
`;

export const LoginFormBody = styled.div`
   display: flex;
   flex-direction: column;
   gap: 20px;
`;

export const LoginFormField = styled.div`
   display: flex;
   flex-direction: column;
`;

export const LoginFormFieldMessage = styled.h4`
   font-size: 16px;
   padding-left: 10px;
   color: ${props => props.theme.colors.$red};

   &:not(:last-child) {
      margin-bottom: 5px;
   }
`;

export const LoginFormInput = styled.input`
   width: 100%;
   padding: 10px;
   border: 1px solid ${props => props.theme.colors.$lightGray};
   border-radius: 10px;
   font-size: 16px;
   color: ${props => props.theme.colors.$gray};
   transition: all 0.3s ease;

   &:focus {
      border-color: ${props => props.theme.colors.$orange};
   }
`;

export const LoginFormCaptcha = styled(LoginFormInput)`
   font-size: 24px;
`;

export const RegistrationLink = styled.p`

   a {
      color: ${props => props.theme.colors.$orange};
      transition: all 0.3s ease;

      &:hover {
         color: ${props => props.theme.colors.$orangeHover};
      }
   }
`;