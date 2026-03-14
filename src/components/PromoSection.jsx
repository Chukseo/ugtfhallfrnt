// components/PromoSection.js
import React from "react";
import "./PromoSection.css";

const PromoSection = () => {
  return (
    <section className="promo-section">
      <div className="promo-overlay">
        <div className="promo-content">
          <h1>Find Your Perfect Hall Today Your ideal event awaits!</h1>
          <button className="btn-blue">FIND MORE</button>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;