import React from 'react';

import './MoreInfo.css';

export default function MoreInfo() {
    return (
        <div className="more-info">
            <div className='info-container'>

                <h2>
                    <i className="fa-solid fa-phone"></i>
                    Call Us for help</h2>
                <p>+ 91 123 456 789</p>
            </div>
            <div className='info-container'>
                <h2>
                    <i className="fa-solid fa-location-dot"></i>
                    Our locations</h2>
                <p>City, India</p>
            </div>
            <div className='info-container'>
                <h2>
                    <i className="fa-solid fa-envelope"></i>
                    Our Mail Address</h2>
                <p>email@gmail.com</p>
            </div>
            <div className='info-container'>
                <h2>
                    <i className="fa-solid fa-clock"></i>
                    Official Timing</h2>
                <p>Mon-Sat 9:00 - 7:00</p>

            </div>
        </div>
    )
}
