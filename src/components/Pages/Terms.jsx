import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import "../Stylesss/terms.css"; // ✅ make sure path matches your structure

const Terms = () => {
  const { themeColor, gradient } = useContext(ThemeContext);
  return (
    <div className="terms-page" >
      {/* ✅ Top Section with Background Image */}
      <section className="terms-hero">
        <div className="terms-overlay">
          <h1>Terms & Conditions</h1>
          <p>Welcome to BusinessCare. Please read our terms carefully before using our services.</p>
        </div>
      </section>

      {/* ✅ Main Content Section */}
      <section className="terms-content" style={{
        background: gradient || themeColor,
        transition: "0.4s ease-in-out",
      }}>
        <div className="terms-container" style={{
          background: gradient || themeColor,
          transition: "0.4s ease-in-out",
        }}>
          <h2>1. Introduction</h2>
          <p>
            By accessing and using the BusinessCare website, you agree to comply with these Terms and Conditions. These terms apply to all users, visitors, and others who access or use the service.
          </p>

          <h2>2. Use of Service</h2>
          <p>
            You agree to use our services only for lawful purposes and not in a manner that infringes the rights of others or restricts or inhibits anyone else’s use of the website.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            All content, logos, designs, and materials on BusinessCare are the intellectual property of our company. You may not reproduce or distribute our materials without permission.
          </p>

          <h2>4. Limitation of Liability</h2>
          <p>
            BusinessCare is not liable for any damages that may arise from the use of our services or website. We do not guarantee uninterrupted or error-free access.
          </p>

          <h2>5. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Updates will be posted on this page, and continued use of our website means you accept those changes.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
            <br />
            <strong>Email:</strong> support@businesscare.org.in
          </p>
        </div>
      </section>
      <section className="terms-content" style={{
        background: gradient || themeColor,
        transition: "0.4s ease-in-out",
      }}>
        <div className="terms-container" style={{
          background: gradient || themeColor,
          transition: "0.4s ease-in-out",
        }}>
          <p>
            Business care is just a medium to motivate and inspire business owners to go ahead with their new ideas.
            Business Care works for the better future of all its clients, but this is only possible when the business owner follows the steps suggested by Business Care.
            Business Care accepts no responsibility for any such loss or damage.
            Business Care helps its clients like a consultant. From any kind of loss or any kind of obstacle, business care has concern.
            Business Care only serves its clients with its suggestions and its experience.
            would not be responsible for any disputes or losses in the business of the business owners that are related to the client.
            Business Care is a consulting firm for business owners. It never forces any client to follow any idea.
            All the disputes related matters should be seen in Noida court.
            Business care is a platform where anyone can take consultancy.
            Business care never suggests any wrong idea that will harm anyone.
            If you come to Business Care and take your consultation, follow all the conditions suggested Business Care.</p>
        </div>

      </section>


      <section className="terms-content" style={{
        background: gradient || themeColor,
        transition: "0.4s ease-in-out",
      }}>
        <div className="terms-container" style={{
          background: gradient || themeColor,
          transition: "0.4s ease-in-out",
        }}>
          <p>
            Business owners get consulting services by paying only consulting fees.
            If owners follow all of them, then they definitely get profit.
            Business Care is only playing the role of a consultant. If your business is going into losses due to
            For some reason, business care has no concern.
            Whatever consulting will be available, it will be available after receiving the consultancy fee, if
            If you want to take consultancy based on your desire, then you can contact.
            Once payment is received, it will not be refunded.
            Clients couldn’t claim on Business Care for any type of loss.
            All the details of the business owner will be fully secure and will not be shared with
            Another person excluded team.
            All the disputes would be seen in the courts in Noida and Delhi.
            A business owner will not guarantee any business; they are only consultants.
            The term “secrecy” used by the company never misused any data of the client or any
            other .
          </p>
        </div>

      </section>
    </div>
  );
};

export default Terms;
