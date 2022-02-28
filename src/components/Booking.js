import React, { useState } from "react";

const Booking = () => {
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
      />

      <label id="sessionTimeP" for="appt-time">
        Select an appointment time:{" "}
      </label>
      <input
        id="sessionTime"
        list="times"
        type="time"
        name="appt-time"
        value="00:00"
        step="3600"
      />

      <datalist id="times">
        <option value="00:00:00" />
        <option value="01:00:00" />
        <option value="02:00:00" />
        <option value="03:00:00" />
        <option value="04:00:00" />
        <option value="05:00:00" />
        <option value="06:00:00" />
        <option value="07:00:00" />
        <option value="08:00:00" />
        <option value="09:00:00" />
        <option value="10:00:00" />
        <option value="11:00:00" />
        <option value="12:00:00" />
        <option value="13:00:00" />
        <option value="14:00:00" />
        <option value="15:00:00" />
        <option value="16:00:00" />
        <option value="17:00:00" />
        <option value="18:00:00" />
        <option value="19:00:00" />
        <option value="20:00:00" />
        <option value="21:00:00" />
        <option value="22:00:00" />
        <option value="23:00:00" />
      </datalist>

      <button id="bookSession">Book appointment!</button>
    </div>
  );
};

export default Booking;
