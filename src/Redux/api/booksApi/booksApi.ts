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
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    getBooks: builder.query({
      query: (searchText) => `/books/?searchTerm=${searchText}`,
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
  useDeleteBookMutation,
  useUpdateBookMutation,
  useGetBooksQuery,
  useGetSingleBookQuery,
  usePostBookReviewMutation,
  useGetSingleReviewQuery,
} = booksApi;
