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
      query: () => `/books`,
    }),
    getBooksBySearchAndFilter: builder.query({
      query: ({ searchText, genre, publicationYear }) => {
        let url = `/books/?searchTerm=${searchText}`;
        if (genre) {
          url = url + `&genre=${genre}`;
        }
        if (publicationYear) {
          url = url + `&publicationDate=${publicationYear}`;
        }
        return url;
      },
    }),
    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    getSingleReview: builder.query({
      query: (id) => `/reviews/${id}`,
      providesTags: ["review"],
    }),
    postBookReview: builder.mutation({
      query: ({ data }) => ({
        url: `/reviews/create-review`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["review"],
    }),
  }),
});
export const {
  useAddBookMutation,
  useDeleteBookMutation,
  useUpdateBookMutation,
  useGetBooksQuery,
  useGetBooksBySearchAndFilterQuery,
  useGetSingleBookQuery,
  usePostBookReviewMutation,
  useGetSingleReviewQuery,
} = booksApi;
