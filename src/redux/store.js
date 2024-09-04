import { configureStore } from "@reduxjs/toolkit";
import camperReducer from "../redux/camper/sliceCamper";




export const store = configureStore({
  reducer: {
    contacts: camperReducer,
  },
});