import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const AiPoweredSection = (): JSX.Element => {
  // Data for AI solution cards
  const aiSolutions = [
    {
      title: "Telemedicine-Enabled Clinics",
      description:
        "Expanding healthcare access with remote AI-assisted consultations connecting patients and specialists.",
    },
    {
      title: "Motorbike Fleets",
      description:
        "Optimizing healthcare and emergency response transport with agile, AI-managed motorbike fleets.",
    },
    {
      title: "Skill Development",
      description:
        "Empowering healthcare professionals through cutting-edge AI and innovation training programs.",
    },
    {
      title: "Smart Trauma Centre Setups",
      description:
        "Enhancing emergency care with AI-driven diagnostics and rapid response capabilities for trauma patients.",
    },
  ];

  return (
    <section className="w-full px-4 py-8 sm:px-6 md:px-8 lg:px-12 md:py-12 lg:py-16">
      <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12 xl:gap-[46px] max-w-[1200px] mx-auto">
        {/* Content Section */}
        <div className="flex flex-col items-start w-full gap-6 md:gap-8 lg:gap-9 lg:flex-1">
          {/* Title - Mobile responsive typography */}
          <h2 className="w-full font-['Poppins',Helvetica] font-medium text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] text-center lg:text-left leading-tight sm:leading-normal lg:leading-normal">
            AI-Powered Solutions: Pioneering the Future
          </h2>

          {/* Cards Grid - Stacked on all screen sizes for this layout */}
          <div className="flex flex-col w-full gap-3 md:gap-4">
            {aiSolutions.map((solution, index) => (
              <Card
                key={index}
                className="w-full bg-[#4b8cbb0d] hover:bg-[#4b8cbb15] rounded-[8px] md:rounded-[10px] border-none transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                <CardContent className="flex flex-col items-start gap-2 p-4 md:gap-3 md:p-5 lg:p-6">
                  <h3 className="w-full font-['Poppins',Helvetica] font-semibold text-black text-base md:text-lg lg:text-xl leading-tight">
                    {solution.title}
                  </h3>
                  <p className="w-full font-['Poppins',Helvetica] font-normal text-[#000000b2] text-sm md:text-base leading-relaxed md:leading-6 lg:leading-[28px]">
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0 w-full lg:w-[442px]">
          <img
            className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[475px] rounded-[15px] md:rounded-[20px] object-cover shadow-lg"
            alt="AI healthcare solutions illustration showing modern technology integration"
            src="/image-12.png"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export const AiPoweredSection2 = (): JSX.Element => {
  // Data for AI solution cards
  const aiSolutions = [
    {
      title: "Telemedicine-Enabled Clinics",
      description:
        "Expanding healthcare access with remote AI-assisted consultations connecting patients and specialists.",
    },
    {
      title: "Motorbike Fleets",
      description:
        "Optimizing healthcare and emergency response transport with agile, AI-managed motorbike fleets.",
    },
    {
      title: "Skill Development",
      description:
        "Empowering healthcare professionals through cutting-edge AI and innovation training programs.",
    },
    {
      title: "Smart Trauma Center Setups",
      description:
        "Enhancing emergency care with AI-driven diagnostics and rapid response capabilities for trauma patients.",
    },
  ];

  return (
    <section className="w-full px-4 py-8 sm:px-6 md:px-8 lg:px-12 md:py-12 lg:py-16">
      <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12 xl:gap-[46px] max-w-[1200px] mx-auto">
        {/* Content Section */}
        <div className="flex flex-col items-start gap-4 md:gap-6 lg:gap-8 w-full lg:max-w-[712px]">
          {/* Title - Mobile responsive */}
          <h2 className="w-full font-['Poppins',Helvetica] font-medium text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] text-center lg:text-left leading-tight sm:leading-normal lg:leading-[48px]">
            AI-Powered Solutions: Pioneering the Future
          </h2>

          {/* Compact Cards - Better for mobile */}
          <div className="flex flex-col w-full gap-2 md:gap-3 lg:gap-4">
            {aiSolutions.map((solution, index) => (
              <Card
                key={index}
                className="w-full bg-[rgba(75,140,187,0.05)] hover:bg-[rgba(75,140,187,0.1)] rounded-[8px] md:rounded-[10px] border border-[rgba(75,140,187,0.1)] transition-all duration-200 hover:shadow-sm"
              >
                <CardContent className="flex flex-col items-start gap-1 p-3 md:gap-2 md:p-4 lg:p-5">
                  <h3 className="w-full font-['Poppins',Helvetica] font-semibold text-black text-sm md:text-base lg:text-lg leading-tight md:leading-[27px]">
                    {solution.title}
                  </h3>
                  <p className="w-full font-['Poppins',Helvetica] font-normal text-[rgba(0,0,0,0.7)] text-xs md:text-sm lg:text-base leading-relaxed md:leading-5 lg:leading-6 xl:leading-[28px]">
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0 w-full lg:w-[442px]">
          <img
            className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[475px] rounded-[15px] md:rounded-[20px] object-cover shadow-lg"
            alt="AI healthcare solutions illustration showing modern technology integration"
            src="/image-12.png"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
