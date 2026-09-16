export interface SanityPost {
  _id: string;
  title: string;
  slug: { current: string } | string;
  excerpt?: string;
  date?: string;
  updatedDate?: string;
  author?: string;
  reviewedBy?: string;
  readTime?: string;
  category?: string;
  mainImage?: any;
  image?: string;
  body?: any;
  content?: string[];
  relatedLinks?: Array<{ label: string; href: string }>;
}
