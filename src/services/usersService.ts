import $axios from "../axios";
import { IUsersResponseType } from './../models/IUsersResponseType';

class UsersService {
   static fetchUsers = async (pageNumber: number = 1, limit: number = 10, search: string = '', friendsOnly: boolean | null = null) => {
      const count = `count=${limit}`;
      const page = `page=${pageNumber}`;
      const term = `term='${search}`;
      const friend = `friend=${friendsOnly}`;
      const { data } = await $axios.get<IUsersResponseType>('/users?' + `${count}&${page}&${term}&${friend}`);
      return data;
   }
}

export default UsersService;