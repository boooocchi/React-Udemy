import { createSlice } from "@reduxjs/toolkit";
const initialLoginState = {
  login: false
};

const loginSlice = createSlice({
  name: "login",
  initialLoginState,
  reducers: {
    login(state) {
      state.login = true;
    },
    logout(state) {
      state.login = false;
    }
  }
});

export const loginActions = loginSlice.actions;

export default loginSlice.reducer;
