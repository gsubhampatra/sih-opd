import React, { useState } from 'react';

function AppointmentScheduler({ onSchedule }) {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleSubmit = () => {
    onSchedule(selectedDate);
  };

  return (
    <div className="max-w-lg p-4 mx-auto bg-white rounded-md shadow-md">
      <h2 className="mb-4 text-2xl font-bold">Schedule an Appointment</h2>
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        className="w-full p-2 mb-4 border rounded-md"
      />
      <button onClick={handleSubmit} className="px-4 py-2 text-white bg-blue-500 rounded-md">
        Schedule
      </button>
    </div>
  );
}

export default AppointmentScheduler;
