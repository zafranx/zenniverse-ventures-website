import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./screens/LandingPage";
import { PortfolioDetailPage } from "./screens/PortfolioDetailPage";

export const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/portfolio/:id" element={<PortfolioDetailPage />} />
    </Routes>
  );
};
