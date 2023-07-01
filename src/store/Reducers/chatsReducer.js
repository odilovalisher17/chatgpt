import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: [],
  reducers: {
    createChat: (state, action) => {
      const newState = [...state];
      const newChat = {
        id: action.payload.id,
        title: action.payload.id,
        isStoped: false,
        messages: [["user", action.payload.txt]],
      };

      newState.push(newChat);
      return newState;
    },
    addMessageToChat: (state, action) => {
      const newState = [...state];
      let index;
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.payload.id) {
          index = i;
        }
      }

      newState[index].messages.push([action.payload.role, action.payload.txt]);
    },
    changeChatTitle: (state, action) => {
      let index;
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.payload.id) {
          index = i;
        }
      }

      state[index].title = action.payload.title;
    },
    changeStatus: (state, action) => {
      let index;
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.payload.id) {
          index = i;
        }
      }

      state[index].isStoped = action.payload.status;
    },
  },
});

export const { createChat, addMessageToChat, changeChatTitle, changeStatus } =
  chatSlice.actions;
export default chatSlice;
