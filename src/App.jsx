import React, { useEffect } from "react";
// import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import OurWork from "./components/OurWork";
import Chatbot from "./components/Chatbot";
import WhatsAppFloat from "./components/WhatsAppFloat";
import DeveloperSection from "./components/DeveloperSection";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // ms
      once: true, // animate only once
    });
  }, []);
  return (
    <>
      {/* <Navbar />  */}
      <Hero />
      <About />
      <Services />
      <OurWork />
      <Testimonials />
      <DeveloperSection />
      <Contact />
      <Chatbot />
      <WhatsAppFloat />
      <Footer />
    </>
  );
}

export default App;
