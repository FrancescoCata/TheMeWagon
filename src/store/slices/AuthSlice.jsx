import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  authToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const { user, authToken } = action.payload;
      state.user = user;
      state.authToken = authToken;
    },
    logout: (state) => {
      state.user = null;
      state.authToken = null;
    },
  },
});

// Action exports
export const { loginSuccess, logout } = authSlice.actions;

// Selectors to access auth state from the store
export const selectIsAuthenticated = (state) => !!state.auth.authToken;
export const selectUser = (state) => state.auth.user;
export const selectAuthToken = (state) => state.auth.authToken;

export default authSlice.reducer;
