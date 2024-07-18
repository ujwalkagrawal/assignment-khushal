/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { RxCrossCircled } from 'react-icons/rx';

import '../styles/_colorsbox.scss';
import { useSelector } from 'react-redux';

function Colors({ handleClick }) {
    const { colors } = useSelector((state) => state.colors);
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [currentId, setCurrentId] = useState('');

    useEffect(() => {
        if (colors.length) {
            setIsLoading(false);
            setError();
        } else if (!colors.length) {
            setIsLoading(false);
            setError('Unable to load the colors please try again later');
        }
    }, [colors]);

    const handleColorSelect = (color) => {
        setCurrentId(color);
        handleClick(color);
    };

    const handleResetClick = () => {
        setCurrentId('');
        setError();
        handleClick('');
    };

    return (
        <section className="colors-list-container">
            {isLoading && (
                <TailSpin
                    visible
                    height="40"
                    width="40"
                    color="#4fa94d"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    strokeWidth="5"
                />
            )}
            {!isLoading && error && (
                <span>Unable to Loader to Colors</span>
            )}
            {!isLoading && colors.length > 0 && (
                <div className="colors-box">
                    {
                        colors.map((color) => (
                            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                            <div key={color} className={`dot-box ${currentId === color && 'active-dot-box'}`} onClick={() => handleColorSelect(color)} tabIndex={0} role="button" aria-label="Select color">
                                <div className={`color-dot ${currentId === color && 'active-color-dot'}`} style={{ backgroundColor: color }} />
                            </div>
                        ))
                    }
                </div>
            )}
            {currentId && <RxCrossCircled size={18} onClick={handleResetClick} style={{ cursor: 'pointer' }} />}
        </section>
    );
}

export default Colors;
