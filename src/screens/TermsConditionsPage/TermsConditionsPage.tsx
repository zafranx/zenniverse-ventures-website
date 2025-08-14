// pages/TermsConditionsPage.tsx
import React from "react";
import { HeaderSection } from "../LandingPage/sections/HeaderSection";
import { FooterSection } from "../LandingPage/sections/FooterSection";
import { Card, CardContent } from "../../components/ui/card";
import {
  FileText,
  Users,
  Shield,
  AlertTriangle,
  Scale,
  Globe,
  Phone,
  Mail,
} from "lucide-react";

export const TermsConditionsPage = (): JSX.Element => {
  const lastUpdated = "August 15, 2025";

  const sections = [
    {
      icon: FileText,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using Zeniverse Ventures' services, websites, and mobile applications, you agree to be bound by these Terms and Conditions and all applicable laws and regulations.",
        "If you do not agree with any part of these terms, you must not use our services.",
        "These terms constitute a legally binding agreement between you and Zeniverse Ventures.",
        "Your use of our services is also governed by our Privacy Policy, which is incorporated by reference into these terms.",
      ],
    },
    {
      icon: Users,
      title: "User Accounts and Responsibilities",
      content: [
        "You must provide accurate, current, and complete information when creating an account.",
        "You are responsible for maintaining the confidentiality of your account credentials.",
        "You agree to notify us immediately of any unauthorized use of your account.",
        "You must be at least 18 years old to create an account, or have parental/guardian consent if between 13-18 years old.",
        "You are solely responsible for all activities that occur under your account.",
      ],
    },
    {
      icon: Shield,
      title: "Healthcare Services and Medical Disclaimer",
      content: [
        "Our services are designed to support and supplement, not replace, the relationship between patients and healthcare providers.",
        "Information provided through our services is for educational and informational purposes only and should not be considered medical advice.",
        "Always consult with qualified healthcare professionals before making medical decisions.",
        "We do not provide medical diagnoses, treatments, or medical advice directly.",
        "Emergency medical situations require immediate contact with emergency services, not our platform.",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Prohibited Uses",
      content: [
        "You may not use our services for any illegal, harmful, or unauthorized purposes.",
        "Prohibited activities include but are not limited to: sharing false medical information, attempting to hack or compromise our systems, violating other users' privacy, engaging in harassment or abuse.",
        "You may not impersonate others or provide false identity information.",
        "Commercial use of our services without explicit permission is prohibited.",
        "You may not interfere with or disrupt the integrity or performance of our services.",
      ],
    },
    {
      icon: Scale,
      title: "Intellectual Property Rights",
      content: [
        "All content, features, and functionality of our services are owned by Zeniverse Ventures and are protected by copyright, trademark, and other intellectual property laws.",
        "You are granted a limited, non-exclusive, non-transferable license to use our services for personal, non-commercial purposes.",
        "You may not reproduce, distribute, modify, or create derivative works from our content without explicit written permission.",
        "User-generated content remains your property, but you grant us a license to use it in connection with our services.",
        "We respect intellectual property rights and expect users to do the same.",
      ],
    },
    {
      icon: Globe,
      title: "Service Availability and Modifications",
      content: [
        "We strive to maintain continuous service availability but cannot guarantee uninterrupted access.",
        "We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.",
        "We may perform maintenance, updates, or improvements that temporarily affect service availability.",
        "Geographic restrictions may apply to certain services based on local laws and regulations.",
        "We will provide reasonable notice of significant changes to our services when possible.",
      ],
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Legal Department",
      details: "legal@zeniverse-ventures.com",
    },
    {
      icon: Phone,
      title: "Legal Hotline",
      details: "+1 (555) 123-4567",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeaderSection />

      {/* Hero Section */}
      <section className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] mt-16 md:mt-20 lg:mt-[100px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4b8cbb] to-[#225f8c]" />
        <div className="relative z-10 flex items-center justify-start h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px]">
          <div className="max-w-[800px] space-y-4">
            <h1 className="font-['Poppins',Helvetica] font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
              Terms & Conditions
            </h1>
            <p className="font-['Poppins',Helvetica] font-normal text-white text-lg md:text-xl leading-relaxed opacity-95">
              Please read these terms carefully before using our healthcare
              technology services.
            </p>
            <p className="text-sm text-white/80">Last updated: {lastUpdated}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px]">
        <div className="max-w-[1000px] mx-auto space-y-12">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <div className="p-8 mb-12 bg-gray-50 rounded-2xl">
              <h2 className="font-['Poppins',Helvetica] font-semibold text-2xl text-gray-900 mb-4">
                Agreement Overview
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                These Terms and Conditions ("Terms") govern your use of
                Zeniverse Ventures' healthcare technology platform, including
                our websites, mobile applications, and related services
                (collectively, the "Services"). These Terms form a binding legal
                agreement between you and Zeniverse Ventures.
              </p>
              <p className="leading-relaxed text-gray-700">
                Our Services are designed to improve healthcare access and
                outcomes through innovative technology solutions. By using our
                Services, you acknowledge that you have read, understood, and
                agree to be bound by these Terms.
              </p>
            </div>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 hover:border-[#4b8cbb]/20 transition-colors duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6 space-x-4">
                    <div className="w-12 h-12 bg-[#4b8cbb]/10 rounded-lg flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-[#4b8cbb]" />
                    </div>
                    <h3 className="font-['Poppins',Helvetica] font-semibold text-2xl text-gray-900">
                      {section.title}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {section.content.map((item, idx) => (
                      <p key={idx} className="leading-relaxed text-gray-700">
                        {item}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Limitation of Liability */}
          <Card className="border-2 border-red-200 bg-red-50">
            <CardContent className="p-8">
              <h3 className="font-['Poppins',Helvetica] font-semibold text-2xl text-gray-900 mb-6">
                Limitation of Liability
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, ZENIVERSE VENTURES
                  SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                  CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED
                  TO:
                </p>
                <ul className="ml-4 space-y-2 list-disc list-inside">
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Personal injury or property damage</li>
                  <li>Service interruptions or security breaches</li>
                  <li>Third-party actions or content</li>
                </ul>
                <p>
                  Our total liability for any claims arising from or related to
                  these Terms or our Services shall not exceed the amount you
                  have paid us in the 12 months preceding the claim.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Indemnification */}
          <Card className="border-2 border-[#4b8cbb]/20">
            <CardContent className="p-8">
              <h3 className="font-['Poppins',Helvetica] font-semibold text-2xl text-gray-900 mb-6">
                Indemnification
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  You agree to indemnify, defend, and hold harmless Zeniverse
                  Ventures, its officers, directors, employees, and agents from
                  and against any claims, damages, losses, costs, and expenses
                  arising from:
                </p>
                <ul className="ml-4 space-y-2 list-disc list-inside">
                  <li>Your use or misuse of our Services</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any third-party rights</li>
                  <li>Any content you submit or share through our Services</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card className="border-2 border-[#4b8cbb]/20">
            <CardContent className="p-8">
              <h3 className="font-['Poppins',Helvetica] font-semibold text-2xl text-gray-900 mb-6">
                Governing Law and Dispute Resolution
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  These Terms are governed by and construed in accordance with
                  the laws of [Your Jurisdiction], without regard to conflict of
                  law principles.
                </p>
                <p>
                  Any disputes arising from these Terms or our Services will be
                  resolved through binding arbitration in accordance with the
                  rules of [Arbitration Organization]. The arbitration will be
                  conducted in [Location], and the decision will be final and
                  binding.
                </p>
                <p>
                  Notwithstanding the above, either party may seek injunctive
                  relief in court to prevent irreparable harm.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="border-2 border-[#4b8cbb]/20">
            <CardContent className="p-8">
              <h3 className="font-['Poppins',Helvetica] font-semibold text-2xl text-gray-900 mb-6">
                Termination
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  You may terminate your account at any time by contacting us or
                  using the account deletion feature in our Services.
                </p>
                <p>
                  We may suspend or terminate your access to our Services
                  immediately, without prior notice, if you violate these Terms
                  or engage in prohibited activities.
                </p>
                <p>
                  Upon termination, your right to use our Services will cease
                  immediately, but provisions regarding liability,
                  indemnification, and dispute resolution will survive
                  termination.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="bg-[#4b8cbb]/5 rounded-2xl p-8">
            <h3 className="font-['Poppins',Helvetica] font-semibold text-2xl text-gray-900 mb-6 text-center">
              Legal Questions or Concerns?
            </h3>
            <p className="mb-8 text-center text-gray-700">
              If you have any questions about these Terms and Conditions, please
              contact our legal team:
            </p>
            <div className="grid max-w-md grid-cols-1 gap-6 mx-auto md:grid-cols-2">
              {contactInfo.map((contact, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-[#4b8cbb]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <contact.icon className="w-6 h-6 text-[#4b8cbb]" />
                  </div>
                  <h4 className="font-['Poppins',Helvetica] font-semibold text-lg text-gray-900 mb-2">
                    {contact.title}
                  </h4>
                  <p className="text-[#4b8cbb] font-medium">
                    {contact.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Severability and Entire Agreement */}
          <Card className="border-2 border-gray-200">
            <CardContent className="p-8">
              <h3 className="font-['Poppins',Helvetica] font-semibold text-2xl text-gray-900 mb-6">
                Additional Provisions
              </h3>
              <div className="space-y-6 text-gray-700">
                <div>
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                    Severability
                  </h4>
                  <p>
                    If any provision of these Terms is found to be
                    unenforceable, the remaining provisions will remain in full
                    force and effect.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                    Entire Agreement
                  </h4>
                  <p>
                    These Terms, together with our Privacy Policy, constitute
                    the entire agreement between you and Zeniverse Ventures
                    regarding our Services.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                    Updates to Terms
                  </h4>
                  <p>
                    We may update these Terms from time to time. We will notify
                    you of material changes by posting the updated Terms on our
                    website and, where appropriate, by sending you a
                    notification.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};
