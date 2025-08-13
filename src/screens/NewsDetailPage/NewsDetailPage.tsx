// NewsDetailPage.tsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { HeaderSection } from "../LandingPage/sections/HeaderSection";
import { FooterSection } from "../LandingPage/sections/FooterSection";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  getNewsArticleById,
  getRelatedNews,
//   NewsArticle,
//   newsArticles,

} from "../../data/newsData";
import { NewsSection ,NewsArticle} from "../../types/newsTypes";


export const NewsDetailPage = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const articleId = id ? parseInt(id) : 1;

  // Get article from data
  const article: NewsArticle | undefined = getNewsArticleById(articleId);

  // Get related articles
  const relatedArticles: NewsArticle[] = getRelatedNews(articleId, 3);

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <HeaderSection />
        <div className="flex items-center justify-center min-h-[60vh] pt-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Article Not Found
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

  return (
    <div className="min-h-screen bg-white">
      <HeaderSection />

      {/* Hero Section */}
      <section
        className="relative w-full h-[250px] sm:h-[280px] md:h-[320px] lg:h-[332px] mt-16 md:mt-20 lg:mt-[100px] overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.51) 100%), url('${article.heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 flex items-center justify-start h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px]">
          <div className="max-w-[728px] space-y-3 md:space-y-4">
            <h1 className="font-['Poppins',Helvetica] font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight md:leading-normal lg:leading-[60px]">
              News & Insights
            </h1>
            <p className="font-['Poppins',Helvetica] font-normal text-white text-sm sm:text-base md:text-lg lg:text-[18px] leading-relaxed md:leading-7 lg:leading-[30px] opacity-95">
              {article.excerpt}
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
              to="/"
              className="inline-flex items-center gap-2 text-[#4b8cbb] hover:text-[#225f8c] font-medium transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to News & Insights
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
            {/* Main Article Content */}
            <article className="lg:col-span-8">
              {/* Article Header */}
              <div className="mb-6 md:mb-8">
                <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    <span>{article.category}</span>
                  </div>
                  <span className="text-gray-500">•</span>
                  <span>{article.readTime}</span>
                </div>

                <h1 className="font-['Poppins',Helvetica] font-semibold text-black text-xl md:text-2xl lg:text-3xl xl:text-[32px] leading-tight md:leading-normal lg:leading-[48px] mb-4">
                  {article.title}
                </h1>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {article.tags.map((tag: string, index: number) => (
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
                  src={article.image}
                  alt={article.title}
                  className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:w-[793px] lg:h-[303px] object-cover rounded-[5px] shadow-sm"
                />
              </div>

              {/* Article Sections */}
              <div className="space-y-6 md:space-y-8 lg:space-y-[28px]">
                {article.detailedSections.map((section: NewsSection, index: number) => (
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

            {/* Sidebar with Related Articles */}
            <aside className="lg:col-span-4 ">
              <div className="sticky top-24 ">
                <br />
                <h3 className="font-['Poppins',Helvetica] font-semibold text-black text-lg md:text-xl lg:text-[28px] leading-tight mb-4">

                  Related Articles
                </h3>

                <div className="space-y-4 md:space-y-5 lg:space-y-[20px]">
                  {relatedArticles.map((relatedArticle) => (
                    <Card
                      key={relatedArticle.id}
                      className="group hover:shadow-lg transition-all duration-300"
                    >
                      <CardContent className="p-4">
                        <Link
                          to={`/news/${relatedArticle.id}`}
                          className="block space-y-3"
                        >
                          <img
                            src={relatedArticle.image}
                            alt={relatedArticle.title}
                            className="w-full h-[180px] object-cover rounded-[5px] group-hover:scale-105 transition-transform duration-300"
                          />
                          <h4 className="font-['Poppins',Helvetica] font-semibold text-black text-base group-hover:text-[#4b8cbb] transition-colors">
                            {relatedArticle.title}
                          </h4>
                          <p className="text-sm text-gray-600 line-clamp-2">
                            {relatedArticle.excerpt}
                          </p>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
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
