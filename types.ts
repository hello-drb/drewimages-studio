
export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  size?: 'standard' | 'large' | 'tall';
}

export interface ServiceItem {
  title: string;
  description: string;
  price: string;
}

export interface ProcessStepItem {
  label: string;
  description?: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  image?: string;
  aspectClass?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface GalleryItem {
  src: string;
  title?: string;
  subtitle?: string;
}

export interface WorkCategoryData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  engagements: string[];
  gallery: GalleryItem[];
  testimonial?: TestimonialItem;
}
