// pages/ServicesPage.tsx
import React from "react";
import { HeaderSection } from "../LandingPage/sections/HeaderSection";
import { FooterSection } from "../LandingPage/sections/FooterSection";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  ArrowRight,
  Brain,
  Heart,
  Globe,
  Smartphone,
  Shield,
  Users,
  Zap,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

export const ServicesPage = (): JSX.Element => {
  const services = [
    {
      icon: Brain,
      title: "AI-Powered Healthcare Solutions",
      description:
        "Advanced artificial intelligence systems for medical diagnostics, treatment planning, and patient care optimization.",
      features: [
        "Medical image analysis and diagnosis",
        "Predictive health analytics",
        "AI-powered treatment recommendations",
        "Clinical decision support systems",
      ],
      category: "Healthcare AI",
    },
    {
      icon: Heart,
      title: "Telemedicine Platforms",
      description:
        "Comprehensive telemedicine solutions connecting patients with healthcare providers globally.",
      features: [
        "Virtual consultation platforms",
        "Remote patient monitoring",
        "Digital health records",
        "Prescription management systems",
      ],
      category: "Digital Health",
    },
    {
      icon: Globe,
      title: "Medical Tourism Services",
      description:
        "End-to-end medical tourism platform connecting patients with world-class healthcare facilities.",
      features: [
        "Treatment destination matching",
        "Travel and accommodation coordination",
        "Medical record management",
        "24/7 patient support services",
      ],
      category: "Medical Tourism",
    },
    {
      icon: Smartphone,
      title: "Mobile Health Applications",
      description:
        "User-friendly mobile apps for health monitoring, medication management, and wellness tracking.",
      features: [
        "Personal health tracking",
        "Medication reminders",
        "Wellness programs",
        "Emergency alert systems",
      ],
      category: "Mobile Health",
    },
    {
      icon: Shield,
      title: "Healthcare Data Security",
      description:
        "Robust cybersecurity solutions protecting sensitive healthcare data and ensuring compliance.",
      features: [
        "HIPAA compliance solutions",
        "Data encryption and protection",
        "Access control systems",
        "Security auditing and monitoring",
      ],
      category: "Security",
    },
    {
      icon: Users,
      title: "Community Health Programs",
      description:
        "Social impact initiatives improving healthcare access and education in underserved communities.",
      features: [
        "Rural healthcare initiatives",
        "Health education programs",
        "Community wellness campaigns",
        "Healthcare workforce training",
      ],
      category: "Social Impact",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description:
        "We analyze your healthcare challenges and identify opportunities for technological solutions.",
    },
    {
      step: "02",
      title: "Solution Design",
      description:
        "Our experts design customized solutions tailored to your specific needs and requirements.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "We develop and rigorously test solutions to ensure quality, security, and compliance.",
    },
    {
      step: "04",
      title: "Implementation & Support",
      description:
        "We deploy solutions and provide ongoing support to ensure optimal performance and success.",
    },
  ];

  const industries = [
    { name: "Hospitals & Health Systems", icon: "🏥" },
    { name: "Pharmaceutical Companies", icon: "💊" },
    { name: "Medical Device Manufacturers", icon: "🔬" },
    { name: "Insurance Companies", icon: "🛡️" },
    { name: "Government Health Agencies", icon: "🏛️" },
    { name: "Research Institutions", icon: "📊" },
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
                "url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1441&h=450&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 flex items-center justify-start h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px]">
          <div className="max-w-[800px] space-y-4 md:space-y-6">
            <h1 className="font-['Poppins',Helvetica] font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              Our Services
            </h1>
            <p className="font-['Poppins',Helvetica] font-normal text-white text-lg md:text-xl lg:text-2xl leading-relaxed opacity-95">
              Comprehensive healthcare technology solutions designed to
              transform patient care and improve health outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px]">
        <div className="max-w-[1200px] mx-auto space-y-16 md:space-y-20">
          {/* Services Overview */}
          <div className="space-y-6 text-center">
            <h2 className="font-['Poppins',Helvetica] font-semibold text-3xl md:text-4xl lg:text-5xl text-gray-900">
              Healthcare Technology Solutions
            </h2>
            <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700 md:text-xl">
              We provide cutting-edge technology solutions that empower
              healthcare providers, improve patient outcomes, and drive
              innovation across the healthcare ecosystem.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group p-6 hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#4b8cbb]/20"
              >
                <CardContent className="p-0 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#4b8cbb]/10 rounded-lg flex items-center justify-center group-hover:bg-[#4b8cbb] group-hover:text-white transition-colors duration-300">
                      <service.icon className="w-6 h-6 text-[#4b8cbb] group-hover:text-white" />
                    </div>
                    <span className="text-sm font-medium text-[#4b8cbb] uppercase tracking-wide">
                      {service.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-['Poppins',Helvetica] font-semibold text-xl text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="mb-4 leading-relaxed text-gray-700">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start space-x-2 text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-[#4b8cbb] rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="ghost"
                    className="group-hover:bg-[#4b8cbb] group-hover:text-white p-3 h-auto font-semibold text-[#4b8cbb] hover:text-white transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process Section */}
          <div className="p-8 bg-gray-50 rounded-3xl md:p-12">
            <div className="mb-12 text-center">
              <h2 className="font-['Poppins',Helvetica] font-semibold text-3xl md:text-4xl text-gray-900 mb-4">
                Our Process
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-700">
                A proven methodology for delivering successful healthcare
                technology solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#4b8cbb] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                      {step.step}
                    </div>
                    <h3 className="font-['Poppins',Helvetica] font-semibold text-lg text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {step.description}
                    </p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-[#4b8cbb]/20 transform -translate-x-8"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Industries Served */}
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="font-['Poppins',Helvetica] font-semibold text-3xl md:text-4xl text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-700">
                Our solutions serve diverse healthcare stakeholders across
                multiple industries.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
              {industries.map((industry, index) => (
                <Card
                  key={index}
                  className="p-6 text-center transition-shadow duration-300 hover:shadow-lg"
                >
                  <CardContent className="p-0 space-y-3">
                    <div className="text-3xl">{industry.icon}</div>
                    <h3 className="font-['Poppins',Helvetica] font-medium text-sm text-gray-900 leading-tight">
                      {industry.name}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#4b8cbb] to-[#225f8c] rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="font-['Poppins',Helvetica] font-semibold text-3xl md:text-4xl mb-4">
              Ready to Transform Your Healthcare Operations?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-xl opacity-95">
              Let's discuss how our innovative solutions can address your
              specific healthcare technology needs.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/contact">
              <Button className="bg-white text-[#4b8cbb] hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-lg transition-colors duration-300">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              </Link>
              <Button
                variant="outline"
                className="border-white text-[#4b8cbb]  hover:bg-white hover:text-[#4b8cbb] px-8 py-3 text-lg font-semibold rounded-lg transition-colors duration-300"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};
