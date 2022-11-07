import $axios from "../axios";
import { IFilter } from "../models/IFilter";
import { IUsersResponseType } from './../models/IUsersResponseType';

class UsersService {
   static fetchUsers = async (pageNumber: number = 1, limit: number = 10, filter: IFilter) => {
      const term = filter.term ? `&term=${filter.term}` : '';
      const friend = filter.friendsOnly !== 'null' ? `&friend=${filter.friendsOnly}` : '';

      const { data } = await $axios.get<IUsersResponseType>(`/users?count=${limit}&page=${pageNumber}` + term + friend);
      return data;
   }
}

export default UsersService;