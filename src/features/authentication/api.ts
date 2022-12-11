import { api } from '@/common/services/api';

export interface LoginRequest {
	email: string;
	password: string;
	google_id: string;
}

export interface LoginResponse {
	token: string;
}

export const authenticationApi = api.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation<LoginResponse, LoginRequest>({
			query: (arg: LoginRequest) => {
				return {
					url: '/authenticate',
					method: 'POST',
					body: arg,
				};
			},
			invalidatesTags: ['auth', 'user'],
		}),
	}),
});

export const { useLoginMutation } = authenticationApi;
