import { IPhotos } from './IPhotos';

export interface IUser {
   id: number
   name: string
   status: string | null
   uniqueUrlName: string | null
   photos: IPhotos
   followed: boolean
}