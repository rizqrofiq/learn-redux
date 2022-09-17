const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isAuthenticated: false,
  username: undefined,
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login(state, action) {
      if (
        action.payload.username == "admin" &&
        action.payload.password == "admin"
      ) {
        state.isAuthenticated = true;
        state.username = "admin";
      }
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export default authSlice;
