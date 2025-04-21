import React, { forwardRef } from 'react'

import './FirstSec.css';

import webDesign from '../../assets/web-design.png';
import centralized from '../../assets/centralized.png';
import techSupport from '../../assets/technical-support.png';
import cyberSecurity from '../../assets/cyber-security.png';

import FirstSecCom from './FirstSecCom.jsx';

const FirstSec = forwardRef((props, ref) => {
    return (
        <section className='firstSec' ref={ref} >
            <FirstSecCom
                img={webDesign}
                title='Web Design Service'
                des='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            />
            <FirstSecCom
                img={centralized}
                title='Centralized Data Storage'
                des='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            />
            <FirstSecCom
                img={techSupport}
                title='Technical Support'
                des='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            />
            <FirstSecCom img={cyberSecurity}
                title='Penetration Services'
                des='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            />
        </section>


    )
})

export default FirstSec;