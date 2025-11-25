// import React, { useContext } from "react";
import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import Counter from "./Counter";

import { ThemeContext } from "../../ThemeContext";
import "../Stylesss/slide.css";





// duplicate to make infinite loop

// const slides = [...images, ...images]; // infinite loop


const statsData = [
  { title: "Real Estate Project Done", value: "250+" },
  { title: "FMCG Startup Project Done", value: "180+" },
  { title: "Pan India Clients", value: "300+" },
];




const mediaPoints = [
  "Media placements strategy",
  "Television media promotion & advertising",
  "TV commercial placements on national tv channels as per the product",
  "TV ad films development as per the product",
  "Concrete innovative ideas for tv commercial ads",
  "Radio ads planning & placements",
  "IPL specials promotions for exclusive products",
  "OTT platforms promotions",
  "Airports promotions pan india",
  "Metro promotions pan india",
  "PVR cinemas pan india",
  "In films tv serials promotions & integrations"
];

const carouselImages = [
  "/slide/pur1.webp",
  "/slide/pur2.webp",
  "/slide/pur3.webp",

];



const strategies = [
  { title: "NEW STARTUPS MARKETING STRATEGY", img: "/slide/startup.webp" },
  { title: "OLD BUSINESS GROWTH PROGRAM STRATEGY", img: "/slide/oldbusiness.webp" },
  { title: "HOW TO FIND YOUR TARGET AUDIENCE", img: "/slide/target.webp" },
  { title: "HOW TO GROW YOUR SALES", img: "/slide/sales.webp" },
  { title: "LOW INVESTMENT BIG BUZZ", img: "/slide/bigbuzz.webp" },
  { title: "HOW TO CHOOSE RIGHT MEDIA PLATFORMS", img: "/slide/media.webp" }
];

