// AllInitiativesPage.tsx
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, Calendar, User, Award, Target } from "lucide-react";
import { HeaderSection } from "../LandingPage/sections/HeaderSection";
import { FooterSection } from "../LandingPage/sections/FooterSection";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { initiatives } from "../../data/initiativesData";
// import { Initiative } from "../../types/initiativeTypes";

// Get unique categories and statuses for filtering
const categories = Array.from(
  new Set(initiatives.map((initiative) => initiative.category))
);
const statuses = Array.from(
  new Set(initiatives.map((initiative) => initiative.status))
);

export const AllInitiativesPage = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<"date" | "title" | "impact">("date");
  const articlesPerPage = 6;

  // Filter and search initiatives
  const filteredInitiatives = useMemo(() => {
    let filtered = initiatives;

    // Category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (initiative) => initiative.category === selectedCategory
      );
    }

    // Status filter
    if (selectedStatus !== "All") {
      filtered = filtered.filter(
        (initiative) => initiative.status === selectedStatus
      );
    }

    // Search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (initiative) =>
          initiative.title.toLowerCase().includes(searchLower) ||
          initiative.excerpt.toLowerCase().includes(searchLower) ||
          initiative.author.toLowerCase().includes(searchLower) ||
          initiative.tags.some((tag) => tag.toLowerCase().includes(searchLower))
      );
    }

    // Sort initiatives
    filtered.sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      } else {
        return b.impact.localeCompare(a.impact);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedStatus, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredInitiatives.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentInitiatives = filteredInitiatives.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Reset filters
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSelectedStatus("All");
    setCurrentPage(1);
    setSortBy("date");
  };

  // Get status badge color
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
      <section className="relative w-full h-[250px] sm:h-[280px] md:h-[320px] lg:h-[332px] mt-16 md:mt-20 lg:mt-[100px] overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover transform -scale-x-100"
            style={{ backgroundImage: "url('/ai-generated-8756077_1920.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent via-black/51" />
        </div>

        <div className="relative z-10 flex items-center justify-start h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px]">
          <div className="max-w-[728px] space-y-3 md:space-y-4">
            <h1 className="font-['Poppins',Helvetica] font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight md:leading-normal lg:leading-[60px]">
              Pathbreaking Initiatives
            </h1>
            <p className="font-['Poppins',Helvetica] font-normal text-white text-sm sm:text-base md:text-lg lg:text-[18px] leading-relaxed md:leading-7 lg:leading-[30px] opacity-95">
              Discover our groundbreaking initiatives that are shaping the
              future and creating positive impact across communities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px]">
        <div className="max-w-[1201px] mx-auto">
          {/* Filters and Search */}
          <div className="mb-8 md:mb-12">
            <div className="flex flex-col gap-4 justify-between items-start lg:flex-row md:gap-6 lg:items-center">
              {/* Search Bar */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-4 top-1/2 w-4 h-4 text-gray-400 transform -translate-y-1/2" />
                <Input
                  type="text"
                  placeholder="Search initiatives..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-12 pr-4 py-3 md:py-4 text-sm md:text-base bg-white border-2 border-gray-200 rounded-xl focus:border-[#4b8cbb] focus:ring-4 focus:ring-[#4b8cbb]/10 transition-all duration-300 placeholder:text-gray-400 hover:border-gray-300"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-col flex-wrap gap-3 items-start w-full sm:flex-row md:gap-4 sm:items-center lg:w-auto">
                {/* Category Filter */}
                <div className="flex gap-2 items-center px-3 py-2 rounded-lg border border-gray-200 transition-all duration-200 bg-gray-50/80 hover:bg-white hover:border-gray-300">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => {
                      setSelectedCategory(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="bg-transparent border-none focus:outline-none text-sm font-medium text-gray-700 cursor-pointer min-w-[120px]"
                  >
                    <option value="All">All Categories</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Status Filter */}
                <div className="flex gap-2 items-center px-3 py-2 rounded-lg border border-gray-200 transition-all duration-200 bg-gray-50/80 hover:bg-white hover:border-gray-300">
                  <Target className="w-4 h-4 text-gray-500" />
                  <select
                    value={selectedStatus}
                    onChange={(e) => {
                      setSelectedStatus(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="bg-transparent border-none focus:outline-none text-sm font-medium text-gray-700 cursor-pointer min-w-[100px]"
                  >
                    <option value="All">All Status</option>
                    {statuses.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort Filter */}
                <select
                  value={sortBy}
                  onChange={(e) =>
                    setSortBy(e.target.value as "date" | "title" | "impact")
                  }
                  className="px-4 py-2 md:py-3 bg-gray-50/80 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-[#4b8cbb]/10 focus:border-[#4b8cbb] hover:bg-white hover:border-gray-300 text-sm font-medium text-gray-700 transition-all duration-200 cursor-pointer"
                >
                  <option value="date">Sort by Date</option>
                  <option value="title">Sort by Title</option>
                  <option value="impact">Sort by Impact</option>
                </select>

                {/* Reset Filters */}
                <Button
                  onClick={resetFilters}
                  variant="outline"
                  className="px-4 py-2 md:py-3 text-sm font-medium border-2 border-gray-200 text-gray-600 hover:border-[#4b8cbb] hover:text-[#4b8cbb] hover:bg-[#4b8cbb]/5 transition-all duration-300 rounded-lg bg-white"
                >
                  Reset
                </Button>
              </div>
            </div>

            {/* Results Info */}
            <div className="flex flex-col gap-3 pt-4 mt-6 border-t border-gray-100 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-sm font-medium text-gray-600">
                Showing {startIndex + 1}–
                {Math.min(endIndex, filteredInitiatives.length)} of{" "}
                {filteredInitiatives.length} initiatives
              </span>

              {(searchTerm ||
                selectedCategory !== "All" ||
                selectedStatus !== "All") && (
                <div className="flex flex-wrap gap-2 items-center text-sm">
                  {searchTerm && (
                    <span className="px-3 py-1 bg-[#4b8cbb]/10 text-[#4b8cbb] rounded-full border border-[#4b8cbb]/20 font-medium">
                      Search: "{searchTerm}"
                    </span>
                  )}
                  {selectedCategory !== "All" && (
                    <span className="px-3 py-1 font-medium text-amber-700 bg-amber-50 rounded-full border border-amber-200">
                      Category: {selectedCategory}
                    </span>
                  )}
                  {selectedStatus !== "All" && (
                    <span className="px-3 py-1 font-medium text-green-700 bg-green-50 rounded-full border border-green-200">
                      Status: {selectedStatus}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Initiatives Grid */}
          {currentInitiatives.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-[20px] mb-8 md:mb-12">
                {currentInitiatives.map((initiative) => (
                  <Card
                    key={initiative.id}
                    className="group bg-white border border-black/50 rounded-[10px] hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden hover:border-[#4b8cbb]"
                  >
                    <CardContent className="p-3 md:p-4 lg:p-[18px]">
                      <Link
                        to={`/initiatives/${initiative.id}`}
                        className="block"
                      >
                        <div className="space-y-3 md:space-y-4 lg:space-y-[16px]">
                          {/* Image */}
                          <div className="relative overflow-hidden rounded-[5px]">
                            <img
                              src={initiative.image}
                              alt={initiative.title}
                              className="w-full h-[180px] sm:h-[200px] md:h-[220px] lg:w-[344px] lg:h-[236px] object-cover group-hover:scale-105 transition-transform duration-300"
                            />

                            {/* Status Badge */}
                            <div
                              className={`absolute top-3 left-3 px-2 py-1 text-xs font-medium rounded-md border ${getStatusBadgeColor(
                                initiative.status
                              )}`}
                            >
                              {initiative.status}
                            </div>

                            {/* Featured Badge */}
                            {initiative.featured && (
                              <div className="absolute top-3 right-3 px-2 py-1 text-xs font-medium text-white bg-amber-500 rounded-md">
                                Featured
                              </div>
                            )}
                          </div>

                          {/* Content */}
                          <div className="space-y-2 md:space-y-3">
                            {/* Initiative Meta */}
                            <div className="flex flex-wrap gap-2 items-center text-xs text-gray-500">
                              <div className="flex gap-1 items-center">
                                <Calendar className="w-3 h-3" />
                                <span>{initiative.date}</span>
                              </div>
                              <span>•</span>
                              <div className="flex gap-1 items-center">
                                <Award className="w-3 h-3" />
                                <span>{initiative.impact}</span>
                              </div>
                            </div>

                            {/* Title */}
                            <h3 className="font-['Poppins',Helvetica] font-semibold text-black text-base md:text-lg lg:text-[24px] leading-tight md:leading-normal lg:leading-[36px] group-hover:text-[#4b8cbb] transition-colors duration-200 line-clamp-2">
                              {initiative.title}
                            </h3>

                            {/* Excerpt */}
                            <p className="font-['Poppins',Helvetica] font-normal text-black/70 text-sm md:text-base lg:text-[16px] leading-relaxed md:leading-7 lg:leading-[30px] line-clamp-3">
                              {initiative.excerpt}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1 mt-2">
                              {initiative.tags.slice(0, 3).map((tag, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded-md"
                                >
                                  {tag}
                                </span>
                              ))}
                              {initiative.tags.length > 3 && (
                                <span className="px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded-md">
                                  +{initiative.tags.length - 3}
                                </span>
                              )}
                            </div>

                            {/* Read More Button */}
                            <div className="flex justify-end mt-4">
                              <Button className="px-2 py-1 md:px-[8px] md:py-[4px] lg:px-[8px] lg:py-[4px] bg-[#EEEEEE] hover:bg-[#4b8cbb] rounded-[5px] transition-all duration-300 group-hover:bg-[#4b8cbb] group-hover:text-white transform group-hover:scale-105">
                                <span className="font-['Poppins',Helvetica] font-semibold text-[#255D86] text-xs md:text-sm lg:text-[12px] leading-[18px] group-hover:text-white transition-colors duration-300">
                                  Learn More
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
                <div className="flex justify-center items-center space-x-2">
                  <Button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    variant="outline"
                    className="px-3 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </Button>

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
            <div className="py-12 text-center">
              <div className="mb-4">
                <Search className="mx-auto w-16 h-16 text-gray-300" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-600">
                No initiatives found
              </h3>
              <p className="mb-4 text-gray-500">
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
