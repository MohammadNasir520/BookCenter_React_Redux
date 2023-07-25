import { api } from "../apiSlice";

const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: ({ user }) => ({
        url: `/auth/signup`,
        method: "POST",
        body: user,
      }),
    }),
    login: builder.mutation({
      query: ({ user }) => ({
        url: `/auth/login`,
        method: "POST",
        body: user,
      }),
    }),
    getusers: builder.query({
      query: () => "/users",
    }),
    getSingleBook: builder.query({
      query: (id) => `/users/${id}`,
    }),
    getSingleReview: builder.query({
      query: (id) => `/reviews/${id}`,
    }),
  }),
});
export const {
  useSignupMutation,
  useLoginMutation,
  useGetusersQuery,
  useGetSingleBookQuery,
  useGetSingleReviewQuery,
} = usersApi;
