import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllCampers,
  fetchCamperId,
  fetchLocation,
} from "../operations.js";
import { LIMIT, PAGE } from "../constantsFunctions/constants.js";
import { handlePending, handleError } from "../constantsFunctions/functions.js";

const camperInitState = {
  page: PAGE,
  limit: LIMIT,
  total: null,
  items: [],
  locationList: [],
  itemId: {},
  favorite: [],
  isLoading: false,
  error: null,
};

const sliceCamper = createSlice({
  name: "camper",
  initialState: camperInitState,
  reducers: {
    // resetItems(state) {
    //   state.items = camperInitlState.items;
    // },
    // addCampers(state, action) {
    //   state.items = [...camperInitlState.items, ...action.payload.items];
    // },
    toglePage(state, action) {
      state.page = action.payload;
    },
    togleFavorite(state, action) {
      state.favorite = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllCampers.pending, handlePending)
      .addCase(fetchAllCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.items;
        state.total = action.payload.total;
      })
      .addCase(fetchAllCampers.rejected, handleError)
      .addCase(fetchCamperId.pending, handlePending)
      .addCase(fetchCamperId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.itemId = action.payload;
      })
      .addCase(fetchCamperId.rejected, handleError)
      .addCase(fetchLocation.pending, handlePending)
      .addCase(fetchLocation.fulfilled, (state, action) => {
        state.isLoading = false;
        const locations = state.locationList;
        const data = action.payload;
        data.map((item) => {
          if (!locations.includes(item.location)) {
            locations.push(item.location);
          }
        });
      })
      .addCase(fetchLocation.rejected, handleError),
});

export const { toglePage, togleFavorite } = sliceCamper.actions;
export default sliceCamper.reducer;
