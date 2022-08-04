import React, { useState } from "react";
import classNames from "classnames";

export default function Seat(props) {
  const { seat, addToBookSeats, removeFromBookSeats } = props;
  const [booking, setBooking] = useState(false);

  const addSeat = () => {
    addToBookSeats(seat);
    setBooking(!booking);
  };

  const removeSeat = () => {
    removeFromBookSeats(seat);
    setBooking(!booking);
  };

  const seatClass = classNames("btn btn-secondary", {
    seat: true,
    "btn-success": !seat.daDat && booking,
    "btn-info": !seat.daDat && !booking && seat.loaiGhe === "Thuong",
    "btn-warning": !seat.daDat && !booking && seat.loaiGhe === "Vip",
  });

  return (
    <div
      className={
        seat.daDat ? "pointer d-inline-block" : "pointer d-inline-block"
      }
    >
      <button
        disabled={seat.daDat}
        className={seatClass}
        onClick={booking ? removeSeat : addSeat}
        style={{ width: 50, height: 50, margin: 5 }}
      >
        {booking ? seat.numChair : ""}
      </button>
    </div>
  );
}
