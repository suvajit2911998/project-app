import React from 'react';

import './FirstSecCom.css';
import Button from '../util/Button.jsx';

export default function FirstSecCom({ img, title, des }) {
    return (
        <>
            <div className='firstSec-holder'>
                <img src={img} alt="smallIcon" />
                <h3>{title}</h3>
                <p>{des} </p>
                <Button>Read More</Button>
            </div>

        </>
    )
}
