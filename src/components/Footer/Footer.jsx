import React from 'react';

import './Footer.css';
import Button from '../util/Button.jsx';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-flex">
                <div className='footer-des'>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum deleniti aliquam architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, perferendis.</p>
                    <Button>About Us</Button>
                </div>
                <div className='footer-links'>
                    <h2>Help Links</h2>
                    <ul>
                        <li>Customer Services</li>
                        <li>It Department</li>
                        <li>About our Company</li>
                        <li>Make an appointment</li>
                    </ul>
                </div>
                <div className='footer-info'>
                    <h2>Official Info</h2>
                    <div className="info1">
                        <p> For Call</p>
                        <p>91 123 345 678</p>
                    </div>

                    <div className="info2">
                        <p>Send Us Email</p>
                        <p>abdc@gmail.com</p>
                    </div>

                    <div className="info3">
                        <p>Address </p>
                        <p>city,India</p>
                    </div>
                </div>
            </div>
            <p className="footerEnd">All rights reserved.</p>
        </footer>
    )
}

export default Footer;