import React, { FC } from "react";
import { Page, PageBody } from "../../components/styled/Page";
import UsersList from "../../components/UsersList/UsersList";
import { IUser } from "../../models/IUser";

const UsersPage: FC = () => {
   const users = [
      {
         name: "skyrim_dlya_nordov",
         id: 26547,
         uniqueUrlName: null,
         photos: {
            small: null,
            large: null
         },
         status: null,
         followed: false
      },
      {
         name: "johnyone",
         id: 26546,
         uniqueUrlName: null,
         photos: {
            small: null,
            large: null
         },
         status: null,
         followed: false
      },
      {
         name: "boberus",
         id: 26545,
         uniqueUrlName: null,
         photos: {
            small: null,
            large: null
         },
         status: null,
         followed: false
      },
      {
         name: "bober",
         id: 26544,
         uniqueUrlName: null,
         photos: {
            small: null,
            large: null
         },
         status: null,
         followed: false
      },
      {
         name: "komlevalex",
         id: 26543,
         uniqueUrlName: null,
         photos: {
            small: null,
            large: null
         },
         status: null,
         followed: false
      },
      {
         name: "Yurij12345",
         id: 26542,
         uniqueUrlName: null,
         photos: {
            small: null,
            large: null
         },
         status: null,
         followed: false
      },
      {
         name: "yulia_bobko",
         id: 26541,
         uniqueUrlName: null,
         photos: {
            small: null,
            large: null
         },
         status: null,
         followed: false
      },
      {
         name: "AlexKazakqq",
         id: 26540,
         uniqueUrlName: null,
         photos: {
            small: null,
            large: null
         },
         status: null,
         followed: false
      },
      {
         name: "Zlotnik_Ilya",
         id: 26539,
         uniqueUrlName: null,
         photos: {
            small: null,
            large: null
         },
         status: null,
         followed: false
      },
      {
         name: "Kattekly",
         id: 26538,
         uniqueUrlName: null,
         photos: {
            small: null,
            large: null
         },
         status: null,
         followed: false
      }
   ] as IUser[];

   return (
      <Page>
         <PageBody>
            <UsersList users={users} />
         </PageBody>
      </Page>
   );
}

export default UsersPage;