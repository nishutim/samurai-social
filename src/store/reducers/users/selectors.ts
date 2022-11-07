import { RootState } from './../../index';

export const users_selectIsLoading = (state: RootState) => state.users.isLoading;
export const users_selectCurrentPageNum = (state: RootState) => state.users.currentPageNum;
export const users_selectPageSize = (state: RootState) => state.users.pageSize;
export const users_selectFilter = (state: RootState) => state.users.filter;
export const users_selectUsers = (state: RootState) => state.users.users;
export const users_selectTotalCount = (state: RootState) => state.users.totalCount;
export const users_selectError = (state: RootState) => state.users.error;