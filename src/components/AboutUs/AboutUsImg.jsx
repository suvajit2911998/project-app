import React from 'react'

import './AboutUsImg.css';

export default function AboutUsImg({ img, title }) {
    return (
        <div className='aboutus-img__position'>
            <img src={img} alt="moneyback" className="money" />
            <h3 className="head1">{title}</h3>
        </div>
    )
}
