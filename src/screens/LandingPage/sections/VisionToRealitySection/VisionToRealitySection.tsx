import React from "react";

export const VisionToRealitySection = (): JSX.Element => {
  // Data for vision steps
  const visionSteps = [
    {
      title: "Ideation",
      description:
        "Identifying critical global challenges ripe for AI-powered innovation.",
    },
    {
      title: "Development",
      description:
        "Building scalable AI-driven business models and prototypes tailored to real-world impact.",
    },
    {
      title: "Validation",
      description:
        "Rigorous testing and piloting to ensure solutions meet high standards and needs.",
    },
    {
      title: "Scaling",
      description:
        "Launching and expanding ventures to maximize social and economic benefits worldwide.",
    },
  ];

  return (
    <section className="relative w-full max-w-[1200px] mx-auto px-4 md:px-8 lg:px-0">
      {/* Vision Banner Container - Removed fixed heights */}
      <div className="relative py-8 md:py-12 lg:py-[54px] px-6 md:px-8 lg:px-[128px] w-full min-h-[450px] md:min-h-[500px] lg:min-h-[492px] rounded-[20px] md:rounded-[25px] lg:rounded-[36px] overflow-hidden flex flex-col justify-center items-center isolate">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat rounded-[20px] md:rounded-[25px] lg:rounded-[36px]"
          style={{ backgroundImage: "url('/vision-to_reality.png')" }}
          aria-hidden="true"
        />

        {/* White Overlay */}
        <div className="absolute inset-0 w-full h-full bg-white/10 rounded-[20px] md:rounded-[25px] lg:rounded-[36px]" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/80 via-black/70 to-black/80 rounded-[20px] md:rounded-[25px] lg:rounded-[36px]" />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-start gap-4 md:gap-5 lg:gap-6 w-full max-w-[935px]">
          {/* Title - More responsive sizing */}
          <h1 className="w-full font-['Poppins',Helvetica] font-medium text-white text-lg md:text-xl lg:text-2xl xl:text-[32px] leading-tight md:leading-normal lg:leading-[48px] mb-2">
            Our Venture Studio Approach: From Vision to Reality
          </h1>

          {/* Steps - Better mobile spacing */}
          <div className="flex flex-col items-start gap-3 md:gap-4 lg:gap-[12px] w-full">
            {visionSteps.map((step, index) => (
              <div
                key={index}
                className="w-full bg-[rgba(75,140,187,0.1)] backdrop-blur-sm rounded-[8px] md:rounded-[10px] p-4 md:p-5 lg:p-[16px_20px] flex flex-col gap-2 border border-[rgba(75,140,187,0.3)]"
              >
                {/* Step Title */}
                <h3 className="w-full font-['Poppins',Helvetica] font-semibold text-white text-base md:text-lg lg:text-xl leading-tight md:leading-[27px]">
                  {step.title}
                </h3>

                {/* Step Description - Better line height for readability */}
                <p className="w-full font-['Poppins',Helvetica] font-normal text-white/90 text-sm md:text-base lg:text-base leading-relaxed md:leading-6 lg:leading-[28px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
