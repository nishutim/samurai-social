import { FormikErrors, useFormik } from "formik";
import React, { FC } from "react";
import { SetStatusT } from "../../types";
import { FlexContainer } from "../styled";
import { EditBtn, StyledStatusForm, StatusFormInput, StatusFormStatus } from "./style";

const validate = (values: FormValues) => {
   const errors: FormikErrors<FormValues> = {};
   if (values.statusText.length > 100) {
      errors.statusText = 'Must be 100 characters or less';
   }

   return errors;
}

interface FormValues {
   statusText: string
}

interface Props {
   status: string
   handleSaveBtnClick: (status: string) => void
}

const StatusForm: FC<Props> = ({ status, handleSaveBtnClick }) => {
   const formik = useFormik({
      initialValues: {
         statusText: status
      } as FormValues,
      validate,
      onSubmit: ({ statusText }) => {
         handleSaveBtnClick(statusText);
      }
   });

   return (
      <StyledStatusForm onSubmit={formik.handleSubmit}>
         {formik.errors.statusText && <StatusFormStatus>{formik.errors.statusText}</StatusFormStatus>}
         <FlexContainer>
            <EditBtn type="submit">Save</EditBtn>
            <StatusFormInput
               type="text"
               name="statusText"
               value={formik.values.statusText}
               onChange={formik.handleChange} />
         </FlexContainer>
      </StyledStatusForm>
   );
}

export default StatusForm;