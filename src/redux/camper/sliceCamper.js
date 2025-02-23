import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCampers, fetchCamperId } from "../operations.js";
import { LIMIT, PAGE } from "../constantsFunctions/constants.js";
import { handlePending, handleError } from "../constantsFunctions/functions.js";

const camperInitlState = {
  page: PAGE,
  limit: LIMIT,
  total: null,
  items: [],
  itemId: {},
  isLoading: false,
  error: null,
};

// const handlePending = (state) => {
//   state.isLoading = true;
// };

// const handleError = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const sliceCamper = createSlice({
  name: "camper",
  initialState: camperInitlState,
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
    changeLimit(state, action) {
      state.limit = action.payload;
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
      .addCase(fetchCamperId.rejected, handleError),
});

export const { toglePage, changeLimit } = sliceCamper.actions;
export default sliceCamper.reducer;
