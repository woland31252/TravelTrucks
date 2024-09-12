import { configureStore } from "@reduxjs/toolkit";

import camperReducer from "../redux/camper/sliceCamper.js";
import filtersReducer from "../redux/filterCamper/sliceFilterCamper.js";



export const store = configureStore({
  reducer: {
    camper: camperReducer,
    filter: filtersReducer
  },
});