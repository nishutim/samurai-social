import { FormikErrors, useFormik } from "formik";
import React, { FC, useState } from "react";
import { IContacts } from "../../models/IContacts";
import { IProfile } from "../../models/IProfile";
import { IProfileData } from "../../models/IProfileData";
import { SetStatusT } from "../../types";
import { Button, FlexContainer } from "../styled";
import {
   ContactsFieldList,
   ContactsFieldListItem,
   FieldList,
   FieldListItem,
   InfoFormStatus,
   StyledInfoForm,
   ErrorMessage
} from "./style";

const validate = (values: FormValues) => {
   const errors: FormikErrors<FormValues> = {};
   if (values.fullName.length > 50) {
      errors.fullName = 'Must be 50 characters or less';
   }

   if (values.aboutMe.length > 100) {
      errors.aboutMe = 'Must be 100 characters or less';
   }

   if (values.lookingForAJobDescription.length > 150) {
      errors.lookingForAJobDescription = 'Must be 150 characters or less';
   }

   Object.keys(values.contacts).map(contact => {
      if (values.contacts[contact as keyof IContacts].length > 40) {
         if (!errors.contacts) {
            errors.contacts = {};
         }
         errors.contacts[contact as keyof IContacts] = 'Must be 40 characters or less';
      }
   });

   return errors;
}

interface FormValues {
   fullName: string
   aboutMe: string
   lookingForAJob: boolean
   lookingForAJobDescription: string
   contacts: IContacts
}

interface Props {
   profile: IProfileData
   handleSaveBtnClick: (profile: IProfile, setStatus: SetStatusT) => void
}

const InfoForm: FC<Props> = React.memo(({ profile, handleSaveBtnClick }) => {
   const [disableBtn, setDisableBtn] = useState(false);

   const formik = useFormik({
      initialValues: {
         fullName: profile.fullName,
         aboutMe: profile.aboutMe,
         lookingForAJob: profile.lookingForAJob,
         lookingForAJobDescription: profile.lookingForAJobDescription,
         contacts: profile.contacts
      } as FormValues,
      validate,
      onSubmit: async (values, { setStatus }) => {
         setDisableBtn(true);
         await handleSaveBtnClick(values, setStatus);
         setDisableBtn(false);
      }
   })

   return (
      <StyledInfoForm onSubmit={formik.handleSubmit}>
         <Button disabled={disableBtn} type="submit" alignSelf="flex-start" mb="20px">Save profile</Button>
         {formik.status && <InfoFormStatus>{formik.status}</InfoFormStatus>}
         <FieldList>
            <FieldListItem>
               {formik.errors.fullName && <ErrorMessage>{formik.errors.fullName}</ErrorMessage>}
               <FlexContainer>
                  <span>Full name:</span>
                  <input
                     type="text"
                     name="fullName"
                     value={formik.values.fullName}
                     onChange={formik.handleChange} />
               </FlexContainer>
            </FieldListItem>
            <FieldListItem>
               {formik.errors.aboutMe && <ErrorMessage>{formik.errors.aboutMe}</ErrorMessage>}
               <FlexContainer>
                  <span>About me:</span>
                  <input
                     type="text"
                     name="aboutMe"
                     value={formik.values.aboutMe}
                     onChange={formik.handleChange} />
               </FlexContainer>
            </FieldListItem>
            <FieldListItem>
               <FlexContainer>
                  <span>Looking for a job:</span>
                  <input
                     type="checkbox"
                     name="lookingForAJob"
                     checked={formik.values.lookingForAJob}
                     onChange={formik.handleChange} />
               </FlexContainer>
            </FieldListItem>
            <FieldListItem>
               {formik.errors.lookingForAJobDescription && <ErrorMessage>{formik.errors.lookingForAJobDescription}</ErrorMessage>}
               <FlexContainer>
                  <span>Looking for a job description:</span>
                  <input
                     type="text"
                     name="lookingForAJobDescription"
                     value={formik.values.lookingForAJobDescription}
                     onChange={formik.handleChange} />
               </FlexContainer>
            </FieldListItem>
            <FieldListItem><span>Contacts:</span></FieldListItem>
            <ContactsFieldList>
               {Object.keys(formik.values.contacts).map(contact => (
                  <ContactsFieldListItem key={contact}>
                     {formik.errors.contacts && formik.errors.contacts[contact as keyof IContacts] &&
                        <ErrorMessage>{formik.errors.contacts[contact as keyof IContacts]}</ErrorMessage>}
                     <FlexContainer>
                        <span>{contact}:</span>
                        <input
                           type="text"
                           name={`contacts.${contact}`}
                           value={formik.values.contacts[contact as keyof IContacts]}
                           onChange={formik.handleChange} />
                     </FlexContainer>
                  </ContactsFieldListItem>
               ))}
            </ContactsFieldList>
         </FieldList>
      </StyledInfoForm>
   );
})

export default InfoForm;