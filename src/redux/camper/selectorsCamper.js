
export const selectorsIsLoading = (state) => state.camper.isLoading;
export const selectorsError = (state) => state.camper.error;
export const selectorsCampers = (state) => state.camper.items;
export const selectorsCampersTotal = (state) => state.camper.total
export const selectorsCamperById = (state) => state.camper.itemId;
export const selectorsPage = (state) => state.camper.page;
export const selectorsLimit = (state) => state.camper.limit;
export const selectorsLocation = (state) => state.camper.locationList;
