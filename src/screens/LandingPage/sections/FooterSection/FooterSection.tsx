import React from "react";

export const FooterSection = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    { title: "Home" },
    { title: "About US" },
    { title: "Contact Us" },
    { title: "Privacy Policy" },
  ];

  // Social media icons data
  const socialIcons = [
    { alt: "Social", src: "/social.svg" },
    { alt: "Social", src: "/social-1.svg" },
    { alt: "Instagram", src: "/instagram.svg" },
    { alt: "Social", src: "/social-2.svg" },
  ];

  return (
    <footer className="w-full bg-[#4b8cbb] mt-8 md:mt-12 lg:mt-16">
      {/* Main Footer Content */}
      <div className="flex flex-col items-center px-4 md:px-8 lg:px-[120px] pt-6 pb-4 md:pt-7 md:pb-6 gap-4 md:gap-6 w-full">
        {/* Logo */}
        <img
          className="w-24 md:w-32 lg:w-[152px] h-12 md:h-16 lg:h-20 object-contain"
          alt="Logo"
          src="/image-2.png"
        />

        {/* Navigation Menu */}
        {/* Use grid on mobile to avoid overflow and keep tidy alignment */}
        <nav className="w-full max-w-[564px]">
          <ul className="grid grid-cols-2 gap-x-3 gap-y-2 justify-items-center md:flex md:flex-wrap md:items-center md:justify-center md:gap-2.5">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="inline-block px-2 py-2 [font-family:'Poppins',Helvetica] font-normal text-white text-sm md:text-base leading-6 hover:text-gray-200 transition-colors"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom Footer */}
      <div className="w-full bg-[#225f8c]">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between gap-3 md:gap-6 px-4 md:px-8 lg:px-[120px] py-3">
          {/* Social Icons */}
          <div className="flex items-center justify-center gap-3 md:gap-4">
            {socialIcons.map((icon, index) => (
              <a
                key={index}
                href="#"
                className="inline-flex w-6 h-6 transition-opacity md:w-6 md:h-6 hover:opacity-80"
                aria-label={icon.alt}
              >
                <img
                  className="object-contain w-full h-full"
                  alt={icon.alt}
                  src={icon.src}
                />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right [font-family:'Poppins',Helvetica] font-semibold text-[#d9d9d9] text-xs md:text-sm leading-[21px]">
            ©2025 zeniverse-ventures All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};
