import { configureStore } from "@reduxjs/toolkit";
import camperReducer from "../redux/camper/sliceCamper.js";




export const store = configureStore({
  reducer: {
    camper: camperReducer,
  },
});