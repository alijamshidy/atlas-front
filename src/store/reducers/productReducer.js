import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const get_products = createAsyncThunk(
  "product/get_products",
  async ({ page, search }, { rejectWithValue, fulfillWithValue }) => {
    try {
      console.log(page, search);
      const { data } = await api.get(`/posts/?page=${page}&&search=${search}`, {
        withCredentials: true,
      });
      console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const get_product = createAsyncThunk(
  "product/get_product",
  async (slug, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get(`/postdetails/by-post/${slug}`, {
        withCredentials: true,
      });
      console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const productReducer = createSlice({
  name: "product",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    products: [],
    product: "",
    totalProduct: 0,
  },
  reducers: {
    messageClear: state => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: builder => {
    builder

      .addCase(get_products.fulfilled, (state, { payload }) => {
        state.products = payload.results;
        state.totalProduct = payload.count;
      })
      .addCase(get_product.fulfilled, (state, { payload }) => {
        state.product = payload;
      });
  },
});
export default productReducer;
export const { messageClear } = productReducer.actions;
