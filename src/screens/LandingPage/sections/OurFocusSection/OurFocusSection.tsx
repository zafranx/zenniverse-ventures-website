import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const OurFocusSection = (): JSX.Element => {
  // Data for focus area cards
  const focusAreas = [
    {
      id: 1,
      image: "/image-8.png",
      title: "Public Health",
      description:
        "Every year, approximately 5-6 million people in India die due to medical errors (including late or wrong diagnoses), treatable medical conditions, and inadequate access to healthcare.",
    },
    {
      id: 2,
      image: "/image-8-1.png",
      title: "Road Safety",
      description:
        "India reports over 500,000 road accidents and more than 180,000 fatalities annually, contributing to a 3% loss in the nation's GDP. Unfortunately, despite concerted efforts, these numbers continue to rise.",
    },
    {
      id: 3,
      image: "/image-8-2.png",
      title: "Patient Stay",
      description:
        "India has the potential to provide 20 million room nights for patient stays annually. However, most hotels lack adequate support for patient recovery, basic hygiene (infection free stay)",
    },
    {
      id: 4,
      image: "/image-8-3.png",
      title: "Medical Tourism",
      description:
        "India attracts over 2 million medical tourists annually but faces challenges from emerging markets due to the prevalence of touts and insufficient technological integration.",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[80px] py-8 md:py-12 lg:py-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-start w-full gap-6 md:gap-8 lg:gap-[52px]">
          {/* Header Section */}
          <div className="flex flex-col items-start w-full gap-3 md:gap-4 lg:gap-6">
            {/* Subtitle */}
            <h3 className="font-['Poppins',Helvetica] font-bold text-[#000000b2] text-base md:text-lg lg:text-xl tracking-wider uppercase">
              Our Focus
            </h3>

            {/* Main Title - Mobile responsive typography */}
            <h2 className="w-full font-medium text-black font-['Poppins',Helvetica] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] leading-tight sm:leading-normal md:leading-relaxed lg:leading-normal">
              Revolutionizing Key Sectors with Impactful Solutions — Alarming
              Statistics and Our Commitment to Change
            </h2>
          </div>

          {/* Cards Grid - Responsive layout */}
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-5 lg:gap-6">
            {focusAreas.map((area) => (
              <Card
                key={area.id}
                className="bg-[#4b8cbb1a] hover:bg-[#4b8cbb25] rounded-[15px] md:rounded-[18px] lg:rounded-[20px] border-none transition-all duration-300 hover:shadow-lg group"
              >
                <CardContent className="flex flex-col items-start gap-4 md:gap-5 lg:gap-[17px] p-4 md:p-5 lg:p-6 h-full">
                  {/* Icon - Responsive sizing */}
                  <div className="flex-shrink-0">
                    <img
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[67px] lg:h-[67px] object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
                      alt={`${area.title} icon`}
                      src={area.image}
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col items-start flex-1 w-full gap-2 md:gap-3">
                    {/* Card Title - Responsive typography */}
                    <h4 className="font-['Poppins',Helvetica] font-semibold text-black text-lg sm:text-xl md:text-xl lg:text-2xl leading-tight">
                      {area.title}
                    </h4>

                    {/* Card Description - Better mobile readability */}
                    <p className="font-['Poppins',Helvetica] font-normal text-[#000000b2] text-sm sm:text-base md:text-base leading-relaxed md:leading-6 lg:leading-[28px]">
                      {area.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// import React from "react";
// import { Card, CardContent } from "../../../../components/ui/card";

// export const OurFocusSection = (): JSX.Element => {
//   // Data for focus area cards
//   const focusAreas = [
//     {
//       id: 1,
//       image: "/image-8.png",
//       title: "Public Health",
//       description:
//         "Every year, approximately 5-6 million people in India die due to medical errors (including late or wrong diagnoses), treatable medical conditions, and inadequate access to healthcare.",
//     },
//     {
//       id: 2,
//       image: "/image-8-1.png",
//       title: "Road Safety",
//       description:
//         "India reports over 500,000 road accidents and more than 180,000 fatalities annually, contributing to a 3% loss in the nation's GDP. Unfortunately, despite concerted efforts, these numbers continue to rise.",
//     },
//     {
//       id: 3,
//       image: "/image-8-2.png",
//       title: "Patient Stay",
//       description:
//         "India has the potential to provide 20 million room nights for patient stays annually. However, most hotels lack adequate support for patient recovery, basic hygiene (infection free stay)",
//     },
//     {
//       id: 4,
//       image: "/image-8-3.png",
//       title: "Medical Tourism",
//       description:
//         "India attracts over 2 million medical tourists annually but faces challenges from emerging markets due to the prevalence of touts and insufficient technological integration.",
//     },
//   ];

//   return (
//     <section className="flex flex-col w-full items-start gap-[52px] relative lg:px-[80px] md:px-[80px] sm:px-[40px]">
//       <div className="relative flex items-center self-stretch w-full gap-5">
//         <div className="relative flex flex-col items-start w-full gap-9">
//           <div className="relative flex flex-col items-start justify-center w-full">
//             <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full">
//               <h3 className="relative flex-1 mt-[-1.00px] font-['Poppins',Helvetica] font-bold text-[#000000b2] text-xl tracking-[0] leading-[normal]">
//                 Our Focus
//               </h3>
//             </div>

//             <h2 className="self-stretch font-medium text-black text-[32px] leading-[normal] relative font-['Poppins',Helvetica] tracking-[0]">
//               Revolutionizing Key Sectors with Impactful
//               Solutions&nbsp;&nbsp;Alarming Statistics and Our Commitment to
//               Change
//             </h2>
//           </div>

//           <div className="relative grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
//             {focusAreas.map((area) => (
//               <Card
//                 key={area.id}
//                 className="bg-[#4b8cbb1a] rounded-[20px] border-none"
//               >
//                 <CardContent className="flex flex-col items-start gap-[17px] p-5">
//                   <img
//                     className="w-[67px] h-[67px] object-cover"
//                     alt={`${area.title} icon`}
//                     src={area.image}
//                   />

//                   <div className="flex flex-col items-start self-stretch w-full gap-3">
//                     <h4 className="w-fit mt-[-1.00px] font-['Poppins',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-[normal]">
//                       {area.title}
//                     </h4>

//                     <p className="self-stretch font-['Poppins',Helvetica] font-normal text-[#000000b2] text-base tracking-[0] leading-[30px]">
//                       {area.description}
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
