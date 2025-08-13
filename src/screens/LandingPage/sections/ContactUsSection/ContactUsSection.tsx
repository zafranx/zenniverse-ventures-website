
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Link } from "react-router-dom";

export const ContactUsSection = (): JSX.Element => {
  // Data for contact cards to enable mapping
  const contactCards = [
    {
      id: 1,
      image: "/image-13.png",
      title: "Partner with Us",
      description:
        "Collaborate to develop ground-breaking AI ventures that impact communities worldwide.",
    },
    {
      id: 2,
      image: "/image-13-1.png",
      title: "Join Our Team",
      description:
        "Be part of a visionary group dedicated to healthcare innovation and social good.",
    },
    {
      id: 3,
      image: "/image-13-2.png",
      title: "Stay Connected",
      description:
        "Subscribe to our newsletter and follow us on social platforms for updates and opportunities.",
    },
  ];

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
      <div className="flex flex-col items-start w-full gap-6 lg:flex-row md:gap-8 lg:gap-10">
        {/* Hero Image - Responsive sizing */}
        <div className="w-full lg:flex-shrink-0 lg:w-[534px]">
          <img
            className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[575px] rounded-[15px] md:rounded-[20px] object-cover shadow-lg"
            alt="Contact us - Building the future together"
            src="/image-12-2.png"
            loading="lazy"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col items-start flex-1 w-full gap-4 md:gap-6 lg:gap-8">
          {/* Title - Better mobile typography */}
          <h2 className="w-full font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] font-['Poppins',Helvetica] text-black leading-tight md:leading-normal lg:leading-relaxed">
            Contact Us: Let's Build the Future Together
          </h2>

          {/* Contact Cards - Improved mobile layout */}
          <div className="flex flex-col w-full gap-3 md:gap-4">
            {contactCards.map((card) => (
              <Card
                key={card.id}
                className="w-full bg-[#4b8cbb0d] hover:bg-[#4b8cbb15] rounded-[10px] md:rounded-[12px] border-none transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                <CardContent className="flex items-start gap-3 p-4 sm:items-center md:gap-4 lg:gap-5 md:p-5 lg:p-6">
                  {/* Card Icon - Responsive sizing */}
                  <div className="flex-shrink-0">
                    <img
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[82px] lg:h-[82px] object-cover rounded-lg md:rounded-xl shadow-sm"
                      alt={`${card.title} icon`}
                      src={card.image}
                      loading="lazy"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col flex-1 min-w-0 gap-1 md:gap-2">
                    <h3 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl font-['Poppins',Helvetica] text-black leading-tight">
                      {card.title}
                    </h3>
                    <p className="font-normal text-xs sm:text-sm md:text-base font-['Poppins',Helvetica] text-[#000000b2] leading-relaxed md:leading-6 lg:leading-[28px]">
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Button - Mobile-optimized */}
          <div className="w-full sm:w-auto">
            <Link to="/contact">
              <Button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-[#4b8cbb] rounded-[8px] hover:bg-[#225f8c] focus:bg-[#225f8c] transition-colors duration-200 shadow-md hover:shadow-lg">
                <span className="font-bold text-sm md:text-base lg:text-lg font-['Poppins',Helvetica] text-white">
                  Let's Work Together
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};


// old code

// import React from "react";
// import { Button } from "../../../../components/ui/button";
// import { Card, CardContent } from "../../../../components/ui/card";

// export const ContactUsSection = (): JSX.Element => {
//   // Data for contact cards to enable mapping
//   // Data for contact cards to enable mapping
//   const contactCards = [
//     {
//       id: 1,
//       image: "/image-13.png",
//       title: "Partner with Us",
//       description:
//         "Collaborate to develop ground-breaking AI ventures that impact communities worldwide.",
//     },
//     {
//       id: 2,
//       image: "/image-13-1.png",
//       title: "Join Our Team",
//       description:
//         "Be part of a visionary group dedicated to healthcare innovation and social good.",
//     },
//     {
//       id: 3,
//       image: "/image-13-2.png",
//       title: "Stay Connected",
//       description:
//         "Subscribe to our newsletter and follow us on social platforms for updates and opportunities.",
//     },
//   ];

//   return (
//     <section className="flex flex-col lg:flex-row items-start gap-6 md:gap-8 lg:gap-5 w-full max-w-[1200px]">
//       <img
//         className="w-full lg:max-w-[534px] h-64 md:h-80 lg:h-[575px] rounded-[15px] md:rounded-[20px] object-cover"
//         alt="Contact us image"
//         src="/image-12-2.png"
//       />

//       <div className="flex flex-col items-start justify-end flex-1 gap-6 lg:items-end md:gap-8 lg:gap-9">
//         <h2 className="self-stretch font-medium text-xl md:text-2xl lg:text-[32px] font-['Poppins',Helvetica] text-black">
//           Contact Us: Let&#39;s Build the Future Together
//         </h2>

//         <div className="flex flex-col items-start w-full gap-2 md:gap-3">
//           {contactCards.map((card) => (
//             <Card
//               key={card.id}
//               className="w-full bg-[#4b8cbb0d] rounded-[8px] md:rounded-[10px] border-none"
//             >
//               <CardContent className="flex items-center gap-3 p-3 py-3 md:gap-4 lg:gap-5 md:p-4 lg:p-5 md:py-4 lg:py-1">
//                 <img
//                   className="w-12 md:w-16 lg:w-[82px] h-12 md:h-16 lg:h-[82px] object-cover rounded-lg"
//                   alt={`${card.title} icon`}
//                   src={card.image}
//                 />
//                 <div className="flex flex-col items-start flex-1 gap-1 md:gap-2">
//                   <h3 className="self-stretch font-semibold text-base md:text-lg font-['Poppins',Helvetica] text-black">
//                     {card.title}
//                   </h3>
//                   <p className="self-stretch font-normal text-sm md:text-base font-['Poppins',Helvetica] text-[#000000b2] leading-5 md:leading-6 lg:leading-[30px]">
//                     {card.description}
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         <Button className="px-4 md:px-6 py-2 md:py-3 bg-[#4b8cbb] rounded-[5px] hover:bg-[#225f8c] transition-colors">
//           <span className="font-bold text-sm md:text-base font-['Poppins',Helvetica] text-white">
//             Let&apos;s Work Together
//           </span>
//         </Button>
//       </div>
//     </section>
//   );
// }
