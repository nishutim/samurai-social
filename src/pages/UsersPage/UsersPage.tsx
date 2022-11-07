import React, { FC, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
   users_selectCurrentPageNum,
   users_selectFilter,
   users_selectPageSize,
   users_selectUsers
} from "../../store/reducers/users/selectors";
import { UsersActions } from "../../store/reducers/users";
import { fetchUsers } from "../../store/reducers/users/thunk-creators";
import PagePreloader from "../../components/PagePreloader/PagePreloader";
import Users from "../../components/Users/Users";

const UsersPage: FC = () => {
   const currentPageNum = useAppSelector(users_selectCurrentPageNum);
   const pageSize = useAppSelector(users_selectPageSize);
   const filter = useAppSelector(users_selectFilter);
   const users = useAppSelector(users_selectUsers);

   const [searchParams, setSearchParams] = useSearchParams();

   const dispatch = useAppDispatch();

   useEffect(() => {
      const page = searchParams.get('page');
      const term = searchParams.get('term');
      const friend = searchParams.get('friend');

      let actualPageNum = Number(page) || currentPageNum;
      let actualFilter = filter;

      if (term) actualFilter = { ...actualFilter, term };
      if (friend) actualFilter = { ...actualFilter, friendsOnly: friend as 'null' | 'true' | 'false' };

      dispatch(UsersActions.setCurrentPageNum(actualPageNum));
      dispatch(UsersActions.setFilter(actualFilter));
      dispatch(fetchUsers(actualPageNum, pageSize, actualFilter));
   }, []);

   if (!users) return <PagePreloader />

   return (
      <Users
         users={users}
         setSearchParams={setSearchParams} />
   );
}

export default UsersPage;