import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { http } from "../api";
const initialState = {
  messages: [],
};

export const Sendmessage = createAsyncThunk(
  "room/conversation",
  async (data) => {
    try {
      const response = await http.post("/api/room/conversation", data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    addMessage(state, action) {
      state.messages = action.payload;
    },
    deletechat(state, action) {
      state.messages = [];
    },
  },
});
export const { addMessage, deletechat } = roomSlice.actions;

export default roomSlice.reducer;
