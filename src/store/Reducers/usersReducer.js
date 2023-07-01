import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      const newState = [...state, action.payload];
      return newState;
    },
  },
});

export const { addUser } = usersSlice.actions;
export default usersSlice;
