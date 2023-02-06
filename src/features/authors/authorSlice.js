import { apiSlice } from "../api/apiSlice";

const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loadAuthors: builder.query({
      query: () => ({
        url: "/authors/",
      }),
      providesTags: ["Authors"],
    }),
  }),
});

export const { useLoadAuthorsQuery } = extendedApiSlice;
