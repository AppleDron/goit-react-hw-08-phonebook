export const handleRejected = (state, action) => {
  state.error = action.payload;
};

export const handleIsLoggined = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

export const handleLogout = (state, action) => {
  state.user = { name: '', email: '' };
  state.token = null;
  state.isLoggedIn = false;
};

export const handleFetchCurrentUser = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isFetching = false;
};
