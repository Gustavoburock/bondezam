export interface Service {
  id: string;
  name: string;
  price: number;
  duration?: string;
  description: string;
  features?: string[];
  badge?: string;
  imageAlt: string;
  imageSrc?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface Benefit {
  title: string;
  description: string;
  iconName: string;
}
