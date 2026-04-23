export interface NavLink {
  label: string;
  href: string;
}

export interface Byproduct {
  id: number;
  name: string;
  category: string;
  description: string;
  benefits: string[];
  icon: string;
}

export interface Achievement {
  id: number;
  title: string;
  year: string;
  description: string;
  icon: string;
  type: "award" | "cert" | "milestone";
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
}

export interface WorkshopItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ApplicationUseCase {
  id: number;
  title: string;
  description: string;
  icon: string;
  examples: string[];
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}
