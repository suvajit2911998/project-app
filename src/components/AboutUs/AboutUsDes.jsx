import React from 'react'

import './AboutUsDes.css';

import moneyBackImg from '../../assets/money-back-guarantee.png';
import techSupportImg from '../../assets/technical-support.png';
import AboutUsImg from './AboutUsImg';
import Button from '../util/Button.jsx';

function AboutUsDes() {
    return (
        <>
            <div className="aboutus-rightSide">
                <h2 className="headline">Choose
                    <span>The Best</span>  It Service Company
                </h2>
                <p>Over 10 years of experience we’ll ensure you always get the best guidance. We serve a client at every level of their organization we can be most whether as a trusted advisor to top trusted our management coach for fronts line employees. We strive to build a relationship of trust with every client, for the long-terms.
                </p>

                <div className='aboutus-img__container'>
                    <AboutUsImg img={moneyBackImg} title='Moneyback Guarantee' />
                    <AboutUsImg img={techSupportImg} title='Technical Support' />
                </div>
                <Button className='aboutus-button'> Contact Us</Button>
            </div>
        </>
    )
}

export default AboutUsDes;