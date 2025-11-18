

import React,{ useContext } from "react";

import { ThemeContext } from "../../ThemeContext";
import "../Stylesss/dealerDistribution.css";

const DealersDistribution = () => {
    const { themeColor, gradient } = useContext(ThemeContext);   // ✅ FIX
  return (
   <>
    <div className="dealers-page" style={{
              background: gradient || themeColor,   // 🔹 Gradient or Color apply
              transition: "0.4s ease-in-out",

              // padding: "20px",
            }}>

      {/* ===== Banner Section ===== */}
      <section className="dealers-banner"  >
        <div className="banner-left">
          <h1>Dealers & Distribution</h1>
          <p>
            Expand your business reach with the right distribution partners.
            We connect brands with genuine and high-potential dealers across India.
          </p>
        </div>

        <div className="banner-right">
          <img src="/d1.jpeg" alt="Dealers Banner" />
        </div>
      </section>

      {/* ===== Content Section ===== */}
      <section className="dealer-section">
  <div className="dealer-container">

    <h1 className="dealer-heading">
      Are You Looking for Dealers and Distributors?
    </h1>

    <h2 className="dealer-subheading">
      We Are the Right Platform to Scale Your Business.
    </h2>

    <p className="dealer-text">
      We help brands expand their market presence by connecting them with genuine
      and high-potential dealers and distributors across India.
    </p>

    <h3 className="dealer-title">Business Categories We Serve:</h3>

    <ul className="dealer-list">
      <li>FMCG (Fast-Moving Consumer Goods)</li>
      <li>Pharmaceuticals</li>
      <li>Agriculture Products</li>
      <li>Groceries</li>
      <li>Cosmetics</li>
      <li>Skin & Hair Care</li>
      <li>Ayurvedic & Herbal Products</li>
    </ul>

    <p className="dealer-footer">
      For more details contact our executive for dealer & distributors
    </p>

  </div>
</section>


    </div>
   
   </>
  )
}

export default DealersDistribution

