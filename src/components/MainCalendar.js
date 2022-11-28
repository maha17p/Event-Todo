import React from 'react'
import Calendar from 'react-calendar';
import '../styles/calendar.css'

const MainCalendar = ({ date, setDate }) => {
  return (
    <div className='main-calendar-container'>
      <Calendar onChange={setDate} value={date} />
    </div>
  )
}

export default MainCalendar
