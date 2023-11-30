// components/SeatMap.js
import React, { useState } from "react";
import { Button, Space } from "antd";
import "../stylesheets/seatmap.css";

const generateSeatData = () => {
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const columns = ["1", "2", "3", "4", "5"];

  const seatData = [];

  rows.forEach((row) => {
    const rowSeats = columns.map((column) => ({
      seat_name: row + column,
      availability: "available",
    }));
    seatData.push(rowSeats);
  });

  return seatData;
};

const SeatMap = ({ onSeatClick, bookedSeats }) => {
  const [seats, setSeats] = useState(generateSeatData());

  const handleSeatClick = (rowIndex, columnIndex) => {
    const updatedSeats = [...seats];
    const seat = updatedSeats[rowIndex][columnIndex];

    // Toggle between 'available' and 'selected'
    seat.availability =
      seat.availability === "available" ? "selected" : "available";

    setSeats(updatedSeats);

    // Pass the seat information to the parent component
    onSeatClick(seat);
  };

  return (
    <div>
      {seats.map((row, rowIndex) => (
        <div key={rowIndex} className="seat-row">
          {row.map((seat, columnIndex) => (
            <Button
              key={seat.seat_name}
              type={
                seat.availability === "selected"
                  ? "danger"
                  : bookedSeats.includes(seat.seat_name)
                  ? "default"
                  : "primary"
              }
              className="seat"
              onClick={() => handleSeatClick(rowIndex, columnIndex)}
              disabled={bookedSeats.includes(seat.seat_name)}
              style={{ padding: "8px" }} // Add this line for padding
            >
              {seat.seat_name}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SeatMap;
