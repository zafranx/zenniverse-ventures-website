import React from "react";

export const OurTeamSection = (): JSX.Element => {
  // Team members data for mapping
  const teamMembers = [
    {
      id: 1,
      name: "Gaurav Pande",
      role: "Founder",
      description:
        "Principal Promoter with over 25 years of experience in public health, innovation, technology, and medical tourism domains.",
      image: "/Ourteams/1.png",
    },
    {
      id: 2,
      name: "Anil Sudan",
      role: "Co-Founder",
      description:
        "Principal Promoter with over 30 years of experience in media, operations, leadership and strategy development",
      image: "/Ourteams/2.png",
    },
    {
      id: 3,
      name: "Shalini Pande",
      role: "CEO",
      description:
        "Principal Promoter with over 12 years of experience in operations management and logistics support",
      image: "/Ourteams/3.png",
    },
  ];

  return (
    <section className="relative w-full max-w-[1200px] mx-auto px-4 md:px-8 lg:px-0 items-start">
      <h2 className="font-medium text-black text-xl md:text-2xl mb-5 lg:text-[32px] [font-family:'Poppins',Helvetica] tracking-[0] leading-normal">
        Our Team: Visionaries and Innovators
      </h2>

      {/* Horizontal Scrollable Container */}
      <div className="w-full overflow-x-auto">
        <div className="flex items-center gap-3 pb-4 md:gap-4 lg:gap-5 w-max">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group relative flex flex-col justify-end items-center p-[18px] gap-2.5 isolate w-[300px] md:w-[350px] lg:w-[387px] h-[500px] md:h-[550px] lg:h-[614px] flex-shrink-0 overflow-hidden rounded-[20px] cursor-pointer"
            >
              {/* Background Image with Zoom Effect */}
              <div className="absolute inset-0 w-full h-full overflow-hidden rounded-[20px]">
                {/* Actual Image with Zoom */}
                <div
                  className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out bg-center bg-no-repeat bg-cover group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${member.image}')`,
                  }}
                />

                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0 w-full h-full rounded-[20px]"
                  style={{
                    background: `linear-gradient(180deg, rgba(0, 0, 0, 0) ${
                      index % 2 === 0 ? "67.33%" : "61%"
                    }, #000000 ${index % 2 === 0 ? "81.79%" : "83%"})`,
                  }}
                />
              </div>

              {/* Content Card with Subtle Animation */}
              <div className="relative flex flex-col items-start p-[10px_20px] gap-3 w-[260px] md:w-[310px] lg:w-[351px] h-auto bg-[rgba(75,140,187,0.1)] backdrop-blur-sm rounded-[10px] z-10 transform transition-all duration-500 group-hover:bg-[rgba(75,140,187,0.15)] group-hover:backdrop-blur-md group-hover:translate-y-[-4px]">
                {/* Name and Role */}
                <div className="flex flex-col items-start w-full">
                  <h3 className="w-full font-['Poppins',Helvetica] font-semibold text-white text-lg md:text-xl lg:text-2xl leading-9 transition-colors duration-300 group-hover:text-white">
                    {member.name}
                  </h3>
                  <p className="w-full font-['Poppins',Helvetica] font-normal text-white text-base md:text-lg lg:text-xl leading-[30px] transition-colors duration-300 group-hover:text-[#4b8cbb]">
                    {member.role}
                  </p>
                </div>

                {/* Description */}
                <p className="w-full font-['Poppins',Helvetica] font-normal text-white text-sm md:text-base leading-[30px] transition-opacity duration-300 opacity-90 group-hover:opacity-100">
                  {member.description}
                </p>

                {/* Hover Indicator Line */}
                <div className="w-0 h-0.5 bg-[#4b8cbb] transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100" />
              </div>

              {/* Optional: Decorative Corner Border on Hover */}
              <div
                className={`absolute w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] ${
                  index % 2 === 0 ? "top-0 right-0" : "top-0 left-0"
                } border-t-4 ${
                  index % 2 === 0
                    ? "border-r-4 rounded-tr-[20px]"
                    : "border-l-4 rounded-tl-[20px]"
                } border-[#4b8cbb] opacity-0 transition-opacity duration-500 group-hover:opacity-80 z-20`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// import React from "react";

// export const OurTeamSection = (): JSX.Element => {
//   // Team members data for mapping
//   const teamMembers = [
//     {
//       id: 1,
//       name: "Gaurav Pande",
//       role: "Founder",
//       description:
//         "Principal Promoter with over 25 years of experience in public health, innovation, technology, and medical tourism domains.",
//       image: "/Ourteams/1.png",
//     },
//     {
//       id: 2,
//       name: "Anil Sudan",
//       role: "Co-Founder",
//       description:
//         "Principal Promoter with over 30 years of experience in media, operations, leadership and strategy development",
//       image: "/Ourteams/2.png",
//     },
//     {
//       id: 3,
//       name: "Shalini Pande",
//       role: "CEO",
//       description:
//         "Principal Promoter with over 12 years od experience in operations managements and logistics support",
//       image: "/Ourteams/3.png",
//     },
//     // {
//     //   id: 4,
//     //   name: "Gaurav Pande",
//     //   role: "Founder",
//     //   description:
//     //     "Principal Promoter with over 25 years of experience in public health, innovation, technology, and medical tourism domains.",
//     //   image: "/Ourteams/1.png",
//     // },
//     // {
//     //   id: 5,
//     //   name: "Anil Sudan",
//     //   role: "Co-Founder",
//     //   description:
//     //     "Principal Promoter with over 30 years of experience in media, operations, leadership and strategy development",
//     //   image: "/Ourteams/2.png",
//     // },
//     // {
//     //   id: 6,
//     //   name: "Shalini Pande",
//     //   role: "CEO",
//     //   description:
//     //     "Principal Promoter with over 12 years od experience in operations managements and logistics support",
//     //   image: "/Ourteams/3.png",
//     // },
//   ];

//   return (
//     // <section className="relative w-full max-w-[1200px] mx-auto px-4 md:px-8 lg:px-0">

//     <section
//       //  className="flex flex-col items-start w-full gap-6 md:gap-8 lg:gap-9 lg:px-[80px]"
//       className="relative w-full max-w-[1200px] mx-auto px-4 md:px-8 lg:px-0 items-start "
//     >
//       <h2 className="font-medium text-black text-xl md:text-2xl mb-5 lg:text-[32px] [font-family:'Poppins',Helvetica] tracking-[0] leading-normal">
//         Our Team: Visionaries and Innovators
//       </h2>

//       {/* Horizontal Scrollable Container */}
//       <div className="w-full overflow-x-auto">
//         <div className="flex items-center gap-3 pb-4 md:gap-4 lg:gap-5 w-max">
//           {teamMembers.map((member, index) => (
//             <div
//               key={member.id}
//               className="relative flex flex-col justify-end items-center p-[18px] gap-2.5 isolate w-[300px] md:w-[350px] lg:w-[387px] h-[500px] md:h-[550px] lg:h-[614px] flex-shrink-0"
//             >
//               {/* Background Image with Gradient */}
//               <div
//                 className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat rounded-[20px]"
//                 style={{
//                   backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) ${
//                     index % 2 === 0 ? "67.33%" : "61%"
//                   }, #000000 ${index % 2 === 0 ? "81.79%" : "83%"}), url('${
//                     member.image
//                   }')`,
//                 }}
//               />

//               {/* Decorative Border Rectangle */}
//               {/* <div
//                 className={`absolute w-[150px] md:w-[170px] lg:w-[195px] h-[120px] md:w-[135px] lg:h-[151px] ${
//                   index % 2 === 0 ? "top-0 left-0" : "top-0 right-0"
//                 } border-t-[3px] md:border-t-[4px] lg:border-t-[5px] border-r-[3px] md:border-r-[4px] lg:border-r-[5px] border-[#4b8cbb] rounded-tr-[20px] z-10`}
//               /> */}

//               {/* Content Card */}
//               <div className="relative flex flex-col items-start p-[10px_20px] gap-3 w-[260px] md:w-[310px] lg:w-[351px] h-auto bg-[rgba(75,140,187,0.1)] rounded-[10px] z-10">
//                 {/* Name and Role */}
//                 <div className="flex flex-col items-start w-full">
//                   <h3 className="w-full font-['Poppins',Helvetica] font-semibold text-white text-lg md:text-xl lg:text-2xl leading-9">
//                     {member.name}
//                   </h3>
//                   <p className="w-full font-['Poppins',Helvetica] font-normal text-white text-base md:text-lg lg:text-xl leading-[30px]">
//                     {member.role}
//                   </p>
//                 </div>

//                 {/* Description */}
//                 <p className="w-full font-['Poppins',Helvetica] font-normal text-white text-sm md:text-base leading-[30px]">
//                   {member.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
