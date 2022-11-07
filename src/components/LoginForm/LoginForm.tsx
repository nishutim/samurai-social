import React, { FC } from "react";
import { FormikErrors, useFormik } from "formik";
import { SetStatusT } from "../../types";
import { Button, FlexContainer } from "../styled";
import {
   StyledLoginForm,
   LoginFormTitle,
   LoginFormStatus,
   LoginFormBody,
   LoginFormField,
   LoginFormFieldMessage,
   LoginFormInput,
   LoginFormCaptcha,
   RegistrationLink,
   LoginFormCheckbox
} from "./style";

interface Props {
   isLoading: boolean
   captchaUrl: string
   handleLogin: (values: FormValues, setStatus: SetStatusT) => void
}

export interface FormValues {
   email: string
   password: string
   rememberMe: boolean
   captcha: string
}

const LoginForm: FC<Props> = ({ isLoading, captchaUrl, handleLogin }) => {
   const validate = (values: FormValues) => {
      const errors: FormikErrors<FormValues> = {};
      if (!values.email) {
         errors.email = 'Required';
      } else if (values.email.length > 40) {
         errors.email = 'Must be 40 characters or less';
      }

      if (!values.password) {
         errors.password = 'Required';
      }

      if (captchaUrl && !values.captcha) {
         errors.captcha = 'Required';
      }

      return errors;
   }

   const formik = useFormik({
      initialValues: {
         email: '',
         password: '',
         rememberMe: false,
         captcha: ''
      } as FormValues,
      validate,
      onSubmit: (values, { setStatus }) => {
         handleLogin(values, setStatus);
      }
   })

   return (
      <StyledLoginForm onSubmit={formik.handleSubmit}>
         <LoginFormTitle>Authorisation</LoginFormTitle>
         {formik.status && <LoginFormStatus>{formik.status}</LoginFormStatus>}
         <LoginFormBody>
            <LoginFormField>
               {formik.errors.email && formik.touched.email && <LoginFormFieldMessage>{formik.errors.email}</LoginFormFieldMessage>}
               <LoginFormInput
                  type={'text'}
                  name={'email'}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder={'Enter your email...'} />
            </LoginFormField>
            <LoginFormField>
               {formik.errors.password && formik.touched.password && <LoginFormFieldMessage>{formik.errors.password}</LoginFormFieldMessage>}
               <LoginFormInput
                  type={'password'}
                  name={'password'}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  placeholder={'Enter your password...'} />
            </LoginFormField>
            <LoginFormField>
               <LoginFormCheckbox>
                  <input type="checkbox" name="rememberMe" checked={formik.values.rememberMe} onChange={formik.handleChange} />
                  Remember me
               </LoginFormCheckbox>
            </LoginFormField>
            {captchaUrl &&
               <LoginFormField>
                  {formik.errors.captcha && formik.touched.captcha && <LoginFormFieldMessage>{formik.errors.captcha}</LoginFormFieldMessage>}
                  <FlexContainer>
                     <img src={captchaUrl} alt="" />
                     <LoginFormCaptcha
                        type={'text'}
                        name={'captcha'}
                        value={formik.values.captcha}
                        onChange={formik.handleChange}
                        placeholder={'Enter captcha'} />
                  </FlexContainer>
               </LoginFormField>
            }
            <FlexContainer
               justify="space-between"
               align="center"
            >
               <RegistrationLink>
                  Still don't have an account? <a href="https://social-network.samuraijs.com/" target={'_blank'}>Sign up!</a>
               </RegistrationLink>
               <Button type="submit" disabled={isLoading}>Sing in</Button>
            </FlexContainer>
         </LoginFormBody>
      </StyledLoginForm>
   );
}

export default LoginForm;