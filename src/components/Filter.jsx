import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Colors from './Colors';

import '../styles/_filter.scss';
import SearchBox from './SearchBox';
import { addColorsFilter, addTextFilter } from '../store/slices/filtersSlice';

function Filter() {
    const [inputQuery, setInputQuery] = useState('');
    const dispatch = useDispatch();

    const handleColorPress = (color) => {
        dispatch(addColorsFilter(color));
    };

    useEffect(() => {
        dispatch(addTextFilter(inputQuery));
    }, [inputQuery]);

    return (
        <section className="filter-box">
            <h1 className="filter-box-title">Filter By</h1>
            <div className="filters-type">
                <div className="colors-container">
                    <div className="color-text">color:</div>
                    <Colors handleClick={handleColorPress} />
                </div>
                <div className="search-box"><SearchBox handleSearchInput={setInputQuery} /></div>
            </div>
        </section>
    );
}

export default Filter;
