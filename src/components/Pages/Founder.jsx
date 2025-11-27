import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { Link } from "react-router-dom";
import "../Stylesss/founder.css";

const Founder = () => {
  const { themeColor, gradient } = useContext(ThemeContext);
  return (
    <>
      <section className="founder-section" style={{
        background: gradient || themeColor,
        transition: "0.4s ease-in-out",
      }}>
        {/* Background overlay */}
        <div className="founder-bg-overlay">
          <div className="founder-container">


            {/* Founder Info */}
            <div className="founder-text">
              <h2>Our Founder</h2>
              <h3>Ms. Pooja Sharma</h3>
              <p>
                BUSINESS CARE FOUNDER | SENIOR MEDIA TV ANCHOR | CELEBRITY BUSINESS COACH | YOUNGEST ENTREPRENEUR |
              </p>
             <p>
                Pooja Sharma is a well-known personality in India, celebrated for her versatility, leadership, and exceptional achievements across media, business, and social welfare.
           
                She began her journey at a young age, winning hearts on television as a news anchor, and later gaining recognition as an actress in TV serials and short films. In 2008, with a bold vision, she founded her own Production Company 
                <strong> Pooja Movie Creations</strong>, marking the beginning of her inspiring entrepreneurial journey.
                 Along with her corporate accomplishments, Pooja Sharma has made significant contributions to society. She has served as the Chairperson of the Social Justice Board, and later founded and chaired the Commission for National Justice & Women Safety, playing a pivotal role in social welfare and women empowerment.
             
                Her influence extends globally as well—she is associated with BRICS, actively promoting international trade expansion and global business collaborations.
           
                A law graduate and an experienced business legal advisor, she combines knowledge with leadership, making her contributions diverse and impactful. Not only is she a successful industrialist, but she is also deeply committed to social upliftment, dedicated to empowering communities and contributing to national progress.
            
                At a young age, she achieved a rare milestone—establishing 14 companies in just 14 years, making her one of the most dynamic businesswomen in the country.
              </p>
          
         

             <Link to="/Contact"> <button className="founder-btn">Learn More</button></Link>
            </div>



            {/* Founder Image */}
            <div className="founder-image">
              <img src="/about/s1.webp" alt="Founder" />
            </div>
          </div>
           

              <h4>Her Upcoming Exclusive TV Show</h4>
              <p>
                Now, Pooja Sharma is coming with her exclusive business television show, where she will share deep insights on:

              </p>
              <p>
                Over the years, she has evolved into a dynamic multi-venture woman entrepreneur, successfully conceptualizing and establishing diverse businesses. Her forward-thinking mindset and determination have positioned her as a leading name in India’s media and business industry.
              </p>
              
               
              <ul>
                <li>New business ideas</li>
                <li>Global trade opportunities</li>
                <li>International collaborations</li>
                <li>Government schemes for entrepreneurs</li>
              </ul>
              <p>
                The show will also feature new startups, business owners, and founders, giving them a platform to share their journey and reach millions.
              </p>
              <p>
                This prestigious TV Show (<strong>BUSINESS CARE</strong>) will be telecast on:
              </p>
              <ul>
                <li>📺 AajTak HD News Channel</li>
                <li>📺 CNBC Prime Global Business Channel</li>
                <li>📺 ABP News Channel</li>
              </ul>
        </div>
      </section>







      <section className="founder-section" style={{
        background: gradient || themeColor,
        transition: "0.4s ease-in-out",
      }}>
        {/* Background overlay */}
        <div className="founder-bg-overlay">
          <div className="founder-container">
            {/* Founder Image */}
            <div className="founder-image">
              <img src="/about/s4.webp" alt="Founder" />
            </div>

            {/* Founder Info */}
            <div className="founder-text">
              <h3>Mr. ANKUR BANSAL</h3>
              <p>BUSINESS CARE FOUNDER | SENIOR MEDIA TV ANCHOR | CELEBRITY BUSINESS COACH | YOUNGEST ENTREPRENEUR |</p>
              <h3>

                Co-founder, Entrepreneur, Business Coach, and Business Strategy Planner. Ankur Bansal
              </h3>
              <p>
                Ankur Bansal, who has been doing business since the age of 12,
                has given a new definition to media strategy by offering his
                services in the TV media world. He is also a successful industrialist,
                full of multitalented personality, and from time to time he executes
                new schemes. He is adept at understanding the problems of businessmen
                and giving accurate solutions to them. He has given a new path to many
                big businesses in India with his discretion. He has been awarded many
                national and foreign awards, and he believes that India’s business
                can become better only when new techniques are used in it. Ankur not
                only understands the business but also has the ability to deal with
                the problems arising in it from the root. Having 20 years of
                experience in TV media, today Ankur is a successful businessman
                and is helping thousands of businessmen with increasing losses in
                their businesses.
              </p>


             <Link to="/Contact"> <button className="founder-btn">Learn More</button></Link>
            </div>
          </div>
        </div>
      </section>






    </>
  );
};

export default Founder;