const Slide = () => {
 const [currentIndex, setCurrentIndex] = useState(0);
  const images = ["/bb7.jpeg", "/bb14.jpeg", "/bb8.jpeg", "/bb9.jpeg", "/bb10.jpeg"];
  const slideRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);



  //card 6 =========================





  const { themeColor, gradient } = useContext(ThemeContext);





  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    let animationFrame;
    const scroll = () => {
      if (!isHovered && carouselRef.current) {
        carouselRef.current.scrollLeft += 1;
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
          carouselRef.current.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };
    scroll();
    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered]);

  // Duplicate images for infinite effect
  const duplicatedImages = [...carouselImages, ...carouselImages];



  //=============================
  const strategyItems = [
    {
      title: "NEW STARTUPS MARKETING STRATEGY",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      // replace with your image path
    },
    {
      title: "OLD BUSINESS GROWTH PROGRAM STRATEGY",
      img: "https://cdn-icons-png.flaticon.com/512/3845/3845833.png",
    },
    {
      title: "HOW TO FIND YOUR TARGET AUDIENCE",
      img: "https://cdn-icons-png.flaticon.com/512/9906/9906728.png",
    },
    {
      title: "HOW TO GROW YOUR SALES",
      img: "https://cdn-icons-png.flaticon.com/512/2332/2332212.png",
    },
    {
      title: "LOW INVESTMENT BIG BUZZ",
      img: "https://cdn-icons-png.flaticon.com/512/3566/3566345.png",
    },
    {
      title: "HOW TO CHOOSE RIGHT MEDIA PLATFORMS",
      img: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
    },
  ];

   const cards = [
    { id: 1, image: "/d19.png",  title: "Deales & Distribution Enquires Contact our Executive",  link: "/DealersDistribution" },
    { id: 2,image: "/d10.png", title: "MSME BUSINESS CARE TV SHOW Partipicipation Contact our Executive", link: "/Msmebusiness" },
    { id: 3, image: "/bb23.jpeg",title: "government  Schemes Registrations Contact Our Executive",  link: "/GovernmentSchemes" },
    { id: 4,image: "/bb24.jpeg", title: "Subsidy Benefits Registration Contact Our Executive",  link: "/GovernRegi" },
    { id: 5,image: "/bb25.jpeg", title: "Meeting With International Deligation Contact Our Executive", link: "/GlobalTrade" },
    { id: 6,image: "/bb26.jpeg", title: "Trade In OEM Registration Our Executive",  link: "/TradeIn" },
  ];




  

  const texts = [
    "ARE U A STARTUP,  BUSINESS OWNER",
    "FOUNDER OR MSME COMPANY WANT TO SHOW CASE YOUR SUCCESS STORY GLOBALLY.....",
    "WE WILL SHOW CASE YOU ON AAJTAK HD IN OUR TV SHOW",
    "MEMEBUSINESSCARE  WEBSITE (Ubharta bharat) CONTACT NO - 7042438293",
    "Website:-wwwbusinesscare.com, -Contact NO :– 7042438293 "
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 4000); // 2 sec per change

    return () => clearInterval(interval);
  }, []);


  const [hover, setHover] = useState(false);


  



  return (

    <>
  
    
  

      {/* 🔹 Stylish Static Banner */}
      {/* <div className="one-slider">
      <div className="one-track">
        {slides.map((img, i) => (
          <div className="slide-box" key={i}>
            <img src={img} alt="" className="slide-img" />
          </div>
        ))}
      </div>
    </div> */}
      {/* <div className="ban">
        <img src="/slide/sl3.png" alt="wave" className="wave1" />
      </div> */}

 {/* 🔹 =====================css-102====================== */}
          <div className="slider">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, i) => (
          <img key={i} src={src} alt={`slide-${i}`} />
        ))}
      </div>
    </div>

 
 {/* 🔹 =====================css-175====================== */}
     <div className="tv-banner">
     <div className="animated-box">
      <h1 key={index} className="change-text">
        {texts[index]}
      </h1>
    </div>





        
 
  <div className="tv-left">
    <h1>
            MSME Business Care Smarter, <span>Grow Together</span>
          </h1>
          <h1>क्या आप एक स्टार्टअप है?<br />क्या आप अपने बिजनेस को बड़ा बनाना चाहते हैं</h1>
  <p>
            <ul className="hero-con">
              <li >बिजनेस की नई ऊंचाइयां छूने के लिए हो जाएं त्यार MSME BUSINESS CARE  के मंच से 140 करोड़ लोगो तक पहुंचाये अपने बिजनेस को
              </li>
              <li>FOR REGISTRATIONS CONTACT 7042438293
              </li>
              <li>Email:-msmebusinesscare.com
              </li>
              <li>Get chance to come on AAJTAK CHANNEL Through our Interview Section if u are a MSME , Business / Industrailst / business owner / startup / fmcg company / firm etc
              </li>
            </ul>
          </p>
   <Link to="/Contact">  <button className="tv-btn">अभी संपर्क करें</button></Link>
  </div>



</div>




 {/* 🔹 =====================css-347====================== */}
      <div className="main">
        
        <div className="main-left">
          <h2>
           Meet Live with Celebrity Business Consultants & Live Coaches 
            <br /> Mr. Ankur Bansal
            &<br />Ms. Pooja Sharma.
          </h2>
          <p>अब बदलेगा इंडिया का बिज़नेस, आ गया है Business Care,
            पुरानी पद्धति छोड़ो नयी रणनीति अपनाओ</p>
          <p>
            Are you a Business Owner Trying to Increase Sales,We
            are Here to Plan your Marketing Strategy
          </p>
          <p>


            <ul className="business-list">
              <li>
                Let’s turn your business vision into success — join India’s MSME Business Care
                TV Show & Business Strategy Partners.
              </li>

              <li>
                We don’t believe in sayings. We create success stories.
              </li>

              <li>
                More than thousands of MSME businesses going in loss — we support them
                to perform their business worldwide.
              </li>
            </ul>

          </p>
          <div className="left-btn">
            <Link to="/Founder" > <button >CELEBRITY COACHES</button></Link>
            <Link to="/Contact">   <button>FOR APPOINTMENT</button></Link>
          </div>
        </div>

        <div className="main-right">
          <div className="right-img">
            <img src="/slide/mt1.webp" alt="home" />
          </div>
        </div>




      </div>




 {/* 🔹 =====================css-568====================== */}
      <div className="home-container">

      
        <section className="hero"
          style={{
            background: gradient || themeColor,   
            transition: "0.4s ease-in-out",

            
          }}>
 {/* 🔹 =================================css-621================= */}
    <section
      className="stats-section"
      style={{
        background: gradient || themeColor,
        transition: "0.4s ease-in-out",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <div key={index} className="stat-card">
            <h3>
              <Counter target={stat.value} start={hover} />
            </h3>
            <p>{stat.title}</p>
          </div>
        ))}
      </div>
    </section>


    
          {/* <p>Collaborate, exchange, and build without money.</p> */}
         <Link to="/Contact"> <button className="btn-primary">Get Started</button></Link>
        </section>



