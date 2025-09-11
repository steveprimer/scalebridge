import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllCaseStudiesPage from "./pages/AllCaseStudiesPage"; // New page for the list
import CaseStudyPage from "./pages/CaseStudyPage";
import PaidAdsPage from "./pages/PaidAdsPage";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-studies" element={<AllCaseStudiesPage />} />
        <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
        <Route path="/paid-ads" element={<PaidAdsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
