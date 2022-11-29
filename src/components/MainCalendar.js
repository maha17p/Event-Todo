import React from 'react'
import Calendar from 'react-calendar';
import '../styles/calendar.css'

const MainCalendar = ({ date, setDate,  setOpenModal  }) => {
  const clickDayHandler = value => {
    setOpenModal(prev => !prev)
    console.log(value);
  }
  return (
    <div className='main-calendar-container'>
      <Calendar onClickDay={(value) =>clickDayHandler(value)} onChange={setDate} value={date} />
    </div>
  )
}

export default MainCalendar
