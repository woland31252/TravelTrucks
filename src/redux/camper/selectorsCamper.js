// import { createSelector } from "@reduxjs/toolkit";
// import { selectorFilter } from "../filterCamper/selectorsFilterCamper.js";

export const selectorsIsLoading = (state) => state.camper.isLoading;
export const selectorsError = (state) => state.camper.error;
export const selectorsCampers = (state) => state.camper.items;
export const selectorsCamperById = (state) => state.camper.itemId;

// export const selectFilteredCampers = createSelector(
//   [selectorsCampers, selectorFilter],
//   (campers, filters) => {
//     return campers.filter((camper) =>
//       camper.item.toLowerCase().includes(filters.toLowerCase())
//     );
//   }
// );
