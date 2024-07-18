/* eslint-disable react/prop-types */
import React from 'react';

function Button({
    buttonStyle, children, ...props
}) {
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <button className={`${buttonStyle} btn`} type="button" {...props}>{children}</button>
    );
}

export default Button;
