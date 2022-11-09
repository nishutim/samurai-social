import React, { FC, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
   users_selectIsLoading,
   users_selectCurrentPageNum,
   users_selectFilter,
   users_selectPageSize,
   users_selectUsers,
   users_selectTotalCount,
   users_selectError
} from "../../store/reducers/users/selectors";
import { UsersActions } from "../../store/reducers/users";
import { fetchUsers } from "../../store/reducers/users/thunk-creators";
import PagePreloader from "../../components/PagePreloader/PagePreloader";
import Users from "../../components/Users/Users";
import GlobalError from "../../components/GlobalError/GlobalError";

const UsersPage: FC = () => {
   const isLoading = useAppSelector(users_selectIsLoading);
   const currentPageNum = useAppSelector(users_selectCurrentPageNum);
   const pageSize = useAppSelector(users_selectPageSize);
   const filter = useAppSelector(users_selectFilter);
   const users = useAppSelector(users_selectUsers);
   const totalCount = useAppSelector(users_selectTotalCount);
   const error = useAppSelector(users_selectError);

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
   if (error) return <GlobalError error={error} onPage />

   return (
      <Users
         isLoading={isLoading}
         currentPageNum={currentPageNum}
         pageSize={pageSize}
         filter={filter}
         users={users}
         totalCount={totalCount}
         setSearchParams={setSearchParams} />
   );
}

export default UsersPage;