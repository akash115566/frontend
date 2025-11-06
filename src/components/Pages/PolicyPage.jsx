import React, { useEffect, useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import "../Stylesss/policyPage.css";

const PolicyPage = () => {
  const { themeColor, gradient } = useContext(ThemeContext);

  useEffect(() => {
    document.title = "BusinessCare - Policy Page";
  }, []);

  return (
    <div className="policy-page">
      {/* 🔹 Hero Section */}
      <section className="policy-hero">
        <div className="hero-content">
          <h1>BusinessCare Policies</h1>
          <p>
            Our commitment to your privacy and data protection is our top
            priority. Please review our detailed policy below.
          </p>
          <p className="hero-address">
            Address: A-167, Sec-63, Noida UP-201301
          </p>
        </div>
      </section>

      {/* 🔹 Policy Content */}
      <section className="policy-content" style={{
        background: gradient || themeColor,
        transition: "0.4s ease-in-out",
      }}>
        <h2>Privacy Policy</h2>
        <p>
          We collect personal information only for providing and improving our
          services. Your data will never be shared or sold to third parties
          without consent.
        </p>

        <h2>Cookie Policy</h2>
        <p>
          We use cookies to analyze site performance and improve your
          experience. You can manage cookies through your browser settings.
        </p>

        <h2>Data Retention</h2>
        <p>
          Your data is securely stored and retained only as long as necessary
          for business and legal purposes.
        </p>

        <h2>Terms of Use</h2>
        <p>
          By using this website, you agree to comply with all applicable laws
          and our usage policies.
        </p>

        <h2>Contact</h2>
        <p>
          For any policy-related questions, contact us at{" "}
          <b>hello@businesscare.org.in</b>.
        </p>
      </section >
      <section className="policy-content" style={{
        background: gradient || themeColor,
        transition: "0.4s ease-in-out",
      }}>
        <h2>MORE INFORMATION</h2>
        <p>
          Business Care values your privacy. In this privacy policy (“policy”), we describe the information that we collect about you when you visit our website,
          https://www.businesscare.org.in/ (the “Website”) and use the services available.
          on the Website (“Services”) and how we use and disclose that information.
          If you have any questions or comments about the privacy policy, please contact
          us at support@businesscare.org.in. Your use of the Website and/or Services
          and any personal information you provide on the website remains subject to
          the terms of the Policy and Business Care’ Terms of Use.
          At the time of using the business care, you will share certain personal information with the business care. Pooja Movie Creations respects your personal information. Such personal information may include your personally identifiable information.
          information such as your name, address, mobile number, your email id, your
          age, IP address, payment details, and any other personal information that you
          may share in connection with the services.
        </p>

      </section>
      <section className="policy-content" style={{
        background: gradient || themeColor,
        transition: "0.4s ease-in-out",
      }}>

        <p>
          The Business Care Service could be vulnerable to hacking, virus attacks, and
          Your personal data may be at risk. Business care takes all the necessary and
          reasonable caution to protect the business’s services and data.
          Advertisements On the Pooja Movie Creations Website, Pooja Movie Creations
          might post advertisements provided by advertisers. These advertisers might
          set a mobile device ID on their apps. Pooja Movie Creations is not responsible.
          for any of these advertisers. You are advised to proceed at your own risk and discretion.
          to deal with the advertisers if you intend to. By allowing such advertisements
          Pooja Movie Creations do not recommend or market or warranty the Advertisers,
          quality, commitment, deliverables, genuineness, and advertisers commitment to
          protect your personal information. Business care Service, You will be required to provide additional information.
          Such information will also remain in Pooja Movie Creations’s database and
          will be considered your personal information and will be treated as confidential.
          Protection of Information and Sbe cautious.torage Business care needs to caution You that
        </p>

      </section>

      {/* 🔹 Footer
      <footer className="policy-footer">
        © {new Date().getFullYear()} BusinessCare. All Rights Reserved.
      </footer> */}
    </div>
  );
};

export default PolicyPage;
