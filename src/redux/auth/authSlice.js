import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { signUp } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const authReducer = authSlice.reducer;
