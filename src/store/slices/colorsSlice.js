import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    colors: [],
};

const colorsSlice = createSlice({
    name: 'colors',
    initialState,
    reducers: {
        addColors: (state, action) => {
            // eslint-disable-next-line no-param-reassign
            state.colors = action.payload;
        },
    },
});

export const { addColors } = colorsSlice.actions;

export default colorsSlice.reducer;
