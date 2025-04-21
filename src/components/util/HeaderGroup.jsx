import React from 'react'

import './HeaderGroup.css';
import SectionHeader from './SectionHeader.jsx';

export default function HeaderGroup({ text, children }) {
    return (
        <hgroup>
            <SectionHeader headerName={text} />
            <h3>{children}</h3>
        </hgroup>
    )
}
