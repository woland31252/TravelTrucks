import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

// not workoing string 12 and 14

export const fetchAllCampers = createAsyncThunk(
  "campers/fetchAllCampers",
  async (query, thunkApi) => {
    const key = Object.keys(query)
    try {
      const response = await axios.get(`/campers?${key}=${Object.values(query)}`); 
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperId = createAsyncThunk(
  "campers/fetchCamperId",
  async (id, thunkApi) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
