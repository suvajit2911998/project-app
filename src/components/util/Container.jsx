import React from 'react'

import './Container.css';

export default function Container({ className, children }) {
    return (
        <div className={`section-container ${className}`} >{children}</div>
    )
}
