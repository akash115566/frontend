import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import "../Stylesss/whyUs.css"; // Make sure CSS path is correct

const WhyUs = () => {
  const { themeColor, gradient } = useContext(ThemeContext);
  return (
    <>
      <section className="whyus-section1">
        <div className="overlay1">
          <div className="text-container1">
            <h2>Why Choose BusinessCare </h2>
            <p>Business improves the quality of life in two ways. Firstly, it provides high-quality goods and service</p>
            <p>
              At <strong>BusinessCare Advertising</strong>, we combine creativity, strategy, and technology
              to provide marketing solutions that deliver measurable results. Our team of experts ensures
              your brand reaches the right audience while building lasting relationships.
            </p>
            {/* <ul>
            <li><strong>Innovative Strategies:</strong> Unique marketing approaches to make your brand stand out.</li>
            <li><strong>Expert Team:</strong> Professional marketers, designers, and strategists working for you.</li>
            <li><strong>Client First:</strong> Your goals and vision are our top priority.</li>
            <li><strong>Transparency:</strong> Open communication and detailed reporting for your peace of mind.</li>
            <li><strong>Result Oriented:</strong> Every campaign focused on growth and measurable success.</li>
          </ul> */}
            {/* <button className="cta-btn">Get Started</button> */}
          </div>
        </div>
      </section>

      <section className="whyus-section" style={{
        background: gradient || themeColor,
        transition: "0.4s ease-in-out",
      }}>
        <div className="whyus-container">
          <h2>Why Choose BusinessCare Advertising?</h2>
          <p className="intro">
            We combine creativity, strategy, and technology to provide marketing
            solutions that drive growth and build lasting relationships.
          </p>

          <div className="reasons-grid" style={{
            background: gradient || themeColor,
            transition: "0.4s ease-in-out",
          }}>
            <div className="reason-card">
              <h3>Innovative Marketing</h3>
              <p>We craft unique strategies that make your brand stand out.</p>
            </div>
            <div className="reason-card">
              <h3>Result Oriented</h3>
              <p>All campaigns are focused on measurable results and growth.</p>
            </div>
            <div className="reason-card">
              <h3>Expert Team</h3>
              <p>Professional marketers, designers, and strategists working for you.</p>
            </div>
            <div className="reason-card">
              <h3>Client First</h3>
              <p>We put your goals and vision at the center of our work.</p>
            </div>
            <div className="reason-card">
              <h3>Transparency</h3>
              <p>Open communication and detailed reporting for your peace of mind.</p>
            </div>
          </div>
        </div>
      </section>






      <section className="game-changer-section" style={{
        background: gradient || themeColor,
        transition: "0.4s ease-in-out",
      }}>
        <div className="content">
          <h2>Game Changer of Business</h2>
          <p>Are you a new startup? Are you facing problems improving your sales growth?</p>
          <p>But there was no marketing planning and no business awareness. Come meet our business coaches who will change your business module with their unique business tricks.</p>
          <ul>
            <li>How do you sell your product when there are none available on the market?</li>
            <li>How to Make Your Salad Different</li>
            <li>Business strategy plaining</li>
            <li>How to grow sales</li>
            <li>How to do marketing</li>
            <li>How to become no1 brand</li>
            <li>How to succeed</li>
            <li>How to Attract Distributors</li>
            <li>How to Attract Consumers</li>
          </ul>
          {/* <button>READ MORE</button> */}
        </div>
        <div className="image">
          <img src="/about/aw4.webp" alt="Business Coaching" />
        </div>
      </section>
    </>
  );
};

export default WhyUs;
