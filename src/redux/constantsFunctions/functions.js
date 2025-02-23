export const handlePending = (state) => {
  state.isLoading = true;
};

export const handleError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
