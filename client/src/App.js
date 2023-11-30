import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import MenuPage from "./pages/MenuPage";
import SeatLayout from "./pages/SeatLayout";
import Movielist from "./pages/Movielist";
import ReservationConfirmation from "./pages/ReservationConfirmation.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
        <Route path="/seat-layout" element={<SeatLayout />}></Route>
        <Route path="/movielist" element={<Movielist />}></Route>
        <Route
          path="/confirmation"
          element={<ReservationConfirmation />}
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
