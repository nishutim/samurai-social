import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilter } from '../../../models/IFilter';
import { IUser } from './../../../models/IUser';

interface InitialState {
   isLoading: boolean
   currentPageNum: number
   pageSize: number
   filter: IFilter
   users: IUser[] | null
   totalCount: number
   error: string
}

const initialState = {
   isLoading: false,
   currentPageNum: 1,
   pageSize: 10,
   filter: {
      term: '',
      friendsOnly: 'null'
   },
   users: null,
   totalCount: 0,
   error: ''
} as InitialState;

const usersSlice = createSlice({
   name: 'users',
   initialState,
   reducers: {
      fetchUsersStarted: (state) => {
         state.isLoading = true
      },
      fetchUsersSuccess: (state, action: PayloadAction<{ items: IUser[], totalCount: number }>) => {
         state.isLoading = false
         state.users = action.payload.items
         state.totalCount = action.payload.totalCount
         state.error = ''
      },
      fetchUsersFail: (state, action: PayloadAction<string>) => {
         state.isLoading = false
         state.error = action.payload
      },
      setCurrentPageNum: (state, action: PayloadAction<number>) => {
         state.currentPageNum = action.payload
      },
      setFilter: (state, action: PayloadAction<IFilter>) => {
         state.filter = action.payload
      },
      followUserSuccess: (state, action: PayloadAction<number>) => {
         state.users = state.users && state.users.map(user => {
            if (user.id === action.payload) {
               user.followed = true
            }
            return user;
         })
      },
      unfollowUserSuccess: (state, action: PayloadAction<number>) => {
         state.users = state.users && state.users.map(user => {
            if (user.id === action.payload) {
               user.followed = false
            }
            return user;
         })
      },
   }
});

export const UsersActions = usersSlice.actions;

export default usersSlice.reducer;