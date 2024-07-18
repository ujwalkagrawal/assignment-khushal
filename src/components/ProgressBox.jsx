/* eslint-disable react/prop-types */
import React from 'react';

import '../styles/_progressbox.scss';

function ProgressBox({ value }) {
    return (
        <div className="progress-box">
            <progress value={value} />
            <div className="progress-text">{`${value * 5}/5 Creatives`}</div>
        </div>
    );
}

export default ProgressBox;
