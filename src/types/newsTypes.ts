// types/newsTypes.ts
export interface NewsSection {
  title: string;
  content: string[];
}

export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  heroImage: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  detailedSections: NewsSection[];
}
