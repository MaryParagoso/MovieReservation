import React from "react";
import { Form, Select } from "antd";
import {
  CancelContainer,
  Container,
  SelectContainer,
  CancelWallpaper,
} from "../stylesheets/CssCancellation";
import reservationNumbers from "./ReservationNumber";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const { Option } = Select;

const CancellationPath = ({
  selectedReservation,
  onReservationChange,
  onBackButtonClick,
}) => {
  const handleBackButtonClick = () => {
    onBackButtonClick();
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
            onClick={handleBackButtonClick}
          ></Button>
        </div>
        <h1
          style={{
            paddingTop: "80px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Cancellation
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CancelContainer style={{ alignItems: "center" }}>
            <Form>
              <Form.Item
                label="Search and Select Reservation:"
                style={{ fontWeight: "bold", paddingTop: "10px" }}
              >
                <SelectContainer>
                  <Select
                    showSearch
                    value={selectedReservation}
                    onChange={onReservationChange}
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    style={{ width: "100%", minWidth: "200px" }}
                  >
                    {reservationNumbers.map((reservation) => (
                      <Option key={reservation} value={reservation}>
                        {reservation}
                      </Option>
                    ))}
                  </Select>
                </SelectContainer>
              </Form.Item>
            </Form>
          </CancelContainer>
        </div>
      </CancelWallpaper>
    </Container>
  );
};

export default CancellationPath;
