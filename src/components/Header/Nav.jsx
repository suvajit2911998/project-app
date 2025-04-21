import React, { useState } from 'react';

import './Nav.css';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Nav({ scrollToSection }) {

    const [menuOpen, setMenuOpen] = useState(false);



    const scrollTo = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });

        // after click menu would be close 
        setMenuOpen(false);
    }

    return (
        <div className="container">
            <nav className='nav'>
                <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>


                <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
                    <li><a onClick={() => scrollTo(scrollToSection.homeRef)}>Home</a></li>
                    <li><a onClick={() => scrollTo(scrollToSection.aboutRef)}>About Us</a></li>
                    <li><a onClick={() => scrollTo(scrollToSection.servicesRef)}>Product & Services</a></li>
                    <li><a onClick={() => scrollTo(scrollToSection.testimonialRef)}>Career</a></li>
                    <li><a onClick={() => scrollTo(scrollToSection.contactRef)}>Contact Us</a></li>
                </ul>
            </nav>
        </div>

    )
}
