import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import "../Stylesss/signup.css";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const { bgColor } = useContext(ThemeContext);
  const navigate = useNavigate();  // ✅ useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();  // form reload rokne ke liye
    // ✅ yaha form data handle kar sakte ho
    navigate("/Index");   // ✅ submit ke baad Slide page redirect
  };

  return (
    <div className="register-container" style={{ background: bgColor }}>
      <div className="register-box">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <Link to="/slide"> <button type="submit">Register</button></Link>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
