import React from 'react';
import ReactDOM from 'react-dom';

import '../ContactUs/ContactUsFrom.css';

export default function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal-box">
                {children}
            </div>
        </div>,
        document.getElementById('modal-root')
    );
}
