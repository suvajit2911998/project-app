import React, { useRef } from 'react';

import AboutUs from './components/AboutUs/AboutUs.jsx';
import ContactUs from './components/ContactUs/ContactUs.jsx';
import FirstSec from './components/FirstSection/FirstSec.jsx';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Services from './components/Services/Services.jsx';
import Testimonial from './components/Testimonial/Testimonial.jsx';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Header scrollToSection={{ homeRef, aboutRef, servicesRef, testimonialRef, contactRef }} />
      <main>
        <FirstSec ref={homeRef} />
        <AboutUs ref={aboutRef} />
        <Services ref={servicesRef} />
        <Testimonial ref={testimonialRef} />
        <ContactUs ref={contactRef} />
      </main>
      <Footer />
    </>
  )
}

export default App
