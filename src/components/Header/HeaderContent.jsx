import React from 'react';

import './HeaderContent.css';
import fortImg from '../../assets/fontImg2.jpg';

export default function HeaderContent() {
    return (
        <>
            <div className="mainHeading">
                <div className="headingText">
                    <h1>
                        Empower The <span>Innovations</span>
                    </h1>
                </div>
                <div className="fontImg">
                    <img src={fortImg} alt="mainImage" />
                </div>
            </div>


        </>
    )
}
