import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../ThemeContext";
import "../Stylesss/gallery.css";
import { useOutletContext } from "react-router-dom";

const Gallery = () => {
  const { themeColor, gradient } = useContext(ThemeContext);
  const images = [
    "/about/g1.webp",
    "/about/g2.webp",
    "/about/g3.webp",
    "/about/g4.webp",
    "/about/g5.webp",
    "/about/g6.webp",
    "/about/g7.webp",
    "/about/g8.webp",
    "/about/g9.webp",
    "/about/g10.webp",
    "/about/g11.webp",
    "/about/g12.webp",
    "/about/g13.webp",
    "/about/g14.webp",
    "/about/g1.webp",
    "/about/g16.webp",
    "/about/g17.webp",
    "/about/g18.webp",
    "/about/g19.webp",
    "/about/g20.webp",
  ];


  const videos = [
"/vid1.mp4",
"/vid2.mp4",
"/vid3.mp4"
];

  return (
    <>
      {/* 🔹 Hero Section with Fixed Background */}
      <section className="gallery-hero" >
        <div className="overlay">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our BusinessCare Moments
          </motion.h1>
          <p>Capturing success, creativity, and growth — one frame at a time.</p>
        </div>
      </section>

      {/* 🔹 Image Gallery */}
      <section className="gallery-section" style={{
        background: gradient || themeColor,
        transition: "0.4s ease-in-out",
      }}>
        <h2>Photo Gallery</h2>
        <div className="gallery-grid" style={{
          background: gradient || themeColor,
          transition: "0.4s ease-in-out",
        }}>
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={img} alt={`Gallery ${index + 1}`} />
            </motion.div>
          ))}
        </div>
      </section>


      <section className="video-section" style={{
        background: gradient || themeColor,
        transition: "0.4s ease-in-out",
      }}>
<div className="video-container" style={{
        background: gradient || themeColor,
        transition: "0.4s ease-in-out",
      }}>
<h2 className="video-heading">OUR VIDEO</h2>


<div className="video-grid">
{videos.map((src, i) => (
<div key={i} className="video-item">
<video className="video-player" controls playsInline preload="metadata" src={src}>
Your browser does not support the video tag.
</video>
{/* <p className="video-caption">Video {i + 1}</p> */}
</div>
))}
</div>


{/* <p className="responsive-note">On small screens (480px), scroll horizontally to view all videos side by side.</p> */}
</div>
</section>
    </>
  );
};

export default Gallery;
