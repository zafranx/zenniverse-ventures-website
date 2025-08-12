import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const NewsInsightsSection = (): JSX.Element => {
  // News card data for mapping
  const newsCards = [
    {
      id: 1,
      image: "/rectangle-1.png",
      alt: "Latest healthcare innovation news",
      title: "The trend was noticed during a survey by Bumble",
      excerpt:
        "If you ask yourself what are some of your deal-breakers, AKA non-negotiables, when it comes to dating...",
    },
    {
      id: 2,
      image: "/rectangle-1-1.png",
      alt: "AI-powered medical solutions update",
      title: "Revolutionary AI Solutions in Healthcare",
      excerpt:
        "Discover how artificial intelligence is transforming the healthcare industry with breakthrough innovations...",
    },
    {
      id: 3,
      image: "/rectangle-1-2.png",
      alt: "Medical tourism industry insights",
      title: "Medical Tourism: Global Trends 2025",
      excerpt:
        "Exploring the latest trends and opportunities in the growing medical tourism industry worldwide...",
    },
  ];

  return (
    <section className="bg-[#4b8cbb0d] py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[119px]">
      <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 max-w-[1201px] mx-auto">
        {/* Section Title */}
        <h2 className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-['Poppins',Helvetica] text-black leading-tight">
          News &amp; Insights
        </h2>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8">
          {newsCards.map((card) => (
            <Card
              key={card.id}
              className="group flex-1 border border-solid border-[#00000020] hover:border-[#4b8cbb] rounded-[12px] md:rounded-[15px] bg-white hover:bg-white shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
            >
              <CardContent className="flex flex-col h-full p-0">
                {/* Image Container with Zoom Effect */}
                <div className="relative overflow-hidden rounded-t-[12px] md:rounded-t-[15px] h-[200px] sm:h-[220px] md:h-[240px] lg:h-[236px]">
                  <img
                    className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
                    alt={card.alt}
                    src={card.image}
                    loading="lazy"
                  />

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:opacity-100" />

                  {/* Optional: Category Badge */}
                  <div className="absolute top-3 left-3 px-2 py-1 bg-[#4b8cbb] text-white text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    News
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-1 gap-3 p-4 md:p-5 lg:p-6 md:gap-4">
                  {/* Title */}
                  <h3 className="font-['Poppins',Helvetica] font-semibold text-black text-lg md:text-xl lg:text-2xl leading-tight group-hover:text-[#4b8cbb] transition-colors duration-300">
                    {card.title}
                  </h3>

                  {/* Content Container */}
                  <div className="flex flex-col justify-between flex-1 gap-3">
                    {/* Excerpt */}
                    <p className="font-['Poppins',Helvetica] font-normal text-[#000000b2] text-sm md:text-base leading-relaxed md:leading-6 lg:leading-[28px] line-clamp-3">
                      {card.excerpt}
                    </p>

                    {/* Read More Button */}
                    <div className="flex justify-end mt-auto">
                      <Button
                        variant="ghost"
                        className="h-auto px-3 md:px-4 py-2 bg-[#ededed] hover:bg-[#4b8cbb] rounded-[8px] transition-all duration-300 group-hover:bg-[#4b8cbb] group-hover:text-white transform group-hover:scale-105"
                      >
                        <span className="font-['Poppins',Helvetica] font-semibold text-xs md:text-sm text-[#255d86] group-hover:text-white transition-colors duration-300">
                          Read More
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Animated Bottom Border */}
                <div className="h-1 bg-gradient-to-r from-[#4b8cbb] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// import React from "react";
// import { Button } from "../../../../components/ui/button";
// import { Card, CardContent } from "../../../../components/ui/card";

// export const NewsInsightsSection = (): JSX.Element => {
//   // News card data for mapping
//   const newsCards = [
//     {
//       id: 1,
//       image: "/rectangle-1.png",
//       imageClass: "w-[352px] h-[244px] mt-[-4.00px] ml-[-4.00px] mr-[-4.00px]",
//       alt: "Rectangle",
//     },
//     {
//       id: 2,
//       image: "/rectangle-1-1.png",
//       imageClass: "rounded-[5px] object-cover w-[344px] h-[236px]",
//       alt: "Rectangle",
//     },
//     {
//       id: 3,
//       image: "/rectangle-1-2.png",
//       imageClass: "w-[344px] h-[236px]",
//       alt: "Rectangle",
//     },
//   ];

//   return (
//     <section className="bg-[#4b8cbb0d] py-9 px-4 md:px-[119px]">
//       <div className="flex flex-col gap-6 max-w-[1201px] mx-auto">
//         <h2 className="font-medium text-[32px] font-['Poppins',Helvetica] text-black">
//           News &amp; Insights
//         </h2>

//         <div className="flex flex-col w-full gap-5 md:flex-row">
//           {newsCards.map((card) => (
//             <Card
//               key={card.id}
//               className="flex-1 border border-solid border-[#00000080] rounded-[10px]"
//             >
//               <CardContent className="p-[18px] flex flex-col gap-4">
//                 <img
//                   className={card.imageClass}
//                   alt={card.alt}
//                   src={card.image}
//                 />

//                 <div className="flex flex-col w-full">
//                   <h3 className="font-['Poppins',Helvetica] font-semibold text-black text-2xl mb-1">
//                     The trend was noticed during a survey by Bumble
//                   </h3>

//                   <div className="flex flex-col items-end w-full">
//                     <p className="font-['Poppins',Helvetica] font-normal text-[#000000b2] text-base leading-[30px] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] w-full">
//                       If you ask yourself what are some of your deal-breakers,
//                       AKA non-negotiables, when it comes to dating....
//                     </p>

//                     <Button
//                       variant="ghost"
//                       className="h-auto mt-[-39px] px-2 py-1 bg-[#ededed] rounded-[5px] hover:bg-[#e0e0e0]"
//                     >
//                       <span className="font-['Poppins',Helvetica] font-semibold text-xs text-[#255d86]">
//                         Read More
//                       </span>
//                     </Button>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
