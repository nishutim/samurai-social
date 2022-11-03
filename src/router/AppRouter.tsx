import React, { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import { auth_selectIsAuth } from "../store/reducers/auth/selectors";
import { RouteNames } from "./RouteNames";

import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";

const AppRouter: FC = () => {
   const isAuth = useAppSelector(auth_selectIsAuth);

   return (
      isAuth ?
         <Routes>
            <Route path={'*'} element={<HomePage />} />
         </Routes>
         :
         <Routes>
            <Route path={RouteNames.HOME} element={<LoginPage />} />
            <Route path={RouteNames.BAD_URL} element={<Navigate to={RouteNames.HOME} />} />
         </Routes>
   );
}

export default AppRouter;