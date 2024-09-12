import { createSelector } from "@reduxjs/toolkit";
import { selecttorsTransmission } from "../filterCamper/selectorsFilterCamper.js";
import { selectorsEngine } from "../filterCamper/selectorsFilterCamper.js";
import { selectorsForm } from "../filterCamper/selectorsFilterCamper.js";
import { selectorsAC } from "../filterCamper/selectorsFilterCamper.js";
import { selectorsBathroom } from "../filterCamper/selectorsFilterCamper.js";
import { selectorsKitchen } from "../filterCamper/selectorsFilterCamper.js";
import { selectorsTV } from "../filterCamper/selectorsFilterCamper.js";

export const selectorsIsLoading = (state) => state.camper.isLoading;
export const selectorsError = (state) => state.camper.error;
export const selectorsCampers = (state) => state.camper.items;
export const selectorsCamperById = (state) => state.camper.items.id;

export const selectorsFilterCampers = createSelector(
  [
    selectorsCampers,
    selecttorsTransmission,
    selectorsEngine,
    selectorsForm,
    selectorsAC,
    selectorsBathroom,
    selectorsKitchen,
    selectorsTV,
  ],
  (campers, transmission, engine, form, AC, bathroom, kitchen, TV) => {
    return campers.filter((camper) => {
      camper.transmission.includes(transmission);
      camper.engine.includes(engine);
      camper.form.includes(form);
      camper.AC.includes(AC);
      camper.bathroom.includes(bathroom);
      camper.kitchen.includes(kitchen);
      camper.TV.includes(TV);
    });
  }
);
