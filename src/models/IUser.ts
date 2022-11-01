import { IPhotos } from './IPhotos';

export interface IUser {
   id: number
   name: string
   status: string
   photos: IPhotos
   followed: boolean
}