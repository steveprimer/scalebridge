import React from "react";

// Import shared components from your existing site
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import Chatbot from "../components/Chatbot";

// We will import the new components here after creating them
import Hero from "../components/AdHero";
import Services from "../components/AdServices";
import Features from "../components/AdFeatures";
import Testimonials from "../components/AdTestimonials";
import CTA from "../components/AdCTA";

function PaidAdsPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <CTA />
      <Chatbot />
      <WhatsAppFloat />
      <Footer />
    </>
  );
}

export default PaidAdsPage;
