import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCampers, fetchCamperId } from "../operations";


const camperInitlState = {
  page: 1,
  limit: null,
  total: null,
  items: [],
  itemId: {},
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const sliceCamper = createSlice({
  name: "camper",
  initialState: camperInitlState,
  reducers: {
    toglePage(state, action) {
      state.page = action.payload
    },
    changeLimit(state, action) {
      state.limit = action.payload
    }
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
        state.itemId = action.payload.items;
      })
      .addCase(fetchCamperId.rejected, handleError),
});


export const {toglePage, changeLimit} = sliceCamper.actions
export default sliceCamper.reducer;
