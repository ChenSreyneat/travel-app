'use client'
import React, { useState } from "react";
import '../layout'

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const daysInMonth = [];
  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    daysInMonth.push(i);
  }

  const startDay = firstDayOfMonth.getDay();
  const paddedDays = new Array(startDay === 0 ? 6 : startDay - 1).fill(null).concat(daysInMonth);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-5">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={handlePrevMonth}
          className="text-gray-600 hover:text-gray-900 p-2 transition"
        >
          &lt;
        </button>
        <h3 className="font-semibold text-xl text-gray-800">
          {monthNames[month]} {year}
        </h3>
        <button
          onClick={handleNextMonth}
          className="text-gray-600 hover:text-gray-900 p-2 transition"
        >
          &gt;
        </button>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 gap-2 text-center font-medium text-gray-500 mb-4">
        {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
          <div key={day} className="text-sm">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {paddedDays.map((day, index) => (
          <div
            key={index}
            className={`h-12 w-12 flex items-center justify-center rounded-lg ${
              day
                ? "bg-gray-50 hover:bg-blue-100 text-gray-800 font-medium cursor-pointer"
                : "bg-transparent"
            }`}
          >
            {day ? (
              <span>{day}</span>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
