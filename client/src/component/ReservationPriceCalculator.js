// ReservationPriceCalculator.js
import React from "react";

const ReservationPriceCalculator = ({
  seatNumbers,
  seniorCitizenStatus,
  isPremium,
}) => {
  const regularTicketPrice = 350;
  const premiumTicketPrice = 500;
  const seniorCitizenDiscount = 0.2; // 20%

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    seatNumbers.forEach((seat, index) => {
      const ticketPrice = isPremium ? premiumTicketPrice : regularTicketPrice;
      const discountedPrice =
        seniorCitizenStatus[index] && !isPremium
          ? ticketPrice * (1 - seniorCitizenDiscount)
          : ticketPrice;

      totalPrice += discountedPrice;
    });

    return totalPrice;
  };

  return (
    <div>
      <p>Total Price: {calculateTotalPrice()} PHP</p>
    </div>
  );
};

export default ReservationPriceCalculator;
