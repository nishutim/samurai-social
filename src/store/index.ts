import { combineReducers, configureStore } from "@reduxjs/toolkit";
import auth from './reducers/auth';
import profile from './reducers/profile';

const rootReducer = combineReducers({
   auth,
   profile
});

const store = configureStore({
   reducer: rootReducer
});

export type GetState = typeof store.getState;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;