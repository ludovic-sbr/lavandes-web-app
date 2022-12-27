import {api} from '@/common/services/api';
import {UserModel, UserRequest, UserResponse} from "@/features/user/models/user";
import {ReservationResponse} from "@/features/reservation/models/reservation";

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
    getMyReservations: builder.query<ReservationResponse[], void>({
      query: () => `/user/reservation`,
      transformResponse: (res: { reservations: ReservationResponse[] }) => res.reservations.map((elt) => elt),
      providesTags: ['user'],
    }),
    patchUser: builder.mutation<UserResponse, UserRequest>({
      query: ({id, ...data}) => {
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
      invalidatesTags: ['user', 'reservation'],
    }),
  }),
});

export const {
  usePostUserMutation,
  useGetMeQuery,
  useGetMyReservationsQuery,
  usePatchUserMutation,
  useDeleteUserMutation
} = userApi;
