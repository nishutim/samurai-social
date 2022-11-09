import React, { FC, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Preloader from "../components/Preloader/Preloader";
import { useAppSelector } from "../hooks/redux";
import { auth_selectIsAuth } from "../store/reducers/auth/selectors";
import { RouteNames } from "./RouteNames";

const HomePage = React.lazy(() => import('../pages/HomePage/HomePage'));
const LoginPage = React.lazy(() => import('../pages/LoginPage/LoginPage'));

const AppRouter: FC = React.memo(() => {
   const isAuth = useAppSelector(auth_selectIsAuth);

   return (
      isAuth ?
         <Suspense fallback={<Preloader />}>
            <Routes>
               <Route path={'*'} element={<HomePage />} />
            </Routes>
         </Suspense>
         :
         <Suspense fallback={<Preloader />}>
            <Routes>
               <Route path={RouteNames.HOME} element={<LoginPage />} />
               <Route path={RouteNames.BAD_URL} element={<Navigate to={RouteNames.HOME} />} />
            </Routes>
         </Suspense>
   );
})

export default AppRouter;