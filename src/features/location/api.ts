import {api, Period} from "@/common/services/api";
import {LocationResponse} from "@/features/location/models/location";

export const locationApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getLocations: builder.query<LocationResponse[], void>({
      query: () => 'location',
      transformResponse: (res: { locations: LocationResponse[] }) => res.locations.map((loc) => loc),
      providesTags: ['location'],
    }),
    getLocationsByPeriod: builder.query<LocationResponse[], Period>({
      query: (period) => `location/period?from=${period.from}&to=${period.to}`,
      transformResponse: (res: { locations: LocationResponse[] }) => res.locations.map((loc) => loc),
      providesTags: ['location'],
    }),
    getLocation: builder.query<LocationResponse, number>({
      query: (id) => `location/${id}`,
      transformResponse: (res: { location: LocationResponse }) => ({...res.location}),
      providesTags: ['location'],
    }),
  }),
});

export const {
  useGetLocationsQuery,
  useGetLocationsByPeriodQuery,
  useGetLocationQuery,
} = locationApi;