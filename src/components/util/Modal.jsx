import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';

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
