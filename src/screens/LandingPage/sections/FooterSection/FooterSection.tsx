import React from "react";

export const FooterSection = (): JSX.Element => {
  // About section links
  const aboutLinks = [
    { title: "Home", href: "/" },
    { title: "About US", href: "/about" },
    { title: "Service", href: "/services" },
    { title: "Contact Us", href: "/contact" },
  ];
  // Quick Links
  const quickLinks = [
    { title: "News & Insights", href: "/news" },
    { title: "Pathbreaking Initiatives", href: "/initiatives" },
    // { title: "Privacy Policy", href: "/privacy" },
    // { title: "Term & Conditions", href: "/terms-conditions" },
    { title: "Privacy Policy", href: "/" },
    { title: "Term & Conditions", href: "/" },
  ];

  // Social media icons data with proper SVG icons
  const socialIcons = [
    {
      alt: "Facebook",
      href: "#",
      icon: (
        <svg
          className="w-4 h-4 md:w-5 md:h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      alt: "Twitter",
      href: "#",
      icon: (
        <svg
          className="w-4 h-4 md:w-5 md:h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
    {
      alt: "Instagram",
      href: "#",
      icon: (
        <svg
          className="w-4 h-4 md:w-5 md:h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      alt: "LinkedIn",
      href: "#",
      icon: (
        <svg
          className="w-4 h-4 md:w-5 md:h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative w-full overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4B8CBB] via-[#5A9BCF] to-[#6BAAE3]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#4B8CBB]/20 via-transparent to-transparent" />

      {/* Decorative Background Elements - Responsive sizes */}
      <div className="absolute top-0 right-0 w-48 h-48 rounded-full sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-bl from-white/5 to-transparent blur-2xl sm:blur-3xl" />
      <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-to-tr from-[#225F8C]/30 to-transparent rounded-full blur-xl sm:blur-2xl" />

      {/* Main Footer Content */}
      <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px] py-6 sm:py-8 md:py-10 lg:py-12 xl:py-[50px]">
        <div className="max-w-[1200px] mx-auto">
          {/* Footer Content - Mobile First Responsive Grid */}
          <div className="flex flex-col items-center lg:items-start lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-[122px]">
            {/* Logo and Description Section - Centered on mobile */}
            <div className="flex flex-col items-center lg:items-start gap-3 sm:gap-4 md:gap-5 lg:gap-[23px] w-full lg:w-[285px] text-center lg:text-left">
              {/* Logo with responsive sizing */}
              <div className="relative">
                <img
                  className="w-[100px] h-[50px] sm:w-[120px] sm:h-[60px] md:w-[140px] md:h-[70px] lg:w-[152px] lg:h-[80px] object-contain drop-shadow-lg"
                  alt="Zeniverse Ventures Logo"
                  src="/image-2.png"
                />
              </div>

              {/* Description with responsive typography */}
              <p className="font-['Poppins',Helvetica] font-normal text-white/95 text-xs sm:text-sm md:text-base lg:text-base leading-relaxed sm:leading-relaxed md:leading-7 lg:leading-[30px] max-w-[280px] sm:max-w-[320px] lg:max-w-[285px] drop-shadow-sm">
                Building AI-powered companies that transform lives worldwide
                through innovative solutions.
              </p>
            </div>

            {/* Links Section Container - Responsive grid */}
            <div className="w-full lg:flex-1">
              {/* Mobile & Tablet: 2x2 Grid, Desktop: Row Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-5 xl:gap-[20px] justify-items-center lg:justify-start">
                {/* About Section */}
                <div className="flex flex-col items-center sm:items-start gap-3 sm:gap-4 md:gap-5 lg:gap-[24px] w-full max-w-[200px] sm:max-w-none lg:w-[285px]">
                  {/* Section Title - Responsive */}
                  <div className="flex items-center justify-center px-2 py-1 lg:px-[10px] lg:py-[4px]">
                    <h3 className="font-['Poppins',Helvetica] font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent text-base sm:text-lg md:text-xl lg:text-[20px] leading-tight sm:leading-[30px] drop-shadow-sm">
                      About
                    </h3>
                  </div>

                  {/* Links - Centered on mobile */}
                  <nav className="flex flex-col items-center sm:items-start gap-1 sm:gap-2 md:gap-3 lg:gap-[10px] w-full">
                    {aboutLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className="group relative px-2 py-1 lg:px-[10px] lg:py-[4px] font-['Poppins',Helvetica] font-normal text-white/90 text-xs sm:text-sm md:text-base lg:text-base leading-5 sm:leading-6 hover:text-white transition-all duration-300 hover:translate-x-1"
                      >
                        <span className="absolute left-0 w-0 h-0.5 bg-gradient-to-r from-white to-transparent bottom-0 group-hover:w-full transition-all duration-300" />
                        {link.title}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Quick Links Section */}
                <div className="flex flex-col items-center sm:items-start gap-3 sm:gap-4 md:gap-5 lg:gap-[24px] w-full max-w-[200px] sm:max-w-none lg:w-[285px]">
                  {/* Section Title - Responsive */}
                  <div className="flex items-center justify-center px-2 py-1 lg:px-[10px] lg:py-[4px]">
                    <h3 className="font-['Poppins',Helvetica] font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent text-base sm:text-lg md:text-xl lg:text-[20px] leading-tight sm:leading-[30px] drop-shadow-sm">
                      Quick Links
                    </h3>
                  </div>

                  {/* Links - Centered on mobile */}
                  <nav className="flex flex-col items-center sm:items-start gap-1 sm:gap-2 md:gap-3 lg:gap-[10px] w-full">
                    {quickLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className="group relative px-2 py-1 lg:px-[10px] lg:py-[4px] font-['Poppins',Helvetica] font-normal text-white/90 text-xs sm:text-sm md:text-base lg:text-base leading-5 sm:leading-6 hover:text-white transition-all duration-300 hover:translate-x-1"
                      >
                        <span className="absolute left-0 w-0 h-0.5 bg-gradient-to-r from-white to-transparent bottom-0 group-hover:w-full transition-all duration-300" />
                        {link.title}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Follow Us Section - Full width on mobile */}
                <div className="flex flex-col items-center sm:items-start gap-3 sm:gap-4 md:gap-5 lg:gap-[25px] w-full sm:col-span-2 lg:col-span-1 lg:w-[183px]">
                  {/* Section Title - Responsive */}
                  <div className="flex items-center justify-center px-2 py-1 lg:px-0 lg:py-[5px]">
                    <h3 className="font-['Poppins',Helvetica] font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px] leading-tight sm:leading-9 drop-shadow-sm">
                      Follow US
                    </h3>
                  </div>

                  {/* Social Icons - Responsive sizing and spacing */}
                  <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-[20px]">
                    {socialIcons.map((icon, index) => (
                      <a
                        key={index}
                        href={icon.href}
                        className="relative flex items-center justify-center w-8 h-8 transition-all duration-300 border rounded-full group sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border-white/20 hover:scale-110 hover:bg-gradient-to-br hover:from-white hover:to-white/90 hover:shadow-lg hover:shadow-white/25"
                        aria-label={icon.alt}
                      >
                        {/* Glow effect */}
                        <div className="absolute inset-0 transition-all duration-300 rounded-full bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/20 group-hover:to-white/5 blur" />

                        {/* Icon with proper color handling */}
                        <div className="relative z-10 text-white group-hover:text-[#4B8CBB] transition-all duration-300">
                          {icon.icon}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar - Responsive */}
      <div className="relative w-full bg-gradient-to-r from-[#225F8C] via-[#1E5479] to-[#225F8C] py-2 sm:py-3 md:py-4 lg:py-[14px] border-t border-white/10">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        <div className="relative flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-[445px]">
          <p className="font-['Poppins',Helvetica] font-semibold text-[#D9D9D9] text-xs sm:text-sm md:text-sm lg:text-[14px] leading-tight sm:leading-[21px] text-center drop-shadow-sm">
            ©2025 Zeniverse Ventures All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

// import React from "react";

// export const FooterSection = (): JSX.Element => {
//   // Navigation links data
//   const navLinks = [
//     { title: "Home" },
//     { title: "About US" },
//     { title: "Contact Us" },
//     { title: "Privacy Policy" },
//   ];

//   // Social media icons data
//   const socialIcons = [
//     { alt: "Social", src: "/social.svg" },
//     { alt: "Social", src: "/social-1.svg" },
//     { alt: "Instagram", src: "/instagram.svg" },
//     { alt: "Social", src: "/social-2.svg" },
//   ];

//   return (
//     <footer className="w-full bg-[#4b8cbb] mt-8 md:mt-12 lg:mt-16">
//       {/* Main Footer Content */}
//       <div className="flex flex-col items-center px-4 md:px-8 lg:px-[120px] pt-6 pb-4 md:pt-7 md:pb-6 gap-4 md:gap-6 w-full">
//         {/* Logo */}
//         <img
//           className="w-24 md:w-32 lg:w-[152px] h-12 md:h-16 lg:h-20 object-contain"
//           alt="Logo"
//           src="/image-2.png"
//         />

//         {/* Navigation Menu */}
//         {/* Use grid on mobile to avoid overflow and keep tidy alignment */}
//         <nav className="w-full max-w-[564px]">
//           <ul className="grid grid-cols-2 gap-x-3 gap-y-2 justify-items-center md:flex md:flex-wrap md:items-center md:justify-center md:gap-2.5">
//             {navLinks.map((link, index) => (
//               <li key={index}>
//                 <a
//                   href="#"
//                   className="inline-block px-2 py-2 [font-family:'Poppins',Helvetica] font-normal text-white text-sm md:text-base leading-6 hover:text-gray-200 transition-colors"
//                 >
//                   {link.title}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>

//       {/* Bottom Footer */}
//       <div className="w-full bg-[#225f8c]">
//         <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between gap-3 md:gap-6 px-4 md:px-8 lg:px-[120px] py-3">
//           {/* Social Icons */}
//           <div className="flex items-center justify-center gap-3 md:gap-4">
//             {socialIcons.map((icon, index) => (
//               <a
//                 key={index}
//                 href="#"
//                 className="inline-flex w-6 h-6 transition-opacity md:w-6 md:h-6 hover:opacity-80"
//                 aria-label={icon.alt}
//               >
//                 <img
//                   className="object-contain w-full h-full"
//                   alt={icon.alt}
//                   src={icon.src}
//                 />
//               </a>
//             ))}
//           </div>

//           {/* Copyright */}
//           <div className="text-center md:text-right [font-family:'Poppins',Helvetica] font-semibold text-[#d9d9d9] text-xs md:text-sm leading-[21px]">
//             ©2025 zeniverse-ventures All Rights Reserved
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };
