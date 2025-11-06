import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import "../Stylesss/award.css";

const Awards = () => {
  const { themeColor, gradient } = useContext(ThemeContext);

  const awardsList = [
    {
      year: 2020,
      title: "Best Startup Marketing Initiative",
      organization: "India Media Awards",
    },
    {
      year: 2021,
      title: "Top Innovative Business Strategy",
      organization: "Global Business Summit",
    },
    {
      year: 2022,
      title: "Excellence in Marketing & Growth",
      organization: "Entrepreneurship Awards",
    },
    {
      year: 2023,
      title: "Outstanding Business Advisory",
      organization: "Corporate Leaders Forum",
    },
  ];



  const images = [
    "/about/aw13.webp",
    "/about/aw2.webp",
    "/about/aw3.webp",
    "/about/aw4.webp",
    "/about/aw5.webp",
    "/about/aw6.webp",
    "/about/aw7.webp",
    "/about/aw8.webp",
    "/about/aw9.webp",
    "/about/aw10.webp",
    "/about/aw11.webp",
    "/about/aw12.webp",
  ];



  const awardsList1 = [
    {
      title: "Excellence in Startup Growth",
      organization: "National Entrepreneurship Awards",
    },
    {
      title: "Innovative Marketing Campaign of the Year",
      organization: "India Marketing Excellence Awards",
    },
    {
      title: "Top Business Advisory Firm",
      organization: "Global Business Leadership Forum",
    },
    {
      title: "Outstanding Digital Strategy",
      organization: "Digital India Awards",
    },
    {
      title: "Best Media & Branding Solutions",
      organization: "Corporate Innovation Awards",
    },
    {
      title: "Emerging Business Excellence",
      organization: "Asia-Pacific Business Awards",
    },
    {
      title: "Creative Marketing Leadership",
      organization: "International Marketing Summit",
    },
    {
      title: "Strategic Growth Excellence",
      organization: "Business Visionary Awards",
    },
  ];


  return (
    <>
      {/* 🔹 Hero Section */}
      <section className="awards-hero fixed-bg-section2">
        <div className="overlay2">
          <div className="text-content">
            <h2>🏆 BusinessCare Awards & Recognition</h2>
            <h3>
              Celebrating Excellence in <span>Business & Marketing</span>
            </h3>
            <p>
              BusinessCare’s journey of innovation, impact, and strategic excellence has been
              recognized across multiple prestigious awards in India and globally.
            </p>
            <button className="cta-btn">Explore Awards</button>
          </div>
        </div>

        {/* 🔹 Wave Shape Divider */}
        <div className="wave-divider">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,100 900,0 1200,80 L1200,120 L0,120 Z" fill="#fdfaf6" />
            <path d="M0,0 C400,120 800,0 1200,60 L1200,120 L0,120 Z" fill="#f9f4ef" opacity="0.7" />
            <path d="M0,0 C500,80 700,0 1200,40 L1200,120 L0,120 Z" fill="#fdfaf6" opacity="0.5" />
          </svg>
        </div>
      </section>

      {/* 🔹 Awards List Section */}
      <section
        className="awards-section"
        style={{
          background: gradient || themeColor,
          transition: "0.4s ease-in-out",
        }}
      >
        <div className="awards-container">
          {awardsList.map((award, index) => (
            <div className="award-card" key={index}>
              <div className="award-year">{award.year}</div>
              <div className="award-info">
                <h3>{award.title}</h3>
                <p>{award.organization}</p>
              </div>
            </div>
          ))}
        </div>
      </section>




      <section className="gallery-section" style={{
        background: gradient || themeColor,
        transition: "0.4s ease-in-out",
      }}>
        <div className="gallery-header">
          <h2>Our Featured Work</h2>
        </div>

        <div className="gallery-container">
          {images.map((img, index) => (
            <div className="gallery-card" key={index}>
              <img src={img} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* 🔹 Bottom Shape Divider */}
        <div className="wave-divider1">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,0 C300,100 900,0 1200,80 L1200,120 L0,120 Z"
              fill="#1229acff"
            />
            <path
              d="M0,0 C400,120 800,0 1200,60 L1200,120 L0,120 Z"
              fill="#0a3799ff"
              opacity="0.7"
            />
            <path
              d="M0,0 C500,80 700,0 1200,40 L1200,120 L0,120 Z"
              fill="#e731e4ff"
              opacity="0.5"
            />
          </svg>
        </div>
      </section>







      {/* 🔹 Hero Section */}
      <section className="awards-hero fixed-bg-section" style={{
        background: gradient || themeColor,
        transition: "0.4s ease-in-out",
      }}>
        {/* <div className="overlay">
          <div className="text-content-left">
            <h1>🏆 BusinessCare Awards & Recognition</h1>
            <p>
              Celebrating BusinessCare’s journey of innovation, impact, and strategic excellence across multiple prestigious awards in India and globally.
            </p>
            <button className="cta-btn">Explore Awards</button>
          </div>
        </div> */}

        <section className="awards-text-section" style={{
          background: gradient || themeColor,
          transition: "0.4s ease-in-out",
        }}>
          <div className="container2">
            <h2>🏆 BusinessCare Awards & Recognition</h2>
            <p>
              BusinessCare has consistently demonstrated excellence, innovation, and impact in the business
              and marketing industry. Our strategic initiatives and outstanding performance have been
              recognized by prestigious organizations across India and globally.
            </p>
            <p>
              These awards reflect our commitment to helping businesses grow smarter, reach the right audience,
              and achieve sustainable success through innovative marketing strategies.
            </p>
          </div>
        </section>

        {/* 🔹 Wave Divider at Bottom */}
        <div className="wave-divider">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,100 900,0 1200,80 L1200,120 L0,120 Z" fill="#fdfaf6" />
            <path d="M0,0 C400,120 800,0 1200,60 L1200,120 L0,120 Z" fill="#f9f4ef" opacity="0.7" />
            <path d="M0,0 C500,80 700,0 1200,40 L1200,120 L0,120 Z" fill="#fdfaf6" opacity="0.5" />
          </svg>
        </div>
      </section>

      {/* 🔹 Awards List Section */}
      <section
        className="awards-section1"
        style={{
          background: gradient || themeColor,
          transition: "0.4s ease-in-out",
        }}
      >
        <div className="awards-container1">
          {awardsList1.map((award, index) => (
            <div className="award-card1" key={index}>
              <div className="award-year1">{award.year}</div>
              <div className="award-info1">
                <h3>{award.title}</h3>
                <p>{award.organization}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Awards;
