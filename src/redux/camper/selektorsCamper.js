const selectorsIsLoading = (state) => state.camper.isLoading;
const selectorsError = (state) => state.camper.error;
const selectorsCamper = (state) => state.camper.items;

export default { selectorsIsLoading, selectorsError, selectorsCamper };
