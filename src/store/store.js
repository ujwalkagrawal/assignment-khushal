/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';

import colorsReducer from './slices/colorsSlice';
import listReducer from './slices/listSlice';
import filtersReducer from './slices/filtersSlice';

export const store = configureStore({
    reducer: {
        colors: colorsReducer,
        list: listReducer,
        filters: filtersReducer,
    },
});
