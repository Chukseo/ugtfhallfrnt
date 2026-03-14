// App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VenueCards from "./components/VenueCards";
import PromoSection from "./components/PromoSection";
import EventSection from "./components/EventSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <VenueCards />
      <PromoSection />
      <EventSection />
      <Footer />
    </>
  );
}

export default App;