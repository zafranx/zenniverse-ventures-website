import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";

export const SamarthKidsSection = (): JSX.Element => {
  // Data for the images with titles and read more functionality
  const images = [
    {
      id: 1,
      src: "/image-15.png",
      alt: "Samarth Kids Initiative Image 1",
      title: "Empowering Young Minds Through Innovation",
      description:
        "Building future leaders with cutting-edge educational programs and AI-powered learning solutions.",
    },
    {
      id: 2,
      src: "/image-14.png",
      alt: "Samarth Kids Initiative Image 2",
      title: "Technology-Driven Educational Excellence",
      description:
        "Transforming traditional learning with modern technology and innovative teaching methodologies.",
    },
    {
      id: 3,
      src: "/image-16.png",
      alt: "Samarth Kids Initiative Image 3",
      title: "Creating Super Citizens for India 2047",
      description:
        "Nurturing responsible citizens who will lead India towards becoming a developed nation by 2047.",
    },
  ];

  // Handle read more click
  const handleReadMore = (id: number, title: string) => {
    // You can implement navigation to detailed page or modal
    console.log(`Read more clicked for: ${title}`);
    // Example: navigate(`/initiatives/${id}`);
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

      {/* Images Gallery with Headings and Read More - Figma Layout */}
      <div className="w-full max-w-[1201px]">
        {/* Desktop: 3 columns side by side, Mobile/Tablet: Responsive grid */}
        <div className="flex flex-col lg:flex-row items-end justify-center gap-4 md:gap-5 lg:gap-[20px]">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="flex flex-col justify-end items-start gap-4 md:gap-5 lg:gap-[20px] w-full max-w-[387px] h-auto lg:h-[644px] group"
            >
              {/* Image Container */}
              <Card className="bg-transparent border-none shadow-none w-full overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-[15px] md:rounded-[18px] lg:rounded-[20px]">
                    <img
                      className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[484px] object-cover group-hover:scale-110 transition-transform duration-500"
                      alt={image.alt}
                      src={image.src}
                      loading="lazy"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </CardContent>
              </Card>

              {/* Content Section - Matching Figma */}
              <div className="flex flex-col items-start gap-3 md:gap-4 lg:gap-[20px] w-full">
                {/* Title - Figma Typography */}
                <h4 className="font-['Poppins',Helvetica] font-semibold text-black text-lg md:text-xl lg:text-2xl xl:text-[24px] leading-tight md:leading-normal lg:leading-[36px] w-full">
                  {image.title}
                </h4>

                {/* Read More Button - Matching Figma Design */}
                <Button
                  onClick={() => handleReadMore(image.id, image.title)}
                  className="flex items-center justify-center px-4 md:px-6 lg:px-[24px] py-2 md:py-3 lg:py-[12px] bg-[#EEEEEE] hover:bg-[#E0E0E0] rounded-[5px] transition-colors duration-200 w-auto lg:w-[135px] h-[40px] md:h-[44px] lg:h-[48px]"
                >
                  <span className="font-['Poppins',Helvetica] font-bold text-[#255D86] text-sm md:text-base lg:text-[16px] leading-[24px]">
                    Read More
                  </span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional: Hidden description for accessibility/SEO */}
      <div className="sr-only">
        {images.map((image) => (
          <p key={`desc-${image.id}`}>{image.description}</p>
        ))}
      </div>
    </section>
  );
};
