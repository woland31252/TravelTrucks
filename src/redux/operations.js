import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchAllCampers = createAsyncThunk(
  "fetchAllCampers",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("/campers", {
        params: {
          page: 1,
          limit: 5,
          transmission: ""
      }});
      return response.data.items;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperId = createAsyncThunk(
  "fetchCamperId",
  async (id, thunkApi) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
