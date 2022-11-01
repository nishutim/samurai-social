import React, { FC } from "react";
import { FormikErrors, useFormik } from "formik";
import { Button } from "../styled/Button";
import { FlexContainer } from "../styled/FlexContainer";
import { LoginFormBody, LoginFormField, LoginFormFieldMessage, LoginFormInput, LoginFormStatus, LoginFormTitle, RegistrationLink, StyledLoginForm } from "./style";

const validate = (values: InitialValues) => {
   const errors: FormikErrors<InitialValues> = {};
   if (!values.email) {
      errors.email = 'Required';
   } else if (values.email.length > 20) {
      errors.email = 'Must be 20 characters or less';
   }

   if (!values.password) {
      errors.password = 'Required';
   }

   if (!values.captcha) {
      errors.captcha = 'Required';
   }

   return errors;
};

interface InitialValues {
   email: string
   password: string
   rememberMe: boolean
   captcha: string
}

const LoginForm: FC<{}> = () => {
   const formik = useFormik({
      initialValues: {
         email: '',
         password: '',
         rememberMe: false,
         captcha: ''
      },
      validate,
      onSubmit: (values) => {
         console.log(values);
      }
   })

   return (
      <StyledLoginForm onSubmit={formik.handleSubmit}>
         <LoginFormTitle>Authorisation</LoginFormTitle>
         {formik.status && <LoginFormStatus>Form status</LoginFormStatus>}
         <LoginFormBody>
            <LoginFormField>
               {formik.errors.email && <LoginFormFieldMessage>{formik.errors.email}</LoginFormFieldMessage>}
               <LoginFormInput
                  type={'text'}
                  name={'email'}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder={'Enter your email...'} />
            </LoginFormField>
            <LoginFormField>
               {formik.errors.password && <LoginFormFieldMessage>{formik.errors.password}</LoginFormFieldMessage>}
               <LoginFormInput
                  type={'password'}
                  name={'password'}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  placeholder={'Enter your password...'} />
            </LoginFormField>
            <FlexContainer
               justify="space-between"
               align="center"
            >
               <RegistrationLink>
                  Still don't have an account? <a href="https://social-network.samuraijs.com/" target={'_blank'}>Sign up!</a>
               </RegistrationLink>
               <Button type="submit">Sing in</Button>
            </FlexContainer>
         </LoginFormBody>
      </StyledLoginForm>
   );
}

export default LoginForm;