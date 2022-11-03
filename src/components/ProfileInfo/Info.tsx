import React, { FC } from "react";
import { IContacts } from "../../models/IContacts";
import { IProfileData } from "../../models/IProfileData";
import { Button } from "../styled";
import { InfoListItem, StyledInfo, InfoList, ContactsList, ContactsListItem } from "./style";

interface Props {
   profile: IProfileData
   isOwner: boolean
   handleEditBtnClick: () => void
}

const Info: FC<Props> = ({ profile, isOwner, handleEditBtnClick }) => {
   const { fullName, aboutMe, lookingForAJob, lookingForAJobDescription, contacts } = profile;

   return (
      <StyledInfo>
         {isOwner &&
            <Button
               alignSelf="flex-start"
               onClick={handleEditBtnClick}
            >
               Edit profile
            </Button>}
         <InfoList>
            <InfoListItem><span>Full name:</span> {fullName}</InfoListItem>
            <InfoListItem><span>About me:</span> {aboutMe}</InfoListItem>
            <InfoListItem><span>Looking for a job:</span> {lookingForAJob ? 'Yes' : 'No'}</InfoListItem>
            <InfoListItem><span>Looking for a job description:</span> {lookingForAJobDescription}</InfoListItem>
            <InfoListItem><span>Contacts:</span></InfoListItem>
            <ContactsList>
               {Object.keys(contacts).map(contact => (
                  <ContactsListItem key={contact}><span>{contact}:</span> {contacts[contact as keyof IContacts]}</ContactsListItem>
               ))}
            </ContactsList>
         </InfoList>
      </StyledInfo>
   );
}

export default Info;