export const SITE_CONFIG = {
  name: 'امداد خودرو تکنیک',
  phone: '09017301443',
  phoneDisplay: '0901 730 1443',
  email: 'info@emdadtechnic.ir',
  address: 'بندرعباس، مرکز شهر',
  social: {
    instagram: 'https://instagram.com/emdadtechnic',
    telegram: 'https://t.me/989017301443',
    whatsapp: 'https://wa.me/989017301443',
  },
} as const;

export const ROUTES = {
  home: '/',
  services: '/services',
  mobileMechanic: '/services/mobile-mechanic',
  towing: '/services/towing',
  roadsideAssistance: '/services/roadside-assistance',
  bodyRepair: '/services/body-repair',
  carElectrician: '/services/car-electrician',
  coverage: '/coverage',
  whyUs: '/why-us',
  testimonials: '/testimonials',
  articles: '/articles',
  faqs: '/faqs',
  contact: '/contact',
} as const;
