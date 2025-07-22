import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css"; // তোমার CSS থাকলে এখানে সংযুক্ত থাকবে

const LandingPage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to Phoenix Airlines</h1>
      <img
        src="https://storage.googleapis.com/acciojob-open-file-collections/landing.png"
        alt="Landing"
        style={{ width: "60%", maxWidth: "600px" }}
      />
    </div>
  );
};

const FlightSearch = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Search Flights</h2>
      <img
        src="https://storage.googleapis.com/acciojob-open-file-collections/flight-search.png"
        alt="Flight Search"
        style={{ width: "60%", maxWidth: "600px" }}
      />
    </div>
  );
};

const FlightBooking = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Passenger Details</h2>
      <img
        src="https://storage.googleapis.com/acciojob-open-file-collections/flight-booking.png"
        alt="Flight Booking"
        style={{ width: "60%", maxWidth: "600px" }}
      />
    </div>
  );
};

const Confirmation = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Booking Confirmed!</h2>
      <img
        src="https://storage.googleapis.com/acciojob-open-file-collections/confirmation.png"
        alt="Confirmation"
        style={{ width: "60%", maxWidth: "600px" }}
      />
    </div>
  );
};

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/flight-search" element={<FlightSearch />} />
          <Route path="/flight-booking" element={<FlightBooking />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
