// SeatLayout.js
import React, { useState } from "react";
import SeatMap from "../component/SeatMap";
import seatData from "../component/SeatData";

const SeatLayout = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const bookedSeats = ["A4", "B2", "C1"]; // Replace this with your actual booked seats from the database

  const handleSeatClick = (selectedSeat) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(selectedSeat)
        ? prevSelectedSeats.filter((seat) => seat !== selectedSeat)
        : [...prevSelectedSeats, selectedSeat]
    );
  };

  const handleProceedClick = () => {
    // Assuming you want to log the selected seats for now
    console.log("Selected Seats:", selectedSeats);

    // TODO: Add logic to proceed with the selected seats (e.g., send to backend)
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        height: "100vh",
        backgroundImage: `url("https://raw.githubusercontent.com/kishan0725/AJAX-Movie-Recommendation-System-with-Sentiment-Analysis/master/static/image.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center ",
      }}
    >
      <div style={{ textAlign: "center", paddingTop: "100px" }}>
        <h1 style={{ fontWeight: "bold", color: "white" }}>Seat Map</h1>
        <div style={{ border: "1px solid red" }}>
          <SeatMap
            seatData={seatData}
            onSeatClick={handleSeatClick}
            bookedSeats={bookedSeats}
          />

          <button onClick={handleProceedClick}>Proceed</button>
        </div>
      </div>
    </div>
  );
};

export default SeatLayout;
