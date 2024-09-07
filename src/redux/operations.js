import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchAllCampers = createAsyncThunk(
  "fetchAllCampers",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers");
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperId = createAsyncThunk(
  "fetchCamperId",
  async (data, thunkApi) => {
    try {
      const response = await axios.get(`/campers/${data.id}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
