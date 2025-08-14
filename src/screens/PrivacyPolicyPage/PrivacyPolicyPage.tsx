// /PrivacyPolicyPage.tsx
import React from "react";
import { HeaderSection } from "../LandingPage/sections/HeaderSection";
import { FooterSection } from "../LandingPage/sections/FooterSection";
import { Card, CardContent } from "../../components/ui/card";
import {
  Shield,
  Eye,
  Lock,
  Users,
  Bell,
  FileText,
  Phone,
  Mail,
} from "lucide-react";

export const PrivacyPolicyPage = (): JSX.Element => {
  const lastUpdated = "August 15, 2025";

  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: [
        "Personal Information: We collect personal information such as name, email address, phone number, medical information, and payment details when you use our services.",
        "Technical Information: We automatically collect technical information including IP address, browser type, device information, and usage patterns to improve our services.",
        "Health Data: With your explicit consent, we may collect health-related information to provide personalized healthcare services and recommendations.",
        "Communication Data: We collect information from your communications with us, including emails, chat messages, and support tickets.",
      ],
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "Service Provision: We use your information to provide healthcare services, process transactions, and deliver personalized experiences.",
        "Communication: We use your contact information to send service updates, respond to inquiries, and provide customer support.",
        "Improvement: We analyze usage data to improve our services, develop new features, and enhance user experience.",
        "Compliance: We use information to comply with legal obligations, prevent fraud, and ensure platform security.",
        "Marketing: With your consent, we may send promotional materials and updates about our services.",
      ],
    },
    {
      icon: Users,
      title: "Information Sharing and Disclosure",
      content: [
        "Healthcare Providers: We share relevant health information with authorized healthcare providers to facilitate your care.",
        "Service Providers: We share information with trusted third-party service providers who assist in delivering our services.",
        "Legal Requirements: We may disclose information when required by law, court order, or to protect rights and safety.",
        "Business Transfers: Information may be transferred in connection with mergers, acquisitions, or asset sales.",
        "Consent-Based Sharing: We share information with other parties only with your explicit consent.",
      ],
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        "Encryption: We use industry-standard encryption to protect data in transit and at rest.",
        "Access Controls: Strict access controls ensure only authorized personnel can access your information.",
        "Regular Audits: We conduct regular security audits and assessments to identify and address vulnerabilities.",
        "HIPAA Compliance: Our healthcare services comply with HIPAA regulations for protected health information.",
        "Incident Response: We have comprehensive incident response procedures to address any security breaches promptly.",
      ],
    },
    {
      icon: Shield,
      title: "Your Privacy Rights",
      content: [
        "Access: You have the right to access the personal information we hold about you.",
        "Correction: You can request correction of inaccurate or incomplete personal information.",
        "Deletion: You may request deletion of your personal information, subject to legal and operational requirements.",
        "Portability: You have the right to receive your data in a portable format and transfer it to another service.",
        "Objection: You can object to certain processing activities, including marketing communications.",
        "Withdrawal: You may withdraw consent for data processing where consent is the legal basis.",
      ],
    },
    {
      icon: Bell,
      title: "Cookies and Tracking",
      content: [
        "Essential Cookies: We use essential cookies required for basic website functionality and security.",
        "Analytics Cookies: We use analytics cookies to understand how visitors interact with our website.",
        "Marketing Cookies: With your consent, we use marketing cookies for personalized advertising.",
        "Third-Party Cookies: Some third-party services we use may set their own cookies.",
        "Cookie Management: You can manage cookie preferences through your browser settings or our cookie consent tool.",
      ],
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Privacy Officer",
      details: "privacy@zeniverse-ventures.com",
    },
    {
      icon: Phone,
      title: "Privacy Hotline",
      details: "+1 (555) 123-4567",
    },
    {
      icon: FileText,
      title: "Data Protection Officer",
      details: "dpo@zeniverse-ventures.com",
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
              Privacy Policy
            </h1>
            <p className="font-['Poppins',Helvetica] font-normal text-white text-lg md:text-xl leading-relaxed opacity-95">
              Your privacy is important to us. Learn how we collect, use, and
              protect your information.
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
                Introduction
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                Zeniverse Ventures ("we," "our," or "us") is committed to
                protecting your privacy and ensuring the security of your
                personal information. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                use our healthcare technology services, websites, and mobile
                applications.
              </p>
              <p className="leading-relaxed text-gray-700">
                By using our services, you agree to the collection and use of
                information in accordance with this Privacy Policy. This policy
                applies to all users of our services, including patients,
                healthcare providers, and other stakeholders.
              </p>
            </div>
          </div>

          {/* Privacy Sections */}
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

          {/* International Transfers */}
          <Card className="border-2 border-[#4b8cbb]/20">
            <CardContent className="p-8">
              <h3 className="font-['Poppins',Helvetica] font-semibold text-2xl text-gray-900 mb-6">
                International Data Transfers
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Your information may be transferred to and processed in
                  countries other than your country of residence. We ensure
                  appropriate safeguards are in place for international
                  transfers:
                </p>
                <ul className="ml-4 space-y-2 list-disc list-inside">
                  <li>Adequacy decisions by relevant authorities</li>
                  <li>
                    Standard contractual clauses approved by regulatory bodies
                  </li>
                  <li>Binding corporate rules for intra-group transfers</li>
                  <li>Certification schemes and codes of conduct</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Retention */}
          <Card className="border-2 border-[#4b8cbb]/20">
            <CardContent className="p-8">
              <h3 className="font-['Poppins',Helvetica] font-semibold text-2xl text-gray-900 mb-6">
                Data Retention
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  We retain your personal information only for as long as
                  necessary to fulfill the purposes outlined in this Privacy
                  Policy, unless a longer retention period is required or
                  permitted by law:
                </p>
                <ul className="ml-4 space-y-2 list-disc list-inside">
                  <li>
                    Account information: Retained while your account is active
                    and for 7 years after closure
                  </li>
                  <li>
                    Health records: Retained according to applicable healthcare
                    regulations (typically 7-10 years)
                  </li>
                  <li>
                    Communication data: Retained for 3 years for quality
                    assurance purposes
                  </li>
                  <li>
                    Marketing data: Retained until you withdraw consent or
                    object to processing
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Children's Privacy */}
          <Card className="border-2 border-[#4b8cbb]/20">
            <CardContent className="p-8">
              <h3 className="font-['Poppins',Helvetica] font-semibold text-2xl text-gray-900 mb-6">
                Children's Privacy
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our services are not intended for children under 13 years of
                  age. We do not knowingly collect personal information from
                  children under 13. If you are a parent or guardian and believe
                  your child has provided us with personal information, please
                  contact us immediately.
                </p>
                <p>
                  For users between 13 and 18 years of age, we require parental
                  or guardian consent before collecting and processing personal
                  information for healthcare services.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="bg-[#4b8cbb]/5 rounded-2xl p-8">
            <h3 className="font-['Poppins',Helvetica] font-semibold text-2xl text-gray-900 mb-6 text-center">
              Privacy Questions or Concerns?
            </h3>
            <p className="mb-8 text-center text-gray-700">
              If you have any questions about this Privacy Policy or our privacy
              practices, please contact us:
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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

          {/* Policy Updates */}
          <Card className="border-2 border-amber-200 bg-amber-50">
            <CardContent className="p-8">
              <h3 className="font-['Poppins',Helvetica] font-semibold text-2xl text-gray-900 mb-4">
                Changes to This Privacy Policy
              </h3>
              <p className="leading-relaxed text-gray-700">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, technology, legal requirements, or
                other factors. We will notify you of any material changes by
                posting the updated policy on our website and, where
                appropriate, by sending you an email notification. Your
                continued use of our services after the effective date of the
                updated Privacy Policy constitutes your acceptance of the
                changes.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};