{/* 🔹 =====================css-778====================== */}

        <section className="simple-section1"  style={{
              background: gradient || themeColor,   // 🔹 Gradient or Color apply
              transition: "0.4s ease-in-out",

              // padding: "20px",
            }}>
      <h2 className="simple-title1">For Registration & Participation Enquiry</h2>

      <div className="cards-wrapper1">
        {cards.map((c) => (
          <div key={c.id} className="card1">
            <img src={c.image} alt={c.title} className="card-image1" />
            <h3 className="card-heading1">{c.title}</h3>
            <p className="card-text1">{c.text}</p>
            <Link className="card-btn1" to={c.link}>More Information</Link>
          </div>
        ))}
      </div>
    </section>
        

        {/* 🔹 Features Section   =========css-949============== */}
        <section className="features">
          <h2>Why Choose MSME Business Care?</h2>
          <p className="features-desc">
         MSME Business Care is the first exclusive global platform specially designed for business owners and founders to collaborate, connect, and expand their ventures. Through msmebusinesscare.com, entrepreneurs access a unique single-window global ecosystem where they can showcase their businesses, success stories, and achievements on national TV channels—providing unmatched visibility and brand credibility.

One of the most prestigious features of this platform is that it is the first platform where business owners can showcase their success stories through exclusive interviews hosted by very famous celebrity hosts, giving them star-level exposure and industry recognition.
     <h4>Key Benefits of Choosing MSME Business Care:</h4>
          </p>
          <div className="feature-cards">
            {/* <div className="card">
              <div className="icon">💡</div>
              <h3> Dealer & Distributor Partnerships </h3>
              <p>
       Enables rapid business expansion through verified national and international partners.

              </p>
            </div>
            <div className="card">
              <div className="icon">🤝</div>
              <h3>Build Trust</h3>
              <p>
                Establish credibility with your clients and partners through reliable
                business practices and expert consulting.
              </p>
            </div>
           <div className="card">
  <div className="icon">🚀</div>
  <h3>Grow Faster</h3>
  <p>
    Accelerate your growth with actionable insights, marketing strategies,
    and business coaching from industry experts.
  </p>
</div> */}

<div className="card">
  <div className="icon">💡</div>
  <h3>Smart Branding</h3>
  <p>
    Valuable Branding at Pocket-Friendly Costs – High-impact branding designed to save on marketing budgets.
  </p>
</div>

<div className="card">
  <div className="icon">📺</div>
  <h3>Digital & OTT Branding</h3>
  <p>
    Ensures wide digital reach through top OTT and online platforms.
  </p>
</div>

<div className="card">
  <div className="icon">📈</div>
  <h3>Grow Faster</h3>
  <p>
    Accelerate your growth with actionable insights, marketing strategies,
    and business coaching from industry experts.
  </p>
</div>

<div className="card">
  <div className="icon">🎬</div>
  <h3>Cinema, TV, FM, Hoardings & 360° Branding</h3>
  <p>
    Complete multimedia marketing solutions across all major channels.
  </p>
</div>

<div className="card">
  <div className="icon">🏛️</div>
  <h3>Government Schemes Awareness</h3>
  <p>
    Regular updates and guidance on business-related government schemes and subsidies.
  </p>
</div>

<div className="card">
  <div className="icon">🌍</div>
  <h3>Global Setup Support for Startups</h3>
  <p>
    Helps new businesses build and expand their presence in global markets.
  </p>
</div>

          </div>

