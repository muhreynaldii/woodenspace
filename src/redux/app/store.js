import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/categorySlice";
import productReducer from "../features/productSlice";
import userReducer from "../features/userSlice";
import transactionReducer from "../features/transactionSlice";
import buyerTransactionReducer from "../features/buyerTransactionSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    user: userReducer,
    transaction: transactionReducer,
    buyerTransaction: buyerTransactionReducer,
  },
});
