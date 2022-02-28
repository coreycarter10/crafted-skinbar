import React, { useState } from "react";
import axios from "axios";

const Booking = () => {
  const [time, setTime] = useState("");
  const [day, setDay] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/book", {
        time,
        day,
      })
      .then((res) => {
        alert("Appointment booked successfully!");
        console.log(res.data);
      });
  };

  return (
    <div id="bookingDiv">
      <label id="selectDay" for="start">
        Select day:
      </label>

      <input
        type="date"
        id="sessionDate"
        name="trip-start"
        value="2022-01-01"
        min="2022-01-01"
        max="2022-12-31"
        onChange={(e) => {
          setDay(e.target.value);
        }}
      />

      <label id="sessionTimeP" for="appt-time">
        Select an appointment time:{" "}
      </label>
      <input
        id="appointmentTime"
        list="times"
        type="time"
        name="appt-time"
        value="00:00"
        step="3600"
        onChange={(e) => {
          setTime(e.target.value);
        }}
      />

      <datalist id="times">
        <option value="09:00:00" />
        <option value="10:00:00" />
        <option value="11:00:00" />
        <option value="12:00:00" />
        <option value="13:00:00" />
        <option value="14:00:00" />
        <option value="15:00:00" />
        <option value="16:00:00" />
        <option value="17:00:00" />
      </datalist>

      <button className="button" onClick={onSubmit}>
        Book appointment!
      </button>
    </div>
  );
};

export default Booking;
