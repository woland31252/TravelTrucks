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

const filterInitialState = {
  filters: {
    transmission: "",
    engine: "",
    form: "",
    AC: null,
    TV: null,
  }
};

const sliceFilterCamper = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    togleFilter: (state, action) => {
      const { param } = action.payload;
      state.filters[param] = !state.filters[param];
    },
    resetFilter: ( state ) => {
      state.filters = filterInitialState.filters;
    },
  },
});

export const { togleFilter, resetFilter } = sliceFilterCamper.actions;
export default sliceFilterCamper.reducer;
