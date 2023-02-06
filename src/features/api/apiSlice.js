import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = process.env.API_URL;

export const apiSlice = createApi({
  reducerPath: "shooes",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["Shoes", "Authors"],
  endpoints: (builder) => ({}),
});
