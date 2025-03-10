import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
  equipment: {},
  locationFilter: "",
};

const sliceFilterCamper = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    togleFilter(state, action)  {
      state.equipment = action.payload;
    },
    resetFilter( state ) {
      state.equipment = filterInitialState.equipment;
    },
    togleLocationFilter(state, action) {
      state.locationFilter = action.payload;
    }
  },
});

export const { togleFilter, resetFilter, togleLocationFilter } =
  sliceFilterCamper.actions;
export default sliceFilterCamper.reducer;
