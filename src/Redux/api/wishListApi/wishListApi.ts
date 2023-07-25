import { api } from "../apiSlice";

const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addToWishList: builder.mutation({
      query: ({ wishListData }) => ({
        url: `/wishlists/create-wishlist`,
        method: "POST",
        body: wishListData,
      }),
    }),
    addReadingList: builder.mutation({
      query: ({ id, wishListUpdatedData }) => ({
        url: `/wishlists/${id}`,
        method: "PATCH",
        body: wishListUpdatedData,
      }),
    }),

    getAllWishLists: builder.query({
      query: ({ id, status }) => `/wishlists/${id}?status=${status}`,
    }),
  }),
});
export const {
  useAddToWishListMutation,
  useAddReadingListMutation,
  useGetAllWishListsQuery,
} = usersApi;
