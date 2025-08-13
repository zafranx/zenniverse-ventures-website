import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./screens/LandingPage";
import { PortfolioDetailPage } from "./screens/PortfolioDetailPage";
import { ContactUsPage } from "./screens/ContactUs";
import { NewsDetailPage } from "./screens/NewsDetailPage";
// import { AllNewsPage } from "./screens/AllNewsPage";

export const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/portfolio/:id" element={<PortfolioDetailPage />} />
      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="/news/:id" element={<NewsDetailPage />} />
      {/* <Route path="/news" element={<AllNewsPage />} /> */}
    </Routes>
  );
};
