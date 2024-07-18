/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { useSelector } from 'react-redux';

import CreativeBox from './CreativeBox';
import Button from './Button';

import '../styles/_listcontainer.scss';

function ListContainer({ handleAddCreative, isDrawerVisible }) {
    const [contentList, setContentList] = useState([]);
    const { list } = useSelector((state) => state.list);
    const { colorsFilter, textFilter } = useSelector((state) => state.filters);

    const checkDisable = () => isDrawerVisible || list.length >= 5;

    useEffect(() => {
        if (list.length) {
            setContentList([...list]);
        }
    }, [list]);

    useEffect(() => {
        if (colorsFilter) {
            const colorsList = list.filter((l) => l.bgColor === colorsFilter);
            setContentList(colorsList);
        }
        if (textFilter) {
            const textList = list.filter((l) => l.title === textFilter || l.subtitle === textFilter);
            setContentList(textList);
        }
        if (!colorsFilter && !textFilter) {
            setContentList(list);
        }
    }, [colorsFilter, textFilter]);

    return (
        <div className="list-container">
            <Button onClick={handleAddCreative} buttonStyle={`${checkDisable() && 'disable-add-creative-btn'} add-creative-btn`} disabled={checkDisable()}>
                <IoMdAdd size={30} />
                <span>Add Creative</span>
            </Button>
            <div className="box-list">
                {colorsFilter || textFilter ? (
                    <span>No matches Found</span>
                ) : (contentList.length > 0 && contentList.map((data) => (
                    <CreativeBox key={data.bgColor} data={data} />
                )))}
            </div>
        </div>
    );
}

export default ListContainer;
