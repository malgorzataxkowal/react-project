import { apiSlice } from "../api/apiSlice";

const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loadShoes: builder.query({
      query: () => ({
        url: "/shoes",
      }),
      providesTags: ["Shoes"],
    }),
    saveShoe: builder.mutation({
      query: (shoe) => ({
        url: "/shoes/" + (shoe.id || ""),
        method: shoe.id ? "PUT" : "POST",
        body: shoe,
      }),
      invalidatesTags: ["Shoes"],
    }),
    deleteShoe: builder.mutation({
      query: (shoeId) => ({
        url: `/shoes/${shoeId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Shoes"],
    }),
  }),
});
export const { useLoadShoesQuery, useSaveShoeMutation, useDeleteShoeMutation } =
  extendedApiSlice;
