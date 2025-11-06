import React, { useContext, } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext";
import "../Stylesss/mission.css"; // Make sure this file exists

const Mission = () => {
  const { themeColor, gradient } = useContext(ThemeContext);
  const services = [
    { title: "Digital Marketing", desc: "SEO, social media campaigns, PPC ads." },
    { title: "Creative Branding", desc: "Logo design, corporate identity." },
    { title: "Content Marketing", desc: "Blogs, videos, infographics." },
    { title: "Media Planning", desc: "Ads placement and campaign management." },
  ];
  return (
    <>
      <section className="mission-section1" >
        <div className="overlay">
          <div className="mission-text1">
            <h2>Empowering Your Brand</h2>
            <p>
              At <strong>BusinessCare Advertising</strong>, we create marketing solutions that
              connect your brand with your audience effectively. Let’s transform ideas into results.
            </p>
            {/* <button className="cta-btn">Learn More</button> */}
          </div>
        </div>
      </section>



      <section className="mission-section" style={{
        background: gradient || themeColor,
        transition: "0.4s ease-in-out",
      }}>
        <div className="mission-container">
          {/* Mission */}
          <div className="mission-box">
            <div className="mission-image">
              <img src="/about/m1.webp" alt="Mission" />
            </div>
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                At <strong>BusinessCare Advertising</strong>, our mission is to empower brands
                and businesses with innovative marketing solutions that connect them
                to their audience effectively. We believe in crafting impactful campaigns
                that not only increase visibility but also build trust and long-lasting relationships.
              </p>
              <p>
                Our goal is to transform creative ideas into powerful digital experiences
                that drive measurable results and sustainable business growth.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="vision-box">
            <div className="vision-text">
              <h2>Our Vision</h2>
              <p>
                Our vision is to become a globally recognized advertising agency that
                redefines the standards of creative marketing. We aim to inspire
                innovation and help businesses reach their full potential by combining
                strategy, storytelling, and cutting-edge technology.
              </p>
              <p>
                We envision a future where every brand can communicate authentically,
                engage meaningfully, and grow responsibly — with BusinessCare as their trusted partner.
              </p>
            </div>
            <div className="vision-image">
              <img src="/about/m2.webp" alt="Vision" />
            </div>
          </div>
        </div>
      </section>




      <section className="services-section" style={{
        background: gradient || themeColor,
        transition: "0.4s ease-in-out",
      }}>
        <h2>Our Services</h2>
        <div className="services-container">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>




      <section className="mission-section4">
        <div className="overlay4">
          <div className="mission-text4">
            <h2>Transform Your Business</h2>
            <p>
              At <strong>BusinessCare Advertising</strong>, we help businesses grow with
              creative marketing campaigns, strategic planning, and innovative solutions
              that engage your audience and boost brand visibility.
            </p>
            <p>
              Our team focuses on delivering measurable results while building lasting
              connections between your brand and your customers.
            </p>
          <Link to="/Contact">  <button className="cta-btn2">Get Started</button></Link>
          </div>
        </div>
      </section>

    </>
  );
};

export default Mission;
