import React from 'react';
import PropTypes from 'prop-types';


export const Button = ({ onClick, btnName, className, variant, id }) => {

    return (
        <button
            onClick={onClick}
            className={className}
            style={variant}
            id={id}
        >
            {btnName}
        </button>
    )
};

Button.propTypes = {
    btnName: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.any,
    variant: PropTypes.object,
    id: PropTypes.any
}