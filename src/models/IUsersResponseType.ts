import { IUser } from './IUser';

export interface IUsersResponseType {
   items: IUser[]
   totalCount: number
   error: string
}