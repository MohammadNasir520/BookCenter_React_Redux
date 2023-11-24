import { api } from '../apiSlice';

const usersApi = api.injectEndpoints({
  endpoints: builder => ({
    addToWishList: builder.mutation({
      query: ({ wishListData }) => ({
        url: `/wishlists/create-wishlist`,
        method: 'POST',
        body: wishListData,
      }),
    }),
    addReadingList: builder.mutation({
      query: ({ id, wishListUpdatedData }) => ({
        url: `/wishlists/${id}`,
        method: 'PATCH',
        body: wishListUpdatedData,
      }),
      invalidatesTags: ['wishlist'],
    }),
    removeFromWishList: builder.mutation({
      query: id => ({
        url: `/wishlists/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['wishlist'],
    }),

    getAllWishLists: builder.query({
      query: ({ id, status }) => `/wishlists/${id}?status=${status}`,
      providesTags: ['wishlist'],
    }),
  }),
});
export const {
  useAddToWishListMutation,
  useAddReadingListMutation,
  useGetAllWishListsQuery,
  useRemoveFromWishListMutation,
} = usersApi;
