import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialLoginState = {
  login: false
};

const loginSlice = createSlice({
  name: "login",
  initialState: initialLoginState,
  reducers: {
    login(state) {
      state.login = true;
    },
    logout(state) {
      state.login = false;
    }
  }
});

///////////////////////////
const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});
////////////////

const store = configureStore({
  reducer: { auth: loginSlice.reducer, counter: counterSlice.reducer }
});

export const counterActions = counterSlice.actions;
export const loginActions = loginSlice.actions;

export default store;
