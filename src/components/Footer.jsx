import React from "react";
import "../components/Stylesss/footer.css";

// 🔸 Footer Component
const Footer = ({ gradient, themeColor }) => {
  return (
    <>
      <footer
        className="footer"
       style={{
            background: gradient || themeColor,   // 🔹 Gradient or Color apply
            transition: "0.4s ease-in-out",

            // padding: "20px",
          }}
      >
        <div className="footer-container">
          {/* 🔹 Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/award">Awards</a></li>
              <li><a href="mission">Mission & Vision</a></li>
              <li><a href="/founder">Our Founders</a></li>
              <li><a href="/why-us">Why Business Care</a></li>
           
            </ul>
          </div>

          {/* 🔹 Services */}
          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li><a href="/SalesPage">SalesPage</a></li>
              {/* <li><a href="#">Low Investment Big Buzz</a></li>
              <li><a href="#">Find Your Target Audience</a></li>
              <li><a href="#">Startups Marketing Strategy</a></li> */}
              <li><a href="/StrategyPage">StrategyPage</a></li>
                 <li><a href="/policypage">Privacy & Policy</a></li>
              <li><a href="/terms">Terms and Conditions</a></li>
              {/* <li><a href="#">Choose Right Media Platforms</a></li> */}
            </ul>
          </div>

          {/* 🔹 Contact Info */}
          <div className="footer-column">
            <h3>Contact Details</h3>
            <p>📞 <strong>Phone:</strong> +91 7042-438-293</p>
            <p>📧 <strong>Email:</strong> <a href="mailto:Info@businesscare.org.in">Info@businesscare.org.in</a></p>
            <p>📍 <strong>Address:</strong> A-111, Sec-63, Noida UP-201301</p>

            {/* 🔹 Social Links */}
          <div className="social-links">
  <p><strong>Follow Us On:</strong></p>

  <a href="https://www.facebook.com/businesscarenoida/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
    <i className="fab fa-facebook-f"></i>
  </a>

  <a href="https://www.instagram.com/Businesscarenoida/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
    <i className="fab fa-instagram"></i>
  </a>

  <a href="https://www.linkedin.com/company/business-care-noida/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
    <i className="fab fa-linkedin-in"></i>
  </a>

  <a href="https://twitter.com/businesscareup" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
    <i className="fab fa-x-twitter"></i>
  </a>

  <a href="https://www.youtube.com/@BusinessCareNoida/featured" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
    <i className="fab fa-youtube"></i>
  </a>
</div>

          </div>
        </div>

        {/* 🔹 Footer Bottom */}
        <div className="footer-bottom">
          <p>© 2025 BusinessCare. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
