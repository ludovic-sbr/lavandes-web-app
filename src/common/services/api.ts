import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import config from '@/config';
import {GetHeaderBuilder} from "./headers";
import {RoleResponse} from "@/common/models/role";
import {CheckoutSessionRequest, CheckoutSessionResponse} from "@/common/models/stripe";

export interface Period {
  from: string | undefined;
  to: string | undefined;
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${config.API_BASE_URL}api/`,
    prepareHeaders: (headers, {getState}) => {
      return GetHeaderBuilder(headers, getState).prepareAuthorizationHeader().build();
    },
  }),
  tagTypes: ['assets', 'auth', 'user', 'location', 'reservation'],
  endpoints: (builder) => ({
    getRoles: builder.query<RoleResponse[], void>({
      query: () => 'user',
      providesTags: ['assets'],
    }),
    getCheckoutSession: builder.query<CheckoutSessionResponse, string>({
      query: (sessionId) => `/stripe/checkout-session/${sessionId}`,
      providesTags: ['assets'],
    }),
    postCheckoutSession: builder.mutation<CheckoutSessionResponse, CheckoutSessionRequest>({
      query: (arg: CheckoutSessionRequest) => {
        return {
          url: '/stripe/checkout-session',
          method: 'POST',
          body: arg,
        };
      },
      invalidatesTags: ['assets'],
    }),
  }),
})

export const {
  useGetRolesQuery,
  useGetCheckoutSessionQuery,
  usePostCheckoutSessionMutation
} = api;
