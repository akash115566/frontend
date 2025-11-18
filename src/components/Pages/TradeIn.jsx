import React from "react";
import "../Stylesss/tradein.css";

const TradeIn = () => {
  return (
    <div className="tradein-container">

      {/* 🔵 Banner Section */}
      <section className="tradein-banner">
        <div className="banner-left">
          <h1>Trade In OEM Registration</h1>
          <p>
            Our Executive will help you connect with trusted OEM companies for 
            national and global trade opportunities.
          </p>
        </div>

        <div className="banner-right3">
          <img 
            src="/d4.jpeg" 
            alt="OEM Trade Banner" 
          />
        </div>
      </section>

      {/* 🔵 Content Section */}
      <section className="tradein-content">
        <h2>Trade with OEM Companies – Globally and Nationally</h2>

        <p className="trade-text">
          Expand your business by partnering directly with Original Equipment Manufacturers
          (OEMs) across India and international markets.
        </p>

        <h3 className="contact-head">Contact our team :- 7042438293</h3>
      </section>

    </div>
  );
};

export default TradeIn;
