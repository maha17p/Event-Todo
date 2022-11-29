import React from 'react'
import { empty } from '../assets'

const EventContainer = ({date}) => {
  return (
    <div className='event-container'>
     <img src={empty} alt="empty" />
    </div>
  )
}

export default EventContainer
