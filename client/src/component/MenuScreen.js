import React, { useState } from "react";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import CancellationPath from "./CancellationPath";
import ReservationPath from "./ReservationPath";

const MenuScreen = ({ onButtonClick }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleButtonClick = (choice) => {
    setSelectedOption(choice);
  };

  const handleBackButtonClick = () => {
    setSelectedOption(null);
  };

  if (selectedOption === "Cancel") {
    return (
      <CancellationPath
        selectedReservation={null}
        onReservationChange={() => {}}
        onBackButtonClick={handleBackButtonClick}
      />
    );
  } else if (selectedOption === "Reserve") {
    return (
      <ReservationPath
        selectedDate={null}
        onDateChange={() => {}}
        onBackButtonClick={handleBackButtonClick}
      />
    );
  }
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
      <div
        style={{
          paddingTop: "20px",
          textAlign: "left",
          marginLeft: "20px",
        }}
      >
        <Button
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.816)",
            width: "40px",
          }}
          type="default"
          icon={<ArrowLeftOutlined />}
          onClick={handleBackButtonClick}
        ></Button>
        <div style={{ padding: "40px" }}></div>
      </div>
      <h1
        style={{
          color: "white",
          fontSize: "40px",
          border: "1px solid red",
          backgroundColor: "rgba(255, 0, 0, 0.51)",
        }}
      >
        Would you like to make a Reservation or Cancel?
      </h1>
      <div style={{ paddingTop: "30px" }}>
        <div>
          <div>
            <div style={{ paddingBottom: "20px" }}>
              <Button
                type="primary"
                style={{
                  backgroundColor: "red",
                  borderRadius: "20px",
                  color: "white",
                  width: "150px",
                  height: "54px",
                  fontSize: "20px",
                  fontWeight: "bold",
                  margin: "auto",
                }}
                onClick={() => handleButtonClick("Reserve")}
              >
                Reserve
              </Button>
            </div>
            <div>
              <Button
                type="danger"
                style={{
                  backgroundColor: "black",
                  borderRadius: "20px",
                  color: "white",
                  width: "220px",
                  height: "55px",
                  fontSize: "20px",
                  fontWeight: "bold",
                  margin: "auto",
                }}
                onClick={() => handleButtonClick("Cancel")}
              >
                Cancel Reservation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuScreen;
