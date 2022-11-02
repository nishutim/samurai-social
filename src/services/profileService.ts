import { IPhotos } from './../models/IPhotos';
import $axios from "../axios";
import { IProfile } from "../models/IProfile";
import { ResponseType } from "../models/ResponseType";
import { IProfileData } from '../models/IProfileData';

class ProfileService {
   static updateProfile = async (profile: IProfile) => {
      const { data } = await $axios.put<ResponseType>('/profile', profile);
      return data;
   }

   static updatePhoto = async (photo: File) => {
      const formData = new FormData();
      formData.append('image', photo);
      const { data } = await $axios.put<ResponseType<{ photos: IPhotos }>>('profile/photo', formData, {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      });
      return data;
   }

   static updateStatus = async (status: string) => {
      const { data } = await $axios.put<ResponseType>('/status', status);
      return data;
   }

   static fetchStatus = async (id: number) => {
      const { data } = await $axios.get<string>('/profile/status/' + id);
      return data;
   }

   static fetchProfile = async (id: number) => {
      const { data } = await $axios.get<IProfileData>('/profile/' + id);
      return data;
   }
}

export default ProfileService;