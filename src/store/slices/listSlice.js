import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: [],
};

const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        updateList: (state, action) => {
            // eslint-disable-next-line no-param-reassign
            state.list = [...state.list, action.payload];
        },
    },
});

export const { updateList } = listSlice.actions;

export default listSlice.reducer;
