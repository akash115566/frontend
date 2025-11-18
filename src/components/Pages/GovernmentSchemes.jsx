import React from "react";
import "../Stylesss/governmentschemes.css";

function GovernmentSchemes() {
  return (
    <div className="gs-page">

      {/* 🔥 TOP BANNER */}
      <div className="gs-banner">
        {/* LEFT TEXT */}
        <div className="gs-banner-left">
          <h1>Government Schemes Registration</h1>
          <p>
            Get assistance for MSME, Startup India, GST, Import–Export, FSSAI,
            Subsidy Schemes & more Government Registrations.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="gs-banner-right">
          <img src="/d7.jpeg" alt="Government Schemes" />
        </div>
      </div>

      {/* 🔥 MAIN CONTENT */}
      <div className="gs-content">
        <h2>Government Schemes Registrations</h2>

        <p>
          Are you a business, entrepreneur, startup, or individual looking to take
          advantage of various <b>Government Schemes, Subsidies, and Benefits?</b><br/>
          We provide <b>complete assistance, documentation, and registration support</b> 
          for a wide range of government initiatives.
        </p>

        {/* SECTION 1 */}
        <h3>Our Services Include Registration for:</h3>

        <div className="gs-list">
          <h4>MSME / Udyam Registration</h4>
          <ul>
            <li>For Micro, Small & Medium Enterprises</li>
            <li>Helps in subsidies, bank loans, tender benefits</li>
          </ul>

          <h4>Startup India Registration</h4>
          <ul>
            <li>DPIIT recognition</li>
            <li>Access to funding, tax exemptions & government grants</li>
          </ul>

          <h4>GST Registration</h4>
          <ul>
            <li>Mandatory for businesses</li>
            <li>Complete support from application to activation</li>
          </ul>

          <h4>Import–Export (IEC) Registration</h4>
          <ul>
            <li>For export/import businesses</li>
            <li>DGFT-approved certificate</li>
          </ul>

          <h4>FSSAI Registration / License</h4>
          <ul>
            <li>Required for food businesses, restaurants, FMCG, distributors</li>
          </ul>

          <h4>ESI / PF Registration</h4>
          <ul>
            <li>Mandatory for organizations with employees</li>
            <li>Compliance & documentation support</li>
          </ul>
        </div>

        {/* SECTION 2 */}
        <div className="gs-list">
          <h4>Trade License / Shop Act Registration</h4>
          <ul>
            <li>For shops, offices, service businesses</li>
          </ul>

          <h4>Company Registration (ROC/MCA)</h4>
          <ul>
            <li>Pvt. Ltd., LLP, OPC, Partnership</li>
            <li>PAN, TAN, MOA, AOA, everything included</li>
          </ul>

          <h4>Drug License / Pharmacy License</h4>
          <ul>
            <li>For pharma, medical shops, distributors</li>
          </ul>

          <h4>Agriculture & Farmer Schemes</h4>
          <ul>
            <li>PM Kisan</li>
            <li>Agricultural subsidy registration</li>
            <li>KCC loan assistance</li>
          </ul>

          <h4>Subsidy Schemes Registration</h4>
          <ul>
            <li>Machinery subsidy</li>
            <li>PMEGP loan</li>
            <li>Mudra loan</li>
            <li>Solar subsidy</li>
            <li>Manufacturing subsidy</li>
          </ul>

          <h4>Trademark / Copyright / Patent Registration</h4>
          <ul>
            <li>Protect your brand legally</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GovernmentSchemes;
