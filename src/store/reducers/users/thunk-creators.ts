import { IFilter } from '../../../models/IFilter';
import { AppDispatch } from './../../index';
import { UsersActions } from '.';
import UsersService from '../../../services/usersService';
import FollowService from '../../../services/followService';
import { ResultCodes } from '../../../models/ResultCodes';

export const fetchUsers = (pageNum: number, pageSize: number, filter: IFilter) => async (dispatch: AppDispatch) => {
   dispatch(UsersActions.fetchUsersStarted());
   try {
      const { error, ...data } = await UsersService.fetchUsers(pageNum, pageSize, filter);
      if (!error) {
         dispatch(UsersActions.fetchUsersSuccess(data));
      } else {
         dispatch(UsersActions.fetchUsersFail(error));
      }
   } catch (e: any) {
      dispatch(UsersActions.fetchUsersFail(e.message));
   }
}

export const followUser = (id: number) => async (dispatch: AppDispatch) => {
   try {
      const data = await FollowService.follow(id);
      if (data.resultCode === ResultCodes.SUCCESS) {
         dispatch(UsersActions.followUserSuccess(id));
      } else {
         alert(data.messages[0]);
      }
   } catch (e: any) {
      alert(e.message);
   }
}

export const unfollowUser = (id: number) => async (dispatch: AppDispatch) => {
   try {
      const data = await FollowService.unfollow(id);
      if (data.resultCode === ResultCodes.SUCCESS) {
         dispatch(UsersActions.unfollowUserSuccess(id));
      } else {
         alert(data.messages[0]);
      }
   } catch (e: any) {
      alert(e.message);
   }
}