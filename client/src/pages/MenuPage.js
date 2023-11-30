import React, { Component } from "react";
import MenuScreen from "../component/MenuScreen";
import ReservationPath from "../component/ReservationPath";
import CancellationPath from "../component/CancellationPath";

class MenuPage extends Component {
  constructor(props) {
    super(props);

    // Initialize state using the constructor
    this.state = {
      selectedOption: null,
      selectedDate: null,
      selectedReservation: null,
    };

    // Bind the method to the current instance
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  // Method to handle button click
  handleButtonClick(choice) {
    this.setState({
      selectedOption: choice,
    });
  }

  render() {
    const { selectedOption, selectedDate, selectedReservation } = this.state;

    return (
      <div>
        {selectedOption === null ? (
          <MenuScreen onButtonClick={this.handleButtonClick} />
        ) : (
          <div>
            {selectedOption === "Reserve" ? (
              <ReservationPath
                selectedDate={selectedDate}
                onDateChange={(selectedDate) => this.setState({ selectedDate })}
              />
            ) : (
              <CancellationPath
                selectedReservation={selectedReservation}
                onReservationChange={(selectedReservation) =>
                  this.setState({ selectedReservation })
                }
              />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default MenuPage;
