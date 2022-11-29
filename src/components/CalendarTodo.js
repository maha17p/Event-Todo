import React, { useState } from 'react'
import DateContainer from './DateContainer';
import EventContainer from './EventContainer';
import EventModal from './EventModal';
import MainCalendar from './MainCalendar';


const CalendarTodo = () => {
  const [date, setDate] = useState(new Date());
  const [openModal, setOpenModal] = useState(false);

  console.log({ date });
  return (
    <div className='calendar-container'>
      <DateContainer date={date} />
      <MainCalendar date={date} setDate={setDate} setOpenModal={ setOpenModal } />
      <EventContainer  date={date} />
     { openModal &&  <EventModal setOpenModal={ setOpenModal } />}
    </div>
  )
}

export default CalendarTodo
