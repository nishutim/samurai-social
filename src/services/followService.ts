import $axios from "../axios";
import { ResponseType } from "../models/ResponseType";

class FollowService {
   static follow = async (id: number) => {
      const { data } = await $axios.post<ResponseType>('/follow/' + id);
      return data;
   }

   static unfollow = async (id: number) => {
      const { data } = await $axios.delete<ResponseType>('/follow/' + id);
      return data;
   }
}

export default FollowService;