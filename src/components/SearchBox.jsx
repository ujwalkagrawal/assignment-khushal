import React, { useState, useEffect } from 'react';

import '../styles/_searchbox.scss';
import useDebounce from '../hooks/useDebounce';

// eslint-disable-next-line react/prop-types
function SearchBox({ handleSearchInput }) {
    const [value, setValue] = useState('');
    const inputQuery = useDebounce(value, 1000);

    useEffect(() => {
        handleSearchInput(inputQuery);
    }, [inputQuery]);

    return (
        <div className="search-box">
            <div className="title-text">title / subtitle:</div>
            <input value={value} onChange={(e) => setValue(e.target.value)} className="search-input" />
        </div>
    );
}

export default SearchBox;
