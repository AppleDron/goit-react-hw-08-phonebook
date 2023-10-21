import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { fetchCurrentUser, logIn, logOut, signUp } from './operations';
import {
  handleFetchCurrentUser,
  handleIsLoggined,
  handleLogout,
  handleRejected,
} from './services';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(signUp.fulfilled, handleIsLoggined);
    builder.addCase(signUp.rejected, handleRejected);
    builder.addCase(logIn.fulfilled, handleIsLoggined);
    builder.addCase(logIn.rejected, handleRejected);
    builder.addCase(logOut.fulfilled, handleLogout);
    builder.addCase(logOut.rejected, handleRejected);
    builder.addCase(fetchCurrentUser.fulfilled, handleFetchCurrentUser);
    builder.addCase(fetchCurrentUser.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
