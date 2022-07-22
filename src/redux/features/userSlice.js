import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("token");

export const getUser = createAsyncThunk("user/getUser", async () => {
  const response = await axios({
    method: "get",
    url: "https://wooden-space-api-development.herokuapp.com/api/v1/user/profile",
    headers: { Authorization: token },
  });
  return response.data.data.detail;
});

const userEntity = createEntityAdapter({
  selectId: (user) => user.id,
});

const userSlice = createSlice({
  name: "user",
  initialState: userEntity.getInitialState(),
  extraReducers: {
    [getUser.fulfilled]: (state, action) => {
      userEntity.setOne(state, action.payload);
    },
  },
});

export const userSelectors = userEntity.getSelectors((state) => state.user);
export default userSlice.reducer;
