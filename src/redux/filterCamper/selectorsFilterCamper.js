import { createSelector } from "@reduxjs/toolkit";
import { selectorsCampers } from "../camper/selectorsCamper.js";

export const selectorFilter = (state) => state.filter.equipment;
export const selectLocationCampers = (state) => state.filter.locationFilter;

export const selectFilteredLocation = createSelector(
  [selectorsCampers, selectLocationCampers],
  (campers, location) => {
    return campers.filter((camper) =>
      camper.location.toLowerCase().includes(location.toLowerCase())
    );
  }
);