{/* 🔹==============================css-1099============================== */}

          <section className="trusted-section">
            <h3>Trusted Platform for MSME Growth</h3>
            <p className="intro">
              We are dedicated to empowering Micro, Small & Medium Enterprises by providing real
              business exposure, development support, and brand-building opportunities.
            </p>

            <div className="trusted-grid">

              <div className="trusted-item">
                <h3>📺 Live TV & Digital Media Reach</h3>
                <p>
                  Your business story reaches investors, customers, and industry networks through our
                  broadcast and digital platforms — giving your brand the visibility it deserves.
                </p>
              </div>

              <div className="trusted-item">
                <h3>🧠 Business Consultation & Strategy Support</h3>
                <p>
                  We not only showcase your business — we guide it. Our industry experts help you
                  structure business models, sales strategies, customer acquisition plans, and market
                  expansion.
                </p>
              </div>

              <div className="trusted-item">
                <h3>🤝 Verified Networking with Dealers & Distributors</h3>
                <p>
                  We connect you with genuine dealers, distributors, suppliers, and channel partners
                  to grow your business footprint across India.
                </p>
              </div>

              <div className="trusted-item">
                <h3>✅ Brand Authenticity & Trust Building</h3>
                <p>
                  Featuring your brand on MSME Business Care creates credibility and trust among your
                  customers and market competitors.
                </p>
              </div>

              <div className="trusted-item">
                <h3>💰 Affordable & Result-Oriented Growth Solutions</h3>
                <p>
                  We understand MSME challenges; hence, our services are designed to be budget-friendly
                  with measurable outcomes.
                </p>
              </div>

              <div className="trusted-item">
                <h3>📦 End-to-End Support System</h3>
                <p>
                  From production, marketing, branding to dealer networking — we manage everything so
                  you can focus on your business operations smoothly.
                </p>
              </div>

            </div>
          </section>

        </section>





        {/* 🔹 How It Works===========css-1297========== */}
        <section className="how-it-works" style={{
          background: gradient || themeColor,   // 🔹 Gradient or Color apply
          transition: "0.4s ease-in-out",

          // padding: "20px",
        }}>
          <h2>How MSME Business Care Works</h2>
          <p className="how-desc">
            MSME Business Care simplifies your business growth journey. Follow these simple steps to boost your business efficiently.
          </p>
          <div className="steps">
            <div className="step">
              <div className="icon">📝</div>
              <h3>Add Your Business Info</h3>
              <p>
                Share your business details, goals, and challenges with our expert team to get tailored strategies.
              </p>
            </div>
            <div className="step">
              <div className="icon">🔍</div>
              <h3>Analyze & Find Opportunities</h3>
              <p>
                Our team evaluates your business and identifies growth opportunities, target audience, and best marketing approaches.
              </p>
            </div>
            <div className="step">
              <div className="icon">🚀</div>
              <h3>Implement & Grow</h3>
              <p>
                Apply our proven strategies to enhance sales, optimize resources, and expand your brand across India.
              </p>
            </div>
            <div className="step">
              <h3>Dealers & Distribution</h3>
              <p >
                <ul>
                  <li>WE PROVIDE COMPLETE MARKETING STARTEGY </li>
                  <li>WE PROVIDE RIGHT DEALERS AND DISTRIBUTORS </li>
                  {/* <li>WE SUPPORT OUR MSME TO ENHNACE BUSINESS</li>
                  <li>WE PROVIDE NATIONAL AND INTERNATIONAL LEVEL BUSINESS </li>
                  <li>WE LAUNCH STARTUP IN OUR TV SHOW </li>
                  <li>WE MAKE BRANDS
                  </li> */}
                </ul>
              </p>
              
            </div>
             <div className="step">
              <h3>MSME Business Expansion Support</h3>
              <p className="step1">
                <ul>
                  {/* <li>WE PROVIDE COMPLETE MARKETING STARTEGY </li>
                  <li>WE PROVIDE RIGHT DEALERS AND DISTRIBUTORS </li> */}
                  <li>WE SUPPORT OUR MSME TO ENHNACE BUSINESS</li>
                  <li>WE PROVIDE NATIONAL AND INTERNATIONAL LEVEL BUSINESS </li>
                  {/* <li>WE LAUNCH STARTUP IN OUR TV SHOW </li>
                  <li>WE MAKE BRANDS
                  </li> */}
                </ul>
              </p>
              
            </div>
             <div className="step">
              <h3>Where Startups Become Brands</h3>
              <p className="step1">
                <ul>
                  {/* <li>WE PROVIDE COMPLETE MARKETING STARTEGY </li>
                  <li>WE PROVIDE RIGHT DEALERS AND DISTRIBUTORS </li>
                  <li>WE SUPPORT OUR MSME TO ENHNACE BUSINESS</li>
                  <li>WE PROVIDE NATIONAL AND INTERNATIONAL LEVEL BUSINESS </li> */}
                  <li>WE LAUNCH STARTUP IN OUR TV SHOW </li>
                  <li>WE MAKE BRANDS
                  </li>
                </ul>
              </p>
              
            </div>
          </div>

        </section>

        {/* ============🔹 Popular Services========css-1456================= */}
        <section
          className="services"
          style={{
            background: gradient || themeColor,
            transition: "0.4s ease-in-out",
            padding: "60px 10%",
          }}
        >
          <h2>Our Popular Services</h2>
          <p className="services-desc">
            BusinessCare offers a range of services to help businesses grow efficiently and maximize profits with minimal investment.
          </p>
          <div className="service-list">
            <div className="service-card1">📈 Business Strategy Planning</div>
            <div className="service-card1">💡 Marketing & Branding</div>
            <div className="service-card1">🤝 Business Consultation</div>
            <div className="service-card1">🚀 Sales Growth & Optimization</div>
          </div>
        </section>

        {/* 🔹 Testimonials =========================css-1630===================*/}
        <section className="testimonials" style={{
          background: gradient || themeColor,   // 🔹 Gradient or Color apply
          transition: "0.4s ease-in-out",

          // padding: "20px",
        }}>
          <h2>What Our Clients Say</h2>
          <div className="testimonial-list">
            <div className="testimonial-card">
              <p>"BusinessCare helped me identify the right marketing strategy and grow my brand nationwide!"</p>
              <span>- Ankur Bansal Client</span>
            </div>
            <div className="testimonial-card">
              <p>"Thanks to BusinessCare, our sales increased 3x within 6 months with minimal investment."</p>
              <span>- Mumbai Startup Owner</span>
            </div>
            <div className="testimonial-card">
              <p>"Their expert consultation transformed our small business into a recognized brand across India."</p>
              <span>- Delhi SME Owner</span>
            </div>
          </div>
        </section>


        {/* 🔹 Final Call To Action ===================css-1486=============*/}
        <section className="cta"
          style={{
            background: gradient || themeColor,   // 🔹 Gradient or Color apply
            transition: "0.4s ease-in-out",

            // padding: "20px",
          }}>
          <h2>Ready to Start?</h2>
          <Link to="/contact">  <button className="btn-primary1">Join Now</button></Link>
        </section>
      </div>

      {/* ==============================css--1895========="> */}
      <div className="purpose-section" style={{
        background: gradient || themeColor,   // 🔹 Gradient or Color apply
        transition: "0.4s ease-in-out",

        // padding: "20px",
      }}>
        <div className="purpose-content">
          <h1>
            ज्यादातर बिजनेसमैन बिजनेस एक्सपेंशन के लिए <span>पुरानी तकनीकों</span> का इस्तेमाल करते हैं
          </h1>
          <p>
            जिसके चलते बिजनेस <strong>लॉस</strong> में चले जाते हैं।
            व्यापार की छोटी सी रणनीति की गलतियाँ आपको <strong>घाटे</strong> में ला सकती हैं।
          </p>
          <p>
            Most business owners use outdated methods for business expansion, which can lead to losses.
            Even small strategy mistakes can put your business in a loss.
          </p>
          {/* <p className="cta-text">
      Come to us and we will show you how to take your company to <strong>new heights</strong>.
    </p>
    <div className="purpose-buttons">
      <button className="btn-primary">Get Started</button>
      <button className="btn-outline">Learn More</button>
    </div> */}


          <div className="media-container"   >
            {/* Left Text */}
            <div className="media-left">
              <h2>Media Placement Strategy</h2>
              <ul>
                {mediaPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Right Slider */}
            <div
              className="media-right"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="carousel" ref={carouselRef}>
                {duplicatedImages.map((img, index) => (
                  <div className="carousel-card" key={index}>
                    <img src={img} alt={`slide ${index}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>



        </div>
      </div>


      {/* ===================================csss=2136==========*/}

      <section className="strategy-cards2" style={{
        background: gradient || themeColor,   // 🔹 Gradient or Color apply
        transition: "0.4s ease-in-out",

        // padding: "20px",
      }}>
        <div className="strategy-cards1">
          <h1>MARKETING STRATEGY PROGRAMS</h1>
        </div>
        <div className="strategy-cards-container" style={{
          background: gradient || themeColor,   // 🔹 Gradient or Color apply
          transition: "0.4s ease-in-out",

          // padding: "20px",
        }}>
          {strategyItems.map((item, index) => (
            <div className="strategy-card" key={index}>
              <img src={item.img} alt={item.title} />
              <h3 className="strategy-title">{item.title}</h3>

            </div>
          ))}


        </div>
        {/* 🔗 Using React Router Link */}
        {/* <div className="strategy-link1">
          <Link to="/learn-more" className="strategy-link">
            Learn More →
          </Link></div> */}
      </section>



      {/* ===============================css-2307================================================*/}

      <section className="strategy-info-section" style={{
        background: gradient || themeColor,   // 🔹 Gradient or Color apply
        transition: "0.4s ease-in-out",

        // padding: "20px",
      }}>
        <div className="strategy-info-container">
          {/* Left Image */}
          <div className="strategy-info-image">
            <img src="./slide/p1.webp" alt="Marketing Strategy" />
          </div>

          {/* Right Text */}
          <div className="strategy-info-content">
            <p>
              Insufficient marketing, wrong platforms, a lacklustre business plan
              or even wrong legal structure can prevent your business from
              thriving. The reasons why many entrepreneurs fail early are endless,
              some being unique to the business owner. So, don’t waste time — meet
              us! We will design a complete strategy to make you king in your
              industry, grow your business sales, and enhance your distribution
              network.
            </p>

            {/* Center Link */}
            <div className="strategy-info-link">
              <Link to="/contact" className="learn-more-link">
                LET’S START →
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/*===================css-2445================ */}
      <section className="strategy-section" style={{
        background: gradient || themeColor,   // 🔹 Gradient or Color apply
        transition: "0.4s ease-in-out",

        // padding: "20px",
      }}>
        <div className="container">
          <h2 className="section-heading">BUSINESS CARE MAKING IMPOSSIBLE POSSIBLE </h2>
          <div className="content">
            <div className="text-left">
              <p className="intro-text">
                Let's Change The Strategy. By India’s Most Recent Business Coaches & Business Strategy Media Experts SINCE 14 YEARS
              </p>
              <ul className="bullet-list">
                <li>Business Advisor Counsellor & Consultant.</li>
                <li>Pan India More Than Thousand Business Owners Taking His Advises For Business Enhancement.</li>
                <li>Business Owners Rely On Ankur Bansal’s Strategies.</li>
                <li>More Than Thousands of Business Owners and team Implementing What Ankur Bansal Taught them.</li>
              </ul>
            </div>
            <div className="image-right">
              <img src="/slide/p2.webp" alt="Business Strategy" />
            </div>
          </div>
        </div>
      </section>



{/* 🔹 =====================css-2596====================== */}
      <section className="marketing-section" style={{
        background: gradient || themeColor,   // 🔹 Gradient or Color apply
        transition: "0.4s ease-in-out",

        // padding: "20px",
      }}>
        <div className="container">
          <h2 className="section-heading">Top Heading Goes Here</h2>
          <div className="content">
            <div className="image-left">
              <img src="/slide/p3.webp" alt="Marketing Strategy" />

            </div>
            <div className="text-right">
              <h1>Ms. Pooja Sharma</h1>
              <p className="intro-text">
                अब कम खर्चा मुनाफा ज्यादा, कम समय में बनाएं अपने ब्रांड को नंबर 1 ब्रांड
              </p>
              <p>
                Are you a business owner trying to increase sales, we are here to plan your marketing strategy:
              </p>
              <ul className="bullet-list">
                <li>Product analysis</li>
                <li>Product research</li>
                <li>Product target audience strategy</li>
                <li>Product market strategy</li>
                <li>Product distribution</li>
                <li>Product dealer network management strategy</li>
                <li>Product sales growth strategy</li>
              </ul>
              <Link to="/contact" className="cta-link">Plan My Marketing Strategy</Link>
            </div>
          </div>
        </div>
      </section>

{/* 🔹 =====================css-2772====================== */}
      <section className="business-strategy-section" style={{
        background: gradient || themeColor,   // 🔹 Gradient or Color apply
        transition: "0.4s ease-in-out",

        // padding: "20px",
      }}>
        <div className="container">
          <div className="content">
            <div className="text-left">
              <h2>Mr. Ankur Bansal</h2>
              <h2>Business Strategy Planning</h2>
              <p>
                By understanding the business and understanding the customer of the business, we prepare the business strategy.
                If your business is just crawling for many years, then we will help you to make your business a big brand of the country
                by our unique techniques and ideas.
              </p>

              <p>
                By understanding the business and understanding the customer of the business,
                we prepare
                a tailor-made business strategy that fits your goals perfectly. Even if your
                business has been struggling to grow over the years, our proven methods and
                innovative techniques will help you transform it into a leading brand in the
                market. We focus on optimizing your operations,
                improving customer engagement, and increasing revenue through actionable insights
                and strategic planning.
              </p>
              <Link to="/contact" className="cta-link">Get Your Strategy</Link>
            </div>
            <div className="image-right">
              <img src="/slide/p4.webp" alt="Business Strategy" />

            </div>
          </div>
        </div>
      </section>




      {/*===============================css-2991=========================== */}
      <section className="gallery-section" style={{
        background: gradient || themeColor,   // 🔹 Gradient or Color apply
        transition: "0.4s ease-in-out",

        // padding: "20px",
      }}>
        <div className="container">
          <h2 className="section-heading">Our Gallery</h2>
          <div className="image-grid">
            <div className="image-item">
              <img src="/slide/p5.webp" alt="Project 1" />
            </div>
            <div className="image-item">
              <img src="/slide/p6.webp" alt="Project 2" />
            </div>
            <div className="image-item">
              <img src="/slide/p7.webp" alt="Project 3" />
            </div>
            <div className="image-item">
              <img src="/slide/p8.webp" alt="Project 4" />
            </div>
          </div>
        </div>
      </section>




      {/*=================css-3088=========== */}

      <section className="branding-section" style={{
        background: gradient || themeColor,   // 🔹 Gradient or Color apply
        transition: "0.4s ease-in-out",

        // padding: "20px",
      }}>
        <div className="container">
          <div className="content">
            <div className="text-left">
              <h2>Ms. Pooja Sharma</h2>
              <h2>Make Your Brand Bigger</h2>
              <p>
                If you do not do branding in business, how will you make a big brand? Will you tell them to be bigger just by seeing the competitors, or by doing what’s right marketing planning, you will make your brand bigger than them.
              </p>
              <a href="tel:+1234567890" className="cta-link">Call Now</a>
            </div>
            <div className="image-right">
              <img src="/slide/p9.webp" alt="Branding Strategy" />

            </div>
          </div>
        </div>
      </section>



      {/*==================================css-3266============================= */}
      <section className="flourish-section" style={{
        background: gradient || themeColor,   // 🔹 Gradient or Color apply
        transition: "0.4s ease-in-out",

        // padding: "20px",
      }}>
        <div className="container">
          <div className="content">
            <div className="image-left">
              <img src="/slide/p10.webp" alt="Business Flourish" />
              {/* <div className="custom-shape-divider-bottom">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="
M0,60
C50,0 300,120 450,60
C600,0 750,120 900,60
C1050,0 1200,120 1350,60
L1350,220
L0,220
Z" />

                </svg>
              </div> */}
            </div>
            <div className="text-right">
              <h2>Mr. Ankur Bansal</h2>
              <h2>Grow Your Business Efficiently</h2>
              <p>
                Can your business flourish without spending a lot of money?
                What is the best way by which money will be spent less,
                and your name will be covered in the top 10.
              </p>
              <p>
                Growing your business doesn’t always mean spending more money.
                With smart planning, targeted marketing strategies, and an optimized
                approach, you can maximize results while keeping costs low. By identifying
                your ideal customers, analyzing market trends, and focusing on high-impact
                actions, your brand can gain recognition and reach the top 10 in your
                industry. Efficiency and strategy are the keys to sustainable growth.
              </p>
              <div className="cta-container">
                <Link to="/contact" className="cta-link">Plan My Growth</Link>
              </div>
            </div>
          </div>
        </div>
      </section>








  
    </>


  );
};

export default Slide;
