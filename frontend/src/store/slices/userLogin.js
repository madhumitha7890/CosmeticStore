import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userLoginThunk = createAsyncThunk(
  "userLogin",
  async (userData, thunkApi) => {
    let res;

    res = await axios.post("http://localhost:3000/user/login", userData);

    if (res.data.statusCode === 4 || res.data.statusCode === 5) {
      console.log(res.data);
      sessionStorage.setItem("token", res.data.token);
      return res.data;
    } else {
      return thunkApi.rejectWithValue(res.data.message);
    }
  }
);

export const userLoginSlice = createSlice({
  name: "user-login-slice",
  initialState: {
    isPending: false,
    currentUser: {},
    errorOccurred: false,
    errorMessage: "",
    loginStatus: false,
  },
  reducers: {
    resetState: (state, payload) => {
      state.isPending = false;
      state.currentUser = {};
      state.errorOccurred = false;
      state.errorMessage = "";
      state.loginStatus = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(userLoginThunk.pending, (state, action) => {
        state.isPending = true;
      })
      .addCase(userLoginThunk.fulfilled, (state, action) => {
        state.isPending = false;
        state.currentUser = action.payload.user;
        state.errorOccurred = false;
        state.errorMessage = "";
        state.loginStatus = true;
      })
      .addCase(userLoginThunk.rejected, (state, action) => {
        state.isPending = false;
        state.currentUser = {};
        state.errorMessage = action.payload;
        state.errorOccurred = true;
        state.loginStatus = false;
      }),
});

export default userLoginSlice.reducer;
export const { resetState } = userLoginSlice.actions;