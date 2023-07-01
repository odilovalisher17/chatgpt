import { createSlice } from "@reduxjs/toolkit";

const currentChatSlice = createSlice({
  name: "currentChat",
  initialState: "new-chat",
  reducers: {
    changeCurrentChat: (state, action) => {
      return action.payload;
    },
  },
});

export const { changeCurrentChat } = currentChatSlice.actions;
export default currentChatSlice;
