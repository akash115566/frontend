import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import "../Stylesss/about.css";
import { FaHandshake, FaLightbulb, FaChartLine, FaMoneyCheckAlt } from "react-icons/fa";

const About = () => {
  const { themeColor, gradient } = useContext(ThemeContext);

  const steps = [
    {
      icon: <FaHandshake />,
      title: "Developing Financing Options",
      desc: "Tailored financial strategies that align with your business goals.",
    },
    {
      icon: <FaLightbulb />,
      title: "Improving Business Planning",
      desc: "We refine your business plans to ensure clarity and long-term success.",
    },
    {
      icon: <FaChartLine />,
      title: "Financial Modeling and Analytics",
      desc: "Accurate models and insights to make data-driven decisions.",
    },
    {
      icon: <FaMoneyCheckAlt />,
      title: "Delivering Financing Solutions",
      desc: "Connecting you with the right investors and growth opportunities.",
    },
  ];

  return (
    <>
      {/* 🔹 Fixed Background Section */}
      <section className="fixed-bg-section3">
        <div className="overlay3">
          <div className="text-content3">
            <h2>बिज़नेस की एक्सक्लूसिव स्ट्रैटेजी</h2>
            <h3>
              सिर्फ <span>BusinessCare</span> पर
            </h3>
            <p>
              आधुनिक मार्केटिंग के नए दौर में, हम आपके ब्रांड को सही दिशा, सही ऑडियंस और
              स्मार्ट ग्रोथ स्ट्रैटेजी के साथ आगे बढ़ाते हैं।
            </p>
            <button className="cta-btn">Get Started</button>
          </div>
        </div>
      </section>

      {/* 🔹 About Sections */}
      <div
        className="about-container"
        style={{
          background: gradient || themeColor,
          transition: "0.4s ease-in-out",
        }}
      >
        {/* 🟧 Section 1=============css-310=============== */}
        <section className="about-section" style={{
          background: gradient || themeColor,
          transition: "0.4s ease-in-out",
        }}>
          <h2 className="section-heading">ABOUT US</h2>
          <div className="about-content">
            <div className="about-image">
              <img
                src="https://businesscare.org.in/wp-content/uploads/2023/03/FDSA-640x640.jpg"
                alt="About BusinessCare"
              />
            </div>
            <div className="about-text">
              <p>
                <strong>Business Care</strong> was started by great minds in the media industry who
                have benefited thousands of business owners with their knowledge and wisdom.
                Founders <b>Miss Pooja Sharma</b> and <b>Mr. Ankur Bansal</b> have a strong media
                background and have appeared on several national TV channels.
              </p>
              <p>
                In just 12 years, the company has successfully launched 14 ventures. Their
                unmatched business acumen and passion for innovation have made them a recognized
                name in India’s entrepreneurial ecosystem.
              </p>
              <p>
                These young visionaries specialize in designing strategies to help every brand
                establish itself strongly in the market.
              </p>
            </div>
          </div>
        </section>

        {/* 🟧 Section 2 */}
        <section className="about-section" style={{
          background: gradient || themeColor,
          transition: "0.4s ease-in-out",
        }}>
          <h2 className="section-heading">ENHANCE YOUR POWERS</h2>
          <div className="about-content reverse">
            <div className="about-image">
              <img
                src="https://businesscare.org.in/wp-content/uploads/2023/03/49.jpg"
                alt="Enhance Business"
              />
            </div>
            <div className="about-text">
              <p>
                Whether your business is <b>new or established</b>, we design customized marketing
                strategies tailored to your product’s needs.
              </p>
              <ul>
                <li>Valuation & Financial Advisory</li>
                <li>Development of Financial Models</li>
                <li>Deal Structuring & Feasibility Studies</li>
                <li>Corporate Strategy & Planning</li>
              </ul>
            </div>
          </div>
        </section>







        <section className="process-section" style={{
          background: gradient || themeColor,   // 🔹 Gradient or Color apply
          transition: "0.4s ease-in-out",

          // padding: "20px",
        }}>
          <h2 className="process-heading">OUR PROCESS</h2>
          <p className="process-subtitle">
            We help you weather today’s uncertainty with our best-in-class financial strategies.
          </p>

          <div className="process-container">
            {steps.map((step, index) => (
              <div className="process-card" key={index}>
                <div className="process-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>






        <section className="enhance-section" style={{
          background: gradient || themeColor,
          transition: "0.4s ease-in-out",
        }}>
          <div className="enhance-overlay">
            <div className="enhance-container">
              {/* 🔹 Left Image Section */}
              <div className="enhance-image">
                <img
                  src="../slide/p1.webp"
                  alt="Enhance Your Powers"
                />
              </div>

              {/* 🔹 Right Text Section */}
              <div className="enhance-text">
                <h2>ENHANCE YOUR POWERS</h2>
                <h3>Choose Correct Platform</h3>
                <p>
                  Business is <b>New or Old</b> — we believe every product needs a
                  customized marketing plan. At <strong>Business Care</strong>, we
                  design strategies tailored to your needs. Through Business Care,
                  we redefine marketing so that no business owner remains confused
                  about where to start.
                </p>
                <p>
                  Our expert team provides yearly marketing strategies with{" "}
                  <strong>low investment</strong> and high impact.
                </p>

                <ul className="enhance-list">
                  <li>💼 Valuation Services</li>
                  <li>📊 Development of Financial Models</li>
                  <li>🏦 Corporate Financial Advisory</li>
                  <li>🤝 Deal Structuring</li>
                  <li>📋 Feasibility Studies & Business Plans</li>
                </ul>

                <div className="stats">
                  <div className="stat">
                    <h3>100+</h3>
                    <p>Live Meetings with Celebrity Coaches</p>
                  </div>
                  <div className="stat">
                    <h3>300+</h3>
                    <p>Online Consultations per day</p>
                  </div>
                  <div className="stat">
                    <h3>250+</h3>
                    <p>Video Call Meetings</p>
                  </div>
                </div>
{/* 
                <button className="enhance-btn">Explore Strategy</button> */}
              </div>
            </div>
          </div>
        </section>






        {/* 🟧 Section 3 */}
        <section className="about-section" style={{
          background: gradient || themeColor,
          transition: "0.4s ease-in-out",
        }}>
          <h2 className="section-heading">OUR JOURNEY</h2>
          <div className="about-content">
            <div className="about-image">
              <img
                src="https://businesscare.org.in/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-31-at-1.26.55-PM.jpeg"
                alt="Our Journey"
              />
            </div>
            <div className="about-text">
              <p>
                Our journey started in <strong>2016</strong> from Noida and expanded to Delhi,
                Gurgaon, Gujarat, and Mumbai. With 100+ live personal meetings, 300+ daily online
                consultations, and 250+ video call sessions — we’ve built a strong network of
                business mentors and celebrity coaches.
              </p>
              <p>
                <strong>Future is brighter</strong> when you're more prepared — and that’s what we
                help you achieve through advanced planning and powerful business strategies.
              </p>
            </div>
          </div>
        </section>

        {/* 🟧 Section 4 */}
        <section className="about-section" style={{
          background: gradient || themeColor,
          transition: "0.4s ease-in-out",
        }}>
          <h2 className="section-heading">OUR PROCESS</h2>
          <div className="about-content reverse">
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=900&q=80"
                alt="Process"
              />
            </div>
            <div className="about-text">
              <p>
                We help you weather uncertainty through our expert team’s strategic guidance:
              </p>
              <ul>
                <li>Developing Financing Options</li>
                <li>Improving Business Planning</li>
                <li>Financial Modeling and Analytics</li>
                <li>Delivering Financing Solutions</li>
              </ul>
              <p>
                We provide independent, expert advice that adds measurable value to your business.
              </p>
            </div>
          </div>
        </section>

        {/* 🟧 CTA */}
        <section className="cta-section" style={{
          background: gradient || themeColor,
          transition: "0.4s ease-in-out",
        }}>
          <div className="cta-overlay">
            <h2>Be at the forefront of Innovation</h2>
            <p>
              Your goals are unique — and so is our strategy. Let’s take your business to the next
              level together.
            </p>
            <button className="cta-btn">Watch Story</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
