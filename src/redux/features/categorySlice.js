import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    const response = await axios({
      method: "get",
      url: "https://wooden-space-api-development.herokuapp.com/api/v1/category/",
    });
    return response.data.data;
  }
);

const categoryEntity = createEntityAdapter({
  selectId: (category) => category.id,
});

const categorySlice = createSlice({
  name: "category",
  initialState: categoryEntity.getInitialState(),
  extraReducers: {
    [getCategories.fulfilled]: (state, action) => {
      categoryEntity.setAll(state, action.payload);
    },
  },
});

export const categorySelectors = categoryEntity.getSelectors(
  (state) => state.category
);
export default categorySlice.reducer;
