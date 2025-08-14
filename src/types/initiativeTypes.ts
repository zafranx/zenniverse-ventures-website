// types/initiativeTypes.ts
export interface InitiativeSection {
  title: string;
  content: string[];
}

export interface Initiative {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  heroImage: string;
  author: string;
  date: string;
  category: string;
  status: "Active" | "Completed" | "Planned" | "In Progress";
  impact: string;
  tags: string[];
  featured: boolean;
  detailedSections: InitiativeSection[];
}
