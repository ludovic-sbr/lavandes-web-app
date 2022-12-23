import {configureStore} from '@reduxjs/toolkit';

import {api} from '@/common/services/api';
import {queryMessageHandler} from "./middlewares/queryMessageHandler";
import {authenticationMiddleware} from "@/features/authentication/middleware";
import {authenticationReducer} from "@/features/authentication/authSlice";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(queryMessageHandler, authenticationMiddleware, api.middleware),
  reducer: {
    authentication: authenticationReducer,
    [api.reducerPath]: api.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

