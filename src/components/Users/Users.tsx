import React, { FC, useState, useEffect, useCallback } from "react";
import { IUser } from "../../models/IUser";
import { IFilter } from "../../models/IFilter";
import { useAppDispatch } from "../../hooks/redux";
import { UsersActions } from "../../store/reducers/users";
import { fetchUsers, followUser, unfollowUser } from "../../store/reducers/users/thunk-creators";
import { Page, PageBody } from "../../components/styled/Page";
import UsersList from "../../components/UsersList/UsersList";
import Paginator from "../Paginator/Paginator";
import PagePreloader from "../PagePreloader/PagePreloader";
import UsersFilter from "../UsersFilter/UsersFilter";

interface Props {
   isLoading: boolean
   currentPageNum: number
   pageSize: number
   filter: IFilter
   users: IUser[]
   totalCount: number
   setSearchParams: Function
}

const Users: FC<Props> = ({ isLoading, currentPageNum, pageSize, filter, users, totalCount, setSearchParams }) => {
   const [currentPortionNum, setCurrentPortionNum] = useState(1);

   const dispatch = useAppDispatch();

   useEffect(() => {
      setCurrentPortionNum(Math.ceil(currentPageNum / pageSize));
   }, []);

   useEffect(() => {
      const searchParams: { page?: string, term?: string, friend?: string } = {};

      if (currentPageNum !== 1) searchParams.page = String(currentPageNum);
      if (filter.term) searchParams.term = filter.term;
      if (filter.friendsOnly !== 'null') searchParams.friend = filter.friendsOnly;

      setSearchParams(searchParams);

   }, [currentPageNum, filter]);

   const handlePageChange = useCallback((pageNum: number) => {
      dispatch(UsersActions.setCurrentPageNum(pageNum));
      dispatch(fetchUsers(pageNum, pageSize, filter));
   }, [pageSize, filter])

   const handlePrevBtnClick = useCallback((pageNum: number) => {
      setCurrentPortionNum(currentPortionNum => currentPortionNum - 1);
      handlePageChange(pageNum);
   }, [handlePageChange])

   const handleNextBtnClick = useCallback((pageNum: number) => {
      setCurrentPortionNum(currentPortionNum => currentPortionNum + 1);
      handlePageChange(pageNum);
   }, [handlePageChange])

   const findUsers = useCallback(async (newFilter: IFilter) => {
      console.log(filter.term !== newFilter.term || filter.friendsOnly !== newFilter.friendsOnly);

      if (filter.term !== newFilter.term || filter.friendsOnly !== newFilter.friendsOnly) {
         dispatch(UsersActions.setCurrentPageNum(1));
         setCurrentPortionNum(1);
         dispatch(UsersActions.setFilter(newFilter));
         await dispatch(fetchUsers(1, pageSize, newFilter));
      }
   }, [pageSize, filter])

   const toggleFollowing = useCallback(async (id: number, followed: boolean) => {
      const action = followed ? unfollowUser : followUser;
      await dispatch(action(id));
   }, [])

   return (
      <Page>
         <PageBody>
            <UsersFilter
               handleSubmit={findUsers}
               filter={filter} />
            <Paginator
               totalCount={totalCount}
               currentPageNum={currentPageNum}
               currentPortionNum={currentPortionNum}
               onPageChange={handlePageChange}
               onPrevBtnClick={handlePrevBtnClick}
               onNextBtnClick={handleNextBtnClick} />
            {isLoading ?
               <PagePreloader />
               :
               <UsersList users={users} toggleFollowing={toggleFollowing} />
            }
            <Paginator
               totalCount={totalCount}
               currentPageNum={currentPageNum}
               currentPortionNum={currentPortionNum}
               onPageChange={handlePageChange}
               onPrevBtnClick={handlePrevBtnClick}
               onNextBtnClick={handleNextBtnClick} />
         </PageBody>
      </Page>
   );
}

export default Users;