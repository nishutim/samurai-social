import React, { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { RouteNames } from "./RouteNames";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import UsersPage from "../pages/UsersPage/UsersPage";
import ChatPage from "../pages/ChatPage/ChatPage";

const ContentRouter: FC = () => {
   return (
      <Routes>
         <Route path={RouteNames.HOME} element={<ProfilePage />} />
         <Route path={RouteNames.PROFILE}>
            <Route index element={<ProfilePage />} />
            <Route path=":id" element={<ProfilePage />} />
         </Route>
         <Route path={RouteNames.USERS} element={<UsersPage />} />
         <Route path={RouteNames.CHAT} element={<ChatPage />} />
         <Route path={RouteNames.BAD_URL} element={<Navigate to={RouteNames.HOME} />} />
      </Routes>
   );
}

export default ContentRouter;