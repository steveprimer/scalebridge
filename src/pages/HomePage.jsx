import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
// import About from "./components/About";
// import Services from "./components/Services";
import Testimonials from "../components/Testimonials";
import Booking from "../components/Booking";
// import Contact from "./components/Contact";
import Footer from "../components/Footer";
import CaseStudies from "../components/OurWork";
import Chatbot from "../components/Chatbot";
import WhatsAppFloat from "../components/WhatsAppFloat";
// import DeveloperSection from "./components/DeveloperSection";
import Plans from "../components/Plans";
import AOS from "aos";
import "aos/dist/aos.css";
import Benefits from "../components/Benefits";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // ms
      once: true, // animate only once
    });
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <CaseStudies />
      <Testimonials />

      <Benefits />
      <Plans />
      <Booking />
      <FAQ />
      {/* <About /> */}
      {/* <Services /> */}

      {/* <DeveloperSection /> */}
      {/* <Contact />  */}
      <Chatbot />
      <WhatsAppFloat />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
