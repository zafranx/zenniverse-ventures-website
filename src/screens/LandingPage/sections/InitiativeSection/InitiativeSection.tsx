import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { getFeaturedInitiatives } from "../../../../data/initiativesData";

export const InitiativeSection = (): JSX.Element => {
  const navigate = useNavigate();

  // Get featured initiatives dynamically from data
  const featuredInitiatives = getFeaturedInitiatives().slice(0, 3); // Take first 3 featured

  // Handle read more click - Navigate to initiative detail page
  const handleReadMore = (initiativeId: number, title: string) => {
    console.log(`Navigating to initiative: ${title}`);
    navigate(`/initiatives/${initiativeId}`);
  };

  return (
    <section className="flex flex-col w-full items-center gap-6 md:gap-8 lg:gap-10 px-4 md:px-8 lg:px-[80px] py-8 md:py-12 lg:py-16">
      {/* Header Section */}
      <div className="flex flex-col items-start w-full max-w-[1200px] space-y-2 md:space-y-3 lg:space-y-4">
        {/* Subtitle */}
        <h3 className="font-bold font-['Poppins',Helvetica] text-[#000000b2] text-sm md:text-base lg:text-lg xl:text-xl tracking-wider uppercase">
          PATHBREAKING INITIATIVES
        </h3>

        {/* Main Title - Responsive typography */}
        <h2 className="font-['Poppins',Helvetica] font-medium text-black text-xl md:text-2xl lg:text-3xl xl:text-[32px] leading-tight md:leading-normal lg:leading-relaxed tracking-[0]">
          A Visionary Initiative to Shape India's Future: Empowering Young Minds
          to Become Super Citizens for a Developed India by 2047
        </h2>
      </div>

      {/* Dynamic Initiatives Gallery - Figma Layout */}
      <div className="w-full max-w-[1201px]">
        {/* Desktop: 3 columns side by side, Mobile/Tablet: Responsive grid */}
        <div className="flex flex-col lg:flex-row items-end justify-center gap-4 md:gap-5 lg:gap-[20px]">
          {featuredInitiatives.length > 0 ? (
            featuredInitiatives.map((initiative, index) => (
              <div
                key={initiative.id}
                className="flex flex-col justify-end items-start gap-4 md:gap-5 lg:gap-[20px] w-full max-w-[387px] h-auto lg:h-[644px] group"
              >
                {/* Image Container */}
                <Card className="overflow-hidden w-full bg-transparent border-none shadow-none">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-[15px] md:rounded-[18px] lg:rounded-[20px]">
                      <img
                        className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[484px] object-cover group-hover:scale-110 transition-transform duration-500"
                        alt={`${initiative.title} - Initiative Image`}
                        src={initiative.image}
                        loading="lazy"
                      />

                      {/* Status Badge */}
                      <div className="absolute top-3 left-3 px-2 py-1 bg-[#4b8cbb] text-white text-xs font-medium rounded-md opacity-90">
                        {initiative.status}
                      </div>

                      {/* Featured Badge */}
                      {initiative.featured && (
                        <div className="absolute top-3 right-3 px-2 py-1 text-xs font-medium text-white bg-amber-500 rounded-md">
                          Featured
                        </div>
                      )}

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 transition-opacity duration-300 from-black/30 group-hover:opacity-100" />
                    </div>
                  </CardContent>
                </Card>

                {/* Content Section - Matching Figma */}
                <div className="flex flex-col items-start gap-3 md:gap-4 lg:gap-[20px] w-full">
                  {/* Title - Figma Typography */}
                  <h4 className="font-['Poppins',Helvetica] font-semibold text-black text-lg md:text-xl lg:text-2xl xl:text-[24px] leading-tight md:leading-normal lg:leading-[36px] w-full line-clamp-2">
                    {initiative.title}
                  </h4>

                  {/* Impact Metric */}
                  <div className="flex gap-2 items-center text-sm text-gray-600">
                    <svg
                      className="w-4 h-4 text-[#4b8cbb]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-medium">{initiative.impact}</span>
                  </div>

                  {/* Read More Button - Matching Figma Design */}
                  <Button
                    onClick={() =>
                      handleReadMore(initiative.id, initiative.title)
                    }
                    className="flex items-center justify-center px-4 md:px-6 lg:px-[24px] py-2 md:py-3 lg:py-[12px] bg-[#EEEEEE] hover:bg-[#4b8cbb] hover:text-white rounded-[5px] transition-all duration-300 w-auto lg:w-[135px] h-[40px] md:h-[44px] lg:h-[48px] group-hover:bg-[#4b8cbb] group-hover:text-white transform group-hover:scale-105"
                  >
                    <span className="font-['Poppins',Helvetica] font-bold text-[#255D86] group-hover:text-white text-sm md:text-base lg:text-[16px] leading-[24px] transition-colors duration-300">
                      Learn More
                    </span>
                  </Button>
                </div>
              </div>
            ))
          ) : (
            /* Fallback if no featured initiatives */
            <div className="py-12 w-full text-center">
              <div className="text-gray-500">
                <svg
                  className="mx-auto mb-4 w-16 h-16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                <h3 className="mb-2 text-lg font-medium text-gray-600">
                  No Featured Initiatives
                </h3>
                <p className="text-gray-500">
                  Featured initiatives will appear here when available.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="w-full max-w-[1201px] mt-8 text-center">
        <Button
          onClick={() => navigate("/initiatives")}
          className="px-6 py-3 bg-[#4b8cbb] hover:bg-[#225f8c] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          View All Initiatives
        </Button>
      </div>

      {/* Optional: Hidden description for accessibility/SEO */}
      <div className="sr-only">
        {featuredInitiatives.map((initiative) => (
          <p key={`desc-${initiative.id}`}>{initiative.excerpt}</p>
        ))}
      </div>
    </section>
  );
};

// import React from "react";
// import { Card, CardContent } from "../../../../components/ui/card";
// import { Button } from "../../../../components/ui/button";

// export const InitiativeSection = (): JSX.Element => {
//   // Data for the images with titles and read more functionality
//   const images = [
//     {
//       id: 1,
//       src: "/image-15.png",
//       alt: "Samarth Kids Initiative Image 1",
//       title: "Empowering Young Minds Through Innovation",
//       description:
//         "Building future leaders with cutting-edge educational programs and AI-powered learning solutions.",
//     },
//     {
//       id: 2,
//       src: "/image-14.png",
//       alt: "Samarth Kids Initiative Image 2",
//       title: "Technology-Driven Educational Excellence",
//       description:
//         "Transforming traditional learning with modern technology and innovative teaching methodologies.",
//     },
//     {
//       id: 3,
//       src: "/image-16.png",
//       alt: "Samarth Kids Initiative Image 3",
//       title: "Creating Super Citizens for India 2047",
//       description:
//         "Nurturing responsible citizens who will lead India towards becoming a developed nation by 2047.",
//     },
//   ];

//   // Handle read more click
//   const handleReadMore = (id: number, title: string) => {
//     // You can implement navigation to detailed page or modal
//     console.log(`Read more clicked for: ${title}`);
//     // Example: navigate(`/initiatives/${id}`);
//   };

//   return (
//     <section className="flex flex-col w-full items-center gap-6 md:gap-8 lg:gap-10 px-4 md:px-8 lg:px-[80px] py-8 md:py-12 lg:py-16">
//       {/* Header Section */}
//       <div className="flex flex-col items-start w-full max-w-[1200px] space-y-2 md:space-y-3 lg:space-y-4">
//         {/* Subtitle */}
//         <h3 className="font-bold font-['Poppins',Helvetica] text-[#000000b2] text-sm md:text-base lg:text-lg xl:text-xl tracking-wider uppercase">
//           PATHBREAKING INITIATIVES
//         </h3>

//         {/* Main Title - Responsive typography */}
//         <h2 className="font-['Poppins',Helvetica] font-medium text-black text-xl md:text-2xl lg:text-3xl xl:text-[32px] leading-tight md:leading-normal lg:leading-relaxed tracking-[0]">
//           A Visionary Initiative to Shape India's Future: Empowering Young Minds
//           to Become Super Citizens for a Developed India by 2047
//         </h2>
//       </div>

//       {/* Images Gallery with Headings and Read More - Figma Layout */}
//       <div className="w-full max-w-[1201px]">
//         {/* Desktop: 3 columns side by side, Mobile/Tablet: Responsive grid */}
//         <div className="flex flex-col lg:flex-row items-end justify-center gap-4 md:gap-5 lg:gap-[20px]">
//           {images.map((image, index) => (
//             <div
//               key={image.id}
//               className="flex flex-col justify-end items-start gap-4 md:gap-5 lg:gap-[20px] w-full max-w-[387px] h-auto lg:h-[644px] group"
//             >
//               {/* Image Container */}
//               <Card className="overflow-hidden w-full bg-transparent border-none shadow-none">
//                 <CardContent className="p-0">
//                   <div className="relative overflow-hidden rounded-[15px] md:rounded-[18px] lg:rounded-[20px]">
//                     <img
//                       className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[484px] object-cover group-hover:scale-110 transition-transform duration-500"
//                       alt={image.alt}
//                       src={image.src}
//                       loading="lazy"
//                     />

//                     {/* Hover Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 transition-opacity duration-300 from-black/30 group-hover:opacity-100" />
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Content Section - Matching Figma */}
//               <div className="flex flex-col items-start gap-3 md:gap-4 lg:gap-[20px] w-full">
//                 {/* Title - Figma Typography */}
//                 <h4 className="font-['Poppins',Helvetica] font-semibold text-black text-lg md:text-xl lg:text-2xl xl:text-[24px] leading-tight md:leading-normal lg:leading-[36px] w-full">
//                   {image.title}
//                 </h4>

//                 {/* Read More Button - Matching Figma Design */}
//                 <Button
//                   onClick={() => handleReadMore(image.id, image.title)}
//                   className="flex items-center justify-center px-4 md:px-6 lg:px-[24px] py-2 md:py-3 lg:py-[12px] bg-[#EEEEEE] hover:bg-[#E0E0E0] rounded-[5px] transition-colors duration-200 w-auto lg:w-[135px] h-[40px] md:h-[44px] lg:h-[48px]"
//                 >
//                   <span className="font-['Poppins',Helvetica] font-bold text-[#255D86] text-sm md:text-base lg:text-[16px] leading-[24px]">
//                     Read More
//                   </span>
//                 </Button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Optional: Hidden description for accessibility/SEO */}
//       <div className="sr-only">
//         {images.map((image) => (
//           <p key={`desc-${image.id}`}>{image.description}</p>
//         ))}
//       </div>
//     </section>
//   );
// };
