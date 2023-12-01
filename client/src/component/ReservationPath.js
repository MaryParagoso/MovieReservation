import React from "react";
import { Form, Select } from "antd"; // Import Form and Select from antd
import { Container, CancelWallpaper } from "../stylesheets/CssCancellation";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { CancelContainer } from "../stylesheets/CssCancellation";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const ReservationPath = ({ selectedDate, onDateChange, onBackButtonClick }) => {
  const navigate = useNavigate();

  const generateDateOptions = () => {
    const today = new Date();
    const dateOptions = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      const formattedDate = date.toISOString().split("T")[0];
      dateOptions.push(formattedDate);
    }

    return dateOptions;
  };

  const handleDateChange = (date) => {
    console.log('Handling date change:', date);
    navigate(`/movielist/${date}`);
  };

  return (
    <Container>
      <CancelWallpaper>
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
            onClick={onBackButtonClick}
          ></Button>
        </div>
        <h1
          style={{
            paddingTop: "80px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Reservation
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CancelContainer
            style={{
              alignItems: "center",
              border: "1px red solid",
            }}
          >
            <Form>
              <div style={{ backgroundColor: "white" }}>
                <Form.Item label="Select a Date:">
                  <Select
                    style={{ width: "100%", minWidth: "200px" }}
                    value={selectedDate}
                    onChange={handleDateChange}
                  >
                    {generateDateOptions().map((date) => (
                      <Option key={date} value={date}>
                        {date}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </div>
            </Form>
          </CancelContainer>
        </div>
      </CancelWallpaper>
    </Container>
  );
};

export default ReservationPath;
