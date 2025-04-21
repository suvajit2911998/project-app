import React from 'react';

import './UpperHeader.css';
import { MdEmail } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";



export default function UpperHeader() {
    return (
        <div className="upperNav">
            <p className="description">Welcome to our It solution company</p>
            <div className='icon-upperNav'>
                <MdEmail style={{ color: '#00e1ff' }} />
                <p className="mail">support@moxquel.com</p>
            </div>
            <div className='icon-upperNav'>
                <FaGlobe style={{ color: '#00e1ff' }} />
                <p className="address">www.moxquel.com</p>
            </div>
        </div>
    )
}
