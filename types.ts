export type Language = 'en' | 'fr' | 'ar';

export interface MenuItem {
  id: string;
  title: string;
  description: string;
  price?: string; // Optional, as some custom cakes might not have fixed prices
  image: string;
  category: 'cake' | 'moroccan' | 'french' | 'bread';
  tags?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}