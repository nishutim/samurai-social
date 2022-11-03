import React, { FC } from "react";
import LoginForm, { FormValues } from "../../components/LoginForm/LoginForm";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { auth_selectCaptcha } from "../../store/reducers/auth/selectors";
import { login } from "../../store/reducers/auth/thunk-creators";
import { SetStatusT } from "../../types";
import { StyledLoginPage } from "./style";

const LoginPage: FC = () => {
   const captchaUrl = useAppSelector(auth_selectCaptcha);

   const dispatch = useAppDispatch();

   const handleLogin = (values: FormValues, setStatus: SetStatusT) => {
      const { email, password, rememberMe, captcha } = values;
      dispatch(login(email, password, rememberMe, captcha, setStatus));
   }

   return (
      <StyledLoginPage>
         <LoginForm
            captchaUrl={captchaUrl}
            handleLogin={handleLogin} />
      </StyledLoginPage>
   );
}

export default LoginPage;