import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { http } from "../api";
const initialState = {
  room: {},
  messages: [],
};

export const createRoom = createAsyncThunk("room/profile", async (data) => {
  try {
    const url = "room/profile";
    const res = await http.post(url, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
export const joinRoom = createAsyncThunk("room/Profile", async (data) => {
  try {
    const url = "room/Profile";
    const res = await http.post(url, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
export const Sendmessage = createAsyncThunk(
  "room/conversation",
  async (data) => {
    try {
      const response = await http.post("room/conversation", data);
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
    setRoom(state, action) {
      state.room = action.payload;
      console.log(state.room);
    },
    getRoom(state, action) {
      if ((state.room.name = action.payload)) {
        console.log("room exist ");
      }
    },
  },
});
export const { addMessage, deletechat, setRoom } = roomSlice.actions;

export default roomSlice.reducer;
