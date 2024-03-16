import React, { useState } from "react";

const CalendarInput = ({ label, onChange }) => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date);
    const epochTime = Date.parse(date) / 1000; // Convert to epoch time in seconds
    onChange(epochTime);
  };

  return (
    <div className="form-group">
      <label>{label}</label>
      <input type="date" value={selectedDate} onChange={handleDateChange} />
    </div>
  );
};

export default CalendarInput;
