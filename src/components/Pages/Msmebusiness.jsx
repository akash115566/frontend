import React,{useContext} from "react";
import { ThemeContext } from "../../ThemeContext";
import "../Stylesss/msmebusiness.css";

function MsmeBusiness() {
   const { themeColor, gradient } = useContext(ThemeContext);   // ✅ FIX
  return (
    <div className="msme-page" style={{
              background: gradient || themeColor,   // 🔹 Gradient or Color apply
              transition: "0.4s ease-in-out",

              // padding: "20px",
            }}>

      {/* 🔥 TOP BANNER SECTION */}
      <div className="top-banner" >

        {/* LEFT SIDE TEXT */}
        <div className="top-banner-left">
          <h1>MSME BUSINESS CARE TV SHOW</h1>
          <h2>Participation & Registration</h2>
          <p>
            Join India's First MSME Business Care TV Show and grow your business nationally.
          </p>

          <p className="contact-line"><b>Call Executive:</b> 7042438293</p>
          <p className="contact-line"><b>WhatsApp:</b> 7042438293</p>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="top-banner-right">
          <img src="/bb22.jpeg" alt="MSME Banner" />
        </div>

      </div>

      {/* 🔥 MAIN CONTENT SECTION */}
      <div className="msme-content" style={{
              background: gradient || themeColor,   // 🔹 Gradient or Color apply
              transition: "0.4s ease-in-out",

              // padding: "20px",
            }}>

        <h2>WELCOME TO BUSINESS CARE</h2>
        <p>BUSINESS CARE INDIA’S BUSINESS FIRST TV SHOW</p>

        <h3>CATEGORIES OPEN</h3>

        <div className="msme-category-grid">

          <p>FMCG MANUFACTURERS</p>
          <p>HEALTH PRODUCTS MANUFACTURERS</p>

          <p>BUSINESS OWNERS</p>
          <p>MSME COMPANIES</p>

          <p>SERVICE PROVIDERS</p>
          <p>OEM COMPANIES</p>

          <p>ENTERPRENEURS</p>
          <p>HOSPITALITY COMPANIES</p>

          <p>HOUSEHOLD PRODUCTS COMPANIES</p>

        </div>

        <h3>TO PARTICIPATE IN BUSINESS CARE TV SHOW</h3>
        <p>CALL OUR EXECUTIVE – 7042438293</p>
        <p>WHATSAPP NO – 7042438293</p>
        <p>WWW.BUSINESSCARE.COM</p>
        <p>WWW.MSMEBUSINESSCARE.COM</p>

      </div>

    </div>
  );
}

export default MsmeBusiness;
