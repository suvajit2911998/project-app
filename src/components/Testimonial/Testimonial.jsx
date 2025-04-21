import React, { forwardRef } from 'react'

import './Testimonial.css';
import HeaderGroup from '../util/HeaderGroup.jsx';
import { TESTIMONIAL__DATA } from '../testimonialData.js';

const Testimonial = forwardRef((props, ref) => {
    return (
        <>
            <section ref={ref} className="carrier" id="carrier">
                <HeaderGroup text='TESTIMONIAL'>
                    We Provided Best Place For Start
                    <span className="color"> Your</span> Carrier
                </HeaderGroup >
                <div>
                    <ul className="carrier-flex">
                        {TESTIMONIAL__DATA.map(data => <li key={data.id}>
                            <div className="option">
                                <img src={data.img} alt={`Img of ${data.name}`} />
                                <p className="FirstOne">{data.des}</p>
                                <p className="name">{data.name} </p>
                                <p className='role'>{data.role}</p>
                            </div>
                        </li>)}
                    </ul>

                </div>
            </section>
        </>
    )
})

export default Testimonial