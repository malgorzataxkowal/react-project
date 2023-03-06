import { apiSlice } from "../api/apiSlice";
import { createEntityAdapter } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";

const shoesAdapter = createEntityAdapter({
  selectId: (shoe) => shoe.id,
  sortComparer: (a, b) => a.id - b.id,
});
const initialShoesState = shoesAdapter.getInitialState();

const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loadShoes: builder.query({
      query: () => ({
        url: "/shoes",
      }),
      transformResponse: (responseData) => {
        return shoesAdapter.setAll(initialShoesState, responseData);
      },
      providesTags: [{ type: "Shoes", id: "LIST" }],
    }),
    saveShoe: builder.mutation({
      query: (shoe) => ({
        url: "/shoes/" + (shoe.id || ""),
        method: shoe.id ? "PUT" : "POST",
        body: shoe,
      }),
      invalidatesTags: [{ type: "Shoes", id: "LIST" }],
    }),
    deleteShoe: builder.mutation({
      query: (shoeId) => ({
        url: `/shoes/${shoeId}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Shoes", id: "LIST" }],
    }),
  }),
});

export const { useLoadShoesQuery, useSaveShoeMutation, useDeleteShoeMutation } =
  extendedApiSlice;

const selectShoesResult = extendedApiSlice.endpoints.loadShoes.select();
const selectAllShoesData = createSelector(
  selectShoesResult,
  (shoesObject) => shoesObject?.data?.ids ?? []
);
const selectShoesByAuthorID = createSelector(
  [selectShoesResult, (state, authorId) => authorId],
  (allShoes, authorId) => {
    let arrayOb = allShoes?.data?.entities ?? [];
    let arrayShoes = Object.values(arrayOb)?.filter(
      (shoes) => shoes.authorId == authorId
    );
    return arrayShoes;
  }
);
export { selectShoesByAuthorID };
