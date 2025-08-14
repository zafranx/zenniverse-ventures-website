import React from "react";
import { AiPoweredSection } from "./sections/AiPoweredSection";
import { BizaarioCareSection } from "./sections/BizaarioCareSection";
import { ContactUsSection } from "./sections/ContactUsSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { NewsInsightsSection } from "./sections/NewsInsightsSection";
import { OurFocusSection } from "./sections/OurFocusSection";
import { OurTeamSection } from "./sections/OurTeamSection";
import { PortfolioSection } from "./sections/PortfolioSection";
import { InitiativeSection } from "./sections/InitiativeSection";
import { VisionToRealitySection } from "./sections/VisionToRealitySection";

export const LandingPage = (): JSX.Element => {
  return (
    <div className="relative w-full min-h-screen bg-white">
      <HeaderSection />
      <HeroBannerSection />

      <main className="flex flex-col items-center w-full gap-8 md:gap-16 lg:gap-24 xl:gap-[120px] pt-4 md:pt-8 lg:pt-16">
        <PortfolioSection />
        <OurFocusSection />
        <AiPoweredSection />
        <VisionToRealitySection />
        <OurTeamSection />
        <NewsInsightsSection />
        <BizaarioCareSection />
        <ContactUsSection />
        <InitiativeSection />
        <FooterSection />
      </main>
    </div>
  );
};

// import React from "react";
// import { AiPoweredSection } from "./sections/AiPoweredSection";
// import { BizaarioCareSection } from "./sections/BizaarioCareSection";
// import { ContactUsSection } from "./sections/ContactUsSection";
// import { FooterSection } from "./sections/FooterSection";
// import { HeaderSection } from "./sections/HeaderSection";
// import { HeroBannerSection } from "./sections/HeroBannerSection";
// import { NewsInsightsSection } from "./sections/NewsInsightsSection";
// import { OurFocusSection } from "./sections/OurFocusSection";
// import { OurTeamSection } from "./sections/OurTeamSection";
// import { PortfolioSection } from "./sections/PortfolioSection";
// import { SamarthKidsSection } from "./sections/SamarthKidsSection";
// import { VisionToRealitySection } from "./sections/VisionToRealitySection";

// export const LandingPage = (): JSX.Element => {
//   return (
//     <div className="w-full bg-white">
//       <div className="relative w-full mx-auto max-w-[1440px]">
//         <HeaderSection />
//         <HeroBannerSection />

//         <main className="flex flex-col items-center w-full gap-[120px]">
//           <PortfolioSection />
//           <OurFocusSection />
//           <AiPoweredSection />
//           <VisionToRealitySection />
//           <OurTeamSection />
//           <NewsInsightsSection />
//           <BizaarioCareSection />
//           <ContactUsSection />
//           <SamarthKidsSection />
//           <FooterSection />
//         </main>
//       </div>
//     </div>
//   );
// };
