import {api} from '@/common/services/api';
import {
  CompleteReservationResponse,
  ConfirmReservationResponse,
  ReservationModel,
  ReservationRequest,
  ReservationResponse,
} from "@/features/reservation/models/reservation";

export const reservationApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postReservation: builder.mutation<ReservationResponse, ReservationRequest>({
      query: (arg: ReservationRequest) => {
        return {
          url: '/reservation',
          method: 'POST',
          body: arg,
        };
      },
      transformResponse: (res: { reservation: ReservationModel }) => ({...res.reservation}),
      invalidatesTags: ['reservation', 'user', 'location'],
    }),
    completeReservation: builder.mutation<CompleteReservationResponse, { reservationId: number; data: Partial<ReservationModel> }>({
      query: ({reservationId, data}) => ({
        url: `/reservation/${reservationId}/complete`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['reservation'],
    }),
    getReservation: builder.query<ReservationResponse, number>({
      query: (reservationId) => `/reservation/${reservationId}`,
      transformResponse: (res: { reservation: ReservationModel }) => ({...res.reservation}),
      providesTags: ['reservation'],
    }),
    getReservationBySessionId: builder.query<ReservationResponse, string>({
      query: (sessionId) => `/reservation/sessionId/${sessionId}`,
      transformResponse: (res: { reservation: ReservationModel }) => ({...res.reservation}),
      providesTags: ['reservation'],
    }),
    patchReservation: builder.mutation<ReservationResponse, { reservationId: number; data: Partial<ReservationModel> }>({
      query: ({reservationId, data}) => ({
        url: `/reservation/${reservationId}`,
        method: 'PATCH',
        body: data,
      }),
      transformResponse: (res: { reservation: ReservationModel }) => ({...res.reservation}),
      invalidatesTags: ['reservation'],
    }),
    confirmReservation: builder.mutation<ConfirmReservationResponse, { reservationId: number; data: Partial<ReservationModel> }>({
      query: ({reservationId, data}) => ({
        url: `/reservation/${reservationId}/confirm`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['reservation'],
    }),
  }),
});

export const {
  usePostReservationMutation,
  useGetReservationQuery,
  useGetReservationBySessionIdQuery,
  usePatchReservationMutation,
  useConfirmReservationMutation,
  useCompleteReservationMutation,
} = reservationApi;
