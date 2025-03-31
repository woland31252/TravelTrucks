import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import camperReducer from "../redux/camper/sliceCamper.js";
import filtersReducer from "../redux/filterCamper/sliceFilterCamper.js";
import { favoriteReducer } from "./favoriteCamper/sliceFavoriteCamper.js";

const persistConfig = {
  key: "camper",
  version: 1,
  storage,
  whitelist: ["campers"],
};

const persistCampersReducer = persistReducer(persistConfig, camperReducer);

export const store = configureStore({
  reducer: {
    camper: persistCampersReducer,
    filter: filtersReducer,
    favorite: favoriteReducer,
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }),
});

export const persistor = persistStore(store);
