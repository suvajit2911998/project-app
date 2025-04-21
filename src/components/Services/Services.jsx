import React, { forwardRef } from 'react';

import './Services.css';

import SectionHeader from '../util/SectionHeader.jsx';
import { SERVICE_DATA } from '../data.js';
import Button from '../util/Button.jsx';


const Services = forwardRef((props, ref) => {
    return (
        <>
            <section className="thirdSec" id="ourServices" ref={ref}>
                <SectionHeader headerName={'OUR SERVICES'} />
                <ul className='thirdSec-list'>
                    {SERVICE_DATA.map(data => (<li key={data.id}>
                        <div className="service">
                            <img src={data.img} alt={data.servicename} />

                            <h4>{data.servicename}</h4>
                            <p>{data.des}</p>
                            <Button className='service-button'>Discover More</Button>
                        </div>
                    </li>))}
                </ul>
            </section>
        </>
    )
})

export default Services;