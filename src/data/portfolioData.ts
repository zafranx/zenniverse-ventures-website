export interface PortfolioCompany {
    id: number;
    name: string;
    description: string;
    image: string;
    heroImage: string;
    detailedSections: {
      title: string;
      content: string[];
    }[];
  }
  
  export const portfolioCompanies: PortfolioCompany[] = [
    {
      id: 1,
      name: "Health Tech Venture",
      description: "Empowering a healthier tomorrow with cutting-edge health tech solutions. We Digitize the Medical World",
      image: "/image-6.png",
      heroImage: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1441&h=332&fit=crop",
      detailedSections: [
        {
          title: "About The Project",
          content: [
            "Our Health Tech Venture is revolutionizing healthcare through innovative digital solutions that bridge the gap between traditional medical practices and modern technology.",
            "We focus on developing AI-powered diagnostic tools, telemedicine platforms, and patient management systems that enhance healthcare delivery across all demographics.",
            "Our comprehensive approach includes electronic health records, remote monitoring systems, and predictive analytics to improve patient outcomes and reduce healthcare costs."
          ]
        },
        {
          title: "Key Features",
          content: [
            "AI-powered diagnostic assistance that helps healthcare professionals make more accurate and faster diagnoses using machine learning algorithms.",
            "Comprehensive telemedicine platform enabling remote consultations, prescription management, and follow-up care for patients in remote areas.",
            "Integrated patient management system that streamlines hospital operations, reduces wait times, and improves overall patient experience."
          ]
        },
        {
          title: "Technology Stack",
          content: [
            "Advanced machine learning models trained on vast medical datasets to provide accurate diagnostic suggestions and treatment recommendations.",
            "Cloud-based infrastructure ensuring secure, scalable, and HIPAA-compliant data storage and processing for healthcare institutions.",
            "Mobile-first design approach making healthcare services accessible through smartphones and tablets for both patients and healthcare providers."
          ]
        },
        {
          title: "Impact & Results",
          content: [
            "Successfully deployed in over 50 healthcare facilities, serving more than 100,000 patients and reducing diagnostic errors by 35%.",
            "Improved patient satisfaction scores by 40% through streamlined processes and reduced waiting times in participating hospitals.",
            "Generated cost savings of $2.5 million annually for partner healthcare institutions through optimized resource allocation and reduced administrative overhead."
          ]
        },
        {
          title: "Future Roadmap",
          content: [
            "Expansion to rural healthcare centers with specialized modules for primary care and preventive medicine programs.",
            "Integration with wearable devices and IoT sensors for continuous health monitoring and early disease detection capabilities.",
            "Development of specialized AI modules for mental health support, chronic disease management, and personalized treatment plans."
          ]
        },
        {
          title: "Partnership Opportunities",
          content: [
            "Seeking partnerships with healthcare institutions, medical device manufacturers, and pharmaceutical companies for collaborative innovation.",
            "Open to licensing agreements for our proprietary AI algorithms and telemedicine platform to expand global reach.",
            "Interested in joint ventures with international healthcare organizations to adapt our solutions for different regulatory environments."
          ]
        },
        {
          title: "Regulatory Compliance",
          content: [
            "Full compliance with HIPAA, GDPR, and other international healthcare data protection regulations ensuring patient privacy and security.",
            "FDA approval process initiated for our AI diagnostic tools with clinical trials showing promising results in accuracy and reliability.",
            "Continuous monitoring and updates to maintain compliance with evolving healthcare regulations and industry standards."
          ]
        },
        {
          title: "Team & Expertise",
          content: [
            "Multidisciplinary team of healthcare professionals, AI researchers, software engineers, and regulatory experts with combined experience of over 200 years.",
            "Advisory board includes renowned physicians, healthcare administrators, and technology leaders from top medical institutions worldwide.",
            "Continuous professional development and training programs ensure our team stays current with latest medical and technological advancements."
          ]
        },
        {
          title: "Investment & Growth",
          content: [
            "Successfully raised $15 million in Series A funding from leading healthcare and technology investors to accelerate product development.",
            "Projected revenue growth of 300% over the next three years with expansion into international markets and new product lines.",
            "Strategic partnerships with major healthcare systems and technology companies providing strong foundation for sustainable growth."
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Real AI Solutions",
      description: "Transforming AI into Real, Actionable Intelligence for a Smarter Future. Real Solutions for Healthcare",
      image: "/image-6-1.png",
      heroImage: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1441&h=332&fit=crop",
      detailedSections: [
        {
          title: "About The Project",
          content: [
            "Real AI Solutions focuses on developing practical artificial intelligence applications that solve real-world problems in healthcare, business, and society.",
            "Our mission is to bridge the gap between theoretical AI research and practical implementation, creating solutions that deliver measurable value.",
            "We specialize in custom AI development, machine learning consulting, and intelligent automation systems for various industries."
          ]
        },
        {
          title: "Core Services",
          content: [
            "Custom AI model development tailored to specific business needs, from predictive analytics to natural language processing applications.",
            "Machine learning consulting services helping organizations identify AI opportunities and implement data-driven decision-making processes.",
            "Intelligent automation solutions that streamline operations, reduce costs, and improve efficiency across various business functions."
          ]
        },
        {
          title: "Healthcare AI Solutions",
          content: [
            "Medical image analysis systems for radiology, pathology, and dermatology with accuracy rates exceeding human specialists in many cases.",
            "Drug discovery acceleration platforms using AI to identify potential compounds and predict their effectiveness and safety profiles.",
            "Clinical decision support systems that assist healthcare providers in diagnosis, treatment planning, and patient care optimization."
          ]
        },
        {
          title: "Business Intelligence",
          content: [
            "Advanced analytics platforms that transform raw business data into actionable insights for strategic decision-making and growth planning.",
            "Customer behavior prediction models that help businesses optimize marketing strategies, improve customer retention, and increase revenue.",
            "Supply chain optimization systems using AI to predict demand, optimize inventory, and reduce operational costs."
          ]
        },
        {
          title: "Research & Development",
          content: [
            "Cutting-edge research in explainable AI, ensuring our solutions are transparent, interpretable, and trustworthy for critical applications.",
            "Development of federated learning systems that enable AI training across distributed datasets while maintaining privacy and security.",
            "Innovation in edge AI computing, bringing intelligent processing capabilities to IoT devices and mobile applications."
          ]
        },
        {
          title: "Industry Applications",
          content: [
            "Financial services: Fraud detection, risk assessment, algorithmic trading, and regulatory compliance automation systems.",
            "Manufacturing: Predictive maintenance, quality control, production optimization, and supply chain management solutions.",
            "Retail: Personalized recommendations, inventory management, price optimization, and customer service automation platforms."
          ]
        },
        {
          title: "Technical Excellence",
          content: [
            "State-of-the-art machine learning infrastructure supporting both cloud and on-premises deployments with enterprise-grade security.",
            "Comprehensive model lifecycle management including training, validation, deployment, monitoring, and continuous improvement processes.",
            "Integration capabilities with existing enterprise systems, APIs, and databases ensuring seamless adoption and minimal disruption."
          ]
        },
        {
          title: "Client Success Stories",
          content: [
            "Helped a major hospital system reduce diagnostic errors by 45% through implementation of our AI-powered medical imaging analysis platform.",
            "Enabled a retail chain to increase sales by 25% using our customer behavior prediction and personalized recommendation engine.",
            "Assisted a manufacturing company in reducing equipment downtime by 60% through our predictive maintenance AI solution."
          ]
        },
        {
          title: "Future Vision",
          content: [
            "Expansion into emerging AI technologies including quantum machine learning, neuromorphic computing, and advanced robotics integration.",
            "Development of AI ethics framework and responsible AI practices to ensure our solutions benefit society while minimizing potential risks.",
            "Global expansion with regional offices and partnerships to serve clients worldwide while respecting local regulations and cultural considerations."
          ]
        }
      ]
    },
    {
      id: 3,
      name: "Medical Tourism",
      description: "Connecting the World with Cutting-Edge Medical Tourism Solutions. Uniting the World of Doctors",
      image: "/image-6-2.png",
      heroImage: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1441&h=332&fit=crop",
      detailedSections: [
        {
          title: "About The Project",
          content: [
            "Our Medical Tourism platform revolutionizes healthcare accessibility by connecting patients worldwide with top-tier medical facilities and specialists.",
            "We provide comprehensive end-to-end services including medical consultation, treatment planning, travel arrangements, and post-care support.",
            "Our network spans across 50+ countries with partnerships with over 500 accredited hospitals and 10,000+ certified medical professionals."
          ]
        },
        {
          title: "Platform Features",
          content: [
            "Advanced matching algorithm that connects patients with the most suitable medical facilities based on their specific conditions and preferences.",
            "Comprehensive medical record management system ensuring seamless information transfer between healthcare providers across different countries.",
            "Real-time translation services and cultural liaison support to eliminate language barriers and ensure clear communication throughout the treatment process."
          ]
        },
        {
          title: "Service Portfolio",
          content: [
            "Specialized treatment coordination for complex procedures including cardiac surgery, organ transplants, cancer treatment, and orthopedic surgeries.",
            "Wellness and preventive care programs combining medical check-ups with recovery and rehabilitation in world-class facilities.",
            "Emergency medical evacuation services with 24/7 support and coordination with international insurance providers and medical facilities."
          ]
        },
        {
          title: "Quality Assurance",
          content: [
            "Rigorous vetting process for all partner hospitals ensuring they meet international accreditation standards including JCI, ISO, and local certifications.",
            "Continuous monitoring and evaluation of treatment outcomes, patient satisfaction, and facility performance to maintain highest quality standards.",
            "Comprehensive insurance coverage options and financial protection programs to safeguard patients against unforeseen complications or additional costs."
          ]
        },
        {
          title: "Technology Integration",
          content: [
            "AI-powered treatment recommendation engine that analyzes patient data and suggests optimal treatment options based on success rates and cost-effectiveness.",
            "Blockchain-based medical record system ensuring secure, immutable, and instantly accessible patient information across all partner facilities.",
            "Mobile application providing patients with real-time updates, appointment scheduling, medication reminders, and direct communication with care coordinators."
          ]
        },
        {
          title: "Global Network",
          content: [
            "Strategic partnerships with leading medical institutions in India, Thailand, Singapore, Turkey, Mexico, and other top medical tourism destinations.",
            "Collaboration with international airlines, hotels, and transportation services to provide seamless travel experiences for medical tourists.",
            "Network of local representatives and patient advocates in major cities worldwide to provide on-ground support and assistance."
          ]
        },
        {
          title: "Patient Support Services",
          content: [
            "Pre-treatment consultation and second opinion services with board-certified specialists to ensure patients make informed decisions about their care.",
            "Comprehensive travel and accommodation arrangements including visa assistance, airport transfers, and family accommodation options.",
            "Post-treatment follow-up care coordination with local healthcare providers to ensure continuity of care after returning home."
          ]
        },
        {
          title: "Cost Transparency",
          content: [
            "Upfront pricing with detailed cost breakdowns including medical procedures, hospital stays, medications, and additional services with no hidden fees.",
            "Flexible payment options including medical loans, insurance claim assistance, and installment plans to make quality healthcare accessible.",
            "Cost comparison tools allowing patients to evaluate treatment options across different countries and facilities based on their budget and preferences."
          ]
        },
        {
          title: "Success Metrics",
          content: [
            "Successfully facilitated over 50,000 medical tourism cases with a 98% patient satisfaction rate and 95% successful treatment outcome rate.",
            "Achieved average cost savings of 40-70% compared to treatment costs in patients' home countries while maintaining equivalent or superior quality.",
            "Established partnerships with 200+ insurance companies worldwide to streamline coverage and reimbursement processes for medical tourism patients."
          ]
        }
      ]
    },
    // Add more portfolio companies with similar structure...
    {
      id: 4,
      name: "Skill Development",
      description: "Empowering Healthcare Support Professionals with Skills to Save Lives and Build a Healthier World",
      image: "/image-6-3.png",
      heroImage: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1441&h=332&fit=crop",
      detailedSections: [
        {
          title: "About The Project",
          content: [
            "Our Skill Development initiative focuses on training healthcare support professionals with essential life-saving skills and modern medical knowledge.",
            "We bridge the gap between theoretical medical education and practical healthcare delivery through hands-on training programs.",
            "Our comprehensive curriculum covers emergency response, patient care, medical technology, and healthcare administration."
          ]
        }
      ]
    },
    {
      id: 5,
      name: "Telemedicine@HOME",
      description: "Delivering World-Class Medical Services to Your Doorstep with Telemedicine and Fleet of Riders",
      image: "/image-6-4.png",
      heroImage: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1441&h=332&fit=crop",
      detailedSections: [
        {
          title: "About The Project",
          content: [
            "Telemedicine@HOME revolutionizes healthcare delivery by bringing medical consultations and services directly to patients' homes.",
            "Our platform combines advanced telemedicine technology with a network of mobile healthcare professionals and delivery riders.",
            "We provide comprehensive healthcare services including consultations, diagnostics, medication delivery, and follow-up care."
          ]
        }
      ]
    },
    {
      id: 6,
      name: "Patient Friendly Stay",
      description: "Empowering Patient Recovery and Rehabilitation Beyond Hospital Walls. Care Continuity and Stay",
      image: "/image-6-5.png",
      heroImage: "https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=1441&h=332&fit=crop",
      detailedSections: [
        {
          title: "About The Project",
          content: [
            "Patient Friendly Stay provides specialized accommodation and care services for patients and their families during medical treatment.",
            "Our facilities are designed to support recovery and rehabilitation with medical-grade amenities and professional care staff.",
            "We bridge the gap between hospital discharge and full recovery with comprehensive support services."
          ]
        }
      ]
    },
    {
      id: 7,
      name: "Road Safety",
      description: "The Most Innovative Road Safety Application Suites with Real-Time Surveillance and Alerts",
      image: "/image-6-6.png",
      heroImage: "https://images.pexels.com/photos/2449452/pexels-photo-2449452.jpeg?auto=compress&cs=tinysrgb&w=1441&h=332&fit=crop",
      detailedSections: [
        {
          title: "About The Project",
          content: [
            "Our Road Safety platform uses advanced AI and IoT technology to prevent accidents and improve road safety nationwide.",
            "Real-time monitoring systems detect dangerous driving behaviors and provide immediate alerts to prevent accidents.",
            "Comprehensive data analytics help authorities make informed decisions about road infrastructure and safety measures."
          ]
        }
      ]
    },
    {
      id: 8,
      name: "QR Commerce",
      description: "Ultimate E-Commerce Solutions for Trade, Tourism, Tradition, Treatment, and Taste",
      image: "/image-6-7.png",
      heroImage: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=1441&h=332&fit=crop",
      detailedSections: [
        {
          title: "About The Project",
          content: [
            "QR Commerce revolutionizes local business discovery and transactions through innovative QR code technology.",
            "Our platform connects consumers with local businesses across five key sectors: Trade, Tourism, Tradition, Treatment, and Taste.",
            "Seamless integration of digital payments, reviews, and business management tools in one comprehensive platform."
          ]
        }
      ]
    },
    {
      id: 9,
      name: "Surety for Purity",
      description: "Verify Your Purchases: Combat Fake Products and Counterfeits with Confidence",
      image: "/image-6-8.png",
      heroImage: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1441&h=332&fit=crop",
      detailedSections: [
        {
          title: "About The Project",
          content: [
            "Surety for Purity uses blockchain technology to verify product authenticity and combat counterfeit goods.",
            "Our platform provides consumers with instant verification tools to ensure they purchase genuine products.",
            "Comprehensive supply chain tracking from manufacturer to consumer ensures product integrity and safety."
          ]
        }
      ]
    },
    {
      id: 10,
      name: "Connect with BHARAT",
      description: "Empowering Rural India: Media and Advocacy with Authentic Local Connections",
      image: "/image-6-9.png",
      heroImage: "https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg?auto=compress&cs=tinysrgb&w=1441&h=332&fit=crop",
      detailedSections: [
        {
          title: "About The Project",
          content: [
            "Connect with BHARAT bridges the digital divide by bringing technology and opportunities to rural India.",
            "Our platform empowers local communities through digital literacy, e-commerce access, and government service connectivity.",
            "Comprehensive support for rural entrepreneurs, farmers, and small businesses to access national and global markets."
          ]
        }
      ]
    },
    {
      id: 11,
      name: "Smart Trauma Centers",
      description: "Rescuing Lives: AI-Powered Telemedicine for Road Accident and Disaster Victims",
      image: "/image-6-10.png",
      heroImage: "https://images.pexels.com/photos/263337/pexels-photo-263337.jpeg?auto=compress&cs=tinysrgb&w=1441&h=332&fit=crop",
      detailedSections: [
        {
          title: "About The Project",
          content: [
            "Smart Trauma Centers leverage AI and telemedicine to provide immediate emergency care for accident and disaster victims.",
            "Our network of mobile trauma units and AI-powered diagnostic tools ensure rapid response and optimal patient outcomes.",
            "Integration with emergency services, hospitals, and transportation systems for coordinated emergency response."
          ]
        }
      ]
    },
    {
      id: 12,
      name: "Connecting the World",
      description: "Revolutionizing Exhibitions: Decentralized Experience to Explore Your Target Market",
      image: "/image-6-11.png",
      heroImage: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1441&h=332&fit=crop",
      detailedSections: [
        {
          title: "About The Project",
          content: [
            "Connecting the World transforms traditional exhibitions into immersive digital experiences accessible globally.",
            "Our platform enables businesses to showcase products and services through virtual reality and interactive technologies.",
            "Comprehensive networking tools connect exhibitors with potential customers, partners, and investors worldwide."
          ]
        }
      ]
    }
  ];
  
  export const getPortfolioCompanyById = (id: number): PortfolioCompany | undefined => {
    return portfolioCompanies.find(company => company.id === id);
  };