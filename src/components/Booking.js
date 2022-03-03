import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./bookingstyles.css";

const Booking = () => {
  const [bookingDate, setBookingDate] = useState("");
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookingTimes, setBookingTimes] = useState([]);

  const times = [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "1:00",
    "2:00",
    "3:00",
    "4:00",
  ];

  useEffect(() => {
    if (!bookingDate) return;

    setBookingTimes(times);
  }, [bookingDate]);

  const onDateChange = (e) => {
    // setSelectedTime(null);
    setBookingDate(e);
  };

  const onSubmit = () => {
    let day = JSON.stringify(bookingDate);

    let date = day.split("T").splice(0, 1).toString() + ` ${selectedTime}`;

    let newDate = new Date(date);

    axios
      .post("/api/book", {
        newDate,
      })
      .then((res) => {
        alert("Appointment booked successfully!");
        console.log(res.data);
      });
  };

  // console.log(bookingDate);

  return (
    <div id="bookingDiv">
      <h2>Book appointment</h2>
      <div>
        <Calendar
          value={bookingDate}
          onChange={(value, event) => {
            // alert("new date is", value);
            onDateChange(value);
          }}
        />
        <div className="booking-buttons">
          {!bookingDate
            ? null
            : times.map((time) => {
                return (
                  <button
                    key={time}
                    className="bookButtons"
                    onClick={(e) => setSelectedTime(e.target.value)}
                  >
                    {time}
                  </button>
                );
              })}
        </div>
        <button
          className="bookButtons"
          // disabled={!selectedTime || !bookingDate}
          onClick={() => onSubmit()}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Booking;
