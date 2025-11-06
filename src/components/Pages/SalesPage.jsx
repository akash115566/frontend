import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

import "../Stylesss/salesPage.css";

const SalesPage = () => {
  const { themeColor, gradient } = useContext(ThemeContext);
  return (
    <div className="sales-page">
      {/* Top Fixed Background Section */}
      <section className="top-section">
        <div className="top-text">
          <h1>Boost Your Business</h1>
          <p>
            Low investment, big buzz! Let your business grow with strategic
            marketing solutions tailored to your audience.
          </p>
        </div>
      </section>

      {/* Content Section with Headings */}
      <section className="content-section" style={{
        background: gradient || themeColor,
        transition: "0.4s ease-in-out",
      }}>
        <div className="content-card">
          <h2>Grow Your Sales</h2>
          <p>
            Discover proven strategies to increase revenue, maximize conversions,
            and expand your customer base efficiently.
          </p>
          <p>We create result-driven marketing strategies tailored for your business
             — from targeted ads and conversion-optimized landing pages to data-driven
              campaigns that reduce acquisition costs and boost consistent sales growth.
               Every strategy is measurable, so you can clearly track your ROI.</p>
        </div>
        <div className="content-card">
          <h2>Low Investment, Big Buzz</h2>
          <p>
            Achieve maximum impact with minimal resources. Our solutions ensure
            high visibility without heavy costs.
          </p>
          <p>At BusinessCare, we help you build a powerful brand presence with smart,
             cost-effective marketing solutions. From creative digital campaigns to social
              media promotions, we focus on maximum reach with minimum spend. Our goal is
               simple — to create big buzz for your business, even with a small investment.</p>
               <p>Key Benefits:
• Smart Budget Strategies — Get the most out of every rupee with optimized ad spending.
• Viral Campaign Ideas — Creative, shareable content that grabs attention across platforms.
• Social Media Growth — Build strong engagement and brand awareness organically.
• High ROI Results — Small campaigns, big returns — see measurable growth and visibility.</p>
        </div>
        <div className="content-card">
          <h2>Find Your Target Audience</h2>
          <p>
            Identify and engage the right customers at the right time using
            data-driven insights and targeted campaigns.
          </p>
          <p>At BusinessCare, we don’t just help you advertise — we help you connect. 
            Our data-driven audience research and smart targeting tools identify who your
             ideal customers are and where they spend their time online. By understanding
              their behavior, interests, and needs, we ensure your brand speaks directly to
               those most likely to convert.</p>
               <p>Key Benefits:
• Precise Targeting — Identify and reach audiences that truly match your business goals.
• Data-Driven Insights — Use analytics and behavior tracking to find what works best.
• Multi-Platform Reach — Target customers across Google, Meta, Instagram, and more.
• Higher Conversions — Stop wasting money on random ads — focus only on high-potential leads.</p>
        </div>
      </section>
    </div>
  );
};

export default SalesPage;
