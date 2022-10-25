import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducers';

export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false
		}),
});

export default store;
