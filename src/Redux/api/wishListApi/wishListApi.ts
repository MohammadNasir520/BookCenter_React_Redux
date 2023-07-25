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

    getAllWishLists: builder.query({
      query: ({ id, status }) => `/wishlists/${id}?status=${status}`,
    }),
  }),
});
export const { useAddToWishListMutation, useGetAllWishListsQuery } = usersApi;
