import { api } from "../apiSlice";

const booksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addBook: builder.mutation({
      query: ({ data }) => ({
        url: `/books/create-book`,
        method: "POST",
        body: data,
      }),
    }),
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
  useAddBookMutation,
  useGetBooksQuery,
  useGetSingleBookQuery,
  usePostBookReviewMutation,
  useGetSingleReviewQuery,
} = booksApi;
