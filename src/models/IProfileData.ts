import { IPhotos } from './IPhotos';
import { IProfile } from './IProfile';

export interface IProfileData extends IProfile {
   photos: IPhotos
}