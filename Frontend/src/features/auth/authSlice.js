// configure a base url
// create aut && room slices
// configure store
//configure provider in main.jsx
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../api";

const initialState = {
  user: {},
  token: "",
};
export const login = createAsyncThunk("auth/login", async (data) => {
  try {
    let url = "auth/login";
    let res = await http.post(url, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
export const register = createAsyncThunk("auth/register", async (data) => {
  try {
    let url = "auth/register";
    let res = await http.post(url, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUser: (state, action) => {
      console.log(state.user);
    },
    setUser: (state, action) => {
      console.log(action);
      const { user, token } = action.payload;

      state.user = user;
      state.token = token;
    },
    deleteUser: (state) => {
      state.user = {};
      state.token = "";
    },
  },
});
export const { getUser, setUser, deleteUser } = authSlice.actions;
export default authSlice.reducer;
