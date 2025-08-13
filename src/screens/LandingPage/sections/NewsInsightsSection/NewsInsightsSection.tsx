// NewsInsightsSection.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { getLatestNews } from "../../../../data/newsData";

export const NewsInsightsSection = (): JSX.Element => {
  // Get latest articles from data
  const newsCards = getLatestNews(3);

  return (
    <section className="bg-[#4b8cbb0d] py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[119px]">
      <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 max-w-[1201px] mx-auto">
        {/* // View all news */}
        <div className="flex items-center justify-between mb-6 md:mb-8 lg:mb-10">
          <h2 className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-['Poppins',Helvetica] text-black leading-tight">
            News &amp; Insights
          </h2>
          <Link to="/news">
            <Button className="bg-[#4b8cbb] hover:bg-[#225f8c] text-white px-4 py-2">
              View All News
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          {newsCards.map((card) => (
            <Link key={card.id} to={`/news/${card.id}`}>
              <Card className="group flex-1 border border-solid border-[#00000020] hover:border-[#4b8cbb] rounded-[12px] md:rounded-[15px] bg-white hover:bg-white shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden">
                <CardContent className="p-0 flex flex-col h-full">
                  {/* Image Container with Zoom Effect */}
                  <div className="relative overflow-hidden rounded-t-[12px] md:rounded-t-[15px] h-[200px] sm:h-[220px] md:h-[240px] lg:h-[236px]">
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      alt={card.title}
                      src={card.image}
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="absolute top-3 left-3 px-2 py-1 bg-[#4b8cbb] text-white text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {card.category}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4 md:p-5 lg:p-6 flex flex-col flex-1 gap-3 md:gap-4">
                    <h3 className="font-['Poppins',Helvetica] font-semibold text-black text-lg md:text-xl lg:text-2xl leading-tight group-hover:text-[#4b8cbb] transition-colors duration-300">
                      {card.title}
                    </h3>

                    <div className="flex flex-col flex-1 justify-between gap-3">
                      <p className="font-['Poppins',Helvetica] font-normal text-[#000000b2] text-sm md:text-base leading-relaxed md:leading-6 lg:leading-[28px] line-clamp-3">
                        {card.excerpt}
                      </p>

                      <div className="flex justify-between items-center mt-auto">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <span>{card.date}</span>
                          <span>•</span>
                          <span>{card.readTime}</span>
                        </div>

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
                </CardContent>
              </Card>
            </Link>
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
//       alt: "Latest healthcare innovation news",
//       title: "The trend was noticed during a survey by Bumble",
//       excerpt:
//         "If you ask yourself what are some of your deal-breakers, AKA non-negotiables, when it comes to dating...",
//     },
//     {
//       id: 2,
//       image: "/rectangle-1-1.png",
//       alt: "AI-powered medical solutions update",
//       title: "Revolutionary AI Solutions in Healthcare",
//       excerpt:
//         "Discover how artificial intelligence is transforming the healthcare industry with breakthrough innovations...",
//     },
//     {
//       id: 3,
//       image: "/rectangle-1-2.png",
//       alt: "Medical tourism industry insights",
//       title: "Medical Tourism: Global Trends 2025",
//       excerpt:
//         "Exploring the latest trends and opportunities in the growing medical tourism industry worldwide...",
//     },
//   ];

//   return (
//     <section className="bg-[#4b8cbb0d] py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[119px]">
//       <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 max-w-[1201px] mx-auto">
//         {/* Section Title */}
//         <h2 className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-['Poppins',Helvetica] text-black leading-tight">
//           News &amp; Insights
//         </h2>

//         {/* News Cards Grid */}
//         <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8">
//           {newsCards.map((card) => (
//             <Card
//               key={card.id}
//               className="group flex-1 border border-solid border-[#00000020] hover:border-[#4b8cbb] rounded-[12px] md:rounded-[15px] bg-white hover:bg-white shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
//             >
//               <CardContent className="flex flex-col h-full p-0">
//                 {/* Image Container with Zoom Effect */}
//                 <div className="relative overflow-hidden rounded-t-[12px] md:rounded-t-[15px] h-[200px] sm:h-[220px] md:h-[240px] lg:h-[236px]">
//                   <img
//                     className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
//                     alt={card.alt}
//                     src={card.image}
//                     loading="lazy"
//                   />

//                   {/* Overlay on Hover */}
//                   <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:opacity-100" />

//                   {/* Optional: Category Badge */}
//                   <div className="absolute top-3 left-3 px-2 py-1 bg-[#4b8cbb] text-white text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     News
//                   </div>
//                 </div>

//                 {/* Content Section */}
//                 <div className="flex flex-col flex-1 gap-3 p-4 md:p-5 lg:p-6 md:gap-4">
//                   {/* Title */}
//                   <h3 className="font-['Poppins',Helvetica] font-semibold text-black text-lg md:text-xl lg:text-2xl leading-tight group-hover:text-[#4b8cbb] transition-colors duration-300">
//                     {card.title}
//                   </h3>

//                   {/* Content Container */}
//                   <div className="flex flex-col justify-between flex-1 gap-3">
//                     {/* Excerpt */}
//                     <p className="font-['Poppins',Helvetica] font-normal text-[#000000b2] text-sm md:text-base leading-relaxed md:leading-6 lg:leading-[28px] line-clamp-3">
//                       {card.excerpt}
//                     </p>

//                     {/* Read More Button */}
//                     <div className="flex justify-end mt-auto">
//                       <Button
//                         variant="ghost"
//                         className="h-auto px-3 md:px-4 py-2 bg-[#ededed] hover:bg-[#4b8cbb] rounded-[8px] transition-all duration-300 group-hover:bg-[#4b8cbb] group-hover:text-white transform group-hover:scale-105"
//                       >
//                         <span className="font-['Poppins',Helvetica] font-semibold text-xs md:text-sm text-[#255d86] group-hover:text-white transition-colors duration-300">
//                           Read More
//                         </span>
//                       </Button>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Animated Bottom Border */}
//                 <div className="h-1 bg-gradient-to-r from-[#4b8cbb] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
