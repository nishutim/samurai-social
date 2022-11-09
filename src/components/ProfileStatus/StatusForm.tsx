import React, { FC, useState } from "react";
import { FormikErrors, useFormik } from "formik";
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

const StatusForm: FC<Props> = React.memo(({ status, handleSaveBtnClick }) => {
   const [disableBtn, setDisableBtn] = useState(false);

   const formik = useFormik({
      initialValues: {
         statusText: status
      } as FormValues,
      validate,
      onSubmit: async ({ statusText }) => {
         setDisableBtn(true);
         await handleSaveBtnClick(statusText);
         setDisableBtn(false);
      }
   });

   return (
      <StyledStatusForm onSubmit={formik.handleSubmit}>
         {formik.errors.statusText && <StatusFormStatus>{formik.errors.statusText}</StatusFormStatus>}
         <FlexContainer>
            <EditBtn disabled={disableBtn} type="submit">Save</EditBtn>
            <StatusFormInput
               type="text"
               name="statusText"
               value={formik.values.statusText}
               onChange={formik.handleChange} />
         </FlexContainer>
      </StyledStatusForm>
   );
})

export default StatusForm;