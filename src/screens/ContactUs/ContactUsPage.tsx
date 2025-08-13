// ContactUsPage.tsx
import React, { useState } from "react";
import { HeaderSection } from "../LandingPage/sections/HeaderSection";
import { FooterSection } from "../LandingPage/sections/FooterSection";
import { Button } from "../../components/ui/button";

export const ContactUsPage = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Reset form
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
    alert("Thank you for your message! We'll get back to you soon.");
  };

  // Contact information data
  const contactInfo = [
    {
      icon: (
        <svg
          className="w-5 h-5 md:w-6 md:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Phone Number",
      details: "+91 5252525252",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 md:w-6 md:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email ID",
      details: "contact@zeniverse-ventures.com",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 md:w-6 md:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Address",
      details: "H-Block, Sector-63, Noida, Uttar Pradesh, 201301, India",
    },
  ];

  // Social media links
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeaderSection />

      {/* Hero Section */}
      <section className="relative w-full h-[250px] sm:h-[280px] md:h-[320px] lg:h-[332px] mt-16 md:mt-20 lg:mt-[100px] overflow-hidden">
        <div className="absolute inset-0">
          {/* Background Image */}
          <div
            className="absolute inset-0 w-full h-full transform bg-center bg-no-repeat bg-cover -scale-x-100"
            style={{ backgroundImage: "url('/contact3.png')" }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/51 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-start h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px]">
          <div className="max-w-[728px] space-y-3 md:space-y-4">
            <h1 className="font-['Poppins',Helvetica] font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[40px] leading-tight md:leading-normal lg:leading-[60px]">
              Contact Us
            </h1>
            <p className="font-['Poppins',Helvetica] font-normal text-white text-sm sm:text-base md:text-lg lg:text-[18px] leading-relaxed md:leading-7 lg:leading-[30px] opacity-95">
              Empowering a healthier tomorrow with cutting-edge health tech
              solutions. We Digitize the Medical World
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px]">
        {/* Background */}
        <div className="absolute inset-0 bg-[rgba(75,140,187,0.05)]" />

        <div className="relative max-w-[1200px] mx-auto">
          <div className="grid items-start grid-cols-1 gap-8 lg:grid-cols-2 md:gap-12 lg:gap-16">
            {/* Left Side - Contact Image with Information Overlay */}
            <div className="relative order-2 lg:order-1">
              {/* Main container with background image */}
              <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] rounded-[10px] md:rounded-[15px] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src="/contact-1.png"
                    alt="Contact us illustration"
                    className="object-cover w-full h-full"
                  />
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
                </div>

                {/* Contact Information Cards Overlay */}
                <div className="absolute inset-0 p-4 md:p-6 lg:p-8 flex flex-col justify-center">
                  <div className="space-y-3 md:space-y-4 lg:space-y-6">
                    {/* Phone and Email - Side by side on larger screens */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                      {contactInfo.slice(0, 2).map((info, index) => (
                        <div
                          key={index}
                          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-[8px] md:rounded-[10px] p-3 md:p-4 lg:p-5 space-y-2 md:space-y-3"
                        >
                          <div className="flex items-center gap-2 md:gap-3">
                            <div className="flex-shrink-0 text-white">
                              {info.icon}
                            </div>
                            <h3 className="font-['Poppins',Helvetica] font-semibold text-white text-sm md:text-base lg:text-lg leading-tight">
                              {info.title}
                            </h3>
                          </div>
                          <p className="font-['Poppins',Helvetica] font-normal text-white/90 text-xs md:text-sm lg:text-base leading-relaxed">
                            {info.details}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Address - Full Width */}
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-[8px] md:rounded-[10px] p-3 md:p-4 lg:p-5 space-y-2 md:space-y-3">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="flex-shrink-0 text-white">
                          {contactInfo[2].icon}
                        </div>
                        <h3 className="font-['Poppins',Helvetica] font-semibold text-white text-sm md:text-base lg:text-lg leading-tight">
                          {contactInfo[2].title}
                        </h3>
                      </div>
                      <p className="font-['Poppins',Helvetica] font-normal text-white/90 text-xs md:text-sm lg:text-base leading-relaxed">
                        {contactInfo[2].details}
                      </p>
                    </div>

                    {/* Social Media */}
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-[8px] md:rounded-[10px] p-3 md:p-4 lg:p-5 space-y-2 md:space-y-3">
                      <h3 className="font-['Poppins',Helvetica] font-semibold text-white text-sm md:text-base lg:text-lg leading-tight">
                        Follow Us
                      </h3>
                      <div className="flex items-center gap-3 md:gap-4">
                        {socialLinks.map((social, index) => (
                          <a
                            key={index}
                            href={social.href}
                            className="text-white hover:text-[#4B8CBB] transition-colors duration-300 p-2 hover:bg-white/10 rounded-full"
                            aria-label={social.name}
                          >
                            {social.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-[10px] md:rounded-[15px] shadow-xl border border-gray/10 p-6 md:p-8 lg:p-10">
                {/* Form Header */}
                <div className="mb-6 text-center md:mb-8">
                  <h2 className="font-['Poppins',Helvetica] font-semibold text-black text-xl md:text-2xl lg:text-[24px] leading-tight mb-2">
                    Get in touch
                  </h2>
                  <p className="font-['Poppins',Helvetica] font-normal text-black/70 text-sm md:text-base leading-relaxed">
                    We are here for you! How can we help?
                  </p>
                </div>

                {/* Contact Form */}
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 md:space-y-6"
                >
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label className="font-['Poppins',Helvetica] font-semibold text-black text-xs md:text-sm">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-black/50 rounded-[6px] md:rounded-[8px] font-['Poppins',Helvetica] text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#4B8CBB] focus:border-transparent transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="font-['Poppins',Helvetica] font-semibold text-black text-xs md:text-sm">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-black/50 rounded-[6px] md:rounded-[8px] font-['Poppins',Helvetica] text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#4B8CBB] focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label className="font-['Poppins',Helvetica] font-semibold text-black text-xs md:text-sm">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-black/50 rounded-[6px] md:rounded-[8px] font-['Poppins',Helvetica] text-sm md:text-base resize-vertical min-h-[80px] md:min-h-[92px] focus:outline-none focus:ring-2 focus:ring-[#4B8CBB] focus:border-transparent transition-all duration-300"
                      placeholder="Enter your message"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#4B8CBB] hover:bg-[#225F8C] disabled:bg-gray-400 text-white font-['Poppins',Helvetica] font-semibold text-sm md:text-base py-3 md:py-4 rounded-[8px] md:rounded-[10px] transition-all duration-300 hover:shadow-lg disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};
