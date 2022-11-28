import React from 'react'
import { timeBg } from '../assets'

const DateContainer = ({ date }) => {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  console.log({ currentDate: date.getFullYear() });
  return (
    <div className='date-container'>
      <div className='center'>
        <p className='month-year'>{monthNames[date.getMonth()]}-{date.getFullYear()}</p>
        <p className='date'>{date.getDate()}</p>
      </div>
      <p className='today'>Today</p>
    </div>
  )
}

export default DateContainer
