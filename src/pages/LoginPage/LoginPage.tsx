import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { auth_selectCaptcha, auth_selectIsLoading } from "../../store/reducers/auth/selectors";
import LoginForm, { FormValues } from "../../components/LoginForm/LoginForm";
import { SetStatusT } from "../../types";
import { login } from "../../store/reducers/auth/thunk-creators";
import { StyledLoginPage } from "./style";

const LoginPage: FC = () => {
   const isLoading = useAppSelector(auth_selectIsLoading);
   const captchaUrl = useAppSelector(auth_selectCaptcha);

   const dispatch = useAppDispatch();

   const handleLogin = (values: FormValues, setStatus: SetStatusT) => {
      const { email, password, rememberMe, captcha } = values;
      dispatch(login(email, password, rememberMe, captcha, setStatus));
   }

   return (
      <StyledLoginPage>
         <LoginForm
            isLoading={isLoading}
            captchaUrl={captchaUrl}
            handleLogin={handleLogin} />
      </StyledLoginPage>
   );
}

export default LoginPage;