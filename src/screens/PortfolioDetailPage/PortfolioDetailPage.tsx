import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getPortfolioCompanyById } from "../../data/portfolioData";
import { HeaderSection } from "../LandingPage/sections/HeaderSection";
import { FooterSection } from "../LandingPage/sections/FooterSection";

export const PortfolioDetailPage = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const companyId = id ? parseInt(id) : 0;
  const company = getPortfolioCompanyById(companyId);

  if (!company) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-gray-800">
            Company Not Found
          </h1>
          <Link
            to="/"
            className="text-[#4b8cbb] hover:text-[#225f8c] font-medium"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white">
      <HeaderSection />

      {/* Hero */}
      <section className="relative w-full h-[250px] md:h-[300px] lg:h-[332px] mt-16 md:mt-20 lg:mt-[100px] overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-center bg-no-repeat bg-cover -scale-x-100"
            style={{ backgroundImage: `url('${company.heroImage}')` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 flex h-full items-center px-4 md:px-8 lg:px-[120px]">
          <div className="max-w-[728px] space-y-2 md:space-y-3">
            <h1 className="font-['Poppins',Helvetica] font-bold text-white text-2xl md:text-3xl lg:text-[40px] leading-tight md:leading-normal lg:leading-[60px]">
              {company.name}
            </h1>
            <p className="font-['Poppins',Helvetica] text-white text-sm md:text-base lg:text-lg leading-6 md:leading-7 lg:leading-[30px]">
              {company.description}
            </p>
          </div>
        </div>
      </section>

      {/* Back link */}
      <div className="px-4 md:px-8 lg:px-[120px] py-4 md:py-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#4b8cbb] hover:text-[#225f8c] font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
      </div>

      {/* Timeline sections */}
      <main className="px-4 md:px-8 lg:px-[120px] pb-10 md:pb-14 lg:pb-16">
        <div className="relative max-w-[1200px] mx-auto ">
          {/* Timeline container with proper positioning */}
          <div className="relative ">
            {/* Vertical line - positioned to align with dot centers */}
            <div
              className="absolute top-4 bottom-4 left-4 md:left-5 lg:left-5 border-l-2 md:border-l-[2.5px] border-[#4b8cbb]  pointer-events-none"
              aria-hidden="true"
            />

            {/* Timeline items */}
            <div className="space-y-6 md:space-y-8 lg:space-y-10 ">
              {company.detailedSections.map((section, index) => (
                <div
                  key={index}
                  className="relative flex items-start gap-4 md:gap-6 lg:gap-[62px] "
                >
                  {/* Timeline dot - positioned relative to line */}
                  <div className="relative z-10 shrink-0 ">
                    {/* <div className="w-8 h-8 md:w-10 md:h-10 lg:w-[40px] lg:h-[40px] rounded-full bg-[rgba(75,140,187,0.1)]  border-2 border-[#4b8cbb] bg-white shadow-sm" /> */}
                    <div className="w-8 h-8 md:w-10 md:h-10 lg:w-[40px] lg:h-[40px] rounded-full bg-[rgba(75,140,187,0.1)]    bg-[#4b8cbb]  shadow-sm" />
                  </div>

                  {/* Content card */}
                  <article className="flex-1 min-w-0 rounded-[8px] md:rounded-[10px] bg-[rgba(75,140,187,0.1)] p-4 md:p-6 lg:px-9 lg:py-[18px]">
                    <h2 className="font-['Poppins',Helvetica] font-medium text-black text-lg md:text-xl lg:text-[32px] leading-tight md:leading-normal lg:leading-[48px] mb-3 md:mb-4 lg:mb-[18px]">
                      {section.title}
                    </h2>
                    <div className="space-y-2 md:space-y-3 lg:space-y-[12px]">
                      {section.content.map(
                        (paragraph: string, paragraphIndex: number) => (
                          <p
                            key={paragraphIndex}
                            className="font-['Poppins',Helvetica] text-[rgba(0,0,0,0.7)] text-sm md:text-base leading-6 md:leading-7 lg:leading-[30px]"
                          >
                            {paragraph}
                          </p>
                        )
                      )}
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};
