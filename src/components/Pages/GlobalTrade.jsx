import React from "react";
import "../Stylesss/globaltrade.css";

const GlobalTrade = () => {
  return (
    <div className="globaltrade-container">

      {/* 🔵 Top Banner */}
      <section className="globaltrade-banner">
        <div className="banner-left">
          <h1>Global Trade</h1>
          <p>
            Expand your business worldwide with strategic global trade guidance,
            international market opportunities, and complete trade support.
          </p>
        </div>

        <div className="banner-right2">
          <img
            src="/d3.jpeg"
            alt="Global Trade"
          />
        </div>
      </section>

      {/* 🔵 Content Section */}
      <section className="globaltrade-content">
        <h2>Global Trade Assistance</h2>

        <p className="intro-text">
          Expand your business beyond borders with our end-to-end international trade support services:
        </p>

        <ul className="trade-list">
          <li>Import & Export Guidance</li>
          <li>Exploring International Markets</li>
          <li>Finding Global Buyers & Suppliers</li>
          <li>International Business Opportunities</li>
          <li>Trade Compliance & Documentation Support</li>
          <li>Global marketing</li>
          <li>Global business expansion</li>
        </ul>
      </section>
    </div>
  );
};

export default GlobalTrade;
