import React from 'react'
import { useSelector } from 'react-redux';
function Modal(props) {
    const component = useSelector((state) => state.modal.component);
    return (
        <div className="modal">
            <div className="modal__overlay" />
            <div className="modal__body">
                <div className="modal__inner">
                    {component}
                </div>
            </div>
        </div>
    )
}



export default Modal

