import React from "react";
import { Button } from "../../../../components/ui/button";

export const BizaarioCareSection = (): JSX.Element => {
  return (
    <section className="w-full px-4 md:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-6 lg:flex-row md:gap-8 lg:gap-12 max-w-[1200px] mx-auto">
        {/* Content Section */}
        <div className="flex flex-col w-full lg:max-w-[488px] items-start gap-4 md:gap-6 lg:gap-[52px]">
          {/* Text Content */}
          <div className="flex flex-col items-start w-full gap-3 md:gap-4 lg:gap-3">
            {/* Title - Mobile responsive typography */}
            <h2 className="font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] text-black font-['Poppins',Helvetica] leading-tight sm:leading-normal md:leading-relaxed">
              BIZAARIO CARE - Global Medical Tourism: Building World's Largest
              Doctor Network for Case Referrals
            </h2>

            {/* Description - Better mobile readability */}
            <p className="font-normal text-sm sm:text-base md:text-base lg:text-base text-[#000000b2] font-['Poppins',Helvetica] leading-relaxed md:leading-6 lg:leading-[28px]">
              India reports over 500,000 road accidents and more than 180,000
              fatalities annually, contributing to a 3% loss in the nation's
              GDP. Unfortunately, despite concerted efforts, these numbers
              continue to rise.
            </p>
          </div>

          {/* CTA Button - Mobile optimized */}
          <div className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-[#4b8cbb] hover:bg-[#225f8c] focus:bg-[#225f8c] rounded-[8px] px-6 md:px-8 py-3 md:py-4 font-['Poppins',Helvetica] font-bold text-sm md:text-base transition-colors duration-200 shadow-md hover:shadow-lg">
              Go To Website
            </Button>
          </div>
        </div>

        {/* Image Section - Responsive sizing */}
        <div className="flex-shrink-0 w-full lg:flex-1 lg:max-w-[693px]">
          <img
            className="w-full h-[200px] sm:h-[250px] md:h-[320px] lg:h-[424px] object-contain rounded-[15px] md:rounded-[20px] shadow-lg"
            alt="Bizaario Care website mockup showing global medical tourism platform"
            src="/websit-mockup-2.png"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

// import React from "react";
// import { Button } from "../../../../components/ui/button";

// export const BizaarioCareSection = (): JSX.Element => {
//   return (
//     <div className="flex flex-col items-center gap-6 lg:flex-row md:gap-8 lg:gap-5">
//       <div className="flex flex-col w-full lg:max-w-[488px] items-start gap-6 md:gap-8 lg:gap-[52px]">
//         <div className="flex flex-col items-start w-full gap-2 md:gap-3">
//           <h2 className="font-medium text-xl md:text-2xl lg:text-[32px] text-black font-['Poppins',Helvetica] leading-normal">
//             BIZAARIO CARE - Global Medical Tourism: Building World&#39;s Largest
//             Doctor Network for Case Referrals
//           </h2>

//           <p className="font-normal text-sm md:text-base text-[#000000b2] font-['Poppins',Helvetica] leading-5 md:leading-6 lg:leading-[30px]">
//             India reports over 500,000 road accidents and more than 180,000
//             fatalities annually, contributing to a 3% loss in the nation&#39;s
//             GDP. Unfortunately, despite concerted efforts, these numbers
//             continue to rise.
//           </p>
//         </div>

//         <Button className="bg-[#4b8cbb] hover:bg-[#225f8c] rounded-[5px] px-4 md:px-6 py-2 md:py-3 font-['Poppins',Helvetica] font-bold text-sm md:text-base">
//           Go To Website
//         </Button>
//       </div>

//       <div className="flex-shrink-0 w-full lg:w-auto">
//         <img
//           className="w-full lg:w-[693px] h-64 md:h-80 lg:h-[424px] object-contain rounded-[15px] md:rounded-[20px]"
//           alt="Website mockup"
//           src="/websit-mockup-2.png"
//         />
//       </div>
//     </div>
//   );
// };
