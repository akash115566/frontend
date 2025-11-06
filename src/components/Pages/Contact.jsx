import React from 'react'
import axios from "axios"
import "../Stylesss/contact.css";
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from "../../ThemeContext";


// const cards = [
// { id: 1, title: "Card One", content: "This is the content of card one." },
// { id: 2, title: "Card Two", content: "This is the content of card two." },
// { id: 3, title: "Card Three", content: "This is the content of card three." },
// { id: 4, title: "Card Four", content: "This is the content of card four." },
// { id: 5, title: "Card Five", content: "This is the content of card five." },
// ];

const Contact = () => {
  const { themeColor, gradient } = useContext(ThemeContext);
  // const [jokes, setjokes] = useState([])
  // useEffect(() => {
  //   axios.get('/api/jokes')
  //     .then((response) => {
  //       setjokes(response.data)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // })


  return (
    <>
      {/* 🔹 Stylish Static Banner */}
      <section className="contact-section-fixed-bg">
        <div className="contact-overlay">
          <div className="contact-text">
            <h2>Let’s Connect with BusinessCare</h2>
            <p>
              Have questions about growing your business or want to discuss your
              next project? Our team is here to guide you with the right marketing
              and business strategies.
            </p>
            <p>
              📞 Call us: <strong>+91 98765 43210</strong><br />
              📧 Email: <strong>support@businesscare.in</strong>
            </p>
            <p>
              Visit our office or fill out the contact form — we’ll get in touch
              to boost your business growth journey!
            </p>
           <Link to="/Contact"><button className="contact-btn">Get In Touch</button></Link> 
          </div>
        </div>
      </section>




      <section className="contact-form-section">
        <div className="contact-form-overlay">
          <h2>Get in Touch with BusinessCare</h2>
          <p className="form-intro">
            Fill out the details below and our experts will contact you to plan
            your business growth journey.
          </p>

          <form className="contact-form">
            <div className="form-grid">
              <input type="text" placeholder="Company Name" required />
              <input type="text" placeholder="Owner Name" required />
              <input type="tel" placeholder="Mobile No." required />
              <input type="text" placeholder="Website" />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Type of Business" />
              <input type="text" placeholder="Product" />
              <input type="text" placeholder="Monthly Budget" />
              <input type="text" placeholder="Business Location" />

              <select required>
                <option value="">Select Meeting Type</option>
                <option value="oncall">On Call</option>
                <option value="inperson">In Person</option>
                <option value="online">Online</option>
              </select>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </section>





      <section className="location-section">
        <div className="location-content">
          <h2>Our Office Location</h2>
          <p>
            <strong>Address:</strong><br />
            A-167, Sector-63, Noida, Uttar Pradesh 201301
          </p>
          <p>
            📞 <strong>+91 98765 43210</strong><br />
            📧 <strong>support@businesscare.in</strong>
          </p>
          <p>
            Visit our office for business consultations, marketing planning, and
            growth discussions. We’re here to help you scale your business!
          </p>
        </div>

        <div className="location-map">
          <iframe
            title="BusinessCare Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.9348178755373!2d77.3808420744061!3d28.626556184345202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce59ec6a8b57f%3A0x81b7822b1ed09a58!2sA-167%2C%20Sector%2063%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1697135000000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">
        Have questions about our BusinessCare Platform? We’d love to hear from you!
      </p>

      <form className="contact-form">
        <label>Your Name</label>
        <input type="text" placeholder="Enter your name" required />

        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Message</label>
        <textarea placeholder="Write your message" rows="5" required></textarea>

        <button type="submit" className="contact-btn">Send Message</button>
      </form>

      <div className="contact-info">
        <h2>Our Office</h2>
        <p>Pooja Movie Creation,Noida, India</p>
        <p>Email: Poojamoviecraetion@BusinessCare.com</p>
        <p>Phone: +91 1234566789</p>
      </div>
    </div> */}


    </>
  )
}

export default Contact
