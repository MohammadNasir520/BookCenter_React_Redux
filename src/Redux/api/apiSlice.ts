import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/" }),
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
  }),
});

export const {
  useGetBooksQuery,
  useGetSingleBookQuery,
  usePostBookReviewMutation,
  useGetSingleReviewQuery,
} = api;
