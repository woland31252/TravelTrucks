import { createSlice } from "@reduxjs/toolkit";

const filtersInitState = {
    transmission: "",
    engine: "",
    form: "",
    AC: false,
    bathroom: false,
    kitchen: false,
    TV: false,
};

const sliceFilterCamper = createSlice({
    name: "filters",
    initialState: filtersInitState,
    reducers: {
        transmissionFilter: (state, action) => {
state.transmission = action.payload;
        },
        engineFilter: (state, action) => {
            state.engine = action.payload;
        },
        formFilter: (state, action) =>{
            state.form = action.payload;
        },
        acFilter: (state, action) => {
            state.AC = action.payload;
        },
        bathroomFilter: (state, action) => {
            state.bathroom = action.payload;
        },
        kitchenFilter: (state, action) => {
            state.bathroom = action.payload;
        },
        tvFilter: (state, action) => {
            state.TV = action.payload
        }
    }
});

export const {transmissionFilterFilter} = sliceFilterCamper.actions;
export const {engineFilter} = sliceFilterCamper.actions;
export const {formFilter} = sliceFilterCamper.actions;
export const {acFilter} = sliceFilterCamper.actions;
export const {bathroomFilter} = sliceFilterCamper.actions;
export const {kitchenFilter} = sliceFilterCamper.actions;
export const {tvFilter} = sliceFilterCamper.actions;
export default sliceFilterCamper.reducer;