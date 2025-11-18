import React from "react";
import "../Stylesss/governregi.css";

const GovernRegi = () => {
  return (
    <div className="govern-container">

      {/* 🔵 Top Banner */}
      <section className="govern-banner">
        <div className="banner-left">
          <h1>Government Schemes Registration</h1>
          <p>
            We assist businesses in registering for various Government Schemes
            to help them access benefits, incentives, and official recognition
            essential for growth.
          </p>
        </div>

        <div className="banner-right1">
          <img src="/d6.jpeg" alt="Government Schemes" />
        </div>
      </section>

      {/* 🔵 Content Section */}
      <section className="govern-content">
        <h2>Subsidy Benefits Registration through Business Care TV Show</h2>

        <p>
          Businesses can now apply for eligible subsidies and financial benefits
          through our dedicated <b>Business Care TV Show</b> support desk. We
          guide you throughout the registration and approval process to ensure
          smooth documentation and maximum eligibility.
        </p>

        <h3>CONTACT US FOR Government Schemes Registration Assistance</h3>
        <p className="contact-num">7042438293</p>
      </section>

    </div>
  );
};

export default GovernRegi;
