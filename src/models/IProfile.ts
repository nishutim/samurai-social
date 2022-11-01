import { IContacts } from './IContacts';

export interface IProfile {
   fullName: string
   aboutMe: string
   lookingForAJob: boolean
   lookingForAJobDescription: string
   contacts: IContacts
}