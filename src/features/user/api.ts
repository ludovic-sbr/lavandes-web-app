import { api } from '@/common/services/api';
import { UserRequest, UserResponse } from "@/features/user/models/user";

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
	}),
});

export const { usePostUserMutation } = userApi;
