import {api} from '@/common/services/api';
import {UserModel, UserRequest, UserResponse} from "@/features/user/models/user";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postUser: builder.mutation<UserResponse, UserRequest>({
      query: (arg: UserRequest) => {
        return {
          url: '/user',
          method: 'POST',
          body: arg,
        };
      },
      invalidatesTags: ['user'],
    }),
    getMe: builder.query<UserResponse, void>({
      query: () => `/user/me`,
      transformResponse: (res: { user: UserModel }) => ({...res.user}),
      providesTags: ['user'],
    }),
    patchUser: builder.mutation<UserResponse, UserRequest>({
      query: ({ id, ...data }) => {
        return {
          url: `/user/${id}`,
          method: 'PATCH',
          body: data,
        };
      },
      invalidatesTags: ['user'],
    }),
    deleteUser: builder.mutation<UserResponse, number>({
      query: (id) => {
        return {
          url: `/user/${id}`,
          method: 'DELETE',
        };
      },
      transformResponse: (res: { user: UserModel }) => ({...res.user}),
      invalidatesTags: ['user'],
    }),
  }),
});

export const {usePostUserMutation, useGetMeQuery, usePatchUserMutation, useDeleteUserMutation} = userApi;
