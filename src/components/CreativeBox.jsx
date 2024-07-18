/* eslint-disable react/prop-types */
import React from 'react';

import '../styles/_creativebox.scss';

function CreativeBox({ data }) {
    const { title, subtitle, bgColor } = data;

    return (
        <div className="creative-box" style={{ backgroundColor: bgColor }}>
            <h1 className="creative-title">{title}</h1>
            <p className="creative-subtitle">{subtitle}</p>
        </div>
    );
}

export default CreativeBox;
