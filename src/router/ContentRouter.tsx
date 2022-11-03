import React, { FC, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { RouteNames } from "./RouteNames";
import PagePreloader from "../components/PagePreloader/PagePreloader";

const ProfilePage = React.lazy(() => import("../pages/ProfilePage/ProfilePage"));
const UsersPage = React.lazy(() => import("../pages/UsersPage/UsersPage"));
const ChatPage = React.lazy(() => import("../pages/ChatPage/ChatPage"));

const ContentRouter: FC = () => {
   return (
      <Suspense fallback={<PagePreloader />}>
         <Routes>
            <Route path={RouteNames.HOME} element={<Navigate to={RouteNames.PROFILE} />} />
            <Route path={RouteNames.PROFILE}>
               <Route index element={<ProfilePage />} />
               <Route path=":id" element={<ProfilePage />} />
            </Route>
            <Route path={RouteNames.USERS} element={<UsersPage />} />
            <Route path={RouteNames.CHAT} element={<ChatPage />} />
            <Route path={RouteNames.BAD_URL} element={<Navigate to={RouteNames.HOME} />} />
         </Routes>
      </Suspense>
   );
}

export default ContentRouter;