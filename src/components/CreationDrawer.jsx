/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ImCross } from 'react-icons/im';
import { CiCircleAlert } from 'react-icons/ci';

import '../styles/_drawer.scss';
import Colors from './Colors';
import Button from './Button';

import { updateList } from '../store/slices/listSlice';

function CreationDrawer({ handleCancelClick }) {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [subtitle, setSubTitle] = useState('');
    const [bgColor, setBgColor] = useState('');
    const [error, setError] = useState();
    const handleDoneClick = () => {
        if (title && subtitle && bgColor) {
            dispatch(updateList({
                title, subtitle, bgColor,
            }));
            handleCancelClick();
            setError(false);
        } else {
            setError(true);
        }
    };
    return (
        <aside>
            <div className="cancel-section">
                <ImCross size={25} onClick={() => handleCancelClick(false)} style={{ cursor: 'pointer' }} />
            </div>
            <section>
                <div className="input-container">
                    <span className="creation-title">
                        title
                    </span>
                    <input className="creation-input" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="input-container">
                    <span className="creation-title">
                        subtitle
                    </span>
                    <input className="creation-input" value={subtitle} onChange={(e) => setSubTitle(e.target.value)} />
                </div>
                <div className="colors-selection-box">
                    <span>background color</span>
                    <Colors handleClick={setBgColor} />
                </div>
                {error && (
                    <div className="error-container">
                        <CiCircleAlert />
                        <span>All fields are required</span>
                    </div>
                )}
                <Button className="done-btn" onClick={handleDoneClick}>
                    Done
                </Button>
            </section>
        </aside>
    );
}

export default CreationDrawer;
