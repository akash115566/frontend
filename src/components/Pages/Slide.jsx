// import React, { useContext } from "react";
import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext";
import "../Stylesss/slide.css";


 const images = [
    "/bb1.jpeg",
    "/bb2.jpeg",
    "/bb3.jpeg",
    "/bb4.jpeg",
    "/bb5.jpeg",
  ];

  // duplicate to make infinite loop

  const slides = [...images, ...images]; // infinite loop


const statsData = [
  {
    title: "Real Estate Project Done",
    value: "250+",
  },
  {
    title: "FMCG Startup Project Done",
    value: "180+",
  },
  {
    title: "Pan India Clients",
    value: "300+",
  },
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



  return (
    <div
      className="container"
      style={{
        background: gradient || themeColor,   // 🔹 Gradient or Color apply
        transition: "0.4s ease-in-out",
        minHeight: "100vh",
        // padding: "20px",
      }}
    >

      {/* 🔹 Stylish Static Banner */}
            <div className="one-slider">
      <div className="one-track">
        {slides.map((img, i) => (
          <div className="slide-box" key={i}>
            <img src={img} alt="" className="slide-img" />
          </div>
        ))}
      </div>
    </div>




      {/* <div className="tv-banner">
 
  <div className="tv-left">
    <h1>अब टीवी पर प्रचार कराइए <span>Barter</span> के साथ</h1>
    <p>साझेदारी से आगे बढ़ें — ब्रांड और क्रिएटर एक साथ</p>
    <button className="tv-btn">अभी संपर्क करें</button>
  </div>


  <div className="tv-right">
    <video autoPlay loop muted playsInline className="tv-video">
     <source src="/ani.mp4"  alt="video akash"/>
      आपका ब्राउज़र वीडियो सपोर्ट नहीं करता।
    </video>
  </div>
</div> */}


      <div className="main">
        <div className="main-left">
          <h2>
            MEET LIVE WITH INDIA'S CELEBRITY BUSINESS COACHES

            <br /> Mr. Ankur Bansal
            &<br />Ms. Pooja Sharma.
          </h2>
          <p>अब बदलेगा इंडिया का बिज़नेस, आ गया है Business Care,
            पुरानी पद्धति छोड़ो नयी रणनीति अपनाओ</p>
          <p>
            Are you a Business Owner Trying to Increase Sales,We
            are Here to Plan your Marketing Strategy
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





      <div className="home-container">

        {/* 🔹 Hero Section */}
        <section className="hero"
          style={{
            background: gradient || themeColor,   // 🔹 Gradient or Color apply
            transition: "0.4s ease-in-out",

            // padding: "20px",
          }}>

          <section className="stats-section"
            style={{
              background: gradient || themeColor,   // 🔹 Gradient or Color apply
              transition: "0.4s ease-in-out",

              // padding: "20px",
            }}>
            <div className="stats-container">
              {statsData.map((stat, index) => (
                <div key={index} className="stat-card">

                  <h3>{stat.value}</h3>
                  <p>{stat.title}</p>
                </div>
              ))}
            </div>
          </section>



          <h1>
            BusinessCare Smarter, <span>Grow Together</span>
          </h1>
          <p>Collaborate, exchange, and build without money.</p>
          <button className="btn-primary">Get Started</button>
        </section>

        {/* 🔹 Features Section   =========css-566============== */}
        <section className="features">
          <h2>Why Choose BusinessCare?</h2>
          <p className="features-desc">
            BusinessCare is your trusted partner in growing your business efficiently.
            From expert guidance to cost-effective strategies, here’s why business owners
            rely on us:
          </p>
          <div className="feature-cards">
            <div className="card">
              <div className="icon">💡</div>
              <h3>Save Money</h3>
              <p>
                Optimize your resources and maximize ROI with smart, low-cost strategies
                tailored for your business.
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
            </div>
          </div>
        </section>





        {/* 🔹 How It Works===========css-674========== */}
        <section className="how-it-works" style={{
          background: gradient || themeColor,   // 🔹 Gradient or Color apply
          transition: "0.4s ease-in-out",

          // padding: "20px",
        }}>
          <h2>How BusinessCare Works</h2>
          <p className="how-desc">
            BusinessCare simplifies your business growth journey. Follow these simple steps to boost your business efficiently.
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
          </div>
        </section>

        {/* ============🔹 Popular Services===  css-824==================== */}
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

        {/* 🔹 Testimonials */}
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


        {/* 🔹 Final Call To Action */}
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

      {/* <div className="mid-container"> */}
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
      

      {/* =====csss=1336==========*/}

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



      {/* ===============================================================================*/}



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


   {/*===================css-1563================ */}
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


      <section className="business-strategy-section" style={{
        background: gradient || themeColor,   // 🔹 Gradient or Color apply
        transition: "0.4s ease-in-out",

        // padding: "20px",
      }}>
        <div className="container">
          <div className="content">
            <div className="text-left">
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




   {/*=================css-1960=========== */}
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




     {/*=================css-2036=========== */}

      <section className="branding-section" style={{
        background: gradient || themeColor,   // 🔹 Gradient or Color apply
        transition: "0.4s ease-in-out",

        // padding: "20px",
      }}>
        <div className="container">
          <div className="content">
            <div className="text-left">
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



{/*=================css-2144=========== */}
      <section className="flourish-section" style={{
        background: gradient || themeColor,   // 🔹 Gradient or Color apply
        transition: "0.4s ease-in-out",

        // padding: "20px",
      }}>
        <div className="container">
          <div className="content">
            <div className="image-left">
              <img src="/slide/p10.webp" alt="Business Flourish" />
               <div className="custom-shape-divider-bottom">
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
  </div>
            </div>
            <div className="text-right">
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








    </div>


  );
};

export default Slide;
