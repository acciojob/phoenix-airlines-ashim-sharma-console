import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FlightSearch from "./pages/FlightSearch";
import FlightBooking from "./pages/FlightBooking";
import Confirmation from "./pages/Confirmation";

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/flight-search" element={<FlightSearch />} />
        <Route path="/flight-booking" element={<FlightBooking />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </div>
  );
};

export default App;
