import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext";
import "../Stylesss/service.css";

const Service = () => {
  const { themeColor, gradient } = useContext(ThemeContext);

  const categories = [
    { name: "Teaching / Tutoring", icon: "👨‍🏫" },
    { name: "Graphic Design", icon: "🎨" },
    { name: "Web Development", icon: "💻" },
    { name: "Cooking / Catering", icon: "🍳" },
    { name: "Fitness / Yoga", icon: "🧘" },
    { name: "Music / Dance", icon: "🎵" },
    { name: "Home Repair", icon: "🛠️" },
    { name: "Translation", icon: "📚" },
  ];

  const services = [
    {
      title: "Maths Tutoring",
      desc: "Class 10th & 12th Mathematics online tutoring.",
      user: "Akash",
      rating: 5,
      location: "Online",
    },
    {
      title: "Logo Designing",
      desc: "Professional logos and branding material.",
      user: "Riya",
      rating: 4,
      location: "Delhi",
    },
    {
      title: "Cooking Classes",
      desc: "Learn Indian & Italian cuisines.",
      user: "Rohit",
      rating: 5,
      location: "Mumbai",
    },
  ];

  return (
    <>
      {/* 🏆 Awards Section */}
      <section
        className="awards-hero fixed-bg-section"
      // style={{
      //   background: gradient || themeColor,
      //   transition: "0.4s ease-in-out",
      // }}
      >
        <div className="overlay">
          <div className="text-content">
            <h2>🏆 MSME BusinessCare Awards &  Recognition</h2>
            <h3>
              Celebrating Excellence in <span>Business & Marketing</span>
            </h3>
            <p>
              BusinessCare’s journey of innovation, impact, and strategic
              excellence has been recognized across multiple prestigious awards
              in India and globally.
            </p>
          <Link to="/Contact">  <button className="cta-btn2">Explore Awards</button></Link>
          </div>
        </div>
      </section>

      {/* 🔹 Service Banner */}
      <div
        className="service-banner"
        style={{
          background: gradient || themeColor,
          transition: "0.4s ease-in-out",
        }}
      >
        <h1>
          Our <span>Services</span>
        </h1>
        <p>Discover the smarter way to collaborate and grow together.</p>
      </div>

      {/* 🔹 Hero Section */}
      <section
        className="hero"
        style={{
          background: gradient || themeColor,
          transition: "0.4s ease-in-out",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-heading"
        >
          Exchange Your Skills & Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="hero-tagline"
        >
          Offer your expertise, get what you need – without money.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hero-btn"
        >
          List Your Service
        </motion.button>
      </section>

      {/* 🔹 Marketing Programs */}
      <section
        className="programs-section"
        style={{
          background: gradient || themeColor,
          transition: "0.4s ease-in-out",
        }}
      >
        <h2>Our Marketing Programs</h2>
        <div className="programs-container">
          <div className="program-card zig-left" style={{
            background: gradient || themeColor,
            transition: "0.4s ease-in-out",
          }}>
            
            <div className="program-content"  style={{
          background: gradient || themeColor,
          transition: "0.4s ease-in-out",
        }}>
              <h3>NEW STARTUP MARKETING STRATEGY</h3>
              <p>
                Programs for raising new startups. Understanding their business
                model and consumer angle is key to success.
              </p>
              <Link to="tel:7042438293" className="cta-btn">
                CALL NOW
              </Link>
            </div>

            <img
              src="https://businesscare.org.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-04-at-15.28.24.png"
              alt="New Startup Marketing Strategy"
            />




          </div>

          <div className="program-card zig-right" style={{
            background: gradient || themeColor,
            transition: "0.4s ease-in-out",
          }}>
           
            <div className="program-content"  style={{
          background: gradient || themeColor,
          transition: "0.4s ease-in-out",
        }}>
              <h3>OLD BUSINESS GROWTH STRATEGY</h3>
              <p>
                Revive an old business, stand out from competitors, and make
                your product shine again.
              </p>
              <Link to="tel:7042438293" className="cta-btn">
                CALL NOW
              </Link>
            </div>

             <img
              src="https://businesscare.org.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-04-at-15.20.19-e1681987481804.png"
              alt="Old Business Growth Strategy"
            />




          </div>

          <div className="program-card zig-left" style={{
            background: gradient || themeColor,
            transition: "0.4s ease-in-out",
          }}>
           
            <div className="program-content"  style={{
          background: gradient || themeColor,
          transition: "0.4s ease-in-out",
        }}>
              <h3>HOW TO TARGET YOUR AUDIENCE</h3>
              <p>
                Find your real buyers and start your sales immediately with
                audience-focused strategies.
              </p>
             <Link to="tel:7042438293" className="cta-btn">
                CALL NOW
              </Link>
            </div>

             <img
              src="https://businesscare.org.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-04-at-15.24.03.png"
              alt="How to Target Your Audience"
            />





          </div>

          <div className="program-card zig-right" style={{
            background: gradient || themeColor,
            transition: "0.4s ease-in-out",
          }}>
            
            <div className="program-content"  style={{
          background: gradient || themeColor,
          transition: "0.4s ease-in-out",
        }}>
              <h3>HOW TO GROW YOUR SALES</h3>
              <p>
                Focus on real customer needs — when the customer needs your
                product, your business will shine.
              </p>
              <Link to="tel:7042438293" className="cta-btn">
                CALL NOW
              </Link>
            </div>

            <img
              src="https://businesscare.org.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-04-at-15.19.05.png"
              alt="How to Grow Your Sales"
            />



          </div>
        </div>
      </section>

      {/* 🔹 Why Choose Us */}
      <section
        className="why-section"
        style={{
          background: gradient || themeColor,
          transition: "0.4s ease-in-out",
        }}
      >
        <h2>Why Choose BusinessCare</h2>
        <ul>
          <li>✅ 7+ Years of Strategic Experience</li>
          <li>✅ Data-Driven Marketing Plans</li>
          <li>✅ 1000+ Brands Empowered</li>
          <li>✅ Dedicated Experts for Every Project</li>
        </ul>
      </section>

      {/* 🔹 Call To Action */}
      <section
        className="cta-section"
        style={{
          background: gradient || themeColor,
          transition: "0.4s ease-in-out",
        }}
      >
        <h2>Let’s Transform Your Business Vision into Reality</h2>
        <p>
          Talk to our experts today and take the first step toward consistent
          growth, visibility, and success.
        </p>
        <Link to="tel:7042438293" className="btn-primary">
          📞 Schedule a Call
        </Link>
      </section>
    </>
  );
};

export default Service;
