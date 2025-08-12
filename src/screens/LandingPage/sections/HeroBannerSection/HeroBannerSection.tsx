import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroBannerSection = (): JSX.Element => {
  return (
    <section className="relative w-full pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-12 lg:pb-16 px-4 md:px-8 lg:px-10 xl:px-[120px] mt-[0px]">
      {/* Hero Banner Container */}
      <div className="relative w-full max-w-[1200px] mx-auto h-[400px] md:h-[500px] lg:h-[579px] rounded-[20px] md:rounded-[30px] lg:rounded-[36px] overflow-hidden ">
        {/* Background Image */}
        {/* <div
          className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('/image-3.png')" }}
        /> */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat rounded-[20px] md:rounded-[30px] lg:rounded-[36px]"
          style={{ backgroundImage: "url('/image-3.png')" }}
        />

        {/* Gradient Overlay */}
        {/* <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black via-black/65 via-black/50 to-black opacity-80" /> */}

        {/* White Overlay */}
        {/* <div className="absolute inset-0 w-full h-full bg-white/10" /> */}

        {/* White Overlay */}
        <div className="absolute inset-0 w-full h-full bg-white/10 rounded-[20px] md:rounded-[30px] lg:rounded-[36px]" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black via-black/65 via-black/50 to-black rounded-[20px] md:rounded-[30px] lg:rounded-[36px]" />

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 md:px-8 lg:px-[101px]">
          <div className="flex flex-col items-center gap-8 md:gap-10 lg:gap-[52px] w-full max-w-[997px]">
            {/* Text Content */}
            <div className="flex flex-col items-center w-full gap-2 md:gap-4 lg:gap-2">
              <h1 className="w-full font-['Poppins',Helvetica] font-bold text-white text-xl md:text-2xl lg:text-[40px] text-center leading-tight md:leading-normal lg:leading-[60px]">
                Zeniverse Ventures: Pioneering AI-Driven Solutions for Global
                Impact
              </h1>

              <p className="w-full font-['Poppins',Helvetica] font-normal text-white text-sm md:text-base lg:text-base text-center leading-5 md:leading-6 lg:leading-6 opacity-90">
                Building AI-powered companies that transform lives worldwide.
                Zeniverse Ventures pioneers solutions that uplift communities,
                improve health, and enhance safety through cutting-edge AI
                applications. Join us in creating impactful ventures that touch
                millions globally.
              </p>
            </div>

            {/* Button */}
            <Button className="relative bg-[#4b8cbb] hover:bg-[#225f8c] rounded-[5px] px-4 md:px-6 py-2 md:py-3 font-['Poppins',Helvetica] font-bold text-sm md:text-base text-white transition-all duration-300 hover:shadow-lg">
              <div className="absolute inset-0 bg-[#225f8c] rounded-[5px] opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Let's Connect</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
