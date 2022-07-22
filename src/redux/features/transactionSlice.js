import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("token");

export const getSellerTransactions = createAsyncThunk(
  "sellerTransactions/getSellerTransactions",
  async () => {
    const response = await axios({
      method: "get",
      url: "https://wooden-space-api-development.herokuapp.com/api/v1/transaction/seller",
      headers: { Authorization: token },
    });
    return response.data.data;
  }
);

const transactionEntity = createEntityAdapter({
  selectId: (transaction) => transaction.id,
});

const transactionSlice = createSlice({
  name: "transaction",
  initialState: transactionEntity.getInitialState(),
  extraReducers: {
    [getSellerTransactions.fulfilled]: (state, action) => {
      transactionEntity.setAll(state, action.payload);
    },
  },
});

export const transactionSelectors = transactionEntity.getSelectors(
  (state) => state.transaction
);
export default transactionSlice.reducer;
