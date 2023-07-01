import { configureStore, combineReducers } from "@reduxjs/toolkit";
import chatSlice from "./Reducers/chatsReducer";
import usersSlice from "./Reducers/usersReducer";
import currentChatSlice from "./Reducers/CurrentChatReducer";

const store = configureStore({
  reducer: combineReducers({
    chat: chatSlice.reducer,
    users: usersSlice.reducer,
    currentChat: currentChatSlice.reducer,
  }),
});

export default store;
