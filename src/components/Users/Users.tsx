import React, { FC, useState, useEffect } from "react";
import { IUser } from "../../models/IUser";
import { IFilter } from "../../models/IFilter";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { users_selectCurrentPageNum, users_selectFilter, users_selectIsLoading, users_selectPageSize, users_selectTotalCount } from "../../store/reducers/users/selectors";
import { UsersActions } from "../../store/reducers/users";
import { fetchUsers, followUser, unfollowUser } from "../../store/reducers/users/thunk-creators";
import { Page, PageBody } from "../../components/styled/Page";
import UsersList from "../../components/UsersList/UsersList";
import Paginator from "../Paginator/Paginator";
import PagePreloader from "../PagePreloader/PagePreloader";
import UsersFilter from "../UsersFilter/UsersFilter";

interface Props {
   users: IUser[]
   setSearchParams: Function
}

const Users: FC<Props> = ({ users, setSearchParams }) => {
   const isLoading = useAppSelector(users_selectIsLoading);
   const totalCount = useAppSelector(users_selectTotalCount);
   const currentPageNum = useAppSelector(users_selectCurrentPageNum);
   const pageSize = useAppSelector(users_selectPageSize);
   const filter = useAppSelector(users_selectFilter);

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

   const handlePageChange = (pageNum: number) => {
      dispatch(UsersActions.setCurrentPageNum(pageNum));
      dispatch(fetchUsers(pageNum, pageSize, filter));
   }

   const handlePrevBtnClick = (pageNum: number) => {
      setCurrentPortionNum(portion => portion - 1);
      handlePageChange(pageNum);
   }

   const handleNextBtnClick = (pageNum: number) => {
      setCurrentPortionNum(portion => portion + 1);
      handlePageChange(pageNum);
   }

   const findUsers = (filter: IFilter) => {
      dispatch(UsersActions.setCurrentPageNum(1));
      setCurrentPortionNum(1);
      dispatch(UsersActions.setFilter(filter));
      dispatch(fetchUsers(1, pageSize, filter));
   }

   const toggleFollowing = async (id: number, followed: boolean) => {
      const action = followed ? unfollowUser : followUser;
      await dispatch(action(id));
   }

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