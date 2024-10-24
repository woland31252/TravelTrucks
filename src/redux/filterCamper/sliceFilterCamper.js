import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
  equipment: []
};

const sliceFilterCamper = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    togleFilter(state, action)  {
      state.equipment = action.payload
    },
    resetFilter( state ) {
      state.equipment = filterInitialState.equipment;
    },
  },
});

export const { togleFilter, resetFilter } = sliceFilterCamper.actions;
export default sliceFilterCamper.reducer;
