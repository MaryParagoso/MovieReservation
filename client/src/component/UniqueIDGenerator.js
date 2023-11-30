// UniqueIDGenerator.js
const UniqueIDGenerator = {
  // Function to generate a reservation ID
  generateReservationID: (date) => {
    const randomDigits = Math.floor(Math.random() * 10000);
    return `RES${date}${randomDigits}`;
  },

  // Function to generate a ticket ID
  generateTicketID: (cinemaNumber, date) => {
    const randomDigits = Math.floor(Math.random() * 1000);
    return `TCK${cinemaNumber}${date}${randomDigits}`;
  },
};

export default UniqueIDGenerator;
