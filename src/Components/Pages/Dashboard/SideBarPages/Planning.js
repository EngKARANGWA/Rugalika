import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import calendar styles
import '../SideBarPages/SideBarCss/Planning.css'; // Import your custom styles

const Planning = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [eventTitle, setEventTitle] = useState('');
  const [eventTime, setEventTime] = useState('');

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleAddEvent = () => {
    if (eventTitle && eventTime) {
      const newEvent = {
        title: eventTitle,
        time: eventTime,
        date: date.toDateString(),
      };
      setEvents([...events, newEvent]);
      setEventTitle('');
      setEventTime('');
    }
  };

  return (
    <div className="planning-container">
      <h1>Planning Page</h1>
      <div className="calendar-container">
        <Calendar onChange={handleDateChange} value={date} />
      </div>
      <div className="event-form">
        <h2>Add Event</h2>
        <input
          type="text"
          placeholder="Event Title"
          value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)}
        />
        <input
          type="time"
          value={eventTime}
          onChange={(e) => setEventTime(e.target.value)}
        />
        <button onClick={handleAddEvent}>Add Event</button>
      </div>
      <div className="event-list">
        <h2>Events on {date.toDateString()}</h2>
        <ul>
          {events
            .filter((event) => event.date === date.toDateString())
            .map((event, index) => (
              <li key={index}>
                {event.title} at {event.time}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Planning;