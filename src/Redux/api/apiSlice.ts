import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://book-center-backend.vercel.app/api/v1/`,
  }),
  tagTypes: ["review", "updateBook", "addToReadList"],

  endpoints: () => ({}),
});
