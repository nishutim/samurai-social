import React, { FC } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import { StyledLoginPage } from "./style";

const LoginPage: FC = () => {
   return (
      <StyledLoginPage>
         <LoginForm />
      </StyledLoginPage>
   );
}

export default LoginPage;