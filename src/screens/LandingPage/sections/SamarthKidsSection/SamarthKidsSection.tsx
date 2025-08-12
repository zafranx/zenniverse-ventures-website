import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const SamarthKidsSection = (): JSX.Element => {
  // Data for the images to enable mapping
  const images = [
    {
      src: "/image-15.png",
      alt: "Samarth Kids Initiative Image 1",
    },
    {
      src: "/image-14.png",
      alt: "Samarth Kids Initiative Image 2",
    },
    {
      src: "/image-16.png",
      alt: "Samarth Kids Initiative Image 3",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-6 md:gap-8 lg:gap-10 px-4 md:px-8 lg:px-[80px]">
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

      {/* Images Gallery - Responsive grid */}
      <div className="w-full max-w-[1200px]">
        {/* Mobile: Single column, Tablet: 2 columns, Desktop: 3 columns */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-6 justify-items-center">
          {images.map((image, index) => (
            <Card
              key={index}
              className="bg-transparent border-none shadow-none w-full max-w-[387px] group hover:scale-105 transition-transform duration-300"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-[15px] md:rounded-[18px] lg:rounded-[20px]">
                  <img
                    className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[484px] object-cover group-hover:scale-110 transition-transform duration-500"
                    alt={image.alt}
                    src={image.src}
                    loading="lazy"
                  />

                  {/* Optional: Overlay for better visual appeal */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[15px] md:rounded-[18px] lg:rounded-[20px]" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
