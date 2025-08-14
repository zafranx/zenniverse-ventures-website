// InitiativeDetailPage.tsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Target, Award, Tag } from "lucide-react";
import { HeaderSection } from "../LandingPage/sections/HeaderSection";
import { FooterSection } from "../LandingPage/sections/FooterSection";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  getInitiativeById,
  getRelatedInitiatives,
//   Initiative,
} from "../../data/initiativesData";
import { Initiative } from "../../types/initiativeTypes";

export const InitiativeDetailPage = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const initiativeId = id ? parseInt(id) : 1;

  const initiative: Initiative | undefined = getInitiativeById(initiativeId);
  const relatedInitiatives: Initiative[] = getRelatedInitiatives(
    initiativeId,
    3
  );

  if (!initiative) {
    return (
      <div className="min-h-screen bg-white">
        <HeaderSection />
        <div className="flex items-center justify-center min-h-[60vh] pt-20">
          <div className="text-center">
            <h1 className="mb-4 text-2xl font-bold text-gray-800">
              Initiative Not Found
            </h1>
            <Link
              to="/"
              className="text-[#4b8cbb] hover:text-[#225f8c] font-medium"
            >
              Return to Home
            </Link>
          </div>
        </div>
        <FooterSection />
      </div>
    );
  }

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700 border-green-200";
      case "In Progress":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Completed":
        return "bg-gray-100 text-gray-700 border-gray-200";
      case "Planned":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <HeaderSection />

      {/* Hero Section */}
      <section
        className="relative w-full h-[250px] sm:h-[280px] md:h-[320px] lg:h-[332px] mt-16 md:mt-20 lg:mt-[100px] overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.51) 100%), url('${initiative.heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 flex items-center justify-start h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px]">
          <div className="max-w-[728px] space-y-3 md:space-y-4">
            <h1 className="font-['Poppins',Helvetica] font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight md:leading-normal lg:leading-[60px]">
              Pathbreaking Initiatives
            </h1>
            <p className="font-['Poppins',Helvetica] font-normal text-white text-sm sm:text-base md:text-lg lg:text-[18px] leading-relaxed md:leading-7 lg:leading-[30px] opacity-95">
              {initiative.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          {/* Back Navigation */}
          <div className="mb-6 md:mb-8">
            <Link
              to="/initiatives"
              className="inline-flex items-center gap-2 text-[#4b8cbb] hover:text-[#225f8c] font-medium transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Initiatives
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 md:gap-12 lg:gap-16">
            {/* Main Content */}
            <article className="lg:col-span-8">
              {/* Initiative Header */}
              <div className="mb-6 md:mb-8">
                <div className="flex flex-wrap gap-2 items-center mb-4 text-sm text-gray-600 md:gap-4">
                  <div className="flex gap-1 items-center">
                    <Calendar className="w-4 h-4" />
                    <span>{initiative.date}</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <User className="w-4 h-4" />
                    <span>{initiative.author}</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <Target className="w-4 h-4" />
                    <span>{initiative.category}</span>
                  </div>
                  <span className="text-gray-500">•</span>
                  <div className="flex gap-1 items-center">
                    <Award className="w-4 h-4" />
                    <span>{initiative.impact}</span>
                  </div>
                </div>

                <h1 className="font-['Poppins',Helvetica] font-semibold text-black text-xl md:text-2xl lg:text-3xl xl:text-[32px] leading-tight md:leading-normal lg:leading-[48px] mb-4">
                  {initiative.title}
                </h1>

                {/* Status and Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  <span
                    className={`px-3 py-1 text-sm font-medium rounded-full border ${getStatusBadgeColor(
                      initiative.status
                    )}`}
                  >
                    {initiative.status}
                  </span>
                  {initiative.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-[#4b8cbb]/10 text-[#4b8cbb] text-xs rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Featured Image */}
              <div className="mb-6 md:mb-8">
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:w-[793px] lg:h-[303px] object-cover rounded-[20px] shadow-sm"
                />
              </div>

              {/* Initiative Sections */}
              <div className="space-y-6 md:space-y-8 lg:space-y-[28px]">
                {initiative.detailedSections.map((section, index) => (
                  <div key={index} className="space-y-3 md:space-y-4">
                    <h2 className="font-['Poppins',Helvetica] font-semibold text-black text-lg md:text-xl lg:text-2xl leading-tight">
                      {section.title}
                    </h2>
                    <div className="space-y-3 md:space-y-4">
                      {section.content.map((paragraph, pIndex) => (
                        <p
                          key={pIndex}
                          className="font-['Poppins',Helvetica] font-normal text-black/80 text-sm md:text-base lg:text-[16px] leading-6 md:leading-7 lg:leading-[24px]"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>

            {/* Sidebar with Related Initiatives */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24">
                <br />

                <h3 className="font-['Poppins',Helvetica] font-semibold text-black text-lg md:text-xl lg:text-[28px] leading-tight mb-6">
                  Related Initiatives
                </h3>

                <div className="space-y-4 md:space-y-5 lg:space-y-[20px]">
                  {relatedInitiatives?.map((relatedInitiative) => (
                    <Card
                      key={relatedInitiative.id}
                      className="transition-all duration-300 group hover:shadow-lg"
                    >
                      <CardContent className="p-4">
                        <Link
                          to={`/initiatives/${relatedInitiative.id}`}
                          className="block space-y-3"
                        >
                          <img
                            src={relatedInitiative.image}
                            alt={relatedInitiative.title}
                            className="w-full h-[180px] object-cover rounded-[5px] group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="space-y-2">
                            <div
                              className={`inline-block px-2 py-1 text-xs font-medium rounded-md border ${getStatusBadgeColor(
                                relatedInitiative.status
                              )}`}
                            >
                              {relatedInitiative.status}
                            </div>
                            <h4 className="font-['Poppins',Helvetica] font-semibold text-black text-base group-hover:text-[#4b8cbb] transition-colors">
                              {relatedInitiative.title}
                            </h4>
                            <p className="text-sm text-gray-600 line-clamp-2">
                              {relatedInitiative.excerpt}
                            </p>
                            <div className="flex gap-2 items-center text-xs text-gray-500">
                              <Award className="w-3 h-3" />
                              {relatedInitiative.impact}
                            </div>
                          </div>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                  {relatedInitiatives.length === 0 ? (
                    <>
                      <h3 className="font-['Poppins',Helvetica] font-semibold text-gray-500 text-sm md:text-xl lg:text-[20px] leading-tight mb-6  mt-[30px]">
                        No Related Initiatives
                      </h3>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};
