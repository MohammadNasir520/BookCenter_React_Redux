import { api } from "../apiSlice";

const booksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
    }),
    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    getSingleReview: builder.query({
      query: (id) => `/reviews/${id}`,
    }),
    postBookReview: builder.mutation({
      query: ({ data }) => ({
        url: `/reviews/create-review`,
        method: "POST",
        body: data,
      }),
    }),
    signup: builder.mutation({
      query: ({ user }) => ({
        url: `/auth/signup`,
        method: "POST",
        body: user,
      }),
    }),
  }),
});
export const {
  useGetBooksQuery,
  useGetSingleBookQuery,
  usePostBookReviewMutation,
  useGetSingleReviewQuery,
  useSignupMutation,
} = booksApi;
