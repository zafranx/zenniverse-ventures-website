import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../../../../components/ui/card";
import { portfolioCompanies } from "../../../../data/portfolioData";

export const PortfolioSection = (): JSX.Element => {
  // Create chunks of 3 companies for each row
  const companyRows = [];
  for (let i = 0; i < portfolioCompanies.length; i += 3) {
    companyRows.push(portfolioCompanies.slice(i, i + 3));
  }

  return (
    <section className="w-full bg-[rgba(75,140,187,0.05)] py-8 md:py-9 lg:py-[36px] px-4 md:px-8 lg:px-[119px]">
      <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-[52px] w-full max-w-[1201px] mx-auto">
        <h2 className="text-xl md:text-2xl lg:text-[32px] font-medium text-black text-center font-['Poppins',Helvetica] leading-normal lg:leading-[48px]">
          Our Portfolio Companies
        </h2>

        <div className="flex flex-col gap-6 md:gap-8 lg:gap-[36px] w-full">
          {companyRows.map((row, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              className="flex flex-col md:flex-row items-center gap-4 md:gap-5 lg:gap-[20px] w-full justify-center"
            >
              {row.map((company) => (
                <Link
                  key={company.id}
                  to={`/portfolio/${company.id}`}
                  className="block w-full transition-transform hover:scale-105 md:w-auto"
                >
                  <Card className="w-full md:w-[387px] h-[432px] bg-white shadow-[0px_0px_4px_rgba(0,0,0,0.2)] rounded-[20px] border-none">
                    <CardContent className="flex flex-col justify-center items-center p-4 md:p-[22px_16px] h-full">
                      <div className="flex flex-col justify-center items-center w-full h-full max-w-[327px]">
                        <img
                          className="w-[241px] h-[241px] object-cover rounded-lg mb-3 md:mb-4"
                          alt={`${company.name} logo`}
                          src={company.image}
                        />
                        <div className="flex flex-col items-center w-full gap-2 md:gap-3">
                          <h3 className="font-['Poppins',Helvetica] font-semibold text-black text-lg md:text-xl lg:text-2xl text-center leading-9">
                            {company.name}
                          </h3>
                          <p className="font-['Poppins',Helvetica] font-normal text-[rgba(0,0,0,0.7)] text-sm md:text-base text-center leading-6 md:leading-7 lg:leading-[30px]">
                            {company.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// import React from "react";
// import { Card, CardContent } from "../../../../components/ui/card";

// export const PortfolioSection = (): JSX.Element => {
//   // Portfolio company data for mapping
//   const portfolioCompanies = [
//     {
//       id: 1,
//       name: "Health Tech Venture",
//       description:
//         "Empowering a healthier tomorrow with cutting-edge health tech solutions. We Digitize the Medical World",
//       image: "/image-6.png",
//     },
//     {
//       id: 2,
//       name: "Real AI Solutions",
//       description:
//         "Transforming AI into Real, Actionable Intelligence for a Smarter Future. Real Solutions for Healthcare",
//       image: "/image-6-1.png",
//     },
//     {
//       id: 3,
//       name: "Medical Tourism",
//       description:
//         "Connecting the World with Cutting-Edge Medical Tourism Solutions. Uniting the World of Doctors",
//       image: "/image-6-2.png",
//     },
//     {
//       id: 4,
//       name: "Skill Development",
//       description:
//         "Empowering Healthcare Support Professionals with Skills to Save Lives and Build a Healthier World",
//       image: "/image-6-3.png",
//     },
//     {
//       id: 5,
//       name: "Telemedicine@HOME",
//       description:
//         "Delivering World-Class Medical Services to Your Doorstep with Telemedicine and Fleet of Riders",
//       image: "/image-6-4.png",
//     },
//     {
//       id: 6,
//       name: "Patient Friendly Stay",
//       description:
//         "Empowering Patient Recovery and Rehabilitation Beyond Hospital Walls. Care Continuity and Stay",
//       image: "/image-6-5.png",
//     },
//     {
//       id: 7,
//       name: "Road Safety",
//       description:
//         "The Most Innovative Road Safety Application Suites with Real-Time Surveillance and Alerts",
//       image: "/image-6-6.png",
//     },
//     {
//       id: 8,
//       name: "QR Commerce",
//       description:
//         "Ultimate E-Commerce Solutions for Trade, Tourism, Tradition, Treatment, and Taste",
//       image: "/image-6-7.png",
//     },
//     {
//       id: 9,
//       name: "Surety for Purity",
//       description:
//         "Verify Your Purchases: Combat Fake Products and Counterfeits with Confidence",
//       image: "/image-6-8.png",
//     },
//     {
//       id: 10,
//       name: "Connect with BHARAT",
//       description:
//         "Empowering Rural India: Media and Advocacy with Authentic Local Connections",
//       image: "/image-6-9.png",
//     },
//     {
//       id: 11,
//       name: "Smart Trauma Centers",
//       description:
//         "Rescuing Lives: AI-Powered Telemedicine for Road Accident and Disaster Victims",
//       image: "/image-6-10.png",
//     },
//     {
//       id: 12,
//       name: "Connecting the World",
//       description:
//         "Revolutionizing Exhibitions: Decentralized Experience to Explore Your Target Market",
//       image: "/image-6-11.png",
//     },
//     {
//       id: 13,
//       name: "Connect with BHARAT",
//       description:
//         "Empowering Rural India: Media and Advocacy with Authentic Local Connections",
//       image: "/image-6-12.png",
//     },
//     {
//       id: 14,
//       name: "Smart Trauma Centers",
//       description:
//         "Rescuing Lives: AI-Powered Telemedicine for Road Accident and Disaster Victims",
//       image: "/image-6-13.png",
//     },
//     {
//       id: 15,
//       name: "Connecting the World",
//       description:
//         "Revolutionizing Exhibitions: Decentralized Experience to Explore Your Target Market",
//       image: "/image-6-14.png",
//     },
//   ];

//   // Create chunks of 3 companies for each row
//   const companyRows = [];
//   for (let i = 0; i < portfolioCompanies.length; i += 3) {
//     companyRows.push(portfolioCompanies.slice(i, i + 3));
//   }

//   return (
//     <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#4b8cbb0d] w-full">
//       <div className="container flex flex-col items-center gap-12 mx-auto">
//         <h2 className="text-3xl font-medium text-black text-center font-['Poppins',Helvetica]">
//           Our Portfolio Companies
//         </h2>

//         <div className="flex flex-col w-full gap-9">
//           {companyRows.map((row, rowIndex) => (
//             <div
//               key={`row-${rowIndex}`}
//               className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
//             >
//               {row.map((company) => (
//                 <Card
//                   key={company.id}
//                   className="rounded-[20px] shadow-[0px_0px_4px_#00000033] bg-white"
//                 >
//                   <CardContent className="flex flex-col items-center justify-center p-4">
//                     <div className="flex flex-col items-center justify-center w-full">
//                       <img
//                         className="w-[241px] h-[241px] object-cover"
//                         alt={`${company.name} logo`}
//                         src={company.image}
//                       />
//                       <div className="flex flex-col items-center w-full gap-3 mt-4">
//                         <h3 className="font-['Poppins',Helvetica] font-semibold text-black text-2xl text-center w-full">
//                           {company.name}
//                         </h3>
//                         <p className="font-['Poppins',Helvetica] font-normal text-[#000000b2] text-base text-center leading-[30px]">
//                           {company.description}
//                         </p>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
