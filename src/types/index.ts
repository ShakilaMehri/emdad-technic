import type { ReactNode } from 'react';

//  Card Props
export interface ArticleCardProps {
  id: string;
  icon: ReactNode;
  title: string;
  readTime: string;
  slug: string;
  className?: string;
}

export interface ServiceCardProps {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export interface StatisticCardProps {
  value: string;
  title: string;
  description?: string;
  className?: string;
}

export interface TestimonialCardProps {
  id?: string;
  name: string;
  review: string;
}

export interface TrustCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

//  Data Types 
export interface Article {
  id: string;
  icon: ReactNode;
  title: string;
  readTime: string;
  slug: string;
}

export interface Service {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
}

export interface WhyUsItem {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  review: string;
}

export interface CoverageArea {
  name: string;
}

export interface Headquarters {
  name: string;
  address: string;
  neighborhood: string;
}
