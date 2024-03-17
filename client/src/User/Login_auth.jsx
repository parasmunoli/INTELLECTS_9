import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  getLoginFromLocalStorage,
} from "../Utils/localStorage";
export const loginUser = createAsyncThunk("data", async (_, thunkAPI) => {
  try {
    console.log(initialState.user_info);

    const resp = await axios.post(
      "https://intellects-9.onrender.com/api/v1/auth/login",
      initialState.user_info
    );

    addUserToLocalStorage(resp.data.user);
    return resp.data;
  } catch (err) {
    console.log(error);
  }
});

export const setUser = (user) => ({
  type: "data/setUser",
  payload: user,
});
const initialState = {
  isLoading: false,
  isLoggedIn: getLoginFromLocalStorage(),
  user: getUserFromLocalStorage(),
  user_info: { email: "test123@gmail.com", password: "test@123" },
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    logout(state) {
      state.isLoggedIn = false;
    },
    temp(state) {
      state.isLoggedIn = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.isLoading = true;
        // state.data = payload.entries;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.data = payload.entries;
        console.log(payload.user);
        addUserToLocalStorage(payload.user);
        toast.success(`Successfully  logged in as ${payload.user.firstName}`);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = true;
        console.log(action);
      });
  },
});

export const { temp, logout } = dataSlice.actions;

export default dataSlice.reducer;
