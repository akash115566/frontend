import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import "../Stylesss/strategyPage.css";

const StrategyPage = () => {
  const { themeColor, gradient } = useContext(ThemeContext);
  return (
    <>
      <div className="strategy-page">
        {/* Top Fixed Background Section */}
        <section className="top-section">
          <div className="top-text">
            <h1>Empower Your Business</h1>
            <p>
              Targeted strategies to grow your business efficiently and effectively.
              Achieve more with focused marketing and the right media platforms.
            </p>
          </div>
        </section>

        {/* Content Section with Headings */}
        <section className="content-section" style={{
          background: gradient || themeColor,
          transition: "0.4s ease-in-out",
        }}>
          <div className="content-card">
            <h2>Startups Marketing Strategy</h2>
            <p>
              Tailored marketing strategies for new startups to gain visibility, attract 
              customers,and build a strong brand from the ground up.
            </p>
            <p>
              At BusinessCare, we design powerful, affordable marketing strategies crafted
               specially for startups. From creating your brand identity to generating your 
               first 1,000 customers, we help you scale step by step with clear direction,
                digital tools, and measurable results. Our team focuses on growth, visibility,
                 and ROI — everything a startup needs to succeed in a competitive market.
            </p>
            <p>Key Benefits:
• Brand Positioning — Create a strong identity that sets your startup apart from competitors.
• Go-to-Market Strategy — Launch effectively with campaigns designed to attract early users.
• Digital Marketing Setup — Leverage SEO, social media, and ads to grow awareness fast.
• Scalable Growth Plan — Use data analytics and automation to expand without overspending.</p>
         
            
          </div>
          
          <div className="content-card">
            <h2>Business Growth Programme Strategy</h2>
            <p>
              Comprehensive growth plans for established businesses, including sales optimization,
              audience engagement, and revenue expansion techniques.
            </p>
            <p>At BusinessCare, our Business Growth Programme Strategy helps you unlock your company’s
               full potential through structured marketing, digital transformation, and customer 
               engagement strategies. Whether you’re a small business or an emerging brand, we design 
               custom growth programs that focus on long-term sustainability, not just short-term spikes.</p>
          </div>
          <div className="content-card">
            <h2>Choose Right Media Platforms</h2>
            <p>
              Select the most effective media channels to reach your target audience,
              ensuring maximum impact for your marketing campaigns.
            </p>
            <p>At BusinessCare, we help you choose the right media platforms to maximize your visibility
               and ROI. Not every platform works for every business — that’s why we analyze your target
                audience, industry trends, and content style to pick the best mix of digital channels.
                 From social media to Google Ads,
               we make sure your message appears in front of the people who matter most.</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default StrategyPage;
