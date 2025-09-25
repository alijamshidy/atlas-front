import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const get_about = createAsyncThunk(
  "about/get_about",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get("/about");
      console.log(data);

      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);
export const get_team = createAsyncThunk(
  "about/get_team",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get("/team");
      console.log(data);

      return fulfillWithValue(data.results);
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);
export const aboutReducer = createSlice({
  name: "about",
  initialState: {
    companyDes: "",
    companyTitle: "",
    companyImages: [],
    CEOs: [],
  },
  reducers: {
    messageClear: state => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },

  extraReducers: builder => {
    builder
      .addCase(get_about.fulfilled, (state, { payload }) => {
        state.companyDes = payload.content;
        state.companyTitle = payload.heading;
        state.companyImages = payload.image;
      })
      .addCase(get_team.fulfilled, (state, { payload }) => {
        state.CEOs = payload;
      });
  },
});
export default aboutReducer;
export const { messageClear } = aboutReducer.actions;
