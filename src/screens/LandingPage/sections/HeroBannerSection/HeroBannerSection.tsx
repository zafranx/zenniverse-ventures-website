import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroBannerSection = (): JSX.Element => {
  return (
    <section className="relative w-full pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-12 lg:pb-16 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[120px]">
      {/* Hero Banner Container */}
      <div className="relative w-full max-w-[1200px] mx-auto h-[450px] sm:h-[500px] md:h-[550px] lg:h-[579px] rounded-[20px] md:rounded-[30px] lg:rounded-[36px] overflow-hidden shadow-2xl">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 w-full h-full">
          <div
            className="absolute inset-0 w-full h-full transition-transform duration-700 bg-center bg-no-repeat bg-cover hover:scale-105"
            style={{ backgroundImage: "url('/image-3.png')" }}
          />
        </div>

        {/* Enhanced Overlay System */}
        <div className="absolute inset-0 w-full h-full">
          {/* Base white overlay for brightness */}
          <div className="absolute inset-0 bg-white/5" />

          {/* Sophisticated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 via-30% via-black/40 via-70% to-black/80" />

          {/* Subtle radial gradient for focus */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/10 to-black/30" />
        </div>

        {/* Content Container with Animation */}
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[101px] animate-fade-in">
          <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-[52px] w-full max-w-[997px]">
            {/* Text Content with Staggered Animation */}
            <div className="flex flex-col items-center w-full gap-4 text-center md:gap-5 lg:gap-6">
              {/* Main Headline - Responsive Typography */}
              <h1
                className="w-full font-['Poppins',Helvetica] font-bold text-white 
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px] 
                leading-tight sm:leading-tight md:leading-tight lg:leading-[1.2] xl:leading-[60px]
                tracking-tight sm:tracking-normal
                animate-slide-up opacity-0 animation-delay-300"
              >
                <span className="inline-block">Zeniverse Ventures:</span>{" "}
                <span className="inline-block bg-gradient-to-r from-[#4b8cbb] to-[#87CEEB] bg-clip-text text-transparent">
                  Pioneering AI-Driven Solutions
                </span>{" "}
                <span className="inline-block">for Global Impact</span>
              </h1>

              {/* Subtitle - Enhanced Readability */}
              <p
                className="w-full font-['Poppins',Helvetica] font-normal text-white/95 
                text-sm sm:text-base md:text-lg lg:text-xl xl:text-lg
                leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-[1.6]
                max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%]
                animate-slide-up opacity-0 animation-delay-600"
              >
                Building AI-powered companies that{" "}
                <span className="font-medium text-[#87CEEB]">
                  transform lives worldwide
                </span>
                . Zeniverse Ventures pioneers solutions that uplift communities,
                improve health, and enhance safety through cutting-edge AI
                applications.
                <span className="block mt-2 font-medium">
                  Join us in creating impactful ventures that touch millions
                  globally.
                </span>
              </p>
            </div>

            {/* Enhanced CTA Button */}
            <div className="opacity-0 animate-slide-up animation-delay-900">
              <Button
                className="group relative bg-gradient-to-r from-[#4b8cbb] to-[#225f8c] hover:from-[#225f8c] hover:to-[#1a4a6b] 
                rounded-[12px] px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-4 
                font-['Poppins',Helvetica] font-bold text-sm sm:text-base md:text-lg 
                text-white shadow-lg hover:shadow-2xl 
                transition-all duration-500 ease-out
                transform hover:scale-105 hover:-translate-y-1
                border border-white/20 hover:border-white/40"
              >
                {/* Button shine effect */}
                {/* it is shine effect of button ...... */}
                <div
                  className="absolute inset-0 rounded-[12px] bg-gradient-to-r from-transparent via-white/20 to-transparent 
                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"
                />

                {/* Button text */}
                <span className="relative z-10 flex items-center gap-2">
                  Let's Connect
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    // stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-[#4b8cbb]/50 rounded-tl-lg opacity-60" />
        <div className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-[#4b8cbb]/50 rounded-br-lg opacity-60" />
      </div>
    </section>
  );
};

// import React from "react";
// import { Button } from "../../../../components/ui/button";

// export const HeroBannerSection = (): JSX.Element => {
//   return (
//     <section className="relative w-full pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-12 lg:pb-16 px-4 md:px-8 lg:px-10 xl:px-[120px] mt-[0px]">
//       {/* Hero Banner Container */}
//       <div className="relative w-full max-w-[1200px] mx-auto h-[400px] md:h-[500px] lg:h-[579px] rounded-[20px] md:rounded-[30px] lg:rounded-[36px] overflow-hidden ">
//         {/* Background Image */}
//         {/* <div
//           className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover"
//           style={{ backgroundImage: "url('/image-3.png')" }}
//         /> */}
//         <div
//           className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat rounded-[20px] md:rounded-[30px] lg:rounded-[36px]"
//           style={{ backgroundImage: "url('/image-3.png')" }}
//         />

//         {/* Gradient Overlay */}
//         {/* <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black via-black/65 via-black/50 to-black opacity-80" /> */}

//         {/* White Overlay */}
//         {/* <div className="absolute inset-0 w-full h-full bg-white/10" /> */}

//         {/* White Overlay */}
//         <div className="absolute inset-0 w-full h-full bg-white/10 rounded-[20px] md:rounded-[30px] lg:rounded-[36px]" />

//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black via-black/65 via-black/50 to-black rounded-[20px] md:rounded-[30px] lg:rounded-[36px]" />

//         {/* Content Container */}
//         <div className="absolute inset-0 flex flex-col justify-center items-center px-4 md:px-8 lg:px-[101px]">
//           <div className="flex flex-col items-center gap-8 md:gap-10 lg:gap-[52px] w-full max-w-[997px]">
//             {/* Text Content */}
//             <div className="flex flex-col items-center w-full gap-2 md:gap-4 lg:gap-2">
//               <h1 className="w-full font-['Poppins',Helvetica] font-bold text-white text-xl md:text-2xl lg:text-[40px] text-center leading-tight md:leading-normal lg:leading-[60px]">
//                 Zeniverse Ventures: Pioneering AI-Driven Solutions for Global
//                 Impact
//               </h1>

//               <p className="w-full font-['Poppins',Helvetica] font-normal text-white text-sm md:text-base lg:text-base text-center leading-5 md:leading-6 lg:leading-6 opacity-90">
//                 Building AI-powered companies that transform lives worldwide.
//                 Zeniverse Ventures pioneers solutions that uplift communities,
//                 improve health, and enhance safety through cutting-edge AI
//                 applications. Join us in creating impactful ventures that touch
//                 millions globally.
//               </p>
//             </div>

//             {/* Button */}
//             <Button className="relative bg-[#4b8cbb] hover:bg-[#225f8c] rounded-[5px] px-4 md:px-6 py-2 md:py-3 font-['Poppins',Helvetica] font-bold text-sm md:text-base text-white transition-all duration-300 hover:shadow-lg">
//               <div className="absolute inset-0 bg-[#225f8c] rounded-[5px] opacity-0 hover:opacity-100 transition-opacity duration-300" />
//               <span className="relative z-10">Let's Connect</span>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
