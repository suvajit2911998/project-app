import React from 'react';

import './Header.css';

import UpperHeader from './UpperHeader.jsx';
import Nav from './Nav.jsx';
import HeaderContent from './HeaderContent.jsx';

function Header({ scrollToSection }) {

    return (
        <header>
            <UpperHeader />
            <Nav scrollToSection={scrollToSection} />
            <HeaderContent />
        </header>
    )
}

export default Header;