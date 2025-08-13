import { NewsArticle, NewsSection } from "../types/newsTypes";


// data/newsData.ts
export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "Revolutionary AI Solutions Transforming Healthcare Industry",
    excerpt:
      "Discover how artificial intelligence is revolutionizing patient care and medical diagnostics worldwide.",
    image: "/rectangle-1.png",
    heroImage:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1441&h=332&fit=crop",
    author: "Dr. Sarah Johnson",
    date: "January 15, 2025",
    category: "Healthcare Technology",
    readTime: "5 min read",
    tags: ["AI", "Healthcare", "Innovation", "Technology"],
    featured: true,
    detailedSections: [
      {
        title: "The AI Revolution in Healthcare",
        content: [
          "Artificial intelligence is fundamentally transforming how we approach healthcare, from diagnosis to treatment and patient care management. This technological revolution promises to enhance accuracy, reduce costs, and improve patient outcomes across all medical specialties.",
          "Machine learning algorithms are now capable of analyzing medical images with precision that often exceeds human specialists. These systems can detect early-stage cancers, identify rare diseases, and predict patient outcomes with remarkable accuracy.",
          "The integration of AI in healthcare is not just about replacing human judgment, but augmenting healthcare professionals' capabilities to make more informed decisions and provide better patient care.",
        ],
      },
      {
        title: "Current Applications and Success Stories",
        content: [
          "Leading hospitals worldwide have successfully implemented AI-powered diagnostic tools that reduce diagnostic errors by up to 35% while significantly decreasing the time required for accurate diagnosis.",
          "Radiology departments are experiencing a paradigm shift with AI systems that can analyze thousands of medical images in minutes, detecting anomalies that might be missed by the human eye.",
          "Emergency departments are using AI triage systems to prioritize patients based on severity, resulting in improved patient flow and better resource allocation.",
        ],
      },
      {
        title: "Technology Behind the Innovation",
        content: [
          "Deep learning neural networks trained on millions of medical cases form the backbone of these revolutionary diagnostic tools. These systems continuously learn and improve from each new case they encounter.",
          "Natural language processing enables AI systems to analyze patient records, research papers, and clinical notes to provide comprehensive insights for healthcare decision-making.",
          "Cloud-based infrastructure ensures these powerful AI tools are accessible to healthcare providers regardless of their size or location, democratizing access to advanced diagnostic capabilities.",
        ],
      },
      {
        title: "Challenges and Ethical Considerations",
        content: [
          "Data privacy and security remain paramount concerns as healthcare AI systems require access to sensitive patient information. Robust encryption and compliance with healthcare regulations are essential.",
          "The need for transparency in AI decision-making is crucial for healthcare adoption. Explainable AI models help healthcare professionals understand and trust the recommendations provided by these systems.",
          "Training healthcare professionals to work effectively with AI tools requires comprehensive education programs and change management strategies.",
        ],
      },
      {
        title: "Future Implications and Developments",
        content: [
          "Personalized medicine powered by AI will enable treatment plans tailored to individual genetic profiles, lifestyle factors, and medical history, revolutionizing patient care.",
          "Predictive analytics will shift healthcare from reactive to proactive, identifying health risks before they become serious conditions and enabling preventive interventions.",
          "The convergence of AI with other emerging technologies like IoT, blockchain, and virtual reality will create comprehensive healthcare ecosystems that provide seamless, intelligent care.",
        ],
      },
      {
        title: "Global Impact and Accessibility",
        content: [
          "AI-powered telemedicine platforms are bringing specialist care to underserved rural communities, breaking down geographical barriers to quality healthcare access.",
          "Cost reduction through AI automation is making advanced medical diagnostics more affordable and accessible to healthcare systems with limited resources.",
          "International collaboration in AI healthcare research is accelerating innovation and ensuring that breakthrough technologies benefit patients worldwide.",
        ],
      },
      {
        title: "Investment and Market Trends",
        content: [
          "The global healthcare AI market is projected to reach $148 billion by 2029, reflecting massive investor confidence and growing adoption across healthcare institutions.",
          "Venture capital investment in healthcare AI startups has increased by 300% over the past five years, driving rapid innovation and commercialization of breakthrough technologies.",
          "Major technology companies and pharmaceutical giants are forming strategic partnerships to accelerate AI development and deployment in healthcare settings.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "The Future of Medical Tourism: Digital Innovation Trends",
    excerpt:
      "Exploring how digital transformation is reshaping the medical tourism landscape globally.",
    image: "/rectangle-1-1.png",
    heroImage:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1441&h=332&fit=crop",
    author: "Michael Chen",
    date: "January 12, 2025",
    category: "Medical Tourism",
    readTime: "7 min read",
    tags: ["Medical Tourism", "Digital Health", "Telemedicine", "Innovation"],
    featured: false,
    detailedSections: [
      {
        title: "Digital Transformation in Medical Tourism",
        content: [
          "The medical tourism industry is experiencing unprecedented growth, driven by digital innovation and changing patient expectations. This comprehensive analysis explores the key trends shaping the future of healthcare travel.",
          "Digital platforms are revolutionizing how patients discover, evaluate, and book medical procedures abroad. From virtual consultations to AI-powered treatment recommendations, technology is making healthcare more accessible than ever before.",
          "The integration of advanced technologies is not only improving patient experiences but also enhancing safety, transparency, and outcomes in medical tourism.",
        ],
      },
      {
        title: "Telemedicine Revolution",
        content: [
          "Telemedicine has emerged as a game-changer, enabling pre-operative consultations and post-treatment follow-ups without geographical constraints. This reduces costs and improves patient outcomes significantly.",
          "Virtual reality consultations allow patients to virtually tour facilities and meet with healthcare teams before making travel decisions, increasing confidence and reducing anxiety.",
          "Remote monitoring technologies enable continuous patient care before, during, and after treatment, ensuring optimal outcomes and quick intervention if complications arise.",
        ],
      },
      {
        title: "Blockchain and Data Security",
        content: [
          "The integration of blockchain technology ensures secure patient data management and seamless transfer of medical records across international borders, addressing one of the industry's biggest challenges.",
          "Smart contracts automate insurance claims and payment processing, reducing administrative overhead and ensuring transparent, secure financial transactions.",
          "Decentralized patient data systems give individuals control over their medical information while ensuring authorized healthcare providers have access when needed.",
        ],
      },
      {
        title: "AI-Powered Personalization",
        content: [
          "Artificial intelligence algorithms analyze patient conditions, preferences, and outcomes data to recommend optimal treatment destinations and healthcare providers.",
          "Predictive analytics help identify potential complications and optimize treatment plans based on patient-specific factors and historical success rates.",
          "Machine learning systems continuously improve recommendation accuracy by analyzing treatment outcomes and patient satisfaction data.",
        ],
      },
      {
        title: "Virtual Reality and IoT Integration",
        content: [
          "Virtual reality is being used for patient education and surgical planning, while IoT devices enable continuous monitoring of patients throughout their medical journey.",
          "Augmented reality applications help patients understand complex procedures and set realistic expectations about treatment outcomes and recovery processes.",
          "Smart hospital technologies integrate IoT sensors, AI analytics, and mobile applications to provide seamless, intelligent patient experiences.",
        ],
      },
      {
        title: "Mobile Health Applications",
        content: [
          "Comprehensive mobile applications provide end-to-end medical tourism services, from initial consultation to post-treatment follow-up care coordination.",
          "Real-time translation services and cultural liaison support eliminate language barriers and ensure clear communication throughout the treatment process.",
          "Mobile payment solutions and digital wallets facilitate secure, convenient financial transactions across different countries and currencies.",
        ],
      },
      {
        title: "Quality Assurance and Transparency",
        content: [
          "Digital platforms provide transparent pricing, detailed facility information, and verified patient reviews to help patients make informed decisions about their care.",
          "Blockchain-based credentialing systems verify healthcare provider qualifications and facility accreditations, ensuring patients receive quality care.",
          "Real-time outcome tracking and patient feedback systems continuously monitor and improve service quality across the medical tourism network.",
        ],
      },
      {
        title: "Future Outlook and Trends",
        content: [
          "As we look toward the future, the convergence of these technologies promises to make medical tourism safer, more efficient, and more accessible to patients worldwide.",
          "Artificial intelligence will enable predictive healthcare, identifying optimal treatment timing and destinations based on global health trends and individual patient factors.",
          "The integration of 5G networks will enable real-time surgical consultations and remote surgical assistance, further expanding access to specialized care.",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Breakthrough Research in AI-Powered Diagnostics",
    excerpt:
      "Latest developments in artificial intelligence are enabling faster and more accurate medical diagnoses.",
    image: "/rectangle-1-2.png",
    heroImage:
      "https://images.pexels.com/photos/5432019/pexels-photo-5432019.jpeg?auto=compress&cs=tinysrgb&w=1441&h=332&fit=crop",
    author: "Dr. Emily Rodriguez",
    date: "January 10, 2025",
    category: "AI & Diagnostics",
    readTime: "6 min read",
    tags: ["AI", "Diagnostics", "Machine Learning", "Healthcare"],
    featured: true,
    detailedSections: [
      {
        title: "Revolutionary Diagnostic Capabilities",
        content: [
          "Artificial intelligence is revolutionizing medical diagnostics with unprecedented accuracy and speed. Recent breakthroughs in machine learning algorithms are enabling healthcare professionals to detect diseases earlier and more reliably.",
          "Deep learning models trained on millions of medical images can now identify conditions that might be missed by human specialists. From detecting early-stage cancers to diagnosing rare genetic disorders, AI is expanding the boundaries of medical capability.",
          "The precision of AI diagnostic tools is continuously improving as they learn from each new case, creating a feedback loop that enhances accuracy over time.",
        ],
      },
      {
        title: "Clinical Implementation Success",
        content: [
          "The implementation of AI diagnostic tools in emergency departments has reduced diagnosis time by up to 40%, leading to faster treatment decisions and improved patient outcomes.",
          "Pathology laboratories are experiencing transformation through AI systems that can analyze tissue samples and identify cancerous cells with accuracy rates exceeding 95%.",
          "Ophthalmology practices are using AI to detect diabetic retinopathy and other eye conditions from simple retinal photographs, enabling early intervention and preventing vision loss.",
        ],
      },
      {
        title: "Natural Language Processing in Healthcare",
        content: [
          "Natural language processing is being used to analyze patient symptoms and medical histories, providing doctors with comprehensive insights that support clinical decision-making.",
          "AI systems can process vast amounts of medical literature and research papers to stay current with the latest treatment protocols and diagnostic criteria.",
          "Automated clinical documentation reduces administrative burden on healthcare providers while ensuring accurate and complete patient records.",
        ],
      },
      {
        title: "Machine Learning Evolution",
        content: [
          "Machine learning algorithms continue to evolve, learning from each case to improve accuracy and reduce false positives, making them invaluable tools in modern healthcare.",
          "Federated learning approaches allow AI models to improve by learning from diverse patient populations across multiple healthcare institutions while maintaining patient privacy.",
          "Continuous learning systems adapt to new disease patterns and emerging health threats, ensuring diagnostic accuracy remains high even as medical challenges evolve.",
        ],
      },
      {
        title: "Multi-modal Diagnostic Approaches",
        content: [
          "Advanced AI systems integrate multiple data sources including medical images, laboratory results, genetic information, and patient history to provide comprehensive diagnostic insights.",
          "Computer vision technologies analyze medical images from various modalities including X-rays, MRIs, CT scans, and ultrasounds with consistent accuracy.",
          "Predictive modeling combines current symptoms with historical health data to forecast disease progression and recommend optimal treatment strategies.",
        ],
      },
      {
        title: "Personalized Medicine Applications",
        content: [
          "AI diagnostic tools are enabling personalized medicine by analyzing individual genetic profiles and tailoring diagnostic approaches to specific patient characteristics.",
          "Pharmacogenomics applications use AI to predict how patients will respond to specific medications, reducing adverse drug reactions and improving treatment efficacy.",
          "Precision oncology applications analyze tumor genetics and patient characteristics to recommend the most effective cancer treatments.",
        ],
      },
      {
        title: "Future Research Directions",
        content: [
          "The future of AI diagnostics looks promising, with ongoing research focusing on personalized medicine and predictive healthcare analytics.",
          "Quantum computing applications in medical AI promise to solve complex diagnostic challenges that are currently beyond the reach of traditional computing systems.",
          "Integration with wearable devices and continuous monitoring systems will enable real-time diagnostic capabilities and early disease detection.",
        ],
      },
      {
        title: "Regulatory and Ethical Considerations",
        content: [
          "Regulatory agencies are developing frameworks for AI diagnostic tool approval, ensuring safety and efficacy while promoting innovation in healthcare technology.",
          "Ethical considerations around AI bias, transparency, and patient consent are being addressed through comprehensive guidelines and best practices.",
          "International collaboration is essential for establishing global standards for AI diagnostic tools and ensuring equitable access to these technologies worldwide.",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Telemedicine Revolution: Changing Healthcare Access Globally",
    excerpt:
      "How telemedicine is breaking down barriers and making quality healthcare accessible to remote communities.",
    image: "/image-15.png",
    heroImage:
      "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1441&h=332&fit=crop",
    author: "Dr. James Wilson",
    date: "January 8, 2025",
    category: "Telemedicine",
    readTime: "8 min read",
    tags: ["Telemedicine", "Remote Healthcare", "Digital Health", "Access"],
    featured: false,
    detailedSections: [
      {
        title: "The Telemedicine Revolution",
        content: [
          "Telemedicine has transformed from a novel concept to an essential healthcare delivery method, especially in the wake of global health challenges. This revolution is democratizing healthcare access across geographical boundaries.",
          "Remote consultations have proven particularly valuable in underserved communities where specialist care is limited. Patients can now access world-class medical expertise without traveling long distances.",
          "The adoption of telemedicine has accelerated rapidly, with usage increasing by over 3000% during the global pandemic and remaining elevated as both patients and providers recognize its benefits.",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Blockchain in Healthcare: Securing Patient Data",
    excerpt:
      "Exploring how blockchain technology is revolutionizing patient data security and interoperability.",
    image: "/image-14.png",
    heroImage:
      "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1441&h=332&fit=crop",
    author: "Sarah Mitchell",
    date: "January 5, 2025",
    category: "Blockchain & Security",
    readTime: "6 min read",
    tags: ["Blockchain", "Data Security", "Healthcare IT", "Innovation"],
    featured: false,
    detailedSections: [
      {
        title: "Blockchain Revolution in Healthcare",
        content: [
          "Blockchain technology is emerging as a transformative solution for healthcare data management, offering unprecedented security and interoperability for patient records.",
          "The decentralized nature of blockchain ensures that patient data remains secure while enabling authorized healthcare providers to access complete medical histories instantly.",
          "This technology addresses critical challenges in healthcare including data breaches, interoperability issues, and patient consent management.",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "IoT Devices Transforming Patient Monitoring",
    excerpt:
      "Internet of Things devices are enabling continuous patient monitoring and preventive healthcare.",
    image: "/image-16.png",
    heroImage:
      "https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=1441&h=332&fit=crop",
    author: "Dr. Robert Kim",
    date: "January 3, 2025",
    category: "IoT & Monitoring",
    readTime: "7 min read",
    tags: ["IoT", "Patient Monitoring", "Wearables", "Digital Health"],
    featured: true,
    detailedSections: [
      {
        title: "IoT Revolution in Healthcare",
        content: [
          "The Internet of Things (IoT) is revolutionizing patient monitoring by enabling continuous, real-time health data collection outside traditional clinical settings.",
          "Wearable devices and smart sensors can track vital signs, medication adherence, and activity levels, providing healthcare providers with comprehensive patient insights.",
          "This continuous monitoring capability is transforming healthcare from reactive to proactive, enabling early intervention and prevention of serious health complications.",
        ],
      },
    ],
  },
];

export const getNewsArticleById = (id: number): NewsArticle | undefined => {
  return newsArticles.find((article) => article.id === id);
};

export const getFeaturedNewsArticles = (): NewsArticle[] => {
  return newsArticles.filter((article) => article.featured);
};

export const getNewsByCategory = (category: string): NewsArticle[] => {
  return newsArticles.filter((article) => article.category === category);
};

export const getLatestNews = (limit: number = 6): NewsArticle[] => {
  return newsArticles
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

export const getRelatedNews = (
  currentId: number,
  limit: number = 3
): NewsArticle[] => {
  const currentArticle = getNewsArticleById(currentId);
  if (!currentArticle) return [];

  return newsArticles
    .filter(
      (article) =>
        article.id !== currentId &&
        (article.category === currentArticle.category ||
          article.tags.some((tag) => currentArticle.tags.includes(tag)))
    )
    .slice(0, limit);
};
