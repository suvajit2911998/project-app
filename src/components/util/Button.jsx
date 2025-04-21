import React from 'react';

import './Button.css';

const Button = ({
    onClick,
    children,
    className = '',
    type = 'button',
    disabled = false,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`button ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
