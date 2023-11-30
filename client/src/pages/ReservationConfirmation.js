import React, { useState } from "react";
import { Layout } from "antd";
import { contentStyle, breadcrumbStyle } from "../stylesheets/layout";
import { ReservationDetails } from "../component/ReservationDetails";
import ReservationPriceCalculator from "../component/ReservationPriceCalculator";
import UniqueIDGenerator from "../component/UniqueIDGenerator";

const { Content } = Layout;

const ReservationConfirmation = () => {
  // Destructure values from ReservationDetails
  const { date, cinemaNumber, movieName, isPremium, timeSlots, seatNumbers } =
    ReservationDetails;

  // State to track senior citizen status
  const [seniorCitizenStatus, setSeniorCitizenStatus] = useState(
    Array(seatNumbers.length).fill(false)
  );

  // State to store total price
  const [totalPrice, setTotalPrice] = useState(0);

  // Handle button click for a seat
  const handleSeatButtonClick = (seatIndex) => {
    // Toggle senior citizen status for the clicked seat
    const updatedStatus = seniorCitizenStatus.map((status, index) =>
      index === seatIndex ? !status : status
    );
    setSeniorCitizenStatus(updatedStatus);
  };

  // Function to calculate total price
  const calculateTotalPrice = () => {
    let totalPrice = 0;

    seatNumbers.forEach((seat, index) => {
      const ticketPrice = isPremium ? 500 : 350;
      const discountedPrice = seniorCitizenStatus[index]
        ? ticketPrice * 0.8
        : ticketPrice;

      totalPrice += discountedPrice;
    });

    return totalPrice;
  };

  // Function to generate a reservation
  // Function to generate a reservation
  const generateReservation = () => {
    const reservationNumber = UniqueIDGenerator.generateReservationID(date);

    // Create an array to store seat and ticket information
    const seatInfo = seatNumbers.map((seat, index) => {
      const ticketNumber = UniqueIDGenerator.generateTicketID(
        cinemaNumber,
        date
      );
      return { seatNumber: seat.seatNumber, ticketNumber };
    });

    // Display a prettified message box
    window.alert(`
    Reservation Details:
    Reservation Number: ${reservationNumber}
    Movie Name: ${movieName}
    Cinema Number: ${cinemaNumber}
    Date: ${date}
    Time Slots: ${timeSlots.join(", ")}
    Total Price: ${totalPrice} PHP
    Selected Seats and Ticket Numbers:
    ${seatInfo
      .map((info) => `Seat ${info.seatNumber}: Ticket ${info.ticketNumber}`)
      .join("\n")}
  `);
  };

  return (
    <div>
      <Layout>
        <Content style={contentStyle}>
          <div style={breadcrumbStyle}>
            <h1>Reservation Confirmation</h1>
          </div>
          <p>Date: {date}</p>
          <p>Cinema Number: {cinemaNumber}</p>
          <p>Movie Name: {movieName}</p>
          {isPremium ? <p>Premium: {isPremium.toString()}</p> : null}
          <p>Time Slots: {timeSlots.join(", ")}</p>
          <p>Selected Seats:</p>

          {seatNumbers.map((seat, index) => (
            <div key={index}>
              <button
                onClick={() => handleSeatButtonClick(index)}
                style={{
                  backgroundColor: seniorCitizenStatus[index]
                    ? "gold"
                    : "transparent",
                }}
              >
                {seat.seatNumber}{" "}
                {seniorCitizenStatus[index] ? "(Senior Citizen)" : ""}
              </button>
            </div>
          ))}

          <ReservationPriceCalculator
            seatNumbers={seatNumbers}
            seniorCitizenStatus={seniorCitizenStatus}
            isPremium={isPremium}
            onPriceChange={(newPrice) => setTotalPrice(newPrice)}
          />

          <button onClick={generateReservation}>Generate Reservation</button>
        </Content>
      </Layout>
    </div>
  );
};

export default ReservationConfirmation;
