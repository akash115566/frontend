import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Slide from "./components/Pages/Slide";
import About from "./components/Pages/About";
import Award from "./components/Pages/Award";
import Service from "./components/Pages/Service";
import Signup from "./components/Pages/Signup";
import Login from "./components/Pages/Login";
import Gallery from "./components/Pages/Gallery";
import Contact from "./components/Pages/Contact";
import Founder from "./components/Pages/Founder";
// import Mision from "./components/Pages/MissionVision";
import Mission from "./components/Pages/Mission";
import WhyUs from "./components/Pages/Whyus";
import ScrollToTop from "./components/Pages/ScrollToTop";
import PolicyPage from "./components/Pages/PolicyPage";
import SalesPage from "./components/Pages/SalesPage";
import StrategyPage from "./components/Pages/StrategyPage";
import Terms from "./components/Pages/Terms";



// Dummy Pages
// const About = () => <h1>About Page</h1>;
// const Contact = () => <h1>Contact Page</h1>;
// const Services = () => <h1>Services Page</h1>;

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
          <ScrollToTop />
        <Routes>
          <Route path="/" element={<Slide />} />
          <Route path="/about" element={<About />} />
           <Route path="/founder" element={<Founder />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/why-us" element={<WhyUs />} />
             <Route path="/award" element={<Award />} />
              <Route path="/service" element={<Service />} />
               <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
            <Route path="/policypage" element={<PolicyPage />} />
             <Route path="/strategyPage" element={<StrategyPage />} />
              <Route path="/salesPage" element={<SalesPage />} />
                <Route path="/terms" element={<Terms />} />
         
          {/* <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} /> */}
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
