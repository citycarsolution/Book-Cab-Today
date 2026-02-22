// src/App.jsx
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ConfirmationModal from "./components/ConfirmationModal";

import Hero from "./sections/Hero";
import AboutSection from "./sections/AboutSection";
import FaqSection from "./sections/FaqSection";
import Results from "./sections/Results";
import BookingForm from "./sections/BookingForm";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import RefundPolicy from "./pages/RefundPolicy";

function HomePage({
  searchData,
  selectedCar,
  handleSearch,
  handleSelectCar,
  handleFinalBooking,
  setSearchData,
  setSelectedCar,
}) {
  return (
    <main className="pt-16 flex-grow">

      {!searchData && (
        <>
          <Hero onSearch={handleSearch} />
          <AboutSection />
          <FaqSection />
        </>
      )}

      {searchData && !selectedCar && (
        <Results
          searchParams={searchData}
          onBack={() => setSearchData(null)}
          onSelect={handleSelectCar}
        />
      )}

      {searchData && selectedCar && (
        <BookingForm
          selectedCar={selectedCar}
          searchParams={searchData}
          onBack={() => setSelectedCar(null)}
          onConfirm={handleFinalBooking}
        />
      )}
    </main>
  );
}

function App() {
  const [searchData, setSearchData] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);
  const [bookingData, setBookingData] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSearch = (data) => {
    setSearchData(data);
    setSelectedCar(null);
  };

  const handleSelectCar = (car) => {
    setSelectedCar(car);
  };

  const handleFinalBooking = (booking) => {
    setBookingData(booking);
    setShowConfirm(true);
  };

  return (
    <Router>
      <div className="bg-black min-h-screen flex flex-col text-yellow-300">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                searchData={searchData}
                selectedCar={selectedCar}
                handleSearch={handleSearch}
                handleSelectCar={handleSelectCar}
                handleFinalBooking={handleFinalBooking}
                setSearchData={setSearchData}
                setSelectedCar={setSelectedCar}
              />
            }
          />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
        </Routes>

        <Footer />

        <ConfirmationModal
          open={showConfirm}
          booking={bookingData}
          onClose={() => setShowConfirm(false)}
        />
      </div>
    </Router>
  );
}

export default App;