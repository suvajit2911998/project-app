import React, { forwardRef } from 'react';

import './AboutUs.css';
import aboutPic from '../../assets/aboutPic.jpg';

import SectionHeader from '../util/SectionHeader.jsx';
import AboutUsDes from './AboutUsDes.jsx';

const AboutUs = forwardRef((props, ref) => {
    return (
        <section className='secondSec' ref={ref}>
            <SectionHeader headerName='About Our Company' />
            <div className='secondSec-container'>
                <figure>
                    <img src={aboutPic} alt="companyImage" />
                </figure>
                <AboutUsDes />
            </div>
        </section>
    )
})

export default AboutUs;  