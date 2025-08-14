import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./screens/LandingPage";
import { PortfolioDetailPage } from "./screens/PortfolioDetailPage";
import { ContactUsPage } from "./screens/ContactUs";
import { NewsDetailPage } from "./screens/NewsDetailPage";
import { AllNewsPage } from "./screens/AllNewsPage";
import { InitiativeDetailPage } from "./screens/InitiativeDetailPage";
import { AllInitiativesPage } from "./screens/AllInitiativesPage";
import { AboutUsPage } from "./screens/AboutUsPage";
import { ServicesPage } from "./screens/ServicesPage.tsx";
import { PrivacyPolicyPage } from "./screens/PrivacyPolicyPage";
import { TermsConditionsPage } from "./screens/TermsConditionsPage";

export const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/portfolio/:id" element={<PortfolioDetailPage />} />
      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="/news/:id" element={<NewsDetailPage />} />
      <Route path="/news" element={<AllNewsPage />} />
      <Route path="/initiatives" element={<AllInitiativesPage />} />
      <Route path="/initiatives/:id" element={<InitiativeDetailPage />} />
      <Route path="*" element={<LandingPage />} />
      {/* Fallback route to handle any unmatched paths */}
      <Route path="/404" element={<LandingPage />} />
      {/* You can replace LandingPage with a NotFound component if you have one */}
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/privacy" element={<PrivacyPolicyPage />} />
      <Route path="/terms-conditions" element={<TermsConditionsPage />} />
    </Routes>
  );
};
