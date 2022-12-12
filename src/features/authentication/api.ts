import { api } from '@/common/services/api';
import { LoginRequest, LoginResponse } from "@/features/authentication/models/authentication";

export const authenticationApi = api.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation<LoginResponse, LoginRequest>({
			query: (req: LoginRequest) => {
				return {
					url: '/authenticate',
					method: 'POST',
					body: req.data,
				};
			},
			invalidatesTags: ['auth', 'user'],
		}),
	}),
});

export const { useLoginMutation } = authenticationApi;
