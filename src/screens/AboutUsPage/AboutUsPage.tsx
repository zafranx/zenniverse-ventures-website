// /AboutUsPage.tsx
import React from "react";
import { HeaderSection } from "../LandingPage/sections/HeaderSection";
import { FooterSection } from "../LandingPage/sections/FooterSection";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { ArrowRight, Users, Target, Award, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export const AboutUsPage = (): JSX.Element => {
  const stats = [
    { icon: Users, label: "Team Members", value: "150+" },
    { icon: Globe, label: "Countries Served", value: "25+" },
    { icon: Target, label: "Projects Completed", value: "500+" },
    { icon: Award, label: "Awards Won", value: "15+" },
  ];

  const values = [
    {
      title: "Innovation",
      description:
        "We constantly push the boundaries of technology to create groundbreaking solutions.",
      icon: "🚀",
    },
    {
      title: "Excellence",
      description:
        "We deliver the highest quality products and services that exceed expectations.",
      icon: "⭐",
    },
    {
      title: "Integrity",
      description:
        "We conduct business with honesty, transparency, and ethical practices.",
      icon: "🛡️",
    },
    {
      title: "Impact",
      description:
        "We focus on creating positive change that benefits society and the environment.",
      icon: "🌍",
    },
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Executive Officer",
      image: "/team-ceo.jpg",
      bio: "Visionary leader with 20+ years in healthcare technology innovation.",
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: "/team-cto.jpg",
      bio: "Tech expert specializing in AI and digital health solutions.",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Head of Research",
      image: "/team-research.jpg",
      bio: "Leading researcher in medical AI and diagnostic technologies.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeaderSection />

      {/* Hero Section */}
      <section className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] mt-16 md:mt-20 lg:mt-[100px] overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1441&h=450&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 flex items-center justify-start h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px]">
          <div className="max-w-[800px] space-y-4 md:space-y-6">
            <h1 className="font-['Poppins',Helvetica] font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              About Zeniverse Ventures
            </h1>
            <p className="font-['Poppins',Helvetica] font-normal text-white text-lg md:text-xl lg:text-2xl leading-relaxed opacity-95">
              Pioneering the future of healthcare through innovative technology
              solutions and pathbreaking initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px]">
        <div className="max-w-[1200px] mx-auto space-y-16 md:space-y-20">
          {/* Our Story */}
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <h2 className="font-['Poppins',Helvetica] font-semibold text-3xl md:text-4xl lg:text-5xl text-gray-900">
                Our Story
              </h2>
              <div className="space-y-4 leading-relaxed text-gray-700">
                <p className="text-lg">
                  Founded in 2020, Zeniverse Ventures emerged from a vision to
                  revolutionize healthcare through technology. Our journey began
                  with a simple yet powerful belief: that innovation can
                  transform lives and create a healthier world for everyone.
                </p>
                <p className="text-lg">
                  Today, we stand as a leading force in healthcare technology,
                  digital health solutions, and social impact initiatives. Our
                  diverse portfolio spans from AI-powered medical diagnostics to
                  community empowerment programs, all united by our commitment
                  to positive change.
                </p>
                <p className="text-lg">
                  We've grown from a small startup to a global organization, but
                  our core values remain unchanged: innovation, excellence,
                  integrity, and impact.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Our Story"
                className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            <Card className="p-8 border-2 border-[#4b8cbb]/20 hover:border-[#4b8cbb] transition-colors duration-300">
              <CardContent className="p-0 space-y-4">
                <div className="w-16 h-16 bg-[#4b8cbb]/10 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-[#4b8cbb]" />
                </div>
                <h3 className="font-['Poppins',Helvetica] font-semibold text-2xl text-gray-900">
                  Our Mission
                </h3>
                <p className="leading-relaxed text-gray-700">
                  To democratize healthcare through innovative technology
                  solutions, making quality medical care accessible to everyone,
                  everywhere. We strive to bridge the gap between advanced
                  healthcare and underserved communities.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-[#4b8cbb]/20 hover:border-[#4b8cbb] transition-colors duration-300">
              <CardContent className="p-0 space-y-4">
                <div className="w-16 h-16 bg-[#4b8cbb]/10 rounded-full flex items-center justify-center">
                  <Globe className="w-8 h-8 text-[#4b8cbb]" />
                </div>
                <h3 className="font-['Poppins',Helvetica] font-semibold text-2xl text-gray-900">
                  Our Vision
                </h3>
                <p className="leading-relaxed text-gray-700">
                  To create a world where healthcare knows no boundaries, where
                  technology empowers both patients and providers, and where
                  innovation drives positive social impact for generations to
                  come.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Stats Section */}
          <div className="bg-[#4b8cbb]/5 rounded-3xl p-8 md:p-12">
            <div className="mb-12 text-center">
              <h2 className="font-['Poppins',Helvetica] font-semibold text-3xl md:text-4xl text-gray-900 mb-4">
                Our Impact
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-700">
                Numbers that reflect our commitment to making a difference in
                healthcare and technology.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#4b8cbb]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-[#4b8cbb]" />
                  </div>
                  <div className="font-['Poppins',Helvetica] font-bold text-3xl md:text-4xl text-[#4b8cbb] mb-2">
                    {stat.value}
                  </div>
                  <div className="font-medium text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Values */}
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="font-['Poppins',Helvetica] font-semibold text-3xl md:text-4xl text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-700">
                The principles that guide every decision we make and every
                solution we create.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="p-6 text-center transition-shadow duration-300 hover:shadow-lg"
                >
                  <CardContent className="p-0 space-y-4">
                    <div className="mb-4 text-4xl">{value.icon}</div>
                    <h3 className="font-['Poppins',Helvetica] font-semibold text-xl text-gray-900">
                      {value.title}
                    </h3>
                    <p className="leading-relaxed text-gray-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Leadership Team */}
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="font-['Poppins',Helvetica] font-semibold text-3xl md:text-4xl text-gray-900 mb-4">
                Leadership Team
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-700">
                Meet the visionary leaders driving our mission forward.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {team.map((member, index) => (
                <Card
                  key={index}
                  className="overflow-hidden transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="h-64 bg-gradient-to-br from-[#4b8cbb]/20 to-[#4b8cbb]/5 flex items-center justify-center">
                    <div className="w-32 h-32 bg-[#4b8cbb]/20 rounded-full flex items-center justify-center">
                      <Users className="w-16 h-16 text-[#4b8cbb]" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-['Poppins',Helvetica] font-semibold text-xl text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#4b8cbb] font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#4b8cbb] to-[#225f8c] rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="font-['Poppins',Helvetica] font-semibold text-3xl md:text-4xl mb-4">
              Ready to Make an Impact?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-xl opacity-95">
              Join us in our mission to transform healthcare and create positive
              change in the world.
            </p>
            <Link to="/contact">
              <Button className="bg-white text-[#4b8cbb] hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-lg transition-colors duration-300">
                Get In Touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};
