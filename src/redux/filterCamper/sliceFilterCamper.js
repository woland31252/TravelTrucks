import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   filters: {
//     transmission: false,
//     engine: false,
//     form: false,
//     AC: false,
//     bathroom: false,
//     kitchen: false,
//     TV: false,
//   },
// };

// const sliceFilterCamper = createSlice({
//   name: "filters",
//   initialState,
//   reducers: {
//     togleFilter: (state, action) => {
//       const { param } = action.payload;
//       state.filters[param] = !state.filters[param];
//     },
//     resetFilter: (state) => {
//       state.filters = initialState.filters;
//     },
//   },
// });

const initialState = {
  item: [],
};

const sliceFilterCamper = createSlice({
  name: "filters",
  initialState,
  reducers: {
    togleFilter: (state, action) => {
      state.item = action.payload;
    },
    resetFilter: (state) => {
      state.item = initialState.item;
    },
  },
});

export const { togleFilter, resetFilter } = sliceFilterCamper.actions;
export default sliceFilterCamper.reducer;
