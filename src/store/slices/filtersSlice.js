/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    colorsFilter: '',
    textFilter: '',
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        addColorsFilter: (state, action) => {
            state.colorsFilter = action.payload;
        },
        addTextFilter: (state, action) => {
            state.textFilter = action.payload;
        },
        resetFilter: () => initialState,
    },
});

export const { addColorsFilter, addTextFilter, resetFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
