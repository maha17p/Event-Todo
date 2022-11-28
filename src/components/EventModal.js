import React from 'react'
import { CloseIcon } from '../assets/svgIcons'
import '../styles/eventmodal.css'

const EventModal = () => {
    return (
        <div className='modal'>
            <div className='modal-container'>
                <form className='modal-form'>
                    <h4 className='title'>Add Event Details</h4>
                    <div>
                        <label>Event Title</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Event Date</label>
                        <input type="date" />
                    </div>
                    <div className='btn-container'>
                        <button id='btn'>cancel</button>
                        <button id='btn'>submit</button>
                    </div>
                </form>

                <p class='close-icon'>
                    <CloseIcon />
                </p>
            </div>
        </div>
    )
}

export default EventModal
