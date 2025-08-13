// AllNewsPage.tsx
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, Calendar, User } from "lucide-react";
import { HeaderSection } from "../LandingPage/sections/HeaderSection";
import { FooterSection } from "../LandingPage/sections/FooterSection";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
// import { Input } from "@/components/ui/input";
import { newsArticles, NewsArticle } from "../../data/newsData";

// Get unique categories for filtering
const categories = Array.from(
  new Set(newsArticles.map((article) => article.category))
);

export const AllNewsPage = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<"date" | "title">("date");
  const articlesPerPage = 6;

  // Filter and search articles
  const filteredArticles = useMemo(() => {
    let filtered = newsArticles;

    // Category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (article) => article.category === selectedCategory
      );
    }

    // Search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(searchLower) ||
          article.excerpt.toLowerCase().includes(searchLower) ||
          article.author.toLowerCase().includes(searchLower) ||
          article.tags.some((tag) => tag.toLowerCase().includes(searchLower))
      );
    }

    // Sort articles
    filtered.sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else {
        return a.title.localeCompare(b.title);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = filteredArticles.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Reset filters
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setCurrentPage(1);
    setSortBy("date");
  };

  return (
    <div className="min-h-screen bg-white">
      <HeaderSection />

      {/* Hero Section */}
      <section className="relative w-full h-[250px] sm:h-[280px] md:h-[320px] lg:h-[332px] mt-16 md:mt-20 lg:mt-[100px] overflow-hidden">
        <div className="absolute inset-0">
          {/* Background Image */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transform -scale-x-100"
            style={{ backgroundImage: "url('/ai-generated-8756077_1920.jpg')" }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/51 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-start h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px]">
          <div className="max-w-[728px] space-y-3 md:space-y-4">
            <h1 className="font-['Poppins',Helvetica] font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight md:leading-normal lg:leading-[60px]">
              News & Insights
            </h1>
            <p className="font-['Poppins',Helvetica] font-normal text-white text-sm sm:text-base md:text-lg lg:text-[18px] leading-relaxed md:leading-7 lg:leading-[30px] opacity-95">
              Stay updated with the latest developments in healthcare technology
              and medical innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px]">
        <div className="max-w-[1201px] mx-auto">
          {/* Filters and Search */}
          <div className="mb-8 md:mb-12">
            <div className="flex flex-col lg:flex-row gap-4 md:gap-6 items-start lg:items-center justify-between">
              {/* Search Bar */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="pl-10 py-2 md:py-3 border-gray-300 focus:border-[#4b8cbb] focus:ring-[#4b8cbb]"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-3 md:gap-4 items-center">
                {/* Category Filter */}
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-gray-600" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => {
                      setSelectedCategory(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4b8cbb] bg-white text-sm"
                  >
                    <option value="All">All Categories</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort Filter */}
                <select
                  value={sortBy}
                  onChange={(e) =>
                    setSortBy(e.target.value as "date" | "title")
                  }
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4b8cbb] bg-white text-sm"
                >
                  <option value="date">Sort by Date</option>
                  <option value="title">Sort by Title</option>
                </select>

                {/* Reset Filters */}
                <Button
                  onClick={resetFilters}
                  variant="outline"
                  className="px-4 py-2 text-sm border-gray-300 hover:border-[#4b8cbb] hover:text-[#4b8cbb]"
                >
                  Reset
                </Button>
              </div>
            </div>

            {/* Results Info */}
            <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
              <span>
                Showing {startIndex + 1}-
                {Math.min(endIndex, filteredArticles.length)} of{" "}
                {filteredArticles.length} articles
              </span>
              {(searchTerm || selectedCategory !== "All") && (
                <span>
                  {searchTerm && `Search: "${searchTerm}"`}
                  {searchTerm && selectedCategory !== "All" && " | "}
                  {selectedCategory !== "All" &&
                    `Category: ${selectedCategory}`}
                </span>
              )}
            </div>
          </div>

          {/* Articles Grid */}
          {currentArticles.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-[20px] mb-8 md:mb-12">
                {currentArticles.map((article) => (
                  <Card
                    key={article.id}
                    className="group bg-white border border-black/50 rounded-[10px] hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden hover:border-[#4b8cbb]"
                  >
                    <CardContent className="p-3 md:p-4 lg:p-[18px]">
                      <Link to={`/news/${article.id}`} className="block">
                        <div className="space-y-3 md:space-y-4 lg:space-y-[16px]">
                          {/* Image */}
                          <div className="relative overflow-hidden rounded-[5px]">
                            <img
                              src={article.image}
                              alt={article.title}
                              className="w-full h-[180px] sm:h-[200px] md:h-[220px] lg:w-[344px] lg:h-[236px] object-cover group-hover:scale-105 transition-transform duration-300"
                            />

                            {/* Category Badge */}
                            <div className="absolute top-3 left-3 px-2 py-1 bg-[#4b8cbb] text-white text-xs font-medium rounded-md opacity-90">
                              {article.category}
                            </div>

                            {/* Featured Badge */}
                            {article.featured && (
                              <div className="absolute top-3 right-3 px-2 py-1 bg-amber-500 text-white text-xs font-medium rounded-md">
                                Featured
                              </div>
                            )}
                          </div>

                          {/* Content */}
                          <div className="space-y-2 md:space-y-3">
                            {/* Article Meta */}
                            <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                <span>{article.date}</span>
                              </div>
                              <span>•</span>
                              <div className="flex items-center gap-1">
                                <User className="w-3 h-3" />
                                <span>{article.author}</span>
                              </div>
                              <span>•</span>
                              <span>{article.readTime}</span>
                            </div>

                            {/* Title */}
                            <h3 className="font-['Poppins',Helvetica] font-semibold text-black text-base md:text-lg lg:text-[24px] leading-tight md:leading-normal lg:leading-[36px] group-hover:text-[#4b8cbb] transition-colors duration-200 line-clamp-2">
                              {article.title}
                            </h3>

                            {/* Excerpt */}
                            <p className="font-['Poppins',Helvetica] font-normal text-black/70 text-sm md:text-base lg:text-[16px] leading-relaxed md:leading-7 lg:leading-[30px] line-clamp-3">
                              {article.excerpt}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1 mt-2">
                              {article.tags.slice(0, 3).map((tag, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                                >
                                  {tag}
                                </span>
                              ))}
                              {article.tags.length > 3 && (
                                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                                  +{article.tags.length - 3}
                                </span>
                              )}
                            </div>

                            {/* Read More Button */}
                            <div className="flex justify-end mt-4">
                              <Button className="px-2 py-1 md:px-[8px] md:py-[4px] lg:px-[8px] lg:py-[4px] bg-[#EEEEEE] hover:bg-[#4b8cbb] rounded-[5px] transition-all duration-300 group-hover:bg-[#4b8cbb] group-hover:text-white transform group-hover:scale-105">
                                <span className="font-['Poppins',Helvetica] font-semibold text-[#255D86] text-xs md:text-sm lg:text-[12px] leading-[18px] group-hover:text-white transition-colors duration-300">
                                  Read More
                                </span>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center space-x-2">
                  {/* Previous Button */}
                  <Button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    variant="outline"
                    className="px-3 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </Button>

                  {/* Page Numbers */}
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNumber;
                      if (totalPages <= 5) {
                        pageNumber = i + 1;
                      } else if (currentPage <= 3) {
                        pageNumber = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNumber = totalPages - 4 + i;
                      } else {
                        pageNumber = currentPage - 2 + i;
                      }

                      return (
                        <Button
                          key={pageNumber}
                          onClick={() => handlePageChange(pageNumber)}
                          variant={
                            currentPage === pageNumber ? "default" : "outline"
                          }
                          className={`px-3 py-2 ${
                            currentPage === pageNumber
                              ? "bg-[#4b8cbb] text-white"
                              : "text-gray-700 hover:text-[#4b8cbb] hover:border-[#4b8cbb]"
                          }`}
                        >
                          {pageNumber}
                        </Button>
                      );
                    })}
                  </div>

                  {/* Next Button */}
                  <Button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    variant="outline"
                    className="px-3 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
          ) : (
            /* No Results */
            <div className="text-center py-12">
              <div className="mb-4">
                <Search className="w-16 h-16 text-gray-300 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No articles found
              </h3>
              <p className="text-gray-500 mb-4">
                Try adjusting your search terms or filters to find what you're
                looking for.
              </p>
              <Button
                onClick={resetFilters}
                className="bg-[#4b8cbb] hover:bg-[#225f8c] text-white"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <FooterSection />
    </div>
  );
};
