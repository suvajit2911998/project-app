import React, { useState, useRef } from 'react';

import './ContactUsFrom.css';
import Modal from '../util/Modal.jsx';
import Button from '../util/Button.jsx';

export default function ContactUsFrom() {
    const [showModal, setShowModal] = useState(false);
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const handleSubmit = () => {
        const name = nameRef.current.value.trim();
        const email = emailRef.current.value.trim();
        const message = messageRef.current.value.trim();

        if (!name || !email || !message) {
            alert("Please fill all fields.");
            return;
        }

        setShowModal(true);
    };

    const handleClose = () => {
        nameRef.current.value = '';
        emailRef.current.value = '';
        messageRef.current.value = '';
        setShowModal(false);
    };

    return (
        <>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <input type="text" name="fname" placeholder="Enter Your Name" ref={nameRef} required />
                <br />
                <input type="email" name="email" placeholder="Enter your Email" ref={emailRef} required />
                <br />
                <textarea name="textarea" placeholder="Type your message..." required
                    ref={messageRef} style={{ width: "300px", height: "140px" }} />
                <br />

                <Button className='contactus-form__button' onClick={handleSubmit}>Send Message Now</Button>
            </form>

            {showModal && (
                <Modal>
                    <h2>Thanks for your feedback!</h2>
                    <button onClick={handleClose}>Close</button>
                </Modal>
            )}
        </>
    );
}
