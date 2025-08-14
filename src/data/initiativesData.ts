import { Initiative } from "../types/initiativeTypes";

// data/initiativesData.ts
export const initiatives: Initiative[] = [
  {
    id: 1,
    title: "Samarth Kids: Empowering Young Minds for India 2047",
    excerpt:
      "A visionary initiative to shape India's future by empowering children to become super citizens through technology and innovation.",
    image: "/image-15.png",
    heroImage:
      "https://images.pexels.com/photos/8471888/pexels-photo-8471888.jpeg?auto=compress&cs=tinysrgb&w=1441&h=332&fit=crop",
    author: "Zeniverse Ventures",
    date: "January 20, 2025",
    category: "Education & Innovation",
    status: "Active",
    impact: "50,000+ children reached",
    tags: [
      "Education",
      "Children",
      "Innovation",
      "Future Leaders",
      "India 2047",
    ],
    featured: true,
    detailedSections: [
      {
        title: "Vision for India 2047",
        content: [
          "Samarth Kids represents our commitment to nurturing the next generation of leaders who will drive India towards becoming a developed nation by 2047.",
          "This comprehensive program focuses on developing critical thinking, technological literacy, and innovation skills among children aged 6-16 years.",
          "Through interactive workshops, digital learning platforms, and mentorship programs, we're creating super citizens who will lead India's transformation.",
        ],
      },
      {
        title: "Core Program Components",
        content: [
          "Digital Literacy Workshops: Teaching children coding, AI basics, and digital citizenship in age-appropriate formats.",
          "Innovation Labs: Hands-on experience with emerging technologies like robotics, IoT, and virtual reality.",
          "Leadership Development: Programs focused on communication skills, teamwork, and social responsibility.",
          "Environmental Awareness: Sustainability projects that connect children with nature and environmental conservation.",
        ],
      },
      {
        title: "Technology Integration",
        content: [
          "AI-powered personalized learning platforms adapt to each child's learning pace and interests.",
          "Gamified learning experiences make complex concepts accessible and engaging for young minds.",
          "Virtual reality sessions provide immersive experiences in science, history, and cultural education.",
          "Mobile applications enable continuous learning and parent-teacher collaboration.",
        ],
      },
      {
        title: "Impact and Reach",
        content: [
          "Over 50,000 children across 500 schools have participated in our programs since inception.",
          "Partnerships with government schools ensure inclusive access regardless of economic background.",
          "Teacher training programs have equipped 2,000+ educators with modern pedagogical tools.",
          "Community engagement initiatives involve parents and local leaders in the educational transformation.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Digital Health Villages: Rural Healthcare Transformation",
    excerpt:
      "Bringing world-class healthcare to India's villages through telemedicine, AI diagnostics, and mobile health units.",
    image: "/image-14.png",
    heroImage:
      "https://images.pexels.com/photos/8942990/pexels-photo-8942990.jpeg?auto=compress&cs=tinysrgb&w=1441&h=332&fit=crop",
    author: "Healthcare Innovation Team",
    date: "January 15, 2025",
    category: "Rural Healthcare",
    status: "In Progress",
    impact: "200+ villages connected",
    tags: ["Telemedicine", "Rural Health", "AI Diagnostics", "Mobile Health"],
    featured: true,
    detailedSections: [
      {
        title: "Bridging the Healthcare Gap",
        content: [
          "Digital Health Villages initiative addresses the critical healthcare accessibility challenges in rural India.",
          "Our comprehensive approach combines telemedicine, AI-powered diagnostics, and mobile health units to deliver quality care.",
          "By leveraging technology, we're making specialist consultations available to remote communities for the first time.",
        ],
      },
      {
        title: "Technology Solutions",
        content: [
          "AI diagnostic tools provide instant analysis of common health conditions using smartphone cameras.",
          "Telemedicine platforms connect rural patients with specialist doctors in urban centers.",
          "Electronic health records ensure continuity of care and better health monitoring.",
          "IoT devices enable remote monitoring of chronic conditions and vital signs.",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Green Tech Innovation Hub: Sustainable Future Solutions",
    excerpt:
      "Developing cutting-edge environmental technologies to combat climate change and promote sustainable development.",
    image: "/image-16.png",
    heroImage:
      "https://images.pexels.com/photos/9324346/pexels-photo-9324346.jpeg?auto=compress&cs=tinysrgb&w=1441&h=332&fit=crop",
    author: "Environmental Technology Division",
    date: "January 10, 2025",
    category: "Environmental Technology",
    status: "Active",
    impact: "30% carbon footprint reduction",
    tags: ["Sustainability", "Clean Energy", "Climate Tech", "Innovation"],
    featured: true,
    detailedSections: [
      {
        title: "Environmental Innovation",
        content: [
          "Our Green Tech Innovation Hub develops breakthrough technologies for environmental sustainability.",
          "Research focuses on renewable energy, waste management, and carbon capture technologies.",
          "Partnerships with leading universities accelerate the development of eco-friendly solutions.",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "AI for Social Good: Empowering Communities Through Technology",
    excerpt:
      "Leveraging artificial intelligence to solve pressing social challenges and improve quality of life for underserved communities.",
    image: "/ai-social-good.png",
    heroImage:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1441&h=332&fit=crop",
    author: "AI Research Collective",
    date: "January 8, 2025",
    category: "AI & Social Impact",
    status: "Active",
    impact: "1M+ lives impacted",
    tags: [
      "AI",
      "Social Impact",
      "Community Development",
      "Technology for Good",
    ],
    featured: false,
    detailedSections: [
      {
        title: "AI-Driven Social Solutions",
        content: [
          "Our AI for Social Good initiative harnesses the power of artificial intelligence to address critical social challenges.",
          "Machine learning algorithms help predict and prevent social issues before they escalate into crises.",
          "Natural language processing tools break down communication barriers in multilingual communities.",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Women's Health Innovation Program",
    excerpt:
      "Revolutionary healthcare solutions specifically designed for women's unique health needs across all life stages.",
    image: "/womens-health.png",
    heroImage:
      "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1441&h=332&fit=crop",
    author: "Women's Health Initiative",
    date: "January 5, 2025",
    category: "Women's Health",
    status: "In Progress",
    impact: "500,000+ women served",
    tags: [
      "Women's Health",
      "Maternal Care",
      "Healthcare Innovation",
      "Gender Equality",
    ],
    featured: false,
    detailedSections: [
      {
        title: "Comprehensive Women's Care",
        content: [
          "Addressing the unique healthcare needs of women through innovative technology solutions.",
          "Mobile health applications provide personalized health tracking and educational resources.",
          "Telemedicine platforms offer private consultations for sensitive health topics.",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Mental Health Awareness & Support Network",
    excerpt:
      "Creating a comprehensive mental health ecosystem with AI-powered support, community networks, and professional care.",
    image: "/mental-health-network.png",
    heroImage:
      "https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=1441&h=332&fit=crop",
    author: "Mental Health Coalition",
    date: "December 28, 2024",
    category: "Mental Health",
    status: "Active",
    impact: "100,000+ individuals supported",
    tags: ["Mental Health", "AI Support", "Community Care", "Wellness"],
    featured: true,
    detailedSections: [
      {
        title: "Comprehensive Mental Health Support",
        content: [
          "Our Mental Health Awareness & Support Network provides accessible mental healthcare through technology and community engagement.",
          "AI-powered chatbots offer 24/7 emotional support and crisis intervention capabilities.",
          "Community support groups connect individuals with shared experiences for peer-to-peer healing.",
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Smart Agriculture Revolution",
    excerpt:
      "Transforming traditional farming with IoT sensors, AI analytics, and precision agriculture techniques for sustainable food production.",
    image: "/smart-agriculture.png",
    heroImage:
      "https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1441&h=332&fit=crop",
    author: "AgTech Innovation Team",
    date: "December 25, 2024",
    category: "Agricultural Technology",
    status: "In Progress",
    impact: "40% yield improvement",
    tags: ["Smart Farming", "IoT", "Precision Agriculture", "Food Security"],
    featured: false,
    detailedSections: [
      {
        title: "Agricultural Innovation",
        content: [
          "Smart Agriculture Revolution brings cutting-edge technology to traditional farming practices.",
          "IoT sensors monitor soil conditions, weather patterns, and crop health in real-time.",
          "AI-powered analytics optimize planting schedules, irrigation, and harvesting for maximum yield.",
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Digital Literacy for Seniors",
    excerpt:
      "Empowering elderly citizens with digital skills and technology access to improve their quality of life and social connectivity.",
    image: "/digital-seniors.png",
    heroImage:
      "https://images.pexels.com/photos/4057659/pexels-photo-4057659.jpeg?auto=compress&cs=tinysrgb&w=1441&h=332&fit=crop",
    author: "Senior Empowerment Initiative",
    date: "December 22, 2024",
    category: "Digital Inclusion",
    status: "Active",
    impact: "25,000+ seniors trained",
    tags: [
      "Digital Literacy",
      "Senior Citizens",
      "Technology Training",
      "Social Inclusion",
    ],
    featured: false,
    detailedSections: [
      {
        title: "Empowering Seniors Through Technology",
        content: [
          "Digital Literacy for Seniors bridges the generational digital divide through tailored training programs.",
          "Simple, user-friendly interfaces make technology accessible to elderly users.",
          "Health monitoring apps help seniors track vital signs and medication schedules independently.",
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Renewable Energy Microgrids",
    excerpt:
      "Developing decentralized renewable energy solutions for rural communities and urban sustainability initiatives.",
    image: "/renewable-energy.png",
    heroImage:
      "https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=1441&h=332&fit=crop",
    author: "Clean Energy Division",
    date: "December 20, 2024",
    category: "Renewable Energy",
    status: "In Progress",
    impact: "80% clean energy adoption",
    tags: ["Renewable Energy", "Microgrids", "Sustainability", "Clean Power"],
    featured: true,
    detailedSections: [
      {
        title: "Clean Energy Revolution",
        content: [
          "Renewable Energy Microgrids provide sustainable power solutions for communities worldwide.",
          "Solar and wind-powered systems reduce dependence on traditional energy sources.",
          "Smart grid technology optimizes energy distribution and storage efficiency.",
        ],
      },
    ],
  },
  {
    id: 10,
    title: "Accessible Technology Platform",
    excerpt:
      "Creating inclusive technology solutions for people with disabilities to ensure equal access to digital opportunities.",
    image: "/accessible-tech.png",
    heroImage:
      "https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=1441&h=332&fit=crop",
    author: "Accessibility Innovation Lab",
    date: "December 18, 2024",
    category: "Accessibility Technology",
    status: "Active",
    impact: "150,000+ users enabled",
    tags: [
      "Accessibility",
      "Inclusive Design",
      "Assistive Technology",
      "Digital Equality",
    ],
    featured: false,
    detailedSections: [
      {
        title: "Technology for All",
        content: [
          "Accessible Technology Platform ensures that digital innovation benefits everyone, including people with disabilities.",
          "Voice recognition and screen reader compatibility make applications universally usable.",
          "Adaptive interfaces automatically adjust to users' specific accessibility needs.",
        ],
      },
    ],
  },
];

// Utility functions
export const getInitiativeById = (id: number): Initiative | undefined => {
  return initiatives.find((initiative) => initiative.id === id);
};

export const getFeaturedInitiatives = (): Initiative[] => {
  return initiatives.filter((initiative) => initiative.featured);
};

export const getInitiativesByCategory = (category: string): Initiative[] => {
  return initiatives.filter((initiative) => initiative.category === category);
};

export const getInitiativesByStatus = (status: string): Initiative[] => {
  return initiatives.filter((initiative) => initiative.status === status);
};

export const getLatestInitiatives = (limit: number = 6): Initiative[] => {
  return initiatives
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

export const getRelatedInitiatives = (
  currentId: number,
  limit: number = 3
): Initiative[] => {
  const currentInitiative = getInitiativeById(currentId);
  if (!currentInitiative) return [];

  return initiatives
    .filter(
      (initiative) =>
        initiative.id !== currentId &&
        (initiative.category === currentInitiative.category ||
          initiative.tags.some((tag) => currentInitiative.tags.includes(tag)))
    )
    .slice(0, limit);
};
