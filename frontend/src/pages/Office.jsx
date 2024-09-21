import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar';

function Office() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState(null);
  const [availableDates, setAvailableDates] = useState([]);
  const [timeSlots, setTimeSlots] = useState({});
  
  // Need availability from database
  useEffect(() => {
    // Example fetching function; replace
    const fetchAvailability = async () => {
      // Mock data
      const fetchedDates = ['2024-09-21', '2024-09-23', '2024-09-24'];
      const fetchedTimeSlots = {
        '2024-09-21': ['9:00am', '9:35am', '10:10am', '10:45am', '11:20am'],
        '2024-09-23': ['9:00am', '9:35am', '10:10am', '10:45am', '11:20am'],
      };

      setAvailableDates(fetchedDates);
      setTimeSlots(fetchedTimeSlots);
      setSelectedDate(fetchedDates[0]); // Set default selected date
    };

    fetchAvailability();
  }, []);

  // Helper to format date for display
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: '64px' }}>
        <div className="app-container">
          <div className="appointment-header">
            <h1>Tutoring with Maya</h1>
            <p>60 min appointments</p>
          </div>

          <div className="calendar-container">
            <h2>Select an appointment time</h2>
            <div className="calendar">
              {availableDates.map((date) => (
                <button
                  key={date}
                  className={`calendar-date ${selectedDate === date ? 'selected' : ''}`}
                  onClick={() => setSelectedDate(date)}
                >
                  {formatDate(date)}
                </button>
              ))}
            </div>

            <div className="time-slots">
              <h3>{`Time Slots for ${formatDate(selectedDate)}`}</h3>
              {timeSlots[selectedDate] ? (
                timeSlots[selectedDate].map((time) => (
                  <button
                    key={time}
                    className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                ))
              ) : (
                <p>No time slots available</p>
              )}
            </div>
          </div>

          <div className="timezone-info">
            <p>(GMT-04:00) Eastern Time - New York</p>
          </div>

          {selectedTime && (
            <div className="confirmation">
              <h3>Selected Time:</h3>
              <p>
                {formatDate(selectedDate)} at {selectedTime}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Office;
