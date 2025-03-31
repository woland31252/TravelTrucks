import { createSlice } from "@reduxjs/toolkit";

const favoriteInitState = {
  favoriteItems: [],
};

const sliceFavoriteCamper = createSlice({
  name: "favorite",
  initialState: favoriteInitState,
  reducers: {
    togleFavorite(state, action) {
      const favoriteItem = state.favoriteItems.includes(action.payload)
        ? state.favoriteItems.filter((item) => item !== action.payload)
        : [...state.favoriteItems, action.payload];
      return { favoriteItems: favoriteItem };
    },
  },
});

export const { togleFavorite } = sliceFavoriteCamper.actions;
export const favoriteReducer = sliceFavoriteCamper.reducer;
