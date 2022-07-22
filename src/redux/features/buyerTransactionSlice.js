import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("token");

export const getBuyerTransactions = createAsyncThunk(
  "buyerTransactions/getBuyerTransactions",
  async () => {
    const response = await axios({
      method: "get",
      url: "https://wooden-space-api-development.herokuapp.com/api/v1/transaction/buyer",
      headers: { Authorization: token },
    });
    return response.data.data;
  }
);

const buyerTransactionEntity = createEntityAdapter({
  selectId: (transaction) => transaction.id,
});

const buyerTransactionSlice = createSlice({
  name: "buyerTransaction",
  initialState: buyerTransactionEntity.getInitialState(),
  extraReducers: {
    [getBuyerTransactions.fulfilled]: (state, action) => {
      buyerTransactionEntity.setAll(state, action.payload);
    },
  },
});

export const buyerTransactionSelectors = buyerTransactionEntity.getSelectors(
  (state) => state.buyerTransaction
);
export default buyerTransactionSlice.reducer;
