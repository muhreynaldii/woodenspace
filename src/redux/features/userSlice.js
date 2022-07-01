import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// export const saveProduct = createAsyncThunk(
//   "products/saveProduct",
//   async ({ title, price }) => {
//     const response = await axios.post("http://localhost:5000/products", {
//       title,
//       price,
//     });
//     return response.data;
//   }
// );

export const login = createAsyncThunk("user/login", async ({ values }) => {
  const navigate = useNavigate();
  try {
    const res = await axios({
      method: "post",
      url: "https://wooden-space-authorization.herokuapp.com/api/v1/auth/login",
      data: values,
    });
    // console.log(res.data.data.token);

    if (res.status === 200) {
      localStorage.setItem("token", res.data.data.token);
      navigate("/", { replace: true });
    }
  } catch (error) {
    console.log(error);
  }
});

const userEntity = createEntityAdapter({
  selectId: (user) => user.id,
});

const userSlice = createSlice({
  name: "user",
  initialState: userEntity.getInitialState(),
  extraReducers: {
    // [saveProduct.fulfilled]: (state, action) => {
    //   productEntity.addOne(state, action.payload);
    // },
    [login.fulfilled]: (state, action) => {
      userEntity.setOne(state, action.payload);
    },
  },
});

export const userSelectors = userEntity.getSelectors((state) => state.user);
export default userSlice.reducer;
