import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("token");

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await axios({
      method: "get",
      url: "https://wooden-space-api-development.herokuapp.com/api/v1/buyer/product/",
      headers: token && { Authorization: token },
    });
    return response.data.data;
  }
);

export const getSellerProducts = createAsyncThunk(
  "sellerProducts/getSellerProducts",
  async () => {
    const response = await axios({
      method: "get",
      url: "https://wooden-space-api-development.herokuapp.com/api/v1/seller/product/",
      headers: { Authorization: token },
    });
    return response.data.data;
  }
);

const productEntity = createEntityAdapter({
  selectId: (product) => product.id,
});

const productSlice = createSlice({
  name: "product",
  initialState: productEntity.getInitialState(),
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      productEntity.setAll(state, action.payload);
    },
    [getSellerProducts.fulfilled]: (state, action) => {
      productEntity.setAll(state, action.payload);
    },
  },
});

export const productSelectors = productEntity.getSelectors(
  (state) => state.product
);
export default productSlice.reducer;
