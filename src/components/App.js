import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FlightSearch from "./pages/FlightSearch";
import FlightBooking from "./pages/FlightBooking";
import Confirmation from "./pages/Confirmation";
import LandingPage from "./pages/LandingPage";
import './../styles/App.css';

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
