import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import roomSlice from "./room/roomSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    room: roomSlice,
  },
});
