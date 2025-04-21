import React, { forwardRef } from 'react';

import './ContactUs.css';
import HeaderGroup from '../util/HeaderGroup.jsx';
import MoreInfo from './MoreInfo.jsx';
import ContactUsFrom from './ContactUsFrom.jsx';

const ContactUs = forwardRef((props, ref) => {
    return (
        <section ref={ref} className="fourthSec" id="contactUs">

            <HeaderGroup text={'CONTACT US'} >
                It's very easy to <span className='color'>contact</span> us
            </HeaderGroup>
            <div className='fourthSec-container'>
                <ContactUsFrom />
                <MoreInfo />
            </div>
        </section>

    )
})

export default ContactUs;