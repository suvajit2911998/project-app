import React from 'react';

import './SectionHeader.css';

export default function SectionHeader({ headerName }) {
    return (
        <h2 className="section-header">{headerName}</h2>
    )
}
