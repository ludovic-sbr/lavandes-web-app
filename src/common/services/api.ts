import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import config from '@/config';
import { GetHeaderBuilder } from "./headers";

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: `${config.API_BASE_URL}api/`,
		prepareHeaders: (headers, {getState}) => {
			return GetHeaderBuilder(headers, getState).prepareAuthorizationHeader().build();
		},
	}),
	tagTypes: ['assets', 'auth', 'user'],
	endpoints: (builder) => ({
		getRoles: builder.query<any, void>({
			query: () => 'user',
			providesTags: ['assets'],
		}),
	})
})

export const { useGetRolesQuery } = api;
