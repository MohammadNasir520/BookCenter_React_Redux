// import { api } from "../apiSlice";

// const usersApi = api.injectEndpoints({
//   endpoints: (builder) => ({
//     signup: builder.mutation({
//       query: ({ data }) => ({
//         url: `/auth/signup`,
//         method: "POST",
//         body: data,
//       }),
//     }),
//     getusers: builder.query({
//       query: () => "/users",
//     }),
//     getSingleBook: builder.query({
//       query: (id) => `/users/${id}`,
//     }),
//     getSingleReview: builder.query({
//       query: (id) => `/reviews/${id}`,
//     }),
//   }),
// });
// export const {
//   useGetusersQuery,
//   useGetSingleBookQuery,
//   useSignupMutation,
//   useGetSingleReviewQuery,
// } = usersApi;
