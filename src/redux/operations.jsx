import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk(
  "fetchAllCampers",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("/campers");
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const searchCamper = createAsyncThunk(
  "searchCamper",
  async (data, thunkApi) => {
    try {
      const response = await axios.get(`/campers/${data.id}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
