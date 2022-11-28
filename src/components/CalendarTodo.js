import React, { useState } from 'react'
import DateContainer from './DateContainer';
import EventContainer from './EventContainer';
import EventModal from './EventModal';
import MainCalendar from './MainCalendar';


const CalendarTodo = () => {
  const [date, setDate] = useState(new Date())
  console.log({ date });
  return (
    <div className='calendar-container'>
      <DateContainer date={date} />
      <MainCalendar date={date} setDate={setDate} />
      <EventContainer date={date} />
      <EventModal />
    </div>
  )
}

export default CalendarTodo
