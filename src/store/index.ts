import { combineReducers, configureStore } from "@reduxjs/toolkit";
import auth from './reducers/auth';
import profile from './reducers/profile';
import users from './reducers/users';
import chat from './reducers/chat';

const rootReducer = combineReducers({
   auth,
   profile,
   users,
   chat
});

const store = configureStore({
   reducer: rootReducer
});

export type GetState = typeof store.getState;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;