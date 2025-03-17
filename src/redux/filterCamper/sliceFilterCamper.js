import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
  equipment: {},
  location: "",
};

const sliceFilterCamper = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    togleFilter(state, action)  {
      state.equipment = action.payload;
    },
    // deleteValueFilter(state, action) {
    //     delete state.equipment.action.payload
    // },
    resetFilter( state ) {
      state.equipment = filterInitialState.equipment;
    },
    togleLocationFilter(state, action) {
      state.location = action.payload;
    }
  },
});

export const { togleFilter, resetFilter, togleLocationFilter, deleteValueFilter } =
  sliceFilterCamper.actions;
export default sliceFilterCamper.reducer;
